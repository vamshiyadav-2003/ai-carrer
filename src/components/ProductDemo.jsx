import { useState } from "react";
import useReveal from "../hooks/useReveal.js";

const JOBS = [
  {
    role: "Product Designer",
    company: "Northwind Labs",
    match: 92,
    skills: [
      { name: "Figma & prototyping", value: 95 },
      { name: "Design systems", value: 88 },
      { name: "User research", value: 74 },
    ],
    note: "Strong match — your design-systems work at your last role lines up closely with this team's stack.",
  },
  {
    role: "UX Researcher",
    company: "Fieldstone Co.",
    match: 84,
    skills: [
      { name: "User interviews", value: 90 },
      { name: "Survey design", value: 82 },
      { name: "Data synthesis", value: 78 },
    ],
    note: "Good match — your research background covers most requirements; usability testing experience would help.",
  },
  {
    role: "Design Systems Lead",
    company: "Harbor & Co.",
    match: 78,
    skills: [
      { name: "Component libraries", value: 85 },
      { name: "Cross-team leadership", value: 70 },
      { name: "Accessibility standards", value: 66 },
    ],
    note: "Fair match — this role leans more managerial than your recent roles; worth highlighting any mentoring experience.",
  },
];

export default function ProductDemo() {
  const [selected, setSelected] = useState(0);
  const [ref, isVisible] = useReveal();
  const job = JOBS[selected];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-accent">Try it</p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            See why a match scores the way it does
          </h2>
          <p className="mt-3 text-lg text-ink-soft">
            Select a role to see the skill-by-skill breakdown behind its match score.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-10 grid grid-cols-1 gap-6 transition-all duration-700 lg:grid-cols-[280px_1fr] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Job selector list */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {JOBS.map((j, index) => (
              <button
                key={j.role}
                type="button"
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                className={`min-w-[220px] shrink-0 rounded-card border p-4 text-left transition-all lg:min-w-0 ${
                  selected === index
                    ? "border-accent bg-accent-soft shadow-card"
                    : "border-line bg-white hover:border-ink-faint"
                }`}
              >
                <p className="text-sm font-medium text-ink">{j.role}</p>
                <p className="text-xs text-ink-soft">{j.company}</p>
                <p className="mt-2 font-mono text-sm text-positive">{j.match}% match</p>
              </button>
            ))}
          </div>

          {/* Breakdown panel */}
          <div className="rounded-card border border-line bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-xl text-ink">{job.role}</p>
                <p className="text-sm text-ink-soft">{job.company}</p>
              </div>
              <span className="font-mono text-2xl text-ink">{job.match}%</span>
            </div>

            <div className="mt-6 space-y-4">
              {job.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-soft">{skill.name}</span>
                    <span className="font-mono text-ink">{skill.value}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-line">
                    <div
                      className="h-1.5 rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-lg bg-paper p-4 text-sm leading-relaxed text-ink-soft">
              {job.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
