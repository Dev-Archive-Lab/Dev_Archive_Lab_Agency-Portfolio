import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Copy,
  Check,
  Send,
  Clock,
  ArrowUpRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Something else',
];

const TIMELINE_OPTIONS = [
  'Flexible / Not in a rush',
  'Within 1-2 weeks',
  'Within 1 month',
  'Urgent / ASAP',
];

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    details: '',
    timeline: TIMELINE_OPTIONS[0],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverSuccess, setServerSuccess] = useState(false);
  const [mailClientOpened, setMailClientOpened] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Pre-select service from query string (?service=... or ?project=...)
  useEffect(() => {
    const queryService = searchParams.get('service');
    const queryProject = searchParams.get('project');

    if (queryService) {
      const matched = SERVICES.find(
        (s) =>
          s.title.toLowerCase() === queryService.toLowerCase() ||
          s.slug.toLowerCase() === queryService.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      } else {
        setFormData((prev) => ({ ...prev, service: queryService }));
      }
    } else if (queryProject) {
      setFormData((prev) => ({
        ...prev,
        service: 'Website Development',
        details: `Hello Victoria, I saw your concept project "${queryProject}" on your portfolio and I would like to request a fixed quote for a similar build: `,
      }));
    }
  }, [searchParams]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or business name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please describe what you need built or fixed.';
    } else if (formData.details.trim().length < 20) {
      newErrors.details = `Please provide at least 20 characters (${formData.details.trim().length}/20).`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (COMPANY_INFO.FORM_ENDPOINT && COMPANY_INFO.FORM_ENDPOINT.trim() !== '') {
        // Submit to Formspree / backend endpoint
        const response = await fetch(COMPANY_INFO.FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            service: formData.service,
            timeline: formData.timeline,
            details: formData.details,
            _subject: `New Quote Request: ${formData.service} from ${formData.name}`,
          }),
        });

        if (!response.ok) {
          throw new Error('Form submission failed.');
        }

        setServerSuccess(true);
      } else {
        // Fallback: No backend endpoint configured.
        // Open the pre-filled mailto: link and show the instruction message.
        const subject = encodeURIComponent(`Quote Request: ${formData.service} - ${formData.name}`);
        const body = encodeURIComponent(
          `Hi Victoria,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.details}\n\nSent via Dev Archive Lab Portfolio`
        );
        const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;
        setMailClientOpened(true);
      }
    } catch (err) {
      setErrors({ form: 'Submission error. Please email directly using the details on the right.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: SERVICE_OPTIONS[0],
      details: '',
      timeline: TIMELINE_OPTIONS[0],
    });
    setErrors({});
    setServerSuccess(false);
    setMailClientOpened(false);
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | Dev Archive Lab</title>
        <link rel="canonical" href="https://devarchivelab.com/contact" />
        <meta name="description" content="Request a fixed quote for your website, app, AI automation, or design build. Victoria replies within 1 hour with a clear proposal." />
        <meta property="og:title" content="Request a Quote | Dev Archive Lab" />
        <meta property="og:description" content="Tell Victoria what you need built. Fixed quotes based on your project scope, direct 1-on-1 collaboration." />
        <meta property="og:url" content="https://devarchivelab.com/contact" />
        <meta property="og:image" content="https://devarchivelab.com/og-preview.png" />
        <meta name="twitter:title" content="Request a Quote | Dev Archive Lab" />
        <meta name="twitter:description" content="Tell Victoria what you need built. Fixed quotes, direct 1-on-1 collaboration." />
        <meta name="twitter:image" content="https://devarchivelab.com/og-preview.png" />
      </Helmet>

      <div className="relative pt-6 pb-24 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[350px] bg-logoBlue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyanAccent mb-3 block">
              Start Your Project
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Request a <span className="text-gradient-gold">Fixed Quote.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slateText-muted leading-relaxed">
              Tell me what you need built, your timeline, and what success looks like. You will receive a clear fixed quote directly from founder Victoria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {serverSuccess ? (
                    /* 1. Real Server Success State (when FORM_ENDPOINT is set and responded 200) */
                    <motion.div
                      key="server-success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="py-10 text-center space-y-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                        className="w-16 h-16 rounded-full bg-cyanAccent/20 border-2 border-cyanAccent flex items-center justify-center mx-auto text-cyanAccent shadow-glow-cyan"
                      >
                        <Check className="w-8 h-8" />
                      </motion.div>

                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                          Quote Request Received
                        </h3>
                        <p className="text-sm sm:text-base text-slateText-muted max-w-md mx-auto">
                          Thank you for reaching out. Victoria will review your requirements and reply to{' '}
                          <span className="text-cyanAccent font-semibold">{formData.email}</span> within 1 hour.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-surface-subtle border border-white/5 max-w-sm mx-auto text-left text-xs space-y-1 text-slateText-dim">
                        <p>
                          <span className="text-white font-medium">Service requested:</span> {formData.service}
                        </p>
                        <p>
                          <span className="text-white font-medium">Estimated timeline:</span> {formData.timeline}
                        </p>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-slateText bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Submit Another Request</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : mailClientOpened ? (
                    /* 2. Mailto Fallback Message (when FORM_ENDPOINT is not set) */
                    <motion.div
                      key="mailto-opened"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="py-8 text-center space-y-6"
                    >
                      <div className="w-14 h-14 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center mx-auto text-gold">
                        <Mail className="w-7 h-7" />
                      </div>

                      <div className="space-y-3 max-w-md mx-auto">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                          Opening Your Email Client
                        </h3>
                        <p className="text-sm sm:text-base text-slateText leading-relaxed">
                          Your email app should be opening with your request ready to send. If nothing opens, copy my email below and send your details there.
                        </p>
                      </div>

                      {/* Prominent Copy My Email Button */}
                      <div className="p-4 rounded-2xl bg-surface-subtle border border-white/10 max-w-md mx-auto space-y-3 text-center">
                        <p className="text-xs font-mono text-cyanAccent select-all">
                          {COMPANY_INFO.email}
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold transition-all w-full sm:w-auto"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-4 h-4 text-navy-dark" />
                              <span>Email Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-navy-dark" />
                              <span>Copy my email</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="text-xs text-slateText-dim hover:text-white underline underline-offset-4"
                        >
                          Return to quote form
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* 3. The Request a Quote Form */
                    <form key="quote-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                          Project Brief
                        </h2>
                        <span className="text-xs text-gold font-medium flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Replies within 1 hour</span>
                        </span>
                      </div>

                      {errors.form && (
                        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{errors.form}</span>
                        </div>
                      )}

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slateText-dim mb-2">
                            Your Name / Business <span className="text-gold">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-white placeholder-slateText-dim/50 focus:outline-none transition-colors ${
                              errors.name ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-cyanAccent'
                            }`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-400 font-medium">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slateText-dim mb-2">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                            className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-white placeholder-slateText-dim/50 focus:outline-none transition-colors ${
                              errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-cyanAccent'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-400 font-medium">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* What You Need (Dropdown with all 11 services + "Something else") */}
                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slateText-dim mb-2">
                          What Service Do You Need? <span className="text-gold">*</span>
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 text-sm text-white focus:outline-none focus:border-cyanAccent transition-colors cursor-pointer"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-navy-dark text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Optional Timeline */}
                      <div>
                        <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-slateText-dim mb-2">
                          Ideal Timeline (Optional)
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-surface-subtle border border-white/10 text-sm text-white focus:outline-none focus:border-cyanAccent transition-colors cursor-pointer"
                        >
                          {TIMELINE_OPTIONS.map((time) => (
                            <option key={time} value={time} className="bg-navy-dark text-white">
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Details (min 20 chars) */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wider text-slateText-dim">
                            Project Details <span className="text-gold">*</span>
                          </label>
                          <span
                            className={`text-[11px] font-mono ${
                              formData.details.trim().length >= 20 ? 'text-cyanAccent' : 'text-slateText-dim'
                            }`}
                          >
                            {formData.details.trim().length}/20 characters minimum
                          </span>
                        </div>
                        <textarea
                          id="details"
                          rows={5}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="Tell me about what you need built, your goals, any reference websites you like, or any problems you're trying to solve..."
                          className={`w-full px-4 py-3 rounded-xl bg-surface-subtle border text-sm text-white placeholder-slateText-dim/50 focus:outline-none transition-colors resize-y ${
                            errors.details ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-cyanAccent'
                          }`}
                        />
                        {errors.details && (
                          <p className="mt-1 text-xs text-red-400 font-medium">{errors.details}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-full font-bold text-base text-navy-dark bg-gold-gradient hover:bg-gold-gradient-hover shadow-glow-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 text-navy-dark" />
                            <span>Request a Fixed Quote</span>
                            <Send className="w-4 h-4 ml-1 text-navy-dark" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-slateText-dim">
                        Direct 1-on-1 review with Victoria.
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar Column: Direct Details & Profiles (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Email Card */}
              <div className="rounded-3xl glass-card p-6 sm:p-8 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-surface-elevated text-cyanAccent border border-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Direct Email</h3>
                    <p className="text-xs text-slateText-dim">Reach Victoria directly</p>
                  </div>
                </div>

                <p className="text-sm text-slateText-muted leading-relaxed">
                  Have an existing brief, specification document, or prefer direct email? Copy my address:
                </p>

                <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-subtle border border-white/10">
                  <span className="text-xs sm:text-sm font-mono text-white truncate select-all">
                    {COMPANY_INFO.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="ml-auto px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-cyanAccent flex items-center gap-1.5 transition-colors shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-cyanAccent" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-gold">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="font-medium">Replies within 1 hour</span>
                </div>
              </div>

              {/* Find Me On Card (Explicitly labeled "Find me on") */}
              <div className="rounded-3xl glass-card p-6 sm:p-8 border border-white/10 space-y-4">
                <h3 className="font-display font-bold text-lg text-white">Find me on</h3>
                <p className="text-xs text-slateText-muted leading-relaxed">
                  {COMPANY_INFO.profileNote}
                </p>

                <div className="space-y-2.5 pt-2">
                  <a
                    href={COMPANY_INFO.socials.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-subtle/80 hover:bg-surface-elevated border border-white/5 hover:border-cyanAccent/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyanAccent" />
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-cyanAccent transition-colors">
                          Behance
                        </span>
                        <span className="block text-[11px] text-slateText-dim">Portfolio &amp; Design Showcases</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-cyanAccent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-subtle/80 hover:bg-surface-elevated border border-white/5 hover:border-cyanAccent/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-logoBlue" />
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-cyanAccent transition-colors">
                          LinkedIn
                        </span>
                        <span className="block text-[11px] text-slateText-dim">Professional Network</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-cyanAccent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-subtle/80 hover:bg-surface-elevated border border-white/5 hover:border-gold/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                          Upwork
                        </span>
                        <span className="block text-[11px] text-slateText-dim">100% Job Success &bull; 5.0 Rating</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={COMPANY_INFO.socials.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-surface-subtle/80 hover:bg-surface-elevated border border-white/5 hover:border-gold/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                          Fiverr
                        </span>
                        <span className="block text-[11px] text-slateText-dim">Freelancer Profile</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slateText-dim group-hover:text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Working Model Callout */}
              <div className="p-6 rounded-3xl bg-surface-subtle/70 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-cyanAccent" />
                  <span>Direct Founder Collaboration</span>
                </div>
                <p className="text-xs text-slateText-muted leading-relaxed">
                  You deal directly with Victoria on every deliverable. No junior handoffs, no bureaucracy, and clear quotes locked upfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
