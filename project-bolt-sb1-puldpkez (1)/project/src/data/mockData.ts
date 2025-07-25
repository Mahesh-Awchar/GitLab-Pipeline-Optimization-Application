import { Suggestion } from '../types';

export const suggestions: Suggestion[] = [
  {
    id: 1,
    title: 'Optimize Docker layer caching',
    description: 'Reorder your Dockerfile instructions to maximize cache usage and reduce build times.',
    impact: 'high',
    effort: 'low',
    category: 'build',
    estimatedSavings: '2-3 minutes per build',
    successRate: 92,
    codeExample: `# Before
FROM node:16
COPY . /app
RUN npm install
RUN npm run build

# After
FROM node:16
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build`
  },
  {
    id: 2,
    title: 'Parallelize test execution',
    description: 'Split your test suite into multiple jobs running in parallel to reduce overall pipeline duration.',
    impact: 'high',
    effort: 'medium',
    category: 'test',
    estimatedSavings: '3-5 minutes per build',
    successRate: 88,
    codeExample: `# Before
test:
  script:
    - npm run test

# After
test:
  parallel: 4
  script:
    - npm run test:ci -- --split=\${CI_NODE_INDEX || 1} --total=\${CI_NODE_TOTAL || 1}`
  },
  {
    id: 3,
    title: 'Implement GitLab CI/CD caching',
    description: 'Cache dependencies between pipeline runs to avoid repetitive downloads.',
    impact: 'medium',
    effort: 'low',
    category: 'cache',
    estimatedSavings: '1-2 minutes per build',
    successRate: 95,
    codeExample: `cache:
  key: \${CI_COMMIT_REF_SLUG}
  paths:
    - node_modules/
    - .npm/`
  },
  {
    id: 4,
    title: 'Optimize test selection',
    description: 'Run only tests that are relevant to the changes made in the commit.',
    impact: 'medium',
    effort: 'medium',
    category: 'test',
    estimatedSavings: '1-3 minutes per build',
    successRate: 82,
    codeExample: `test:
  script:
    - git diff --name-only $CI_COMMIT_BEFORE_SHA $CI_COMMIT_SHA > changed_files.txt
    - npm run test:affected -- --changedFiles=changed_files.txt`
  },
  {
    id: 5,
    title: 'Reduce artifact size',
    description: 'Only include necessary files in your artifacts to reduce upload/download times.',
    impact: 'low',
    effort: 'low',
    category: 'build',
    estimatedSavings: '30-60 seconds per build',
    successRate: 90,
    codeExample: `artifacts:
  paths:
    - dist/
  exclude:
    - dist/**/*.map
    - dist/assets/images/debug/`
  },
  {
    id: 6,
    title: 'Use smaller base images',
    description: 'Switch to Alpine-based images to reduce image size and build time.',
    impact: 'medium',
    effort: 'low',
    category: 'build',
    estimatedSavings: '1-2 minutes per build',
    successRate: 87,
    codeExample: `# Before
FROM node:16

# After
FROM node:16-alpine`
  },
  {
    id: 7,
    title: 'Implement incremental builds',
    description: 'Only rebuild what has changed since the last successful pipeline.',
    impact: 'high',
    effort: 'high',
    category: 'build',
    estimatedSavings: '4-7 minutes per build',
    successRate: 79,
    codeExample: `build:
  script:
    - npm run build -- --incremental`
  },
  {
    id: 8,
    title: 'Optimize deployment strategy',
    description: 'Implement a blue-green deployment strategy to reduce downtime and rollback risks.',
    impact: 'medium',
    effort: 'high',
    category: 'deploy',
    estimatedSavings: '2-5 minutes per deploy',
    successRate: 85,
    codeExample: `deploy:
  script:
    - kubectl apply -f k8s/blue-green-deployment.yaml
    - ./scripts/switch-traffic.sh`
  }
];