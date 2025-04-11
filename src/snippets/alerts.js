// Collection of alert snippets
export const alertSnippets = [
    {
      id: 'success-alert',
      title: 'Success Alert',
      description: 'An alert for displaying success messages.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
      </svg>
      <span><strong>Success!</strong> Your changes have been saved successfully.</span>
    </div>
  </div>`,
    },
    {
      id: 'error-alert',
      title: 'Error Alert',
      description: 'An alert for displaying error messages.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
      <span><strong>Error!</strong> There was a problem processing your request.</span>
    </div>
  </div>`,
    },
    {
      id: 'warning-alert',
      title: 'Warning Alert',
      description: 'An alert for displaying warning messages.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
      </svg>
      <span><strong>Warning!</strong> This action cannot be undone.</span>
    </div>
  </div>`,
    },
    {
      id: 'info-alert',
      title: 'Info Alert',
      description: 'An alert for displaying informational messages.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
      </svg>
      <span><strong>Info!</strong> Please review the changes before continuing.</span>
    </div>
  </div>`,
    },
    {
      id: 'dismissible-alert',
      title: 'Dismissible Alert',
      description: 'An alert that can be dismissed by the user.',
      htmlCode: `<div id="dismissible-alert" class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
        </svg>
        <span><strong>Info!</strong> This alert can be dismissed.</span>
      </div>
      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#dismissible-alert" aria-label="Close" onclick="this.parentElement.parentElement.remove()">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>`,
    },
    {
      id: 'alert-with-actions',
      title: 'Alert with Actions',
      description: 'An alert with action buttons.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="flex items-center mb-3 md:mb-0">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
        </svg>
        <span><strong>New update available!</strong> A new software update is available for download.</span>
      </div>
      <div class="flex space-x-2">
        <button type="button" class="px-3 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        <button type="button" class="px-3 py-1 text-xs font-medium text-center text-blue-700 border border-blue-700 rounded-md hover:text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-600 dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Later</button>
      </div>
    </div>
  </div>`,
    },
    {
      id: 'border-alert',
      title: 'Border Alert',
      description: 'An alert with left border accent.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-blue-700 border-l-4 border-blue-500 bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:bg-gray-800" role="alert">
    <div class="font-medium">Information!</div>
    <div>This alert has a left border accent for a clean, modern look.</div>
  </div>`,
    },
    {
      id: 'solid-alert',
      title: 'Solid Alert',
      description: 'An alert with solid background color.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-white bg-blue-600 rounded-lg dark:bg-blue-700" role="alert">
    <div class="flex items-center">
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
      </svg>
      <span><strong>Attention!</strong> This is an important message that requires your attention.</span>
    </div>
  </div>`,
    },
    {
      id: 'alert-with-list',
      title: 'Alert with List',
      description: 'An alert containing a list of items.',
      htmlCode: `<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
    <div class="font-medium">Please fix the following errors:</div>
    <ul class="mt-1.5 ml-4 list-disc list-inside">
      <li>Your password must be at least 8 characters</li>
      <li>Your password must include at least one uppercase letter</li>
      <li>Your password must include at least one number</li>
      <li>Your password must include at least one special character</li>
    </ul>
  </div>`,
    },
  ];
  
  export default alertSnippets;