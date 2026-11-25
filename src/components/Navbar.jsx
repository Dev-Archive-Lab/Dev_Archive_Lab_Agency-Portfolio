import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-card-elevated border-b border-white/10'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Logo textClassName="text-lg sm:text-xl" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slateText-muted hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-logoBlue/40 via-cyanAccent/30 to-logoBlue/20 border border-cyanAccent/40 shadow-glow-cyan"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action: Gold CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-navy-dark bg-gold-gradient shadow-glow-gold"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg bg-surface-elevated/70 border border-white/10 text-slateText hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanAccent"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Menu */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-navy-dark/95 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <Logo showText={true} textClassName="text-base" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slateText hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gold" />
                  </button>
                </div>

                <div className="mb-4 px-3 py-2 rounded-xl bg-cyanAccent/10 border border-cyanAccent/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyanAccent animate-ping" />
                  <span className="text-xs text-cyanAccent font-medium">Replies within 1 hour</span>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-logoBlue/30 to-surface-card border border-cyanAccent/30 text-white font-semibold'
                            : 'text-slateText-muted hover:text-white hover:bg-surface-card/40'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Mobile Drawer Actions */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-navy-dark bg-gold-gradient shadow-glow-gold"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request a Fixed Quote</span>
                </Link>

                <div className="text-center text-xs text-slateText-dim">
                  <p>Direct 1-on-1 with founder Victoria</p>
                  <p className="mt-1 text-slateText-muted">Remote, working worldwide</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
