import React from 'react';
import { UserCheck, ShieldCheck, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/company';

export default function WhyDevArchive() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-cyanAccent" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyanAccent" />;
      case 'Users':
      default:
        return <Users className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
            Why Work With Us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The studio experience,{' '}
            <span className="text-gradient-gold">without the agency friction.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
            Big agencies charge overhead and pass you down to junior account managers. Dev Archive Lab gives you direct founder ownership with vetted specialist muscle on demand.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INFO.benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl glass-card p-6 sm:p-7 border border-white/10 hover:border-cyanAccent/40 flex flex-col justify-between group transition-colors"
            >
              <div>
                <div className="p-3 rounded-xl bg-surface-elevated/80 border border-white/5 w-fit mb-5 group-hover:border-cyanAccent/30 group-hover:shadow-glow-cyan transition-all">
                  {getIcon(benefit.icon)}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-cyanAccent transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slateText-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-gold">
                <span>Founder-backed quality</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
