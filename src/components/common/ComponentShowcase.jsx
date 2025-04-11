import { useState } from 'react';
import CopyButton from './CopyButton';

const ComponentShowcase = ({ title, description, htmlCode, cssCode, preview }) => {
  const [activeTab, setActiveTab] = useState('preview');

  // Format code for display
  const formatCode = (code) => {
    return code.trim();
  };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-8 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        )}
      </div>

      {/* Tab Selector */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'preview'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'html'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          HTML
        </button>
        {cssCode && (
          <button
            onClick={() => setActiveTab('css')}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === 'css'
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            CSS
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white dark:bg-gray-900">
        {activeTab === 'preview' ? (
          <div className="flex items-center justify-center min-h-20 p-4 border border-dashed border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
            <div dangerouslySetInnerHTML={{ __html: preview || htmlCode }} />
          </div>
        ) : activeTab === 'html' ? (
          <div className="relative">
            <div className="absolute top-2 right-2">
              <CopyButton code={htmlCode} />
            </div>
            <pre className="overflow-x-auto p-4 rounded-md bg-gray-50 dark:bg-gray-800 text-sm font-mono">
              <code className="language-html">
                {formatCode(htmlCode)}
              </code>
            </pre>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-2 right-2">
              <CopyButton code={cssCode} />
            </div>
            <pre className="overflow-x-auto p-4 rounded-md bg-gray-50 dark:bg-gray-800 text-sm font-mono">
              <code className="language-css">
                {formatCode(cssCode)}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentShowcase;