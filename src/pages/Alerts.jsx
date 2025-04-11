import ComponentShowcase from '../components/common/ComponentShowcase';
import alertSnippets from '../snippets/alerts';

const Alerts = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Alerts</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of ready-to-use alert components built with Tailwind CSS. Simply copy the code and paste it into your project.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-10 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {alertSnippets.map((snippet) => (
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

        {/* Alert Showcase */}
        <div className="space-y-12">
          {alertSnippets.map((snippet) => (
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Alert Best Practices</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Use appropriate colors</strong> - Choose colors that convey the right meaning (green for success, red for errors, etc.).</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Keep messages clear and concise</strong> - Alert messages should be straightforward and easy to understand.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Include relevant icons</strong> - Icons help users quickly recognize the type of alert.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Make dismissible when appropriate</strong> - Allow users to dismiss non-critical alerts.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Ensure accessibility</strong> - Use proper ARIA attributes and ensure color contrast meets accessibility standards.</p>
            </li>
          </ul>
        </div>

        {/* Alert Usage Guidelines */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Alert Usage Guidelines</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Different types of alerts serve different purposes. Here's when to use each type:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">Success Alerts</h3>
                <p className="text-sm">Use when an action has been completed successfully. Examples: form submission confirmation, successful payment, etc.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">Error Alerts</h3>
                <p className="text-sm">Use when something has gone wrong or an action couldn't be completed. Examples: form validation errors, failed transactions, etc.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Warning Alerts</h3>
                <p className="text-sm">Use to warn users about potential issues or consequences. Examples: deleting data, leaving a page with unsaved changes, etc.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Info Alerts</h3>
                <p className="text-sm">Use to provide useful information that isn't critical. Examples: tips, announcements, feature updates, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;