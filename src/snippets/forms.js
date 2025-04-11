// Collection of form snippets
export const formSnippets = [
    {
        id: 'basic-input',
        title: 'Basic Input',
        description: 'A simple input field with label.',
        htmlCode: `<div class="mb-4">
    <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      placeholder="Enter your name"
    />
  </div>`,
    },
    {
        id: 'input-with-help',
        title: 'Input with Help Text',
        description: 'An input field with a label and help text.',
        htmlCode: `<div class="mb-4">
    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      placeholder="you@example.com"
    />
    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      We'll never share your email with anyone else.
    </p>
  </div>`,
    },
    {
        id: 'input-with-icon',
        title: 'Input with Icon',
        description: 'An input field with an icon.',
        htmlCode: `<div class="mb-4">
    <label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Search
    </label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        id="search"
        name="search"
        class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        placeholder="Search..."
      />
    </div>
  </div>`,
    },
    {
        id: 'input-with-validation',
        title: 'Input with Validation',
        description: 'An input field with error validation.',
        htmlCode: `<div class="mb-4">
    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      class="w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:text-white"
      placeholder="Enter your password"
      aria-invalid="true"
      aria-describedby="password-error"
    />
    <p class="mt-1 text-xs text-red-600 dark:text-red-500" id="password-error">
      Password must be at least 8 characters.
    </p>
  </div>`,
    },
    {
        id: 'select-input',
        title: 'Select Input',
        description: 'A select dropdown component.',
        htmlCode: `<div class="mb-4">
    <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Country
    </label>
    <select
      id="country"
      name="country"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white"
    >
      <option value="" disabled selected>Select your country</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="au">Australia</option>
    </select>
  </div>`,
    },
    {
        id: 'checkbox',
        title: 'Checkbox',
        description: 'A simple checkbox component.',
        htmlCode: `<div class="mb-4">
    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="remember" class="font-medium text-gray-700 dark:text-gray-300">
          Remember me
        </label>
        <p class="text-gray-500 dark:text-gray-400">
          Keep me signed in on this device.
        </p>
      </div>
    </div>
  </div>`,
    },
    {
        id: 'radio-buttons',
        title: 'Radio Buttons',
        description: 'A set of radio button options.',
        htmlCode: `<div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Notification preferences
    </label>
    <div class="space-y-2">
      <div class="flex items-center">
        <input
          id="push-everything"
          name="push-notifications"
          type="radio"
          class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
          checked
        />
        <label for="push-everything" class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          All notifications
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="push-email"
          name="push-notifications"
          type="radio"
          class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        />
        <label for="push-email" class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email notifications only
        </label>
      </div>
      <div class="flex items-center">
        <input
          id="push-nothing"
          name="push-notifications"
          type="radio"
          class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
        />
        <label for="push-nothing" class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          No notifications
        </label>
      </div>
    </div>
  </div>`,
    },
    {
        id: 'textarea',
        title: 'Textarea',
        description: 'A multiline text input.',
        htmlCode: `<div class="mb-4">
    <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows="4"
      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      placeholder="Write your message here..."
    ></textarea>
  </div>`,
    },
    {
        id: 'login-form',
        title: 'Login Form',
        description: 'A complete login form with email and password inputs.',
        htmlCode: `<form class="space-y-6 max-w-md mx-auto">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        placeholder="you@example.com"
      />
    </div>
  
    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
          Forgot password?
        </a>
      </div>
      <input
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        required
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        placeholder="••••••••"
      />
    </div>
  
    <div class="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800"
      />
      <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
        Remember me
      </label>
    </div>
  
    <div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Sign in
      </button>
    </div>
  </form>`,
    },
];

export default formSnippets;