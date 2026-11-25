import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[300px] bg-gold/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
            Client Feedback
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Real reviews from real builds.{' '}
            <span className="text-gradient-gold">5.0 on Upwork.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
            Direct feedback from entrepreneurs and founders who hired Victoria for web development, mobile apps, and technical problem-solving.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl glass-card p-6 sm:p-8 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between relative group"
            >
              <div>
                {/* 5 Gold Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/15 group-hover:text-gold/40 transition-colors" />
                </div>

                {/* Quote Body */}
                <p className="text-base sm:text-lg text-slateText font-medium leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.author}</span>
                  </h4>
                  <p className="text-xs text-slateText-dim">{review.projectType}</p>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-surface-elevated text-gold border border-gold/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyanAccent" />
                  <span>Upwork review</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
