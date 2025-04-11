import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        About Mokshith UI
                    </h1>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            To simplify UI development by providing high-quality, copy-paste components that are easy to use and customize, allowing developers to focus on building great applications rather than reinventing the wheel.
                        </p>
                    </div>
                </div>

                {/* Project Info */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        The Project
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Mokshith UI was born out of frustration with the complexity of modern UI libraries. While many excellent component libraries exist, they often come with steep learning curves, heavy dependencies, and complex installation processes.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We wanted something different - a collection of well-designed, accessible components that you could simply copy and paste into your project. No package installation, no version conflicts, and full control over your code.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Built on top of Tailwind CSS, Mokshith UI provides the perfect balance between utility-first styling and component reusability, with a focus on:
                    </p>

                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6 pl-4">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Simplicity</strong> - easy to understand and use</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Flexibility</strong> - customize to fit your needs</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Performance</strong> - lightweight with minimal overhead</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Accessibility</strong> - built with a11y in mind</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span><strong>Developer experience</strong> - copy, paste, and go</span>
                        </li>
                    </ul>
                </div>

                {/* How It Works */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Browse Components
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Explore our collection of UI components to find what you need for your project.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Copy Code
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Click the copy button to grab the HTML/Tailwind CSS code for the component.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Paste & Customize
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Paste the code into your project and customize it to match your design needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Inspirations */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Inspirations
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Mokshith UI stands on the shoulders of giants. We've been inspired by many amazing projects in the UI component space:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Tailwind UI</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                For their well-crafted, utility-first components
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Material UI</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                For their comprehensive component system
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Chakra UI</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                For their accessibility-first approach
                            </p>
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bootstrap</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                For setting the standard for component libraries
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-12 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Explore our components and start building beautiful interfaces with minimal effort.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/buttons">
                                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600 transition-colors">
                                    Browse Components
                                </button>
                            </Link>
                            <a
                                href="https://github.com/webdevelopersrinu/mokshit-ui"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600 transition-colors"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;