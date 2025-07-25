import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Build',
    current: 92,
    previous: 125,
    avg: 110,
  },
  {
    name: 'Test',
    current: 255,
    previous: 290,
    avg: 270,
  },
  {
    name: 'Package',
    current: 108,
    previous: 120,
    avg: 115,
  },
  {
    name: 'Deploy',
    current: 48,
    previous: 55,
    avg: 52,
  },
];

const PipelineMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Duration (seconds)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value} seconds`, '']} />
            <Legend />
            <Bar dataKey="current" name="Current Pipeline" fill="#FC6D26" />
            <Bar dataKey="previous" name="Previous Pipeline" fill="#FCA326" />
            <Bar dataKey="avg" name="Project Average" fill="#6666C4" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MetricCard 
          title="Overall Pipeline Time" 
          current="8m 23s" 
          previous="9m 50s" 
          change="-15%" 
          improved={true}
        />
        <MetricCard 
          title="Build Cache Hit Rate" 
          current="92%" 
          previous="78%" 
          change="+14%" 
          improved={true}
        />
        <MetricCard 
          title="Artifact Size" 
          current="284 MB" 
          previous="312 MB" 
          change="-9%" 
          improved={true}
        />
        <MetricCard 
          title="Test Coverage" 
          current="87%" 
          previous="85%" 
          change="+2%" 
          improved={true}
        />
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  current: string;
  previous: string;
  change: string;
  improved: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, current, previous, change, improved }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <p className="text-2xl font-semibold">{current}</p>
          <p className="text-xs text-gray-500 mt-1">Previous: {previous}</p>
        </div>
        <div className={`text-sm font-medium ${improved ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </div>
      </div>
    </div>
  );
};

export default PipelineMetrics;