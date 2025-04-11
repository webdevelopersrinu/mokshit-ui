import React from 'react';

const Documentation = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Page Header */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Documentation</h1>

                {/* Introduction */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Mokshith UI is a lightweight, copy-paste UI component library built with Tailwind CSS.
                        It is designed to help developers quickly integrate attractive and customizable components into their projects.
                    </p>
                </section>

                {/* Getting Started */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Getting Started</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        To get started with Mokshith UI, simply browse through the provided components and copy the HTML/Tailwind CSS code.
                        You can then paste this code directly into your project and customize it to fit your needs.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        No installation is required. All components are standalone and can be used in any HTML or React project.
                    </p>
                </section>

                {/* Customization */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Customization</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        Each component is built using Tailwind CSS utility classes. This gives you full control over their appearance—
                        you can easily adjust colors, spacing, borders, shadows, and more to match your design requirements.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        If needed, you can extend or override the default styling by adding custom classes in your project.
                    </p>
                </section>

                {/* Best Practices */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Best Practices</h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 space-y-2">
                        <li>Keep your code modular by separating components into different files for maintainability.</li>
                        <li>Leverage Tailwind CSS utility classes for rapid styling and adjustments.</li>
                        <li>Ensure accessibility by using proper ARIA attributes and keyboard navigation support.</li>
                        <li>Test your components across various devices and screen sizes to guarantee responsiveness.</li>
                        <li>Refer to the Tailwind CSS documentation for advanced customization and configuration options.</li>
                    </ul>
                </section>

                {/* Additional Resources */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Additional Resources</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        For further reading and updates, please visit our
                        <a
                            href="https://github.com/mokshith-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                        >
                            GitHub Repository
                        </a>.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Also, check out the
                        <a
                            href="https://tailwindcss.com/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                        >
                            Tailwind CSS documentation
                        </a>
                        for more details on utilizing utility classes to build custom UIs.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Documentation;
