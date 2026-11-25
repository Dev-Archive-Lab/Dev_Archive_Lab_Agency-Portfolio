import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BrandedLoader from './BrandedLoader';
import CursorGlow from './CursorGlow';
import ScrollProgressBar from './ScrollProgressBar';
import MobileQuoteButton from './MobileQuoteButton';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-slateText selection:bg-cyanAccent selection:text-navy-dark overflow-x-hidden">
      <ScrollToTop />
      <BrandedLoader />
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <MobileQuoteButton />
    </div>
  );
}
