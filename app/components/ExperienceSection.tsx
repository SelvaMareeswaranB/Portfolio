
"use client";

import {
  Briefcase,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const careerHistory = [
  {
    role: "Software Engineer",
    company: "Iaaxin Tech Labs India Pvt Ltd",
    location: "Karur, Tamil Nadu",
    period: "June 2025 - June 2026",
    current: false, // Updated to reflect completed term
    description:
      "Architected enterprise-grade frontend ecosystems with performance-first engineering, micro-frontends, high-frequency data streaming, and production-ready Next.js infrastructure.",
    highlights: [
      "Micro Frontend Architecture",
      "Real-time Communication",
      "JWT & OWASP Security",
      "CI/CD & Automation",
      "Type-safe React Systems",
      "High Performance UI",
    ],
    points: [
      "Led the architectural migration to a Micro-frontend ecosystem using Vite Module Federation within a Turborepo monorepo, steering rigorous code reviews to reduce deployment cycles by 40%.",
      "Developed a standalone e-commerce licensing panel enabling 500+ monthly clients to purchase licenses via integrated Razorpay checkout pipelines, maximizing transaction success rates.",
      "Spearheaded a high-frequency WebSocket framework for data-heavy dashboards within a separate internal CRM platform, enabling sub-second real-time metrics streaming.",
      "Optimized Next.js SSR/SSG infrastructure and automated metadata generation, achieving a 98+ Lighthouse score and decreasing Total Blocking Time (TBT) by 35%.",
      "Validated interface compliance across core application modules against WCAG 2.1 AA accessibility standards for deployment to AWS CloudFront edge environments.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Iaaxin Tech Labs India Pvt Ltd",
    location: "Karur, Tamil Nadu",
    period: "June 2023 - May 2025",
    current: false,
    description:
      "Built and optimized reliable core features across enterprise SaaS applications using robust state management, modular component design, and end-to-end automation.",
    highlights: [
      "State Optimization",
      "Component Systems",
      "E2E Test Automation",
      "RESTful API Integration",
      "RESTful API Implementation",
      "Workflow Optimization",
    ],
    points: [
      "Collaborated across backend teams in an Agile microservices environment to integrate RESTful APIs using Node.js and Express.js, ensuring secure data exchanges.",
      "Spearheaded the standardization of engineering workflows by onboarding team members to custom LLM-assisted tools, accelerating boilerplate generation and prototyping velocity.",
      "Optimized application state layers using Zustand and TanStack Query, cutting down redundant rendering loops and boilerplate logic by 40%.",
      "Translated Figma mockups into type-safe, reusable Material UI (MUI) components documented in Storybook, reducing production bundle sizes by 25% across SaaS platforms.",
      "Built comprehensive automated testing suites using Playwright, short-circuiting regression detection and shortening E2E testing cycles by 30%.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-orange-500">
            Career Timeline
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Work Experience
          </h2>
        </div>

        {/* Experience Cards Stack */}
        <div className="flex flex-col gap-12">
          {careerHistory.map((job, jobIndex) => (
            <div
              key={jobIndex}
              className="group relative overflow-hidden rounded-[36px] border border-border-custom bg-gradient-to-br from-orange-500/[0.04] to-transparent p-8 shadow-paper backdrop-blur-xl md:p-12"
            >
              {/* Card Hover Glow */}
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Status Badge */}
                <div
                  className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
                    jobIndex === 0
                      ? "border-orange-500/20 bg-orange-500/10 text-orange-500"
                      : "border-muted/40 bg-muted/20 text-muted-foreground"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  {jobIndex === 0 ? "Latest Position" : "Previous Role"}
                </div>

                <h3 className="text-4xl font-black tracking-tight">
                  {job.role}
                </h3>

                <p className="mt-3 text-2xl font-semibold text-orange-500">
                  {job.company}
                </p>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-orange-500" />
                    {job.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    {job.location}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-8 max-w-3xl text-base leading-8 text-slate-700 dark:text-neutral-300">
                  {job.description}
                </p>

                {/* Role Specific Highlights */}
                {job.highlights && job.highlights.length > 0 && (
                  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {job.highlights.map((item) => (
                      <div
                        key={item}
                        className="group/item flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 px-5 py-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                      >
                        <span className="text-sm font-medium">{item}</span>
                        <ArrowUpRight className="h-4 w-4 text-orange-500 transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Accomplishment Points */}
                <div className="mt-12 grid gap-5">
                  {job.points.map((point, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-border-custom bg-background/30 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.02]"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                      <p className="text-sm leading-8 text-slate-700 dark:text-neutral-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
