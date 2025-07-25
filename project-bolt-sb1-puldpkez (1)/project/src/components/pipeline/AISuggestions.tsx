import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const suggestions = [
  {
    id: 1,
    title: 'Use parallel jobs for unit tests',
    description: 'Split your test suite into multiple jobs to reduce overall test execution time.',
    impact: 'high',
    effort: 'medium',
    savings: '~45-60 seconds'
  },
  {
    id: 2,
    title: 'Optimize Docker build cache',
    description: 'Reorder Dockerfile commands to maximize layer caching and reduce build times.',
    impact: 'medium',
    effort: 'low',
    savings: '~20-30 seconds'
  },
  {
    id: 3,
    title: 'Reduce artifact size',
    description: 'Use .gitignore patterns in artifacts to exclude unnecessary files.',
    impact: 'low',
    effort: 'low',
    savings: '~10-15 seconds'
  }
];

const AISuggestions: React.FC = () => {
  return (
    <div className="space-y-4">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="p-4 border border-gray-200 rounded-lg hover:border-[#FCA326] transition-colors">
          <div className="flex items-start">
            <div className={`p-1 rounded-full ${getImpactColor(suggestion.impact)} mr-3`}>
              {getImpactIcon(suggestion.impact)}
            </div>
            <div>
              <h3 className="text-sm font-medium">{suggestion.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{suggestion.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div>
                  <span className="text-gray-500">Potential savings:</span>
                  <p className="font-medium text-[#FC6D26]">{suggestion.savings}</p>
                </div>
                <div>
                  <span className="text-gray-500">Implementation effort:</span>
                  <p className="font-medium">{capitalizeFirstLetter(suggestion.effort)}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex space-x-2 justify-end">
            <button className="text-xs px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
              Ignore
            </button>
            <button className="text-xs px-3 py-1 rounded-md bg-[#FC6D26] hover:bg-[#FCA326] text-white transition-colors">
              Apply Suggestion
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const getImpactColor = (impact: string): string => {
  switch (impact) {
    case 'high':
      return 'bg-red-100 text-red-600';
    case 'medium':
      return 'bg-amber-100 text-amber-600';
    case 'low':
      return 'bg-blue-100 text-blue-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const getImpactIcon = (impact: string) => {
  switch (impact) {
    case 'high':
      return <AlertCircle size={16} />;
    case 'medium':
      return <CheckCircle size={16} />;
    case 'low':
      return <HelpCircle size={16} />;
    default:
      return <HelpCircle size={16} />;
  }
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default AISuggestions;