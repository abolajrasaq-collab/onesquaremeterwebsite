import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith('/projects/');

  return (
    <div className="bg-white selection:bg-[#FEC12C] selection:text-[#325074] min-h-screen flex flex-col">
      {!isProjectPage && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isProjectPage && <Footer />}
    </div>
  );
};

export default Layout;