import React from 'react';
import { Clock, Check, X, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pipelineData = [
  { 
    id: '12345', 
    name: 'main-pipeline', 
    branch: 'main', 
    status: 'success', 
    duration: '8m 23s', 
    timestamp: '2h ago',
    stages: 5,
    author: 'Alex Kim'
  },
  { 
    id: '12344', 
    name: 'feature-auth', 
    branch: 'feat/auth', 
    status: 'failed', 
    duration: '11m 47s', 
    timestamp: '3h ago',
    stages: 7,
    author: 'Sarah Chen'
  },
  { 
    id: '12343', 
    name: 'deploy-staging', 
    branch: 'release/v2.1', 
    status: 'running', 
    duration: '6m 12s', 
    timestamp: '4h ago',
    stages: 6,
    author: 'Mike Johnson'
  },
  { 
    id: '12342', 
    name: 'backend-tests', 
    branch: 'fix/api-endpoints', 
    status: 'success', 
    duration: '5m 55s', 
    timestamp: '5h ago',
    stages: 4,
    author: 'Emma Davis'
  },
];

const PipelineList: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-4 py-3">Pipeline</th>
            <th className="px-4 py-3">Branch</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Duration</th>
            <th className="px-4 py-3">Stages</th>
            <th className="px-4 py-3">Author</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pipelineData.map((pipeline) => (
            <tr key={pipeline.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">
                {pipeline.name}
                <div className="text-xs text-gray-500">{pipeline.timestamp}</div>
              </td>
              <td className="px-4 py-3">{pipeline.branch}</td>
              <td className="px-4 py-3">
                <StatusBadge status={pipeline.status} />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-gray-500" />
                  {pipeline.duration}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${getStatusColor(pipeline.status)}`} 
                    style={{ width: '75%' }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{pipeline.stages} stages</div>
              </td>
              <td className="px-4 py-3">{pipeline.author}</td>
              <td className="px-4 py-3">
                <Link 
                  to={`/pipeline/${pipeline.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let icon;
  let colorClass;

  switch (status) {
    case 'success':
      icon = <Check size={14} />;
      colorClass = 'bg-green-100 text-green-800';
      break;
    case 'failed':
      icon = <X size={14} />;
      colorClass = 'bg-red-100 text-red-800';
      break;
    case 'running':
      icon = <PlayCircle size={14} />;
      colorClass = 'bg-blue-100 text-blue-800';
      break;
    default:
      icon = null;
      colorClass = 'bg-gray-100 text-gray-800';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
      <span className="mr-1">{icon}</span>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
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

export default PipelineList;