import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function MobileQuoteButton() {
  const location = useLocation();

  // Hide on contact page since user is already there
  if (location.pathname === '/contact') return null;

  return (
    <div className="fixed bottom-6 right-5 z-30 md:hidden">
      <Link
        to="/contact"
        className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-navy-dark bg-gold-gradient shadow-glow-gold active:scale-95 transition-all border border-amber-300/40"
        aria-label="Request a Quote"
      >
        <Sparkles className="w-4 h-4 text-navy-dark" />
        <span>Request a Quote</span>
      </Link>
    </div>
  );
}
