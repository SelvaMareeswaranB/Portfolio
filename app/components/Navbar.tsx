"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { NavbarLogo } from "./NavbarLogo";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

// Direct Google Drive download link for your resume
const RESUME_URL = "https://drive.google.com/uc?export=download&id=1ouKUxMLHOHLgdPqiJuBtqYM3uHZbiL1R";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-custom bg-gradient-to-b from-paper-from to-paper-to shadow-paper transition-all duration-300">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <NavbarLogo />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "text-sky-500 dark:text-sky-400"
                                    : "text-foreground/80 hover:text-foreground"
                                    }`}
                            >
                                {item.label}

                                {/* Active Underline */}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-sky-500 dark:bg-sky-400" />
                                )}
                            </Link>
                        );
                    })}

                    {/* Divider */}
                    <div className="h-5 w-px bg-border-custom transition-colors duration-300" />

                    {/* Desktop Resume Download Button */}
                    <a
                        href={RESUME_URL}
                        download="Selva_Mareeswaran_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-border-custom bg-background px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:hover:bg-neutral-900"
                        aria-label="Download Resume"
                    >
                        <ArrowDownToLine className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                        <span>Resume</span>
                    </a>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative rounded-lg border border-border-custom bg-background p-2 text-foreground transition-all duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:hover:bg-neutral-900"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="border-t border-border-custom bg-background px-4 py-4 transition-colors duration-300 md:hidden animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col gap-2">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${isActive
                                        ? "bg-sky-50 text-sky-600 dark:bg-neutral-900 dark:text-sky-400"
                                        : "text-foreground/80 hover:bg-slate-100 dark:hover:bg-neutral-900"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        <a
                            href={RESUME_URL}
                            download="Selva_Mareeswaran_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 mt-2 w-full rounded-lg border border-border-custom bg-background py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:bg-slate-50 active:scale-[0.99] dark:hover:bg-neutral-900"
                        >
                            <ArrowDownToLine className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}