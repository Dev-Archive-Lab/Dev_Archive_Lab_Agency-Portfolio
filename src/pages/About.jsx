import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowUpRight,
  UserCheck,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Code2,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';

export default function About() {
  const [imgError, setImgError] = useState(false);

  const values = [
    {
      title: "Clarity over complexity",
      description: "Great digital work should feel simple to get. Clear communication, straightforward scopes, and no confusing technical jargon.",
      icon: "ShieldCheck",
    },
    {
      title: "Direct accountability",
      description: "You work directly with the person writing the code, crafting the design, and building the automations. Zero middle management.",
      icon: "UserCheck",
    },
    {
      title: "High-performance standards",
      description: "Every website and application is engineered for speed, clean semantic structure, search engine discovery, and conversions.",
      icon: "Zap",
    },
    {
      title: "Specialist depth on demand",
      description: "When a build demands extra specialized craft, vetted collaborator specialists step in seamlessly while keeping your contact 1-on-1.",
      icon: "Users",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Victoria &amp; Dev Archive Lab | Founder &amp; Studio</title>
        <link rel="canonical" href="https://devarchivelab.com/about" />
        <meta name="description" content="Meet Victoria, founder of Dev Archive Lab. A solo full stack developer and digital creative backed by a trusted network of vetted specialists." />
        <meta property="og:title" content="About Victoria &amp; Dev Archive Lab" />
        <meta property="og:description" content="Dev Archive Lab is a one-woman studio built around a simple idea: great digital work should feel easy to get." />
        <meta property="og:url" content="https://devarchivelab.com/about" />
        <meta property="og:image" content="https://devarchivelab.com/og-preview.png" />
        <meta name="twitter:title" content="About Victoria &amp; Dev Archive Lab | Founder &amp; Studio" />
        <meta name="twitter:description" content="Dev Archive Lab is a one-woman studio built around a simple idea: great digital work should feel easy to get." />
        <meta name="twitter:image" content="https://devarchivelab.com/og-preview.png" />
      </Helmet>

      <div className="relative pt-6 pb-24 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-20 left-10 w-[500px] h-[350px] bg-logoBlue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section: Photo + Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            {/* Victoria's Photo in Gold-Outlined Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Gold-outlined frame with subtle cyan ambient glow */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-gold via-cyanAccent/50 to-gold rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

                <div className="relative rounded-3xl bg-surface-card p-2 border-2 border-gold shadow-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
                  {/*
                    FOUNDER PHOTO:
                    Place Victoria's portrait photo at /public/images/victoria.jpg.
                    If the image is not present or fails to load, the elegant SVG fallback below is displayed.
                  */}
                  {!imgError ? (
                    <img
                      src="/images/victoria.jpg"
                      alt="Victoria, Founder of Dev Archive Lab"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Elegant Branded Placeholder */
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-navy via-surface to-navy-dark flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="w-24 h-24 rounded-2xl bg-surface-elevated/90 border border-gold/40 flex items-center justify-center p-4 mb-4 shadow-glow-gold">
                        <img
                          src="/logo-mark.png"
                          alt="Dev Archive Lab"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-display font-bold text-xl text-white">
                        Victoria
                      </span>
                      <span className="text-xs font-semibold text-gold mt-1 uppercase tracking-wider">
                        Founder &amp; Digital Creative
                      </span>
                      <p className="text-[11px] text-slateText-dim mt-3 max-w-xs">
                        Full Stack Developer &bull; Dev Archive Lab
                      </p>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Victoria</p>
                      <p className="text-[10px] text-gold font-medium">Founder &bull; Dev Archive Lab</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-cyanAccent animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder Story Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-cyanAccent/30 text-xs font-semibold text-cyanAccent">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>The Story Behind The Studio</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Victoria, Founder of <span className="text-gradient-gold">Dev Archive Lab</span>
              </h1>

              {/* Exact founder narrative from user brief */}
              <div className="space-y-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
                <p>
                  Dev Archive Lab is a one-woman studio built around a simple idea: <strong className="text-white font-semibold">great digital work should feel easy to get.</strong>
                </p>
                <p>
                  I&rsquo;m Victoria, a full stack developer and digital creative who builds websites, mobile apps, AI automations and the marketing that gets them found.
                </p>
                <p>
                  Clients tell me I understand what they need quickly, communicate clearly and fix problems without making the process complicated, and that is exactly how I like to work.
                </p>
                <p>
                  When a project grows bigger, I bring in trusted specialists, but you always deal with one person from first message to launch.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl transition-all"
                >
                  <span>Work With Victoria</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-surface-card hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 transition-all"
                >
                  <span>Explore 11 Services</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Section: Solo expert with a trusted network */}
          <div className="mb-24 rounded-3xl glass-card p-8 sm:p-12 lg:p-14 border border-white/10 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyanAccent block">
                How We Operate
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                Solo expert with a <span className="text-gradient-gold">trusted network.</span>
              </h2>
              <p className="text-sm sm:text-base text-slateText-muted leading-relaxed">
                You work directly with Victoria from your initial message to final deployment. For larger projects that require additional depth, vetted specialists join through one single point of contact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-surface-subtle border border-white/5 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-cyanAccent/10 text-cyanAccent flex items-center justify-center mx-auto border border-cyanAccent/20">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-white">Direct Accountability</h3>
                <p className="text-xs text-slateText-muted leading-relaxed">
                  Victoria personally plans, reviews, and oversees every deliverable. No account managers or lost instructions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-subtle border border-white/5 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mx-auto border border-gold/20">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-white">Vetted Specialists</h3>
                <p className="text-xs text-slateText-muted leading-relaxed">
                  Trusted designers, video editors, and developers collaborate on larger builds under Victoria's direct guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-subtle border border-white/5 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-logoBlue/20 text-cyanAccent flex items-center justify-center mx-auto border border-cyanAccent/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-white">Single Point of Contact</h3>
                <p className="text-xs text-slateText-muted leading-relaxed">
                  You communicate exclusively with Victoria. Simple, unified, and organized from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyanAccent mb-2 block">
                Guiding Principles
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Studio Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="rounded-2xl glass-card p-6 border border-white/10 hover:border-cyanAccent/40 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-surface-elevated text-cyanAccent w-fit mb-4 border border-white/5">
                    {val.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-gold" />}
                    {val.icon === 'UserCheck' && <UserCheck className="w-5 h-5 text-cyanAccent" />}
                    {val.icon === 'Zap' && <Zap className="w-5 h-5 text-gold" />}
                    {val.icon === 'Users' && <Users className="w-5 h-5 text-cyanAccent" />}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slateText-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Skills Grid (Using only tools in company.js) */}
          <div className="mb-24 rounded-3xl glass-card p-8 sm:p-12 border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyanAccent mb-2 block">
                Technical Stack
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                Tools &amp; Frameworks
              </h2>
              <p className="text-xs sm:text-sm text-slateText-muted mt-2">
                Proven modern tools selected for speed, stability, and clean development.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {COMPANY_INFO.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-subtle border border-white/10 hover:border-cyanAccent/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent" />
                  <span className="text-sm font-semibold text-white">{tool.name}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slateText-dim">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* "Find me on" Section */}
          <div className="rounded-3xl glass-card p-8 sm:p-12 border border-white/10 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyanAccent block">
              Connect Directly
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Find me on
            </h2>
            <p className="text-xs sm:text-sm text-slateText-muted max-w-md mx-auto leading-relaxed">
              {COMPANY_INFO.profileNote}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 text-sm font-semibold text-white transition-all group"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-cyanAccent transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 text-sm font-semibold text-white transition-all group"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-cyanAccent transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.socials.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-elevated border border-white/10 hover:border-gold/40 text-sm font-semibold text-gold transition-all group"
              >
                <span>Upwork</span>
                <ArrowUpRight className="w-4 h-4 text-gold transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-elevated border border-white/10 hover:border-gold/40 text-sm font-semibold text-white transition-all group"
              >
                <span>Fiverr</span>
                <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-gold transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
