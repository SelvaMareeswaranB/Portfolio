"use client";

import {
    ArrowUpRight,
    Globe,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "Private Chat",
        description:
            "Real-time private messaging platform powered by Upstash Realtime, Redis Pub/Sub, and serverless event-driven architecture.",

        stack: [
            "Next.js",
            "TypeScript",
            "Redis",
            "Elysia",
            "Realtime",
        ],

        github: "https://github.com/SelvaMareeswaranB/nextjs-private-chat",
    },

    {
        title: "Auth Service",
        description:
            "Authentication platform with OAuth, Passkeys, RBAC, secure sessions, and admin impersonation controls.",

        stack: [
            "Next.js",
            "Better Auth",
            "Drizzle ORM",
            "Neon DB",
            "TypeScript",
        ],
        github: "https://github.com/SelvaMareeswaranB/auth-service-nextjs",
    },

    {
        title: "GSAP Landing Page",
        description:
            "Modern animated landing page built with React, Vite, and GSAP, featuring smooth scroll interactions, timeline-based animations, responsive UI, and performance-focused frontend architecture.",

        stack: [
            "React",
            "Vite",
            "GSAP",
            "Tailwind CSS",
            "SCSS",
            "Vercel",
        ],

        github: "https://github.com/SelvaMareeswaranB/gsap-landing-site",
    },
    {
        title: "Auth Service",
        description:
            "Authentication platform with OAuth, Passkeys, RBAC, secure sessions, and admin impersonation controls.",

        stack: [
            "Next.js",
            "Better Auth",
            "Drizzle ORM",
            "Neon DB",
            "TypeScript",
        ],
        github: "https://github.com/SelvaMareeswaranB/auth-service-nextjs",
    },
    {
        title: "Habit Tracker",
        description:
            "Cross-platform habit tracking app built with Expo and React Native, featuring streak analytics, leaderboard ranking, offline caching, swipe interactions, and Appwrite-based authentication.",

        stack: [
            "React Native",
            "Expo",
            "Appwrite",
            "TanStack React Query",
            "React Native Paper",
            "React Hook Form",
            "Yup",
            "Reanimated",
            "Gesture Handler",
        ],

        github: "https://github.com/SelvaMareeswaranB/habit_tracker",
    }, {
        title: "Healthcare Analytics Platform",
        description:
            "Frontend-focused healthcare dashboard platform with analytics, Firebase authentication, notifications, monorepo architecture, and micro frontend modules using mock data integration.",

        stack: [
            "Next.js",
            "TypeScript",
            "Firebase Auth & Notifications",
            "Monorepo",
            "Micro Frontend",
            "Tailwind css",
            "Firebase",
            "Fire Base Push Notifications",
            "Vite Module Federation",
            "pnpm Workspaces",

        ],

        github: "https://github.com/SelvaMareeswaranB/HealthCare-App",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-background py-24 text-foreground"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-20 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-orange-500">
                        Featured Work
                    </p>

                    <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                        Projects
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-neutral-400">
                        A selection of scalable applications focused on
                        realtime systems, authentication, performance,
                        and modern frontend engineering.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[32px] border border-border-custom bg-white/40 p-8 shadow-paper backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/20 dark:bg-neutral-900/40"
                        >

                            {/* Hover Glow */}
                            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">

                                {/* Content */}
                                <div>

                                    <div className="flex items-start justify-between">
                                        <h3 className="text-3xl font-black tracking-tight">
                                            {project.title}
                                        </h3>

                                        <ArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>

                                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>

                                    {/* Stack */}
                                    <div className="mt-7 flex flex-wrap gap-3">
                                        {project.stack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="rounded-full border border-border-custom bg-background/50 px-4 py-2 text-xs font-medium backdrop-blur-sm"
                                            >
                                                {tech}
                                            </div>
                                        ))}
                                    </div>



                                    {/* Actions */}
                                    <div className="mt-10 flex gap-4">


                                        <a
                                            href={project.github}
                                            className="inline-flex items-center gap-2 rounded-2xl border border-border-custom bg-background/50 px-5 py-3 text-sm font-medium transition-all hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
                                        >
                                            <FaGithub className="h-4 w-4" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}