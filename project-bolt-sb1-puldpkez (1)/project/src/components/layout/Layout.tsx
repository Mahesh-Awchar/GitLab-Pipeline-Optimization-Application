import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={pageTitle} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const getPageTitle = (pathname: string): string => {
  const path = pathname.split('/')[1];
  switch (path) {
    case '':
      return 'Dashboard';
    case 'pipeline':
      return 'Pipeline Analysis';
    case 'suggestions':
      return 'AI Suggestions';
    case 'settings':
      return 'Settings';
    default:
      return 'GitLab Pipeline Optimizer';
  }
};

export default Layout;