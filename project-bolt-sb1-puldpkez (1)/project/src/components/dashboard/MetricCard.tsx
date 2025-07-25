import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-transform hover:scale-105 duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="rounded-full p-2 bg-gray-100">{icon}</div>
      </div>
      <div className={`mt-4 inline-flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change}
        <span className="ml-1">{isPositive ? '↑' : '↓'}</span>
      </div>
    </div>
  );
};

export default MetricCard;