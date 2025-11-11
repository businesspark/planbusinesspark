import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import PlanM from "./pages/PlanM";
import PlanI from "./pages/PlanI";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EnquiryButton from "./components/EnquiryButton";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

console.log("📱 App.tsx loaded successfully");

const App = () => {
  console.log("🎯 App component rendering...");
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/plan-m" element={<PlanM />} />
              <Route path="/plan-i" element={<PlanI />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <EnquiryButton />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("💥 Error in App component:", error);
    return (
      <div style={{
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{color: '#1a472a', marginBottom: '20px'}}>Plan Business Parks</h1>
        <p style={{color: '#666', marginBottom: '20px'}}>Application Error</p>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            padding: '12px 24px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }
};

export default App;
