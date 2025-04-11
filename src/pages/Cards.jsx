import ComponentShowcase from '../components/common/ComponentShowcase';
import cardSnippets from '../snippets/cards';

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cards</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of ready-to-use card components built with Tailwind CSS. Simply copy the code and paste it into your project.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-10 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {cardSnippets.map((snippet) => (
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

        {/* Card Showcase */}
        <div className="space-y-12">
          {cardSnippets.map((snippet) => (
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Card Design Best Practices</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Maintain consistent spacing</strong> - Use consistent padding inside cards for a clean, organized look.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Limit content</strong> - Cards should contain concise information and not be overfilled with too much content.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Use shadows thoughtfully</strong> - Shadows help create depth but should be subtle and consistent.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Ensure hierarchy</strong> - Maintain clear visual hierarchy with proper heading sizes and content arrangement.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Make cards interactive</strong> - Consider adding hover states or subtle animations to provide feedback.</p>
            </li>
          </ul>
        </div>

        {/* Customization Tips */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Customization Tips</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>These card components are designed to be easily customizable. Here are some tips to adapt them to your project:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Change the color scheme by adjusting the background, text, and border color classes</li>
              <li>Modify the padding and margin values to fit your layout requirements</li>
              <li>Adjust the border-radius for different corner styles (rounded-none, rounded-sm, rounded-lg, etc.)</li>
              <li>Customize shadow intensity using classes like shadow-sm, shadow, shadow-md, shadow-lg</li>
              <li>Add or remove border using border classes (border, border-0, border-2, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;