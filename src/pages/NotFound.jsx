import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Dev Archive Lab</title>
        <meta name="description" content="The page you requested could not be found. Return to Dev Archive Lab." />
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative">
        <div className="w-96 h-96 rounded-full bg-logoBlue/15 blur-[120px] absolute -top-10 pointer-events-none" />
        <span className="text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-2">Error 404</span>
        <h1 className="font-display font-extrabold text-6xl sm:text-7xl text-white mb-4">
          Lost in the <span className="text-gold">Archive</span>
        </h1>
        <p className="text-slateText-muted max-w-md mb-8 text-base">
          The page you're searching for has moved, been renamed, or does not exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-full text-sm font-semibold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold transition-all"
          >
            Return Home
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 rounded-full text-sm font-medium text-white bg-surface-elevated/70 border border-white/10 hover:border-cyanAccent/40 transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </>
  );
}
