import { useEffect, useState } from "react";

/**
 * MatchScoreRing
 * An SVG ring that fills to `score` percent and counts the number up
 * from 0, but only once it's told it's visible (see useReveal in the
 * parent). This is the page's one "animated statistic" requirement —
 * it demonstrates real product output (a match score) rather than a
 * marketing number.
 */
export default function MatchScoreRing({ score, size = 96, label, active }) {
  const [displayScore, setDisplayScore] = useState(0);
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!active) return;

    let frame;
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayScore(Math.round(eased * score));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, score]);

  const offset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E3E6EC"
            strokeWidth="6"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#1B8A5A"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xl font-semibold text-ink">{displayScore}%</span>
        </div>
      </div>
      {label && (
        <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
          {label}
        </span>
      )}
    </div>
  );
}
