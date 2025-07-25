import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, GitBranch, GitCommit, User } from 'lucide-react';

import PipelineStages from '../components/pipeline/PipelineStages';
import PipelineMetrics from '../components/pipeline/PipelineMetrics';
import AISuggestions from '../components/pipeline/AISuggestions';

const PipelineAnalysis: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch pipeline data based on the ID
  const pipeline = {
    id: id || '12345',
    name: 'main-pipeline',
    branch: 'main',
    commit: '3a7e92d',
    author: 'Alex Kim',
    status: 'success',
    duration: '8m 23s',
    timestamp: '2h ago',
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">{pipeline.name}</h2>
            <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600 gap-4">
              <div className="flex items-center">
                <GitBranch size={16} className="mr-1" />
                {pipeline.branch}
              </div>
              <div className="flex items-center">
                <GitCommit size={16} className="mr-1" />
                {pipeline.commit}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {pipeline.author}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {pipeline.duration}
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <StatusBadge status={pipeline.status} />
          </div>
        </div>
        
        <PipelineStages />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Pipeline Metrics</h2>
            <PipelineMetrics />
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">AI Optimization Suggestions</h2>
            <AISuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'failed':
        return 'bg-red-500 text-white';
      case 'running':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default PipelineAnalysis;