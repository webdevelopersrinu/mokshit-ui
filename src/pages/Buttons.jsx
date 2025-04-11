import React from 'react';
import ComponentShowcase from '../components/common/ComponentShowcase';
import buttonSnippets from '../snippets/buttons';

const Buttons = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Buttons
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of ready-to-use button components built with Tailwind CSS. Simply copy the code and paste it into your project.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-10 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap gap-2">
            {buttonSnippets.map((snippet) => (
              <a
                key={snippet.id}
                href={`#${snippet.id}`}
                className="inline-flex px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {snippet.title}
              </a>
            ))}
          </div>
        </div>

        {/* Button Showcase */}
        <div className="space-y-12">
          {buttonSnippets.map((snippet) => (
            <div key={snippet.id} id={snippet.id} className="scroll-mt-24">
              <ComponentShowcase
                title={snippet.title}
                description={snippet.description}
                htmlCode={snippet.htmlCode}
                preview={snippet.htmlCode}
              />
            </div>
          ))}
        </div>

        {/* Best Practices */}
        <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Button Best Practices
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                <strong>Clarity:</strong> Buttons should have clear, descriptive labels, and if needed, appropriate icons.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                <strong>Feedback:</strong> Provide visual feedback on hover, focus, and active states so users know their actions are being recognized.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                <strong>Accessibility:</strong> Ensure that buttons are accessible by using proper ARIA labels and enabling keyboard navigation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
