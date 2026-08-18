import { useState } from "react";
import { Menu, X, Command, Sparkles } from "lucide-react";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { label: "Product", href: "#dashboard" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Interactive Demo", href: "#interactive-demo" },
  { label: "Tracker", href: "#tracker" },
];

export default function Navbar({ onOpenCommandPalette, onTriggerToast }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onTriggerToast) {
      onTriggerToast("Demo Account Active: Logged in as Jane Doe (Data Analyst)");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md transition-all">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus:outline-none focus:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Cmd+K Easter Egg trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
            title="Quick Search (Ctrl+K / Cmd+K)"
          >
            <Command className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-mono text-slate-500 border border-slate-200">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={handleLoginClick}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 px-3 py-2 rounded-lg"
          >
            Log in
          </button>
          <a
            href="#get-started"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <span>Get Started</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-300" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 shadow-sm"
            aria-label="Search command palette"
          >
            <Command className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 bg-white shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile animated menu drawer */}
      {isOpen && (
        <div className="animate-slide-down border-t border-slate-200 bg-white px-5 pb-6 pt-3 shadow-lg md:hidden">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-slate-100" />
            <button
              type="button"
              onClick={(e) => {
                setIsOpen(false);
                handleLoginClick(e);
              }}
              className="text-left rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100"
            >
              Log in
            </button>
            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-center text-base font-medium text-white shadow-md active:scale-98"
            >
              <span>Get Started Free</span>
              <Sparkles className="h-4 w-4 text-blue-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
