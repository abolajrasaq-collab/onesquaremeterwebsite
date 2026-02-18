import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import PortalLayout from './components/PortalLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Downloads from './pages/Downloads';
import InvestmentRisk from './pages/InvestmentRisk';
import LegalDisclosure from './pages/LegalDisclosure';
import Whistleblower from './pages/Whistleblower';
import NotFound from './pages/NotFound';
import Invest from './pages/Invest';
import Compare from './pages/Compare';
import FAQ from './pages/FAQ';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/portal/Dashboard';
import Portfolio from './pages/portal/Portfolio';
import WalletPage from './pages/portal/Wallet';
import Settings from './pages/portal/Settings';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public routes with main layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="investment-risk" element={<InvestmentRisk />} />
            <Route path="legal-disclosure" element={<LegalDisclosure />} />
            <Route path="whistleblower" element={<Whistleblower />} />
            <Route path="invest" element={<Invest />} />
            <Route path="compare" element={<Compare />} />
            <Route path="faq" element={<FAQ />} />
          </Route>

          {/* Auth routes (no layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Owner Portal routes (protected + portal layout) */}
          <Route path="/portal" element={<ProtectedRoute><PortalLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;