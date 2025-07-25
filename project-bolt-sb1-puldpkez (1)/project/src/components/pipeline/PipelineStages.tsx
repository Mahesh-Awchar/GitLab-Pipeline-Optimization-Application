import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Terminal } from 'lucide-react';

const stages = [
  {
    name: 'Build',
    status: 'success',
    duration: '1m 32s',
    jobs: [
      { name: 'compile', status: 'success', duration: '1m 12s' },
      { name: 'lint', status: 'success', duration: '20s' }
    ]
  },
  {
    name: 'Test',
    status: 'success',
    duration: '4m 15s',
    jobs: [
      { name: 'unit-tests', status: 'success', duration: '2m 30s' },
      { name: 'integration-tests', status: 'success', duration: '1m 45s' }
    ]
  },
  {
    name: 'Package',
    status: 'success',
    duration: '1m 48s',
    jobs: [
      { name: 'create-image', status: 'success', duration: '1m 48s' }
    ]
  },
  {
    name: 'Deploy',
    status: 'success',
    duration: '48s',
    jobs: [
      { name: 'deploy-staging', status: 'success', duration: '48s' }
    ]
  }
];

const PipelineStages: React.FC = () => {
  const [expandedStage, setExpandedStage] = useState<string | null>(null);

  const toggleStage = (stageName: string) => {
    if (expandedStage === stageName) {
      setExpandedStage(null);
    } else {
      setExpandedStage(stageName);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.name}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${getStatusColor(stage.status)}`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-1">{stage.name}</span>
            </div>
            {index < stages.length - 1 && (
              <div className="h-[2px] flex-grow bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="border rounded-lg overflow-hidden">
        {stages.map((stage) => (
          <div key={stage.name} className="border-b last:border-0">
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleStage(stage.name)}
            >
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(stage.status)} mr-3`}></div>
                <span className="font-medium">{stage.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  {stage.duration}
                </div>
                {expandedStage === stage.name ? (
                  <ChevronUp size={18} className="text-gray-500" />
                ) : (
                  <ChevronDown size={18} className="text-gray-500" />
                )}
              </div>
            </div>
            
            {expandedStage === stage.name && (
              <div className="bg-gray-50 p-4 border-t">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {stage.jobs.map((job) => (
                      <tr key={job.name}>
                        <td className="px-4 py-3 text-sm font-medium">{job.name}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(job.status)}`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{job.duration}</td>
                        <td className="px-4 py-3 text-right">
                          <button className="text-gray-500 hover:text-gray-700">
                            <Terminal size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'success':
      return 'bg-green-500';
    case 'failed':
      return 'bg-red-500';
    case 'running':
      return 'bg-blue-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusBadgeColor = (status: string): string => {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-800';
    case 'failed':
      return 'bg-red-100 text-red-800';
    case 'running':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default PipelineStages;