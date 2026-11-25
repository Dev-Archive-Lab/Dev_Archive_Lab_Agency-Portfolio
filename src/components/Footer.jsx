import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ArrowUpRight, Mail, Globe, Clock } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const profileLinks = [
    { name: 'Behance', url: COMPANY_INFO.socials.behance },
    { name: 'LinkedIn', url: COMPANY_INFO.socials.linkedin },
    { name: 'Upwork', url: COMPANY_INFO.socials.upwork },
    { name: 'Fiverr', url: COMPANY_INFO.socials.fiverr },
  ];

  return (
    <footer className="relative bg-navy-dark border-t border-white/10 pt-16 pb-12 overflow-hidden text-slateText">
      {/* Decorative gradient glow at top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyanAccent/40 to-transparent" />
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-logoBlue/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo textClassName="text-xl" />
            <p className="text-slateText-muted text-sm max-w-sm leading-relaxed">
              Full stack development, website design, mobile apps, AI automation, and digital growth studio led by Victoria.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slateText-dim">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyanAccent" />
                <span>Remote, working worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Replies within 1 hour during business hours</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slateText-muted hover:text-cyanAccent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Find me on */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Find me on</h4>
            <ul className="space-y-2">
              {profileLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slateText-muted hover:text-gold transition-colors group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slateText-dim group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Copy Email */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Direct Email</h4>
            <p className="text-xs text-slateText-muted">
              Have an urgent brief? Reach out directly to founder Victoria:
            </p>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-surface-card border border-white/10">
              <Mail className="w-4 h-4 text-cyanAccent shrink-0 ml-1" />
              <span className="text-xs text-slateText truncate font-mono select-all">
                {COMPANY_INFO.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slateText-muted hover:text-white transition-colors"
                title="Copy email"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-cyanAccent" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-cyanAccent font-medium">Email copied to clipboard!</p>
            )}

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold transition-all"
              >
                Request a Fixed Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slateText-dim">
          <p>&copy; 2026 Dev Archive Lab. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed &amp; built by Victoria &bull; No templates &bull; High performance
          </p>
        </div>
      </div>
    </footer>
  );
}
