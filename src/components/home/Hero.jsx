import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Clock, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/company';

const ROTATING_WORDS = ['websites', 'apps', 'AI systems', 'video ads', 'growth'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-logoBlue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-gold/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[200px] bg-cyanAccent/12 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card/80 border border-cyanAccent/30 backdrop-blur-md mb-8 shadow-sm hover:border-cyanAccent/50 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyanAccent animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-slateText tracking-wide">
            {COMPANY_INFO.eyebrow}
          </span>
        </motion.div>

        {/* Animated Headline with Rotating Word */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight max-w-5xl mx-auto leading-[1.12]"
        >
          We build{' '}
          <span className="inline-block relative min-w-[180px] sm:min-w-[240px] md:min-w-[320px] text-left">
            {prefersReducedMotion ? (
              <span className="text-gradient-gold">websites &amp; apps</span>
            ) : (
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[index]}
                  initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -24, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient-gold inline-block underline decoration-gold/40 decoration-wavy decoration-2 underline-offset-8"
                >
                  {ROTATING_WORDS[index]}
                </motion.span>
              </AnimatePresence>
            )}
          </span>{' '}
          <br className="hidden sm:inline" />
          that win you clients.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slateText-muted leading-relaxed font-normal"
        >
          {COMPANY_INFO.subheading}
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-navy-dark transition-transform duration-300 group-hover:rotate-12" />
            <span>Request a Quote</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full text-base font-semibold text-white bg-surface-card/80 hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 backdrop-blur-md"
          >
            <span>View Services</span>
            <span className="text-cyanAccent group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </motion.div>

        {/* Small Line: Remote & Response Time */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slateText-dim"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyanAccent" />
            <span className="text-slateText-muted">Remote, working worldwide</span>
          </div>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-slateText-muted">Replies within 1 hour</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
