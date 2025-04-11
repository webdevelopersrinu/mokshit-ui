// Collection of button snippets
export const buttonSnippets = [
  {
    id: 'primary-button',
    title: 'Primary Button',
    description: 'A simple primary button with hover and focus states.',
    htmlCode: `<button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Button Text
  </button>`,
  },
  {
    id: 'secondary-button',
    title: 'Secondary Button',
    description: 'A secondary button with outline style.',
    htmlCode: `<button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 bg-white border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Button Text
  </button>`,
  },
  {
    id: 'gradient-button',
    title: 'Gradient Button',
    description: 'A button with gradient background and hover effect.',
    htmlCode: `<button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 border border-transparent rounded-md shadow-sm hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Button Text
  </button>`,
  },
  {
    id: 'glow-button',
    title: 'Glow Effect Button',
    description: 'A button with a fancy glow effect on hover.',
    htmlCode: `<div class="relative inline-flex items-center justify-center group">
    <div class="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
    <button class="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-md group-hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30">
      Glow Button
    </button>
  </div>`,
  },
  {
    id: 'icon-button',
    title: 'Button with Icon',
    description: 'A button with text and an icon.',
    htmlCode: `<button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <span>Button Text</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>`,
  },
  {
    id: 'animated-button',
    title: 'Animated Button',
    description: 'A button with an animation on hover.',
    htmlCode: `<button class="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm overflow-hidden transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <span class="relative z-10">Get Started</span>
    <svg class="absolute right-0 -mt-0.5 ml-2 h-5 w-5 text-white transform transition-transform duration-300 ease-out translate-x-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </button>`,
  },
  {
    id: 'glass-button',
    title: 'Glassmorphism Button',
    description: 'A button with a glass-like effect using backdrop filter.',
    htmlCode: `<button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md backdrop-filter backdrop-blur-lg hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-opacity-60">
    Glass Button
  </button>`,
  },
  {
    id: 'cta-button',
    title: 'Call to Action Button',
    description: 'A button with arrow animation for important call-to-actions.',
    htmlCode: `<div class="relative inline-flex items-center justify-center gap-4 group">
    <div class="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
    <a role="button" class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30" title="payment" href="#">
      Get Started For Free
      <svg aria-hidden="true" viewBox="0 0 10 10" height="10" width="10" fill="none" class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2">
        <path d="M0 5h7" class="transition opacity-0 group-hover:opacity-100"></path>
        <path d="M1 1l4 4-4 4" class="transition group-hover:translate-x-[3px]"></path>
      </svg>
    </a>
  </div>`,
  },
  {
    id: 'social-buttons',
    title: 'Social Media Buttons',
    description: 'Buttons for social media links with icons.',
    htmlCode: `<div class="flex space-x-4">
    <!-- Twitter Button -->
    <a href="#" class="inline-flex items-center justify-center p-3 text-white bg-blue-400 rounded-full hover:bg-blue-500 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    </a>
    
    <!-- GitHub Button -->
    <a href="#" class="inline-flex items-center justify-center p-3 text-white bg-gray-800 rounded-full hover:bg-gray-900 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
      </svg>
    </a>
    
    <!-- LinkedIn Button -->
    <a href="#" class="inline-flex items-center justify-center p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
      </svg>
    </a>
  </div>`
  },


  {
    id: 'light-gradient-reflect-button',
    title: 'Light Gradient Reflect Button',
    description:
      'A light mode button with gradient background, reflection effect, and animated SVG overlays.',
    htmlCode: `<button
    style="WebkitBoxReflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))"
    class="px-10 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
  >
    Button
    <p
      class="absolute z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
    >
      WELCOME
    </p>
    <p
      class="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
    >
      MOKSHITH UI
    </p>
    <svg
      class="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
      viewBox="0 0 2400 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
          <stop offset="0%" stop-opacity="1" stop-color="hsl(37, 99%, 67%)"></stop>
          <stop offset="100%" stop-opacity="1" stop-color="hsl(316, 73%, 52%)"></stop>
        </linearGradient>
      </defs>
      <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
        <path opacity="0.05" transform="matrix(1,0,0,1,0,35)" d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"></path>
        <!-- Additional paths omitted for brevity -->
      </g>
    </svg>
  </button>`
  },
  {
    id: 'light-animated-button',
    title: 'Light Animated Button',
    description:
      'A light mode animated button featuring shifting icon positions and text transitions on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </span>
    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
  </a>`
  },

  {
    id: 'light-explore-button',
    title: 'Light Explore Button',
    description:
      'A light mode button with shifting width on hover and icon decoration.',
    htmlCode: `<button type="submit" class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
    Explore
    <svg class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" class="fill-gray-800 group-hover:fill-gray-800"></path>
    </svg>
  </button>`
  },
  {
    id: 'light-go-back-button',
    title: 'Light Go Back Button',
    description:
      'A light mode button with a sliding accent bar effect on hover, designed for back navigation.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-center w-full px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-out bg-purple-600 rounded-md group-hover:bg-opacity-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white rounded-md"></span>
    <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100"></span>
    <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Button Text</span>
  </a>`
  },

  {
    id: 'dark-1',
    title: 'Dark Gradient Button',
    description:
      'A dark mode button with a gradient background and hover effect.',
    htmlCode: `<a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
  <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
  <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    <span class="relative text-white">Button Text</span>
  </span>
</a>`
  },
  {
    id: 'dark-2',
    title: 'Dark Gradient Overlay Button',
    description:
      'A dark mode button featuring contrasting gradient overlays with smooth hover transition.',
    htmlCode: `<a href="#_" class="relative px-6 py-3 font-bold text-white rounded-lg group">
  <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
  <span class="relative">Button Text</span>
</a>`
  },
  {
    id: 'dark-3',
    title: 'Dark Tilt Button',
    description:
      'A dark mode button with a tilted purple overlay effect that animates on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
  <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
</a>`
  },
  {
    id: 'dark-4',
    title: 'Dark Add New Icon Button',
    description:
      'A dark mode icon button for adding new items with rotation on hover.',
    htmlCode: `<button title="Add New" class="group cursor-pointer outline-none hover:rotate-90 duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke-width="1.5"></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
</button>`
  },
  {
    id: 'dark-5',
    title: 'Dark Overlay Transition Button',
    description:
      'A dark mode button with multiple overlay layers and a color transition effect on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
  <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
  <span class="absolute inset-0 w-full h-full bg-white rounded-md"></span>
  <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100"></span>
  <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Button Text</span>
</a>`
  },
  {
    id: 'dark-6',
    title: 'Dark Mono Expanding Button',
    description:
      'A dark mode button with a monospace font and an expanding overlay effect on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
  <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
  <span class="relative">Button Text</span>
</a>`
  },
  {
    id: 'dark-7',
    title: 'Dark Animated Outline Button',
    description:
      'A dark mode outline button with an animated border effect on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
  <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Button Text</span>
</a>`
  },
  {
    id: 'dark-8',
    title: 'Dark Neon Button',
    description:
      'A dark mode neon-style button with expanding overlay and subtle gradient accents.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
  <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
  <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
  <span class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent opacity-5"></span>
  <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
  <span class="relative">Button Text</span>
</a>`
  },

  {
    id: 'dark-12',
    title: 'Dark Animated Outline Button',
    description:
      'A dark mode outline button with animated border transition on hover.',
    htmlCode: `<a href="#_" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
  <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Button Text</span>
</a>`
  },



  {
    id: 'simple-light-1',
    title: 'Simple Light Green Button',
    description:
      'A simple light mode button with a green background and smooth hover transition.',
    htmlCode: `<a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
  Get Started
  <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
  </svg>
</a>`
  },
  {
    id: 'simple-light-2',
    title: 'Simple Light Indigo Button',
    description:
      'A simple light mode button with a solid indigo background and responsive styling.',
    htmlCode: `<a href="#_" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
  Button Text
</a>`
  },
  {
    id: 'simple-light-3',
    title: 'Simple Light Outline Gradient Button',
    description:
      'A minimalistic light mode outline button with subtle gradient accents and border highlights.',
    htmlCode: `<a href="#_" class="relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white">
  <span class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
  <span class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
  Button Text
</a>`
  },
  {
    id: 'simple-light-4',
    title: 'Simple Light Indigo Icon Button',
    description:
      'A simple light mode button featuring an icon with subtle shadow effects and a gradient overlay.',
    htmlCode: `<a href="#_" class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
  <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
  <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
  <span class="relative z-20 flex items-center text-sm">
    <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    Button Text
  </span>
</a>`
  },
  {
    id: 'simple-light-5',
    title: 'Simple Light Text Button',
    description:
      'A simple light mode button with subtle background changes and text styling.',
    htmlCode: `<a href="#_" class="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
  Button Text
</a>`
  },

];

export default buttonSnippets;