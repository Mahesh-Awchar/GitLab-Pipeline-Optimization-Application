export interface Suggestion {
  id: number;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
  category: 'build' | 'test' | 'deploy' | 'cache';
  estimatedSavings: string;
  successRate: number;
  codeExample?: string;
}

export interface Pipeline {
  id: string;
  name: string;
  branch: string;
  commit: string;
  author: string;
  status: 'success' | 'failed' | 'running' | 'pending' | 'canceled';
  duration: string;
  timestamp: string;
  stages?: PipelineStage[];
}

export interface PipelineStage {
  name: string;
  status: 'success' | 'failed' | 'running' | 'pending' | 'canceled';
  duration: string;
  jobs: PipelineJob[];
}

export interface PipelineJob {
  name: string;
  status: 'success' | 'failed' | 'running' | 'pending' | 'canceled';
  duration: string;
}