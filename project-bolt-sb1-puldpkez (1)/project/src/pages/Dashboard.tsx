import React from 'react';
import { Clock, ArrowUpRight, GitMerge, AlertTriangle } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import PipelineList from '../components/dashboard/PipelineList';
import OptimizationProgress from '../components/dashboard/OptimizationProgress';
import RecentSuggestions from '../components/dashboard/RecentSuggestions';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Avg. Pipeline Duration"
          value="14m 32s"
          change="-12%"
          isPositive={true}
          icon={<Clock className="h-5 w-5 text-blue-500" />}
        />
        <MetricCard
          title="Success Rate"
          value="87.5%"
          change="+5.2%"
          isPositive={true}
          icon={<ArrowUpRight className="h-5 w-5 text-green-500" />}
        />
        <MetricCard
          title="Merge Requests"
          value="28"
          change="+7"
          isPositive={true}
          icon={<GitMerge className="h-5 w-5 text-purple-500" />}
        />
        <MetricCard
          title="Pipeline Failures"
          value="12"
          change="-4"
          isPositive={true}
          icon={<AlertTriangle className="h-5 w-5 text-amber-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Pipelines</h2>
            <PipelineList />
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Optimization Progress</h2>
            <OptimizationProgress />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent AI Suggestions</h2>
            <RecentSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;