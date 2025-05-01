
import { useState } from "react";
import { 
  PlayCircle, 
  PauseCircle, 
  Volume2, 
  VolumeX 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: 0,
      title: "Learning Analytics Journey",
      description: "Follow our students' transformative journey from beginners to data professionals",
      src: "https://player.vimeo.com/external/395432706.sd.mp4?s=3cccedc7a114740512d2a826e8731abc996fc6c4&profile_id=164&oauth2_token_id=57447761", // Placeholder video
      thumbnail: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?q=80&w=1169&auto=format"
    },
    {
      id: 1,
      title: "Industry Expert Sessions",
      description: "Learn from professionals working at top tech companies",
      src: "https://player.vimeo.com/external/396578974.sd.mp4?s=8664e5a2f2ac2709d76565aaf1c3be4bf40a4b59&profile_id=164&oauth2_token_id=57447761", // Placeholder video
      thumbnail: "https://images.unsplash.com/photo-1587614298171-a221b23e9d24?q=80&w=1170&auto=format"
    },
    {
      id: 2,
      title: "Student Success Stories",
      description: "Hear from our alumni about how our program transformed their careers",
      src: "https://player.vimeo.com/external/369156787.sd.mp4?s=bb40834d3000a7a75828b14e033ce2b4fb230a59&profile_id=164&oauth2_token_id=57447761", // Placeholder video
      thumbnail: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1074&auto=format"
    }
  ];

  const handlePlayPause = () => {
    const video = document.getElementById('featured-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const video = document.getElementById('featured-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoSelection = (id: number) => {
    setSelectedVideo(id);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Learn Through <span className="text-blue-600">Visual Experience</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our video resources to get a glimpse of our teaching methodology and student experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main video player */}
          <div className="w-full lg:w-2/3 relative rounded-xl overflow-hidden shadow-2xl group">
            <video
              id="featured-video"
              src={videos[selectedVideo].src}
              poster={videos[selectedVideo].thumbnail}
              className="w-full aspect-video object-cover"
              muted={isMuted}
              playsInline
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            
            {/* Video controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <Button 
                  onClick={handlePlayPause} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                </Button>
                <Button 
                  onClick={handleMute} 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </Button>
              </div>
              <div className="text-white text-sm">
                {videos[selectedVideo].title}
              </div>
            </div>
            
            {/* Play button overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayPause}
              >
                <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <PlayCircle size={60} className="text-white" />
                </div>
              </div>
            )}
          </div>
          
          {/* Video selection sidebar */}
          <div className="w-full lg:w-1/3 space-y-4">
            {videos.map((video) => (
              <div 
                key={video.id}
                className={cn(
                  "p-4 rounded-lg cursor-pointer transition-all duration-300 flex gap-4",
                  selectedVideo === video.id 
                  ? "bg-navy text-white shadow-lg" 
                  : "bg-gray-100 hover:bg-gray-200"
                )}
                onClick={() => handleVideoSelection(video.id)}
              >
                <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className={cn(
                    "font-bold", 
                    selectedVideo === video.id ? "text-white" : "text-navy"
                  )}>
                    {video.title}
                  </h4>
                  <p className={cn(
                    "text-sm", 
                    selectedVideo === video.id ? "text-white/80" : "text-gray-600"
                  )}>
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
