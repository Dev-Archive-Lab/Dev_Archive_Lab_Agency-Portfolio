import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ArrowUpRight,
  Eye,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, WORK_NOTE } from '../data/projects';
import { COMPANY_INFO } from '../data/company';

const CATEGORIES = [
  'All',
  'Websites',
  'Mobile Apps',
  'AI and Automation',
  'Video',
  'Branding and Canva',
  'SEO and Social',
];

export default function Work() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Work &amp; Concept Architecture | Dev Archive Lab</title>
        <link rel="canonical" href="https://devarchivelab.com/work" />
        <meta name="description" content="Explore web development, mobile apps, AI automations, video storyboards, and digital growth projects by Dev Archive Lab." />
        <meta property="og:title" content="Work &amp; Concept Architecture | Dev Archive Lab" />
        <meta property="og:description" content="Explore concept architectures and builds across 7 digital categories engineered by Victoria." />
        <meta property="og:url" content="https://devarchivelab.com/work" />
        <meta property="og:image" content="https://devarchivelab.com/og-preview.png" />
        <meta name="twitter:title" content="Work &amp; Concept Architecture | Dev Archive Lab" />
        <meta name="twitter:description" content="Explore concept architectures across web, mobile, AI, video and digital growth." />
        <meta name="twitter:image" content="https://devarchivelab.com/og-preview.png" />
      </Helmet>

      <div className="relative pt-6 pb-24 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-20 right-10 w-[500px] h-[350px] bg-logoBlue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-cyanAccent/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
              Portfolio &amp; Architectures
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Crafted builds,{' '}
              <span className="text-gradient-gold">concept architectures.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
              Explore how Dev Archive Lab approaches UI/UX design, full stack development, cross-platform mobile apps, AI workflows, and search visibility.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === cat
                      ? 'bg-gold-gradient text-navy-dark shadow-glow-gold'
                      : 'bg-surface-card text-slateText-muted hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-cyanAccent/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Graphic Header / Mockup */}
                    <div
                      className={`relative h-52 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}
                    >
                      {/* Grid background */}
                      <div
                        className="absolute inset-0 opacity-15"
                        style={{
                          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px',
                        }}
                      />

                      {/* Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gold/20 text-gold border border-gold/40">
                          Concept
                        </span>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-background/60 text-slateText backdrop-blur-md border border-white/10">
                          {project.category}
                        </span>
                      </div>

                      {/* Mockup Title Display */}
                      <div className="relative z-10 my-auto text-center">
                        <h3 className="font-display font-extrabold text-2xl text-white tracking-tight drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/80 line-clamp-1 mt-1 font-medium">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="relative z-10 flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/40 text-cyanAccent border border-cyanAccent/20 backdrop-blur-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <p className="text-sm text-slateText-muted leading-relaxed line-clamp-3 mb-4">
                        {project.summary}
                      </p>

                      {/* Result Note */}
                      <div className="p-3 rounded-xl bg-surface-subtle border border-white/5 mb-4">
                        <p className="text-xs font-mono text-slateText-dim italic">
                          {project.resultPlaceholder}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slateText hover:text-cyanAccent transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyanAccent" />
                      <span>Inspect Spec</span>
                    </button>

                    <Link
                      to={`/contact?project=${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:text-gold-light transition-colors"
                    >
                      <span>Request a Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Disclaimer Note Under the Grid */}
          <div className="mt-14 p-5 rounded-2xl bg-surface-card/60 border border-white/10 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slateText-muted leading-relaxed">
              <span className="text-cyanAccent font-semibold">Note:</span> {WORK_NOTE}
            </p>
          </div>

          {/* See more on Behance button */}
          <div className="mt-12 text-center">
            <a
              href="https://www.behance.net/victoriaijewere"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl transition-all group"
            >
              <span>See more on Behance</span>
              <ExternalLink className="w-4 h-4 text-navy-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-surface-card border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/40">
                      Concept Architecture
                    </span>
                    <span className="text-xs text-slateText-dim">{activeModalProject.category}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm text-cyanAccent">{activeModalProject.tagline}</p>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slateText-muted hover:text-white"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slateText-dim mb-1">
                    Problem &amp; Challenge
                  </h4>
                  <p className="text-sm text-slateText leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slateText-dim mb-1">
                    Solution &amp; Architecture
                  </h4>
                  <p className="text-sm text-slateText leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slateText-dim mb-2">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slateText-muted">
                        <CheckCircle className="w-4 h-4 text-cyanAccent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slateText-dim mb-2">
                    Stack &amp; Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface-elevated text-slateText border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-subtle border border-white/10">
                  <p className="text-xs font-mono text-slateText-muted italic">
                    {activeModalProject.resultPlaceholder}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to={`/contact?project=${activeModalProject.id}`}
                  onClick={() => setActiveModalProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-navy-dark bg-gold-gradient shadow-glow-gold hover:shadow-lg transition-all text-center"
                >
                  Request a Quote for this type of build
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs text-slateText-muted hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
