"use client";

import HyperText from "./HyperText";
import IconCloud from "./IconCloud";
import { portfolioSlugs } from "../constants/slugs";
import { ArrowRight, Download } from "lucide-react";


const RESUME_URL = "https://drive.google.com/file/d/1nfOKReg_a02_8XE4H3JbfWlcPqXjz09l/view?usp=drive_link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-center lg:text-left">

          {/* Greeting */}
          <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
            <span className="text-lg text-slate-600 dark:text-neutral-400">
              Hi there
            </span>

            {/* Waving Hand */}
            <span className="origin-[70%_70%] animate-wave text-2xl">
              👋
            </span>
            <span className="text-lg text-slate-600 dark:text-neutral-400">
              I'm
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <HyperText
              className="text-4xl font-black tracking-tight text-orange-500 sm:text-5xl md:text-6xl"
            />



            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-neutral-400">
              I engineer scalable, secure, and high-performance web applications
              using{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, TypeScript, and modern frontend architecture
              </span>{" "}
              with a strong focus on performance, maintainability, and seamless
              user experience.
            </p>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-neutral-400">
            Currently working at{" "}
            <span className="font-semibold text-foreground">
              Iaaxin Tech Labs India Pvt Ltd
            </span>
            , where I build enterprise-grade applications, real-time systems,
            authentication platforms, and scalable frontend ecosystems with
            modern React technologies and performance-first engineering.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-sm font-bold text-black transition-all hover:bg-orange-400 active:scale-95"
            >
              View Projects

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={RESUME_URL}
              download="Selva_Mareeswaran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-custom bg-white/50 dark:bg-neutral-900/50 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-slate-100 dark:hover:bg-neutral-900"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-5 flex items-center justify-center">

          <div className="relative flex aspect-square w-full max-w-[320px] items-center justify-center sm:max-w-[420px]">

            {/* Soft Glow */}
            <div className="absolute inset-12 rounded-full bg-orange-500/10 blur-3xl" />

            <IconCloud iconSlugs={portfolioSlugs} />
          </div>
        </div>
      </div>
    </section>
  );
}