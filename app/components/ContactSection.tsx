"use client";

import {
  Mail,
  Phone,
  ArrowUpRight,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-16 sm:py-24 text-foreground"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mb-12 sm:mb-20 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-500">
            Contact
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl px-2">
            Let’s Build Something Great
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-neutral-400 px-2">
            Open to software engineering opportunities,
            frontend architecture roles, freelance projects,
            and collaborations focused on scalable modern web applications.
          </p>
        </div>

        {/* Main Card */}
        {/* FIX: Reduced mobile padding to p-5, keeping md:p-12 for desktop */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-border-custom bg-white/40 dark:bg-neutral-900/40 p-5 sm:p-8 md:p-12 shadow-paper backdrop-blur-xl">
          
          {/* Glow */}
          <div className="absolute right-0 top-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-orange-500">
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Get In Touch
                </div>

                {/* FIX: Handled dynamic wrapping and responsive text sizes */}
                <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  Have an idea, project, <br className="hidden sm:inline" /> or opportunity?
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-neutral-400">
                  I enjoy building scalable frontend systems,
                  high-performance React applications,
                  real-time communication platforms,
                  and modern user experiences.
                </p>
              </div>

              {/* Contact Info Group */}
              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href="mailto:selvamareeswaranb@gmail.com"
                  className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-border-custom bg-background/40 p-4 sm:p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Mail className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-neutral-500">
                        Email
                      </p>
                      {/* FIX: Added truncate to prevent overflow on ultra-small mobile widths */}
                      <p className="text-sm sm:text-base font-medium truncate">
                        selvamareeswaranb@gmail.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                {/* Phone */}
                <a
                  href="tel:+918940044633"
                  className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-border-custom bg-background/40 p-4 sm:p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Phone className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-neutral-500">
                        Phone
                      </p>
                      <p className="text-sm sm:text-base font-medium">
                        +91 8940044633
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            {/* FIX: Handled padding responsive size (p-5 sm:p-8) to match left column spacing */}
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8 rounded-[20px] sm:rounded-[32px] border border-border-custom bg-gradient-to-br from-orange-500/[0.04] sm:from-orange-500/[0.06] to-transparent p-5 sm:p-8">
              
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-500">
                  Connect
                </p>

                <h3 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
                  Find Me Online
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-neutral-400">
                  Explore my open-source work, projects,
                  frontend experiments, and professional journey.
                </p>
              </div>

              {/* Social Cards Group */}
              <div className="space-y-4">
                
                {/* GitHub */}
                <a
                  href="https://github.com/SelvaMareeswaranB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-border-custom bg-background/40 p-4 sm:p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <FaGithub className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-neutral-500">
                        GitHub
                      </p>
                      <p className="text-sm sm:text-base font-medium truncate">
                        github.com/SelvaMareeswaranB
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/selva-mareeswaran-b-862547251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-border-custom bg-background/40 p-4 sm:p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <FaLinkedin className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-neutral-500">
                        LinkedIn
                      </p>
                      <p className="text-sm sm:text-base font-medium truncate">
                        linkedin.com/in/selva-mareeswaran-b
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Status Footer Card */}
              <div className="rounded-xl sm:rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 sm:p-5">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-neutral-300">
                  Currently open to frontend engineering,
                  React/Next.js opportunities, freelance projects,
                  and scalable product development collaborations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}