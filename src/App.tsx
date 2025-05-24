import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ApplyMentor from "./pages/applyasmentor";
import LoadingScreen from "./components/LoadingScreen";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// ScrollToHashElement component handles smooth scrolling on hash changes
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const initialLoadDelay = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(initialLoadDelay);
    }
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <BrowserRouter>
            <ScrollToHashElement />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/applyasmentor" element={<ApplyMentor />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
