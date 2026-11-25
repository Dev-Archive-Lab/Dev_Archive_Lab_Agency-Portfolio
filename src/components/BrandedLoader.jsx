import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandedLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw intro in this session or prefers reduced motion
    const hasSeenIntro = sessionStorage.getItem('dev_archive_lab_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeenIntro || prefersReducedMotion) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('dev_archive_lab_intro_seen', 'true');
      onComplete?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    sessionStorage.setItem('dev_archive_lab_intro_seen', 'true');
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="branded-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-slateText select-none"
        >
          {/* Ambient background glow */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-logoBlue/20 blur-[100px] pointer-events-none" />
          <div className="absolute w-[200px] h-[200px] rounded-full bg-gold/15 blur-[80px] translate-x-20 translate-y-10 pointer-events-none" />

          {/* Layered D Assembly Animation */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-6">
            {/* Base Deep Navy Layer */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <path
                  d="M24 75 L38 61 H52 C58 61 63 65 66 70 L72 79 C64 83 55 85 45 85 H24 V75 Z"
                  fill="#0B1440"
                  stroke="rgba(34, 211, 238, 0.2)"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>

            {/* Middle Layer */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M24 64 L40 48 H58 C65 48 72 52 75 58 L82 68 C78 72 72 76 65 77 L57 69 C53 65 48 62 42 62 H30 L24 68 Z"
                  fill="#0A3CB8"
                />
              </svg>
            </motion.div>

            {/* Top Bright Blue Crest */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M24 20 H56 C72 20 84 32 84 48 C84 53 82 58 79 62 L71 54 C68 48 61 44 53 44 H38 L24 58 V20 Z"
                  fill="#0A5CFF"
                />
                <path
                  d="M24 58 L39 43 H55"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* Gold Sparkle Ring at Assembly Peak */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-gold pointer-events-none"
            />
          </div>

          {/* Text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-2xl tracking-tight text-white mb-1">
              Dev Archive <span className="text-gold">Lab</span>
            </h1>
            <p className="text-xs uppercase tracking-widest text-cyanAccent font-medium">
              Full Stack &bull; Design &bull; AI Growth Studio
            </p>
          </motion.div>

          {/* Skip prompt for impatient users */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute bottom-8 text-xs text-slateText-dim hover:text-white px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all"
          >
            Skip Intro &rarr;
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
