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
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-orange-500">
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Let’s Build Something Great
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-neutral-400">
            Open to software engineering opportunities,
            frontend architecture roles, freelance projects,
            and collaborations focused on scalable modern web applications.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[36px] border border-border-custom bg-white/40 p-8 shadow-paper backdrop-blur-xl dark:bg-neutral-900/40 md:p-12">
          
          {/* Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
                <Send className="h-4 w-4" />
                Get In Touch
              </div>

              <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                Have an idea, project,
                or opportunity?
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-neutral-400">
                I enjoy building scalable frontend systems,
                high-performance React applications,
                real-time communication platforms,
                and modern user experiences.
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-5">
                
                {/* Email */}
                <a
                  href="mailto:selvamareeswaranb@gmail.com"
                  className="group flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-neutral-500">
                        Email
                      </p>

                      <p className="font-medium">
                        selvamareeswaranb@gmail.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                {/* Phone */}
                <a
                  href="tel:+918940044633"
                  className="group flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-neutral-500">
                        Phone
                      </p>

                      <p className="font-medium">
                        +91 8940044633
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between rounded-[32px] border border-border-custom bg-gradient-to-br from-orange-500/[0.06] to-transparent p-8">
              
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  Connect
                </p>

                <h3 className="mt-5 text-3xl font-black">
                  Find Me Online
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600 dark:text-neutral-400">
                  Explore my open-source work, projects,
                  frontend experiments, and professional journey.
                </p>
              </div>

              {/* Social Cards */}
              <div className="mt-10 space-y-5">
                
                {/* GitHub */}
                <a
                  href="https://github.com/SelvaMareeswaranB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <FaGithub className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-neutral-500">
                        GitHub
                      </p>

                      <p className="font-medium">
                        github.com/SelvaMareeswaranB
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/selva-mareeswaran-b-862547251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border-custom bg-background/40 p-5 transition-all duration-300 hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                      <FaLinkedin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 dark:text-neutral-500">
                        LinkedIn
                      </p>

                      <p className="font-medium">
                        linkedin.com/in/selva-mareeswaran-b
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Footer */}
              <div className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
                <p className="text-sm leading-7 text-slate-700 dark:text-neutral-300">
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