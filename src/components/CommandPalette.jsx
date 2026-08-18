import React, { useEffect, useState } from "react";
import { Search, Sparkles, LayoutDashboard, FileText, Send, X, ArrowRight, CornerDownLeft } from "lucide-react";

const COMMAND_ITEMS = [
  { label: "✨ Analyze Job", href: "#interactive-demo", category: "Interactive AI Simulator", icon: Sparkles },
  { label: "📄 View Resume", href: "#resume-insights", category: "Resume AI Reviewer", icon: FileText },
  { label: "📋 Applications", href: "#tracker", category: "Pipeline Workspace", icon: Send },
  { label: "👤 Profile & Dashboard", href: "#dashboard", category: "Workspace Preview", icon: LayoutDashboard },
  { label: "⚡ Core Capabilities", href: "#features", category: "Overview", icon: Search },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open signal
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = COMMAND_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href) => {
    onClose();
    window.location.href = href;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-up">
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3.5">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section... (Esc to exit)"
            className="w-full text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-72 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <p className="p-4 text-center text-xs text-slate-400 italic">No matching sections found.</p>
          ) : (
            filteredItems.map(({ label, href, category, icon: Icon }, idx) => (
              <button
                key={label}
                type="button"
                onClick={() => handleSelect(href)}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition-colors ${
                  selectedIndex === idx ? "bg-slate-100 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{label}</p>
                    <p className="text-[11px] font-mono text-slate-400">{category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <span>Go</span>
                  <CornerDownLeft className="h-3.5 w-3.5" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer tip */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-[11px] font-mono text-slate-400">
          <span>AI Career Copilot Spotlight</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
