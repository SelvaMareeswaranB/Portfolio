"use client";

import {
  Briefcase,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "Micro Frontend Architecture",
  "Real-time Communication",
  "JWT & OWASP Security",
  "CI/CD & Automation",
  "Type-safe React Systems",
  "High Performance UI",
];

const experiences = [
  "Spearheaded scalable enterprise applications using React, Next.js, and Zustand state management, reducing boilerplate and prop drilling by 40%.",

  "Implemented JWT authentication and OWASP security best practices while maintaining a 98+ Lighthouse score through accessibility-first frontend engineering.",

  "Built deployment pipelines using AWS Amplify, GitHub Actions, Playwright automation, and static analysis, reducing manual QA cycles by 30%.",

  "Modernized legacy React applications by migrating to TypeScript, significantly improving type safety and reducing critical frontend bugs.",

  "Integrated WebSockets for real-time chat systems and notifications alongside Recharts-powered live analytics dashboards.",

  "Engineered 12+ reusable and type-safe MUI form components, improving CRM development productivity and ensuring design consistency.",

  "Optimized GraphQL and REST API data handling using Apollo Client and integrated secure Razorpay payment workflows.",

  "Architected scalable micro-frontend ecosystems using Turborepo, pnpm workspaces, and Vite Module Federation.",

  "Developed an internal procurement platform using Next.js SSR and TypeScript for high-performance enterprise workflows.",
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

        {/* Main Card */}
        <div className="group relative overflow-hidden rounded-[36px] border border-border-custom bg-gradient-to-br from-orange-500/[0.06] to-transparent p-8 shadow-paper backdrop-blur-xl md:p-12">
          
          {/* Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Floating Number */}
          <div className="absolute right-8 top-6 text-7xl font-black text-orange-500/10">
            01
          </div>

          <div className="relative z-10">
            
            {/* Header */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
              <Briefcase className="h-4 w-4" />
              Current Position
            </div>

            <h3 className="text-4xl font-black tracking-tight">
              Software Engineer
            </h3>

            <p className="mt-3 text-2xl font-semibold text-orange-500">
              Iaaxin Tech Labs India Pvt Ltd
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-neutral-400">
              
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-orange-500" />
                June 2023 - Present
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                Karur, Tamil Nadu
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-700 dark:text-neutral-300">
              Building enterprise-grade frontend ecosystems with
              performance-first engineering, scalable architecture,
              authentication systems, real-time communication,
              and modern React technologies.
            </p>

            {/* Highlight Tags */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group/item flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 px-5 py-4 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <span className="text-sm font-medium">
                    {item}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-orange-500 transition-transform duration-300 group-hover/item:-translate-y-1 group-hover/item:translate-x-1" />
                </div>
              ))}
            </div>

            {/* Experience Points */}
            <div className="mt-12 grid gap-5">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-border-custom bg-background/30 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.02]"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />

                  <p className="text-sm leading-8 text-slate-700 dark:text-neutral-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}