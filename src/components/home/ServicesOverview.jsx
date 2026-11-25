import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Palette, Bot, Search, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICE_GROUPS, SERVICES } from '../../data/services';

export default function ServicesOverview() {
  const getIcon = (id) => {
    switch (id) {
      case 'web-software':
        return <Code2 className="w-6 h-6 text-cyanAccent" />;
      case 'design':
        return <Palette className="w-6 h-6 text-gold" />;
      case 'ai-automation':
        return <Bot className="w-6 h-6 text-cyanAccent" />;
      case 'search-visibility':
        return <Search className="w-6 h-6 text-gold" />;
      case 'social-growth':
      default:
        return <TrendingUp className="w-6 h-6 text-cyanAccent" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[350px] bg-logoBlue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            11 specialized services.{' '}
            <span className="text-gradient-gold">One dedicated studio.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
            From modern responsive websites to automated lead systems and search visibility, explore how Victoria and her specialist network can help you grow.
          </p>
        </div>

        {/* 5 Grouped Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_GROUPS.map((group, idx) => {
            // Find full service objects for this group
            const groupServices = SERVICES.filter((s) => group.serviceIds.includes(s.id));

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-cyanAccent/40 transition-colors group ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-logoBlue/10 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-surface-elevated/80 border border-white/10 group-hover:border-cyanAccent/40 group-hover:shadow-glow-cyan transition-all">
                      {getIcon(group.id)}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slateText-muted group-hover:text-cyanAccent transition-colors">
                      {group.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyanAccent transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-sm text-slateText-muted mb-6 leading-relaxed">
                    {group.shortDescription}
                  </p>

                  {/* Included Services List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                    {groupServices.map((service) => (
                      <div key={service.id} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyanAccent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-slateText group-hover:text-white transition-colors">
                            {service.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link to Services Page */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/services#${group.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-light transition-colors"
                  >
                    <span>View deliverables &amp; details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All CTA link */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-surface-card hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 transition-all shadow-sm"
          >
            <span>Compare all 11 services and deliverables</span>
            <ArrowRight className="w-4 h-4 text-cyanAccent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
