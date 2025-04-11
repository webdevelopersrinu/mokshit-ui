const navbarSnippets = [
    {
        id: 'basic-navbar',
        title: 'Basic Navbar',
        description:
            'A simple responsive navbar with a brand logo and navigation links. It includes a mobile menu toggle for smaller screens.',
        htmlCode: `<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <a href="#" class="text-xl font-bold text-gray-800 dark:text-white">Brand</a>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Services</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
        </div>
        <button class="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>`
    },
    {
        id: 'centered-navbar',
        title: 'Centered Navbar',
        description:
            'A navbar with centered menu items. This design places the logo and navigation links centrally for a balanced layout.',
        htmlCode: `<nav class="bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-center py-4">
        <a href="#" class="mr-6 text-lg font-bold text-gray-800 dark:text-white">Logo</a>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
          <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  </nav>`
    },
    {
        id: 'auth-navbar',
        title: 'Auth Navbar',
        description:
            'A navbar designed for authentication pages, featuring login and sign-up buttons alongside navigation links.',
        htmlCode: `<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white">MyApp</a>
        <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Features</a>
          <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Pricing</a>
        </div>
        <div class="hidden md:flex items-center space-x-2">
          <a href="#" class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            Login
          </a>
          <a href="#" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Sign Up
          </a>
        </div>
        <button class="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>`
    }
];

export default navbarSnippets;
