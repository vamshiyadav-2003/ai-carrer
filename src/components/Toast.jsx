import React, { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-slide-down flex items-center gap-3 rounded-xl border border-emerald-200 bg-slate-900 px-4 py-3 text-white shadow-2xl">
      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
      <span className="text-xs font-semibold">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 rounded-md p-1 text-slate-400 hover:text-white"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
