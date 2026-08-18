import React, { useState } from "react";
import { X, PlusCircle, Building2, Briefcase, MapPin, CheckCircle2 } from "lucide-react";

export default function AddAppModal({ isOpen, onClose, onAddApplication }) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("applied");
  const [location, setLocation] = useState("Remote · Full-time");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role.trim() || !company.trim()) {
      setError("Please enter both a role title and company name.");
      return;
    }
    setError("");

    // Generate initials (e.g. "Sample Company" -> "SC")
    const words = company.trim().split(" ");
    const initials = words.length > 1
      ? (words[0][0] + words[1][0]).toUpperCase()
      : company.substring(0, 2).toUpperCase();

    const newApp = {
      id: `app-${Date.now()}`,
      companyInitials: initials,
      companyName: company.trim(),
      role: role.trim(),
      location: location.trim(),
      status: status,
      statusLabel: status.charAt(0).toUpperCase() + status.slice(1),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      matchScore: Math.floor(Math.random() * 15) + 80, // Realistic match score
      notes: "Newly added demo application entry."
    };

    onAddApplication(newApp);
    setRole("");
    setCompany("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <PlusCircle className="h-5 w-5" />
            </div>
            <h3 id="modal-title" className="text-lg font-bold text-slate-900">
              Add Demo Application
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {error && (
            <div className="rounded-lg bg-rose-50 border border-rose-200 p-3 text-xs font-semibold text-rose-700">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="role-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
              Role Title *
            </label>
            <input
              id="role-input"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Business Intelligence Analyst"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label htmlFor="company-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
              Company Name *
            </label>
            <input
              id="company-input"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Sample Company (SC)"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div>
            <label htmlFor="status-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
              Pipeline Stage
            </label>
            <select
              id="status-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label htmlFor="location-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">
              Location / Type
            </label>
            <input
              id="location-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Remote · Full-time"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-semibold text-white shadow-md hover:bg-blue-700"
            >
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
