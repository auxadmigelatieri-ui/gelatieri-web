import React, { useState, useEffect } from 'react';

export const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'draw' | 'text' | 'exit'>('draw');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 1800);
    const t2 = setTimeout(() => setPhase('exit'), 2800);
    const t3 = setTimeout(() => onComplete(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`intro-overlay ${phase === 'exit' ? 'intro-exit' : ''}`}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="intro-content">
        <div className={`intro-g-wrapper ${phase === 'text' ? 'intro-g-wrapper-shift' : ''}`}>
          <svg
            className="intro-g"
            viewBox="0 0 561 778"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="matrix(1.7 0 0 1.6395 -142 -78.35)"
              fill="none"
              stroke="var(--text-primary)"
              strokeWidth="22"
              strokeLinecap="butt"
              strokeLinejoin="round"
            >
              <path
                className="intro-path intro-path-1"
                d="M390 56 C362 80 330 92 290 101 C220 114 146 134 140 190 C136 236 205 242 262 236 C325 230 366 205 366 160 C366 124 344 108 318 104"
              />
              <path
                className="intro-path intro-path-2"
                d="M368 266 C330 258 275 252 238 260 C180 280 118 338 97 400 C78 468 118 512 200 512 C292 512 372 468 400 398 C420 348 392 320 342 320 C282 320 212 368 166 434"
              />
            </g>
          </svg>
        </div>

        <span
          className={`intro-text ${phase === 'text' ? 'intro-text-show' : ''}`}
          style={{ color: 'var(--text-primary)' }}
        >
          ELATIERI
        </span>
      </div>
    </div>
  );
};
