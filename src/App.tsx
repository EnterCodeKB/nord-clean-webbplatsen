import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from "@/components/AuthContext";
import UploadTjansterData from "./pages/UploadTjansterData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="tjanster" element={<Services />} />
              <Route path="om-oss" element={<About />} />
              <Route path="kontakt" element={<Contact />} />
              <Route path="integritetspolicy" element={<PrivacyPolicy />} />
              <Route path="anvandarvillkor" element={<TermsOfService />} />
              <Route path="tillganglighet" element={<Accessibility />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/admin/UploadTjansterData"
                element={<UploadTjansterData />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
