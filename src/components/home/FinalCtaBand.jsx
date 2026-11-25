import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Mail, Copy, Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/company';

export default function FinalCtaBand() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-logoBlue/20 via-cyanAccent/15 to-gold/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-card p-8 sm:p-14 lg:p-16 border border-cyanAccent/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top cyan line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-logoBlue via-cyanAccent to-gold" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyanAccent mb-6">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>Victoria replies within 1 hour</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Let&rsquo;s build something that{' '}
            <span className="text-gradient-gold">brings you clients.</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slateText-muted max-w-xl mx-auto leading-relaxed">
            Tell me about your project, your timeline, and what success looks like. I&rsquo;ll review your requirements and respond with a clear, fixed quote.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-navy-dark" />
              <span>Request a Quote</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-4 rounded-full text-sm font-semibold text-slateText bg-surface-elevated/80 hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 transition-all"
              title="Copy email to clipboard"
            >
              <Mail className="w-4 h-4 text-cyanAccent" />
              <span className="font-mono text-xs">{COMPANY_INFO.email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-cyanAccent" />
              ) : (
                <Copy className="w-4 h-4 text-slateText-dim hover:text-white" />
              )}
            </button>
          </div>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-xs text-cyanAccent font-medium"
            >
              Email copied to clipboard!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
