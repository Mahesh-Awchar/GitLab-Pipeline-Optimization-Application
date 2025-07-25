import React from 'react';
import { Lightbulb } from 'lucide-react';

const suggestions = [
  {
    id: 1,
    title: 'Implement Docker layer caching',
    impact: 'high',
    savingsEstimate: '~3m 20s per build'
  },
  {
    id: 2,
    title: 'Parallelize unit tests',
    impact: 'medium',
    savingsEstimate: '~1m 45s per build'
  },
  {
    id: 3,
    title: 'Use image dependencies cache',
    impact: 'low',
    savingsEstimate: '~45s per build'
  }
];

const RecentSuggestions: React.FC = () => {
  return (
    <div className="space-y-3">
      {suggestions.map((suggestion) => (
        <div 
          key={suggestion.id}
          className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#FCA326] transition-colors cursor-pointer"
        >
          <div className="flex items-start">
            <div className={`p-1.5 rounded-md ${getImpactColor(suggestion.impact)} mr-3 mt-0.5`}>
              <Lightbulb size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium">{suggestion.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                Estimated savings: {suggestion.savingsEstimate}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full text-sm text-[#FC6D26] hover:text-[#FCA326] font-medium mt-2">
        View all suggestions →
      </button>
    </div>
  );
};

const getImpactColor = (impact: string): string => {
  switch (impact) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-amber-500';
    case 'low':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
};

export default RecentSuggestions;