
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import ApplyAsMentor from "./pages/applyasmentor";
import NotFound from "./pages/NotFound";
import FinancialDataAnalysis from "./pages/courses/FinancialDataAnalysis";
import FlutterDevelopment from "./pages/courses/FlutterDevelopment";
import ReactDevelopment from "./pages/courses/ReactDevelopment";
import FullstackDevelopment from "./pages/courses/FullstackDevelopment";
import CyberSecurityEssentials from "./pages/courses/CyberSecurityEssentials";
import CEH from "./pages/courses/CEH";
import PracticalMachineLearning from "./pages/courses/PracticalMachineLearning";
import DeepLearningFundamentals from "./pages/courses/DeepLearningFundamentals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply-as-mentor" element={<ApplyAsMentor />} />
          <Route path="/courses/financial-data-analysis" element={<FinancialDataAnalysis />} />
          <Route path="/courses/flutter-development" element={<FlutterDevelopment />} />
          <Route path="/courses/react-development" element={<ReactDevelopment />} />
          <Route path="/courses/fullstack-development" element={<FullstackDevelopment />} />
          <Route path="/courses/cyber-security-essentials" element={<CyberSecurityEssentials />} />
          <Route path="/courses/ceh" element={<CEH />} />
          <Route path="/courses/practical-machine-learning" element={<PracticalMachineLearning />} />
          <Route path="/courses/deep-learning-fundamentals" element={<DeepLearningFundamentals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
