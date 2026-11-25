import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code2,
  Palette,
  Bot,
  Search,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileCheck2,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, SERVICE_GROUPS, PRICING_NOTE } from '../data/services';
import FaqAccordion from '../components/services/FaqAccordion';

export default function Services() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const filteredServices =
    selectedGroup === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.groupId === selectedGroup);

  const getGroupIcon = (groupId) => {
    switch (groupId) {
      case 'web-software':
        return <Code2 className="w-5 h-5 text-cyanAccent" />;
      case 'design':
        return <Palette className="w-5 h-5 text-gold" />;
      case 'ai-automation':
        return <Bot className="w-5 h-5 text-cyanAccent" />;
      case 'search-visibility':
        return <Search className="w-5 h-5 text-gold" />;
      case 'social-growth':
      default:
        return <TrendingUp className="w-5 h-5 text-cyanAccent" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Services | Dev Archive Lab</title>
        <meta
          name="description"
          content="Explore our 11 digital services: Web Development, Mobile Apps, AI Automation, Design, SEO, and Social Growth. Request a fixed quote with direct founder delivery."
        />
        <meta property="og:title" content="Services | Dev Archive Lab" />
        <meta
          property="og:description"
          content="11 specialized services, one dedicated studio. Direct 1-on-1 collaboration with founder Victoria backed by trusted specialists."
        />
      </Helmet>

      <div className="relative pt-6 pb-24 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-20 right-10 w-[500px] h-[350px] bg-logoBlue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Intro Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
              11 Services &bull; One Studio
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Crafted digital services,{' '}
              <span className="text-gradient-gold">built to win clients.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
              Every deliverable is handled directly by founder Victoria, bringing in vetted specialists for larger builds while keeping your communication 1-on-1 and straightforward.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedGroup('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedGroup === 'all'
                    ? 'bg-gold-gradient text-navy-dark shadow-glow-gold'
                    : 'bg-surface-card text-slateText-muted hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                All 11 Services
              </button>
              {SERVICE_GROUPS.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setSelectedGroup(group.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    selectedGroup === group.id
                      ? 'bg-gradient-to-r from-logoBlue to-cyanAccent text-navy-dark font-bold shadow-glow-cyan'
                      : 'bg-surface-card text-slateText-muted hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{group.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 11 Detailed Service Cards */}
          <div className="space-y-8 sm:space-y-10">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="rounded-3xl glass-card p-6 sm:p-10 lg:p-12 border border-white/10 hover:border-cyanAccent/40 transition-all relative overflow-hidden group"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-logoBlue/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Service Title, Group & Promise */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-surface-elevated/80 border border-white/10">
                        {getGroupIcon(service.groupId)}
                      </div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-slateText-dim px-2.5 py-1 rounded bg-white/5 border border-white/5">
                        {service.group}
                      </span>
                    </div>

                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-cyanAccent transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg text-gold font-medium leading-relaxed">
                      &ldquo;{service.promise}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-slateText-dim pt-2">
                      <span className="text-slateText-muted font-semibold">Ideal for:</span> {service.idealFor}
                    </p>

                    {/* Button: Request a Quote for this service (pre-selected query string) */}
                    <div className="pt-4">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-lg transition-all"
                      >
                        <Sparkles className="w-4 h-4 text-navy-dark" />
                        <span>Request a quote for this</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: 4 to 5 Deliverable Bullets */}
                  <div className="lg:col-span-7 bg-surface-subtle/80 rounded-2xl p-6 sm:p-8 border border-white/5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slateText-dim mb-4 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-cyanAccent" />
                      <span>What You Get / Key Deliverables</span>
                    </h3>

                    <ul className="space-y-3.5">
                      {service.deliverables.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyanAccent shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-slateText leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Note Card (Explicitly requested: No prices shown anywhere) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="mt-16 sm:mt-24 rounded-3xl glass-card p-8 sm:p-12 lg:p-14 border border-gold/30 relative overflow-hidden"
          >
            {/* Ambient gold glow behind card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Transparent Pricing Policy</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                {PRICING_NOTE.title}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slateText leading-relaxed font-medium">
                &ldquo;{PRICING_NOTE.headline}&rdquo;
              </p>

              {/* Breakdown features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {PRICING_NOTE.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-subtle/90 border border-white/5 flex items-center gap-3"
                  >
                    <Zap className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-xs sm:text-sm text-slateText-muted font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl transition-all"
                >
                  <span>Tell Me What You Need &rarr;</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion Section */}
          <div className="mt-20 sm:mt-28">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
                Clear Answers
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slateText-muted">
                Everything you need to know about quotes, project milestones, remote communication, and working with specialists.
              </p>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </div>
    </>
  );
}
