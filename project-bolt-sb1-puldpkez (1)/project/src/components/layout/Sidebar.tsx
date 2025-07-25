import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, GitBranch, Lightbulb, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <GitBranch className="h-6 w-6 text-[#FC6D26]" />
        <span className="ml-2 text-lg font-semibold">Pipeline Optimizer</span>
      </div>
      <nav className="flex-1 pt-4">
        <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem to="/suggestions" icon={<Lightbulb size={20} />} label="AI Suggestions" />
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#FCA326] rounded-full flex items-center justify-center text-white font-semibold">
            AI
          </div>
          <div>
            <p className="text-sm font-medium">AI Assistant</p>
            <p className="text-xs text-gray-500">Ready to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#FC6D26] transition-colors ${
          isActive ? 'bg-gray-100 text-[#FC6D26] border-l-4 border-[#FC6D26] pl-3' : ''
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;