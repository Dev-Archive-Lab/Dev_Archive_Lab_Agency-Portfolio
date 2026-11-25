import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Layers, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

function AnimatedCounter({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = start + (target - start) * ease;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function TrustStrip() {
  const getIcon = (id) => {
    switch (id) {
      case 'upwork-success':
        return <Award className="w-5 h-5 text-cyanAccent" />;
      case 'client-rating':
        return <Star className="w-5 h-5 text-gold fill-gold" />;
      case 'services-count':
        return <Layers className="w-5 h-5 text-cyanAccent" />;
      case 'founder-direct':
      default:
        return <UserCheck className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section className="relative py-10 border-y border-white/10 bg-navy-dark/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {COMPANY_INFO.trustMetrics.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : idx > 0 ? 'pt-6 lg:pt-0' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-surface-elevated/80 border border-white/5">
                  {getIcon(item.id)}
                </div>
              </div>

              {item.isNumeric ? (
                <AnimatedCounter
                  target={item.value}
                  suffix={item.suffix}
                  decimals={item.id === 'client-rating' ? 1 : 0}
                />
              ) : (
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  1-on-1
                </span>
              )}

              <p className="mt-1 text-sm font-semibold text-slateText">
                {item.label}
              </p>
              <p className="text-xs text-slateText-dim mt-0.5">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
