import React from "react";
import Logo from "./Logo.jsx";

const FOOTER_LINKS = [
  { label: "Product", href: "#dashboard" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <a href="#top" className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg">
              <Logo />
            </a>
            <p className="text-xs text-slate-500 font-medium">
              Your AI-powered career assistant.
            </p>
          </div>

          {/* Minimal Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} AI Career Copilot. All rights reserved.</p>
          <p className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
            Acdyon Technologies Challenge Submission · Part 2
          </p>
        </div>
      </div>
    </footer>
  );
}
