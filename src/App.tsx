import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MajorsPage from "./pages/MajorsPage";
import MajorDetailPage from "./pages/MajorDetailPage";
import BookingPage from "./pages/BookingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import MentorLoginPage from "./pages/MentorLoginPage";
import MentorDashboardPage from "./pages/MentorDashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/majors" element={<MajorsPage />} />
          <Route path="/majors/:majorId" element={<MajorDetailPage />} />
          <Route path="/book/:mentorId" element={<BookingPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/mentor/login" element={<MentorLoginPage />} />
          <Route path="/mentor/dashboard" element={<MentorDashboardPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
