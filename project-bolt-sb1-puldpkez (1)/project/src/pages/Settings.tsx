import React, { useState } from 'react';
import { Save, RefreshCw } from 'lucide-react';

const Settings: React.FC = () => {
  const [gitlabUrl, setGitlabUrl] = useState('https://gitlab.example.com');
  const [apiToken, setApiToken] = useState('glpat-••••••••••••••••');
  const [projectId, setProjectId] = useState('12345');
  const [refreshInterval, setRefreshInterval] = useState('15');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [aiModelVersion, setAiModelVersion] = useState('advanced');
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Pipeline Optimizer Settings</h2>
          <p className="text-gray-500 mt-1">Configure your GitLab integration and AI preferences</p>
        </div>
        
        <form onSubmit={handleSaveSettings} className="p-6 space-y-6">
          <div className="space-y-6">
            <h3 className="text-lg font-medium">GitLab Connection</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gitlab-url" className="block text-sm font-medium text-gray-700 mb-1">
                  GitLab Instance URL
                </label>
                <input
                  type="url"
                  id="gitlab-url"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FCA326] focus:border-[#FCA326]"
                  value={gitlabUrl}
                  onChange={(e) => setGitlabUrl(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="api-token" className="block text-sm font-medium text-gray-700 mb-1">
                  API Token
                </label>
                <input
                  type="password"
                  id="api-token"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FCA326] focus:border-[#FCA326]"
                  value={apiToken}
                  onChange={(e) => setApiToken(e.target.value)}
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Create a personal access token with API access in your GitLab account.
                </p>
              </div>
              
              <div>
                <label htmlFor="project-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Project ID
                </label>
                <input
                  type="text"
                  id="project-id"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FCA326] focus:border-[#FCA326]"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="refresh-interval" className="block text-sm font-medium text-gray-700 mb-1">
                  Refresh Interval (minutes)
                </label>
                <select
                  id="refresh-interval"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FCA326] focus:border-[#FCA326]"
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(e.target.value)}
                >
                  <option value="5">5 minutes</option>
                  <option value="10">10 minutes</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium">AI and Notifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ai-model" className="block text-sm font-medium text-gray-700 mb-1">
                  AI Model Version
                </label>
                <select
                  id="ai-model"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FCA326] focus:border-[#FCA326]"
                  value={aiModelVersion}
                  onChange={(e) => setAiModelVersion(e.target.value)}
                >
                  <option value="basic">Basic - Lower resource usage</option>
                  <option value="advanced">Advanced - Better suggestions</option>
                  <option value="experimental">Experimental - Cutting edge features</option>
                </select>
              </div>
              
              <div className="flex items-center h-full pt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#FC6D26] focus:ring-[#FCA326] border-gray-300 rounded"
                    checked={notificationsEnabled}
                    onChange={(e) => setNotificationsEnabled(e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Enable browser notifications for optimization suggestions
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCA326] mr-3"
            >
              <RefreshCw size={16} className="inline-block mr-1" />
              Test Connection
            </button>
            <button
              type="submit"
              className={`px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FC6D26] hover:bg-[#FCA326] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCA326] flex items-center ${
                isSaving ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} className="inline-block mr-1" />
                  Save Settings
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;