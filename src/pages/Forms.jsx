import ComponentShowcase from '../components/common/ComponentShowcase';
import formSnippets from '../snippets/forms';

const Forms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Forms</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of ready-to-use form components built with Tailwind CSS. Simply copy the code and paste it into your project.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-10 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {formSnippets.map((snippet) => (
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

        {/* Form Showcase */}
        <div className="space-y-12">
          {formSnippets.map((snippet) => (
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Form Design Best Practices</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Use clear labels</strong> - Every input should have a descriptive label that clearly indicates what information is expected.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Include helpful text</strong> - Use helper text to provide additional context or instructions for complex inputs.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Provide visual feedback</strong> - Use colors, icons, and messages to indicate validation states clearly.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Group related fields</strong> - Organize related form fields together for better user experience.</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p><strong>Ensure accessibility</strong> - Use proper HTML semantics and ARIA attributes for screen readers.</p>
            </li>
          </ul>
        </div>

        {/* Accessibility Tips */}
        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Form Accessibility Tips</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Associate labels with inputs</strong> - Always use the <code>for</code> attribute on labels that matches the input's <code>id</code>.</li>
              <li><strong>Include form validation</strong> - Provide clear error messages and use <code>aria-invalid</code> and <code>aria-describedby</code> attributes.</li>
              <li><strong>Use fieldsets and legends</strong> - Group related form controls with <code>fieldset</code> and provide a <code>legend</code> for the group.</li>
              <li><strong>Make forms keyboard navigable</strong> - Ensure all form elements can be accessed and operated using only a keyboard.</li>
              <li><strong>Provide input instructions</strong> - Use placeholder text and help text to guide users on how to complete the form correctly.</li>
            </ol>
          </div>
        </div>

        {/* Form Validation Section */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Client-Side Validation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            While these HTML/CSS components provide the visual foundation for forms, you'll likely need to add JavaScript for client-side validation. Consider using:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>HTML5 built-in validation attributes (<code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>, etc.)</li>
            <li>JavaScript validation libraries for more complex validations</li>
            <li>Form state management in frameworks like React (with libraries like Formik or React Hook Form)</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Remember that client-side validation improves user experience but should always be paired with server-side validation for security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forms;