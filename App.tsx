import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import PortalLayout from './components/PortalLayout';
import ProtectedRoute from './components/ProtectedRoute';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Downloads = React.lazy(() => import('./pages/Downloads'));
const InvestmentRisk = React.lazy(() => import('./pages/InvestmentRisk'));
const LegalDisclosure = React.lazy(() => import('./pages/LegalDisclosure'));
const Whistleblower = React.lazy(() => import('./pages/Whistleblower'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Invest = React.lazy(() => import('./pages/Invest'));
const Compare = React.lazy(() => import('./pages/Compare'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Dashboard = React.lazy(() => import('./pages/portal/Dashboard'));
const Portfolio = React.lazy(() => import('./pages/portal/Portfolio'));
const WalletPage = React.lazy(() => import('./pages/portal/Wallet'));
const Settings = React.lazy(() => import('./pages/portal/Settings'));
const Projects = React.lazy(() => import('./pages/Projects'));
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-12 h-12 border-4 border-[#FEC12C]/30 border-t-[#FEC12C] rounded-full animate-spin"></div></div>}>
            <Routes>
              {/* Public routes with main layout */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="downloads" element={<Downloads />} />
                 <Route path="contact" element={<Contact />} />
                 <Route path="projects" element={<Projects />} />
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
          </React.Suspense>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;