import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import USBusinessesPage from "./pages/USBusinessesPage";
import PHBusinessesPage from "./pages/PHBusinessesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import MediaCompanyPage from "./pages/case-studies/MediaCompanyPage";
import FinanceAuditPage from "./pages/case-studies/FinanceAuditPage";
import BossPage from "./pages/case-studies/BossPage";
import LivestreamPage from "./pages/case-studies/LivestreamPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OrderPage from "./pages/OrderPage";
import SchedulePage from "./pages/SchedulePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/us-businesses" element={<USBusinessesPage />} />
            <Route path="/ph-businesses" element={<PHBusinessesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/media-company" element={<MediaCompanyPage />} />
            <Route path="/case-studies/finance-audit" element={<FinanceAuditPage />} />
            <Route path="/case-studies/boss" element={<BossPage />} />
            <Route path="/case-studies/livestream" element={<LivestreamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
