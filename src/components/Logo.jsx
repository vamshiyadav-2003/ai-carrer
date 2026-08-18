import React from "react";

export default function Logo({ size = "md", className = "" }) {
  const dimensions = size === "sm" ? "w-6 h-6" : size === "lg" ? "w-9 h-9" : "w-7 h-7";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-1.5 shadow-md shadow-blue-500/20 ${dimensions}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-white"
          aria-hidden="true"
        >
          {/* Geometric AI Node / Career Compass mark */}
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
        </span>
      </div>
      <span className="font-sans text-base font-bold tracking-tight text-slate-900">
        AI Career <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Copilot</span>
      </span>
    </div>
  );
}
