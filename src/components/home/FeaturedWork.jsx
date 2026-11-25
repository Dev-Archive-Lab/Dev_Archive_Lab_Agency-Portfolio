import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles, CheckCircle, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, WORK_NOTE } from '../../data/projects';

export default function FeaturedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 sm:py-28 relative bg-navy-dark/40 border-y border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[300px] bg-cyanAccent/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
              Featured Builds
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Selected work &amp; <span className="text-gradient-gold">concept architectures.</span>
            </h2>
            <p className="mt-3 text-base text-slateText-muted max-w-xl">
              Engineered with modern frontend frameworks, clean database architecture, and conversion-focused user interfaces.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-surface-card hover:bg-surface-elevated border border-white/10 hover:border-cyanAccent/40 transition-all shrink-0 self-start md:self-auto"
          >
            <span>See all work</span>
            <ArrowRight className="w-4 h-4 text-cyanAccent" />
          </Link>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-cyanAccent/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Mockup Preview */}
                <div className={`relative h-52 w-full bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                  {/* Subtle decorative grid */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gold/20 text-gold border border-gold/40">
                      Concept
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-background/60 text-slateText backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Mockup Preview Graphic */}
                  <div className="relative z-10 my-auto text-center">
                    <h4 className="font-display font-extrabold text-2xl text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h4>
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

                {/* Card Body */}
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

              {/* Bottom Card Actions */}
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
                  <span>Build something similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Client Case Studies Disclaimer Note */}
        <div className="mt-12 p-4 rounded-2xl bg-surface-card/60 border border-white/10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slateText-dim leading-relaxed">
            <span className="text-cyanAccent font-semibold">Note:</span> {WORK_NOTE}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-background/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-surface-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold/20 text-gold border border-gold/40">
                      Concept Spec
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
    </section>
  );
}
