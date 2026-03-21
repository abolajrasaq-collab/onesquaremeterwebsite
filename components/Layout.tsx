import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith('/projects/');

  return (
    <div className="bg-white selection:bg-[#FEC12C] selection:text-[#325074] min-h-screen flex flex-col">
      {!isProjectPage && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-grow origin-top"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {!isProjectPage && <Footer />}
    </div>
  );
};

export default Layout;