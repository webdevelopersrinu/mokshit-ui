import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Fallback loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

// Properly handle lazy loading with error handling wrapper
const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages with proper error handling
const Home = lazyLoad(() => import('./pages/Home'));
const Buttons = lazyLoad(() => import('./pages/Buttons'));
const Cards = lazyLoad(() => import('./pages/Cards'));
const Alerts = lazyLoad(() => import('./pages/Alerts'));
const Forms = lazyLoad(() => import('./pages/Forms'));
const About = lazyLoad(() => import('./pages/About'));

// 404 Page
const NotFound = () => (
  <div className="container mx-auto px-4 py-12 text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
    <p className="text-gray-600 dark:text-gray-400 mb-8">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <a 
      href="/" 
      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
    >
      Go Back Home
    </a>
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;