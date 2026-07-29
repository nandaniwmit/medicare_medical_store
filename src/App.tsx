import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

// Lazy load all five required page views
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium clinical loading spinner for smooth route transitions
function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-teal-600/20 rounded-full" />
        <div className="absolute inset-0 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
      </div>
      <span className="text-xs font-semibold text-slate-400 mt-5 tracking-widest uppercase animate-pulse">
        Loading Medicare...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

