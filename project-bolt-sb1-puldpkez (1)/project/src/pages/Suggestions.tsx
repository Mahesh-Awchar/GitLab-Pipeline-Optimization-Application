import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

import SuggestionCard from '../components/suggestions/SuggestionCard';
import { suggestions } from '../data/mockData';

const Suggestions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('impact');

  const filteredSuggestions = suggestions.filter(suggestion => {
    // Filter by search term
    const matchesSearch = suggestion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          suggestion.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesFilter = filter === 'all' || suggestion.category === filter;
    
    return matchesSearch && matchesFilter;
  }).sort((a, b) => {
    // Sort by selected criteria
    if (sortBy === 'impact') {
      const impactOrder = { high: 3, medium: 2, low: 1 };
      return impactOrder[b.impact as keyof typeof impactOrder] - impactOrder[a.impact as keyof typeof impactOrder];
    } else if (sortBy === 'effort') {
      const effortOrder = { low: 1, medium: 2, high: 3 };
      return effortOrder[a.effort as keyof typeof effortOrder] - effortOrder[b.effort as keyof typeof effortOrder];
    } else {
      return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-4">AI-Powered Pipeline Suggestions</h1>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#FCA326] focus:border-[#FCA326]"
              placeholder="Search suggestions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-[#FCA326] focus:border-[#FCA326]"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="build">Build</option>
                <option value="test">Test</option>
                <option value="deploy">Deploy</option>
                <option value="cache">Cache</option>
              </select>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ArrowUpDown size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-[#FCA326] focus:border-[#FCA326]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="impact">Sort by Impact</option>
                <option value="effort">Sort by Effort</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-gray-500">No suggestions found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestions;