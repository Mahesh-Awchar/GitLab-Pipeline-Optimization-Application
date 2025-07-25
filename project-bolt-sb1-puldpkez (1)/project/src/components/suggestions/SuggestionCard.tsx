import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronDown, ChevronUp, Code, Copy } from 'lucide-react';
import { Suggestion } from '../../types';

interface SuggestionCardProps {
  suggestion: Suggestion;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-600 border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'low':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };
  
  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'low':
        return 'bg-green-100 text-green-600';
      case 'medium':
        return 'bg-blue-100 text-blue-600';
      case 'high':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'build':
        return 'bg-indigo-100 text-indigo-600';
      case 'test':
        return 'bg-emerald-100 text-emerald-600';
      case 'deploy':
        return 'bg-rose-100 text-rose-600';
      case 'cache':
        return 'bg-amber-100 text-amber-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 hover:border-[#FCA326] transition-colors overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <div className={`p-1.5 rounded-full ${getImpactColor(suggestion.impact)} mr-3`}>
              {suggestion.impact === 'high' ? (
                <AlertCircle size={20} />
              ) : (
                <CheckCircle size={20} />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{suggestion.title}</h3>
              <p className="text-gray-600 mt-1">{suggestion.description}</p>
            </div>
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-gray-600"
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className="flex flex-wrap mt-4 gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
            {suggestion.impact === 'high' ? 'High Impact' : suggestion.impact === 'medium' ? 'Medium Impact' : 'Low Impact'}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getEffortColor(suggestion.effort)}`}>
            {suggestion.effort === 'low' ? 'Low Effort' : suggestion.effort === 'medium' ? 'Medium Effort' : 'High Effort'}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(suggestion.category)}`}>
            {suggestion.category.charAt(0).toUpperCase() + suggestion.category.slice(1)}
          </span>
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="space-y-4">
              {suggestion.codeExample && (
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Code size={16} className="mr-2 text-gray-500" />
                      <span className="text-sm font-medium">Implementation Example</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Copy size={16} />
                    </button>
                  </div>
                  <pre className="bg-gray-50 p-3 rounded-md text-sm overflow-x-auto">
                    <code>{suggestion.codeExample}</code>
                  </pre>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estimated Time Savings</p>
                  <p className="text-[#FC6D26] font-medium">{suggestion.estimatedSavings}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Success Rate</p>
                  <p className="font-medium">{suggestion.successRate}% of projects</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Dismiss
                </button>
                <button className="px-4 py-2 bg-[#FC6D26] text-white rounded-md text-sm font-medium hover:bg-[#FCA326]">
                  Apply Suggestion
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;