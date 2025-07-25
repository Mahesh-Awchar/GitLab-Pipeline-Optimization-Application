import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <button className="p-1 mr-4 text-gray-500 md:hidden focus:outline-none">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1.5">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search pipelines..."
            className="ml-2 bg-transparent border-none focus:outline-none text-sm"
          />
        </div>
        
        <button className="p-1.5 text-gray-500 bg-gray-100 rounded-md focus:outline-none hover:bg-gray-200 transition-colors">
          <Bell size={18} />
        </button>
        
        <div className="h-8 w-8 bg-[#6666C4] rounded-full flex items-center justify-center text-white text-sm font-medium">
          DE
        </div>
      </div>
    </header>
  );
};

export default Header;