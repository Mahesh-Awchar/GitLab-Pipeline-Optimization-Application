import React from 'react';

const OptimizationProgress: React.FC = () => {
  const metrics = [
    { name: 'Build Time', current: 68, target: 100 },
    { name: 'Cache Utilization', current: 75, target: 100 },
    { name: 'Test Parallelization', current: 42, target: 100 },
    { name: 'Artifact Size', current: 89, target: 100 },
  ];

  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div key={metric.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{metric.name}</span>
            <span className="text-sm text-gray-500">{metric.current}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FC6D26] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${metric.current}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptimizationProgress;