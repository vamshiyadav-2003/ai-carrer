import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="border-t border-line bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Start your next search with a clear plan
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Build your profile once, and let Career Copilot handle the matching,
          the resume feedback, and the tracking.
        </p>
        <a
          href="#top"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white/90"
        >
          Get started free
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
