import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Check } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function ProcessSection() {
  const getStepIcon = (step) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-cyanAccent" />;
      case '02':
        return <PenTool className="w-5 h-5 text-gold" />;
      case '03':
        return <Code className="w-5 h-5 text-cyanAccent" />;
      case '04':
      default:
        return <Rocket className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative bg-navy-dark/30 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-logoBlue/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
            How We Work
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            A transparent 4-step process.{' '}
            <span className="text-gradient-gold">Zero surprises.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
            From your first message to live launch, here is exactly how your project moves from vision to high-converting reality.
          </p>
        </div>

        {/* Process Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-logoBlue/40 via-cyanAccent/40 to-gold/40 -translate-y-12 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl glass-card p-6 sm:p-7 border border-white/10 hover:border-cyanAccent/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-gold">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-surface-elevated/90 border border-white/10 group-hover:border-cyanAccent/40 group-hover:shadow-glow-cyan transition-all">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-cyanAccent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyanAccent mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slateText-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slateText-dim">
                  <Check className="w-3.5 h-3.5 text-cyanAccent shrink-0" />
                  <span>Transparent milestone review</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
