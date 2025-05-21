import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";

interface MentorFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  expertise: string;
  experience: number;
  bio: string;
  linkedin?: string;
}

const ApplyMentor: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<MentorFormInputs>();

  const [expertise, setExpertise] = useState<string>("finance");

  const onSubmit: SubmitHandler<MentorFormInputs> = (data) => {
    data.expertise = expertise;
    console.log(data);
    alert("Application submitted successfully! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Expert  Mentor Team
            {/* <span className=" text-blue-900"> */}
               
              {/* </span> */}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Share your expertise, inspire the next generation, and grow your professional network while earning additional income.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Become a HikeSkool Mentor?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  {/* SVG ICON */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share Your Expertise</h3>
                  <p className="text-gray-600">Help students learn practical skills through your knowledge.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-fit">
                  {/* SVG ICON */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Income</h3>
                  <p className="text-gray-600">Earn income on your schedule through structured mentoring.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-pink-100 p-3 rounded-full h-fit">
                  {/* SVG ICON */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
                  <p className="text-gray-600">Connect with students, professionals, and other mentors.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Mentor Application</CardTitle>
                <CardDescription>
                  Fill out the form below to apply as a mentor. We'll review your application and contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        {...register("firstName", { required: true })}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs">This field is required</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        {...register("lastName", { required: true })}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs">This field is required</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-xs">Valid email is required</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Area of Expertise</label>
                    <Tabs defaultValue={expertise} onValueChange={(val: string) => {
                      setExpertise(val);
                      setValue("expertise", val);
                    }}>
                      <TabsList className="grid grid-cols-3 md:grid-cols-6">
                        <TabsTrigger value="finance">Finance</TabsTrigger>
                        <TabsTrigger value="tech">Tech</TabsTrigger>
                        <TabsTrigger value="cybersecurity">Cyber</TabsTrigger>
                        <TabsTrigger value="commerce">Commerce</TabsTrigger>
                        <TabsTrigger value="marketing">Marketing</TabsTrigger>
                        <TabsTrigger value="aiml">AI/ML</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <input type="hidden" {...register("expertise", { required: true })} value={expertise} />
                    {errors.expertise && <p className="text-red-500 text-xs">Select an area of expertise</p>}
                  </div>

                  <div>
                    <label htmlFor="experience" className="text-sm font-medium">Years of Experience</label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="5"
                      {...register("experience", { required: true, min: 1 })}
                      className={errors.experience ? "border-red-500" : ""}
                    />
                    {errors.experience && <p className="text-red-500 text-xs">Enter at least 1 year</p>}
                  </div>

                  <div>
                    <label htmlFor="bio" className="text-sm font-medium">Professional Bio</label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about your background..."
                      {...register("bio", { required: true, minLength: 100 })}
                      className={`min-h-[120px] ${errors.bio ? "border-red-500" : ""}`}
                    />
                    {errors.bio && <p className="text-red-500 text-xs">Minimum 100 characters required</p>}
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn (optional)</label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/in/yourprofile"
                      {...register("linkedin")}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Inspire the Next Generation?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join HikeSkool's growing network of mentors and educators shaping future leaders.
          </p>
          <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Apply Now
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default ApplyMentor;
