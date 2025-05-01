
import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => {
          const increment = Math.floor(Math.random() * 10) + 5;
          const newProgress = Math.min(prevProgress + increment, 100);
          
          if (newProgress === 100) {
            setTimeout(() => {
              onLoadComplete();
            }, 500); // Show 100% for half a second before completing
          }
          
          return newProgress;
        });
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [progress, onLoadComplete]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-navy z-50">
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-cyan/20 flex items-center justify-center">
              <Bot size={80} className="text-cyan animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-purple flex items-center justify-center text-navy font-bold text-xl">
              AI
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">Analytics Avenue</h1>
        <p className="text-cyan mb-8">Data Analytics Training & Consulting</p>
        
        <div className="w-80 mx-auto mb-4">
          <Progress value={progress} className="h-2 bg-navy/50" />
        </div>
        
        <p className="text-white/70 text-sm">
          {progress < 30 && "Preparing your data journey..."}
          {progress >= 30 && progress < 60 && "Loading analytics tools..."}
          {progress >= 60 && progress < 90 && "Connecting to insights..."}
          {progress >= 90 && "Ready to transform your career!"}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
