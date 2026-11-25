export const COMPANY_INFO = {
  name: "Dev Archive Lab",
  shortName: "Dev Archive Lab",
  founder: "Victoria",
  founderRole: "Founder & Full Stack Digital Creative",
  headline: "We build websites, apps and AI systems that win you clients.",
  eyebrow: "Dev Archive Lab | Full stack, design and growth studio",
  subheading:
    "From local shops to ambitious startups, one expert behind your website, app, automation, video and online visibility, backed by a trusted network of specialists.",
  remoteNote: "Remote, working worldwide | Replies within 1 hour",
  email: "devarchivelab.agency@gmail.com",
  responseTime: "Replies within 1 hour",
  
  // Endpoint for form submissions (e.g. Formspree, FormSubmit, Basin).
  // If empty, the contact form falls back gracefully to a pre-filled mailto: link.
  FORM_ENDPOINT: "",

  socials: {
    behance: "https://www.behance.net/victoriaijewere",
    linkedin: "https://www.linkedin.com/in/dev-archive-lab-b51919401",
    upwork: "https://www.upwork.com/freelancers/~01e8231c19b7fcc368",
    fiverr: "https://www.fiverr.com/ruthijewere",
  },

  profileNote: "Same studio, different profile names depending on the platform you found me on.",

  // Trust Strip: Exactly the 4 real, uninvented metrics
  trustMetrics: [
    {
      id: "upwork-success",
      value: 100,
      suffix: "%",
      label: "Job Success on Upwork",
      subtext: "Verified top rating on client contracts",
      isNumeric: true,
    },
    {
      id: "client-rating",
      value: 5.0,
      suffix: ".0",
      label: "5.0 Client Rating",
      subtext: "Flawless score across client reviews",
      isNumeric: true,
    },
    {
      id: "services-count",
      value: 11,
      suffix: "",
      label: "11 Services, One Studio",
      subtext: "Full digital coverage under one roof",
      isNumeric: true,
    },
    {
      id: "founder-direct",
      value: "1-on-1",
      suffix: "",
      label: "Direct 1-on-1 With Founder",
      subtext: "No account managers or lost context",
      isNumeric: false,
    },
  ],

  // Why Dev Archive Lab: 4 Benefit Cards
  benefits: [
    {
      title: "Direct communication with the founder",
      description:
        "You deal with Victoria from your first message through design, build, and launch. No junior handoffs, no bureaucracy, and no lost context.",
      icon: "UserCheck",
    },
    {
      title: "Fixed quotes based on your project",
      description:
        "Every project is scoped upfront with a clear fixed quote and defined deliverables. No surprise hourly overages or unexpected fees.",
      icon: "ShieldCheck",
    },
    {
      title: "Built for speed, SEO and conversions",
      description:
        "Your website or app is engineered with modern best practices: blazing-fast load speeds, accessible semantics, search-engine ready structure, and conversion-focused UX.",
      icon: "Zap",
    },
    {
      title: "Specialists on demand for bigger builds",
      description:
        "For larger builds, Victoria brings in vetted specialist collaborators while remaining your single point of contact.",
      icon: "Users",
    },
  ],

  // 4 Animated Process Steps
  process: [
    {
      step: "01",
      title: "Discover",
      subtitle: "Clarify scope & goals",
      description:
        "We discuss your target audience, business goals, and project requirements to outline a clear scope and fixed quote.",
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Prototypes & visual identity",
      description:
        "Clean, modern layouts and user flows tailored to your brand. You review interactive Figma or Canva mockups and provide feedback before code begins.",
    },
    {
      step: "03",
      title: "Build",
      subtitle: "Clean code & automation",
      description:
        "Engineered with modern frameworks, high-performing components, responsive layouts, robust integrations, and smooth micro-interactions.",
    },
    {
      step: "04",
      title: "Launch & Grow",
      subtitle: "QA, live deployment & visibility",
      description:
        "Rigorous cross-device testing, SEO checks, and seamless deployment. We make sure everything is optimized to attract traffic and convert visitors into paying clients.",
    },
  ],

  // Tools & Platforms Marquee
  tools: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Full Stack" },
    { name: "Flutter", category: "Mobile" },
    { name: "Supabase", category: "Backend & DB" },
    { name: "Stripe", category: "Payments" },
    { name: "OpenAI API", category: "AI" },
    { name: "Figma", category: "UI/UX" },
    { name: "Canva", category: "Design" },
    { name: "Wix", category: "CMS" },
    { name: "WordPress", category: "CMS" },
    { name: "Shopify", category: "E-Commerce" },
    { name: "Make", category: "Automation" },
    { name: "n8n", category: "Workflows" },
    { name: "Google Business Profile", category: "Local SEO" },
    { name: "Search Console", category: "SEO" },
  ],
};
