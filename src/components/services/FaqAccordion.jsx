import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/faqs';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(FAQS[0]?.id || null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-surface-elevated/90 border-cyanAccent/40 shadow-glow-cyan'
                : 'bg-surface-card/70 border-white/10 hover:border-white/20'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanAccent"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className="font-display font-semibold text-base sm:text-lg text-white flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-gold' : 'text-slateText-dim'}`} />
                <span>{faq.question}</span>
              </span>

              <div className={`p-1.5 rounded-full bg-white/5 text-slateText transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyanAccent bg-cyanAccent/10' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${faq.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 text-sm sm:text-base text-slateText-muted leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
