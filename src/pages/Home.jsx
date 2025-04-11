import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            Beautiful UI Components,{' '}
                            <span className="text-blue-600 dark:text-blue-400">Ready to Copy</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
                            A lightweight, copy-paste UI component library built with Tailwind CSS, designed for developers to easily integrate pre-styled, customizable components into their projects.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/buttons">
                                <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                    Explore Components
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="px-6 py-3 text-base font-medium text-blue-700 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors dark:bg-transparent dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        {/* Example Component */}
                        <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-left">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Button.html
                                </div>
                            </div>
                            <pre className="overflow-x-auto text-sm font-mono text-gray-800 dark:text-gray-200">
                                <code>{`<div class="relative inline-flex items-center justify-center gap-4 group">
  <div
    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
  ></div>
  <a
    role="button"
    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
    title="payment"
    href="#"
    >Get Started For Free<svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      height="10"
      width="10"
      fill="none"
      class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
    >
      <path
        d="M0 5h7"
        class="transition opacity-0 group-hover:opacity-100"
      ></path>
      <path
        d="M1 1l4 4-4 4"
        class="transition group-hover:translate-x-[3px]"
      ></path>
    </svg>
  </a>
</div>`}</code>
                            </pre>
                        </div>

                        {/* Example Preview */}
                        <div className="mt-6 p-10 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <div className="relative inline-flex items-center justify-center gap-4 group">
                                <div
                                    className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                                ></div>
                                <a
                                    role="button"
                                    className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                                    title="payment"
                                    href="#"
                                >
                                    Get Started For Free
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 10 10"
                                        height="10"
                                        width="10"
                                        fill="none"
                                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                                    >
                                        <path
                                            d="M0 5h7"
                                            className="transition opacity-0 group-hover:opacity-100"
                                        ></path>
                                        <path
                                            d="M1 1l4 4-4 4"
                                            className="transition group-hover:translate-x-[3px]"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Mokshith UI?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            A modern approach to UI development focused on speed and simplicity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Copy-Paste Components
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Just copy the HTML code and paste it directly into your project. No installation or configuration required.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Tailwind Powered
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Built with Tailwind CSS for easy customization. Modify the components to match your design system with simple class changes.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Developer Friendly
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Clean, readable code that's easy to understand and modify. No complex dependencies or setup required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Component Showcase */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Explore Our Components
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Browse our collection of beautiful UI components
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Buttons Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Buttons</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Beautiful button components with various styles, states, and effects.
                                </p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                        Primary
                                    </button>
                                    <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors dark:bg-gray-800 dark:border-blue-500 dark:text-blue-500">
                                        Secondary
                                    </button>
                                </div>
                                <Link
                                    to="/buttons"
                                    className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                                >
                                    Explore Buttons
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Cards Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cards</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Versatile card components for displaying content in an organized way.
                                </p>
                                <div className="mt-auto bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                                    <h4 className="font-medium text-gray-900 dark:text-white">Card Example</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">This is a sample card component.</p>
                                </div>
                                <Link
                                    to="/cards"
                                    className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                                >
                                    Explore Cards
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Alerts Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alerts</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Notification components to provide feedback to users.
                                </p>
                                <div className="mt-auto p-3 bg-green-100 dark:bg-green-200 text-green-800 rounded-md text-sm">
                                    <div className="flex">
                                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Success alert example</span>
                                    </div>
                                </div>
                                <Link
                                    to="/alerts"
                                    className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                                >
                                    Explore Alerts
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/buttons">
                            <button className="px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                View All Components
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Faster?</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Stop reinventing the wheel. Start with Mokshith UI components and focus on what matters most—your application logic.
                        </p>
                        <a href="https://github.com/mokshith-ui" target="_blank" rel="noopener noreferrer">
                            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-600 transition-colors">
                                Get Started Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;