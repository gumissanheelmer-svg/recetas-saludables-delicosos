import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = ({ hours = 2, minutes = 0, seconds = 0 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem("countdown-end");
    if (saved) {
      const diff = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return diff;
    }
    const total = hours * 3600 + minutes * 60 + seconds;
    sessionStorage.setItem("countdown-end", String(Date.now() + total * 1000));
    return total;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [timeLeft > 0]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  if (timeLeft <= 0) return null;

  return (
    <div className="flex items-center gap-1.5">
      {[
        { val: pad(h), label: "hrs" },
        { val: pad(m), label: "min" },
        { val: pad(s), label: "seg" },
      ].map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-foreground/30 font-bold text-lg">:</span>}
          <div className="flex flex-col items-center">
            <span className="bg-foreground text-background font-display font-extrabold text-xl tabular-nums px-3 py-1.5 rounded-lg leading-none min-w-[44px] text-center">
              {unit.val}
            </span>
            <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{unit.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
