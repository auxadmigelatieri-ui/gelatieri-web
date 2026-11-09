import { useLayoutEffect, useRef, useState } from 'react';
import { DESCRIPTOR_PATH, G_PATH, LAYOUT, LETTER_PATHS, SYMBOL } from '../brand/logoGeometry';

const PANNA = '#F4EDE1';
const CACAO = '#4B2C1A';
const OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';
const IN_OUT = 'cubic-bezier(0.65, 0, 0.35, 1)';
const T = {
  disk: 700,
  holeIn: 60,
  holeInDur: 620,
  holeOut: 700,
  holeOutDur: 380,
  move: 1300,
  moveDur: 700,
  letters: 1750,
  letterGap: 45,
  letterDur: 550,
  desc: 2100,
  descDur: 600,
  exit: 3300,
  fadeDur: 800,
  headerDur: 1000,
};

interface IntroProps {
  onExitStart: () => void;
  onDone: () => void;
}

export function Intro({ onExitStart, onDone }: IntroProps) {
  const [size] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  const layout = size.w >= size.h ? 'horizontal' : 'vertical';
  const L = LAYOUT[layout];

  const bg = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const exitG = useRef<SVGGElement>(null);
  const lockup = useRef<SVGGElement>(null);
  const art = useRef<SVGGElement>(null);
  const symPos = useRef<SVGGElement>(null);
  const symAnim = useRef<SVGGElement>(null);
  const disk = useRef<SVGCircleElement>(null);
  const hole = useRef<SVGCircleElement>(null);
  const g = useRef<SVGPathElement>(null);
  const word = useRef<SVGGElement>(null);
  const desc = useRef<SVGPathElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  const anims = useRef<Animation[]>([]);

  useLayoutEffect(() => {
    const { w, h } = size;
    const list: Animation[] = [];
    let cancelled = false;
    const bail = () => {
      list.forEach((a) => a.cancel());
      onExitStart();
      onDone();
    };
    const add = (el: Element | null, frames: Keyframe[], opts: KeyframeAnimationOptions) => {
      if (!el) return;
      list.push(el.animate(frames, { fill: 'both', ...opts }));
    };
    const viewBoxOrigin = (el: SVGElement | null) => el && Object.assign(el.style, { transformBox: 'view-box', transformOrigin: '0 0' });
    const centerOrigin = (el: SVGElement | null) => el && Object.assign(el.style, { transformBox: 'fill-box', transformOrigin: '50% 50%' });

    // fit the final lockup to the screen; a hidden or zero-sized window skips the intro
    const bb = art.current!.getBBox();
    const k =
      layout === 'horizontal'
        ? Math.min(Math.min(w * 0.62, 980) / bb.width, (h * 0.32) / bb.height)
        : Math.min(Math.min(w * 0.74, 380) / bb.width, (h * 0.5) / bb.height);
    if (!w || !h || !bb.width || !Number.isFinite(k) || k <= 0) {
      bail();
      return;
    }
    const tx = (w - bb.width * k) / 2 - bb.x * k;
    const ty = (h - bb.height * k) / 2 - bb.y * k;
    lockup.current!.setAttribute('transform', `translate(${tx} ${ty}) scale(${k})`);

    // the symbol starts centred on screen and larger
    const m = symPos.current!.getCTM();
    if (!m || !m.a) {
      bail();
      return;
    }
    const inv = m.inverse();
    const P = { x: inv.a * (w / 2) + inv.c * (h / 2) + inv.e, y: inv.b * (w / 2) + inv.d * (h / 2) + inv.f };
    const D0 = layout === 'horizontal' ? Math.min(h * 0.42, w * 0.5) : Math.min(w * 0.62, h * 0.4);
    const s0 = D0 / (2 * SYMBOL.r * m.a);

    // 1 · dot → ring → disc with the g
    centerOrigin(disk.current);
    centerOrigin(hole.current);
    add(disk.current, [{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: T.disk, easing: OUT });
    add(hole.current, [{ transform: 'scale(0)' }, { transform: 'scale(0.93)' }], { delay: T.holeIn, duration: T.holeInDur, easing: OUT });
    add(hole.current, [{ opacity: 1 }, { opacity: 0 }], { delay: T.holeOut, duration: T.holeOutDur, easing: 'ease-in-out' });
    add(g.current, [{ opacity: 0 }, { opacity: 0, offset: 0.999 }, { opacity: 1 }], { duration: T.holeOut });

    // 2 · the symbol settles into the lockup while the name arrives
    viewBoxOrigin(symAnim.current);
    add(
      symAnim.current,
      [{ transform: `translate(${P.x - s0 * SYMBOL.cx}px, ${P.y - s0 * SYMBOL.cy}px) scale(${s0})` }, { transform: 'translate(0px, 0px) scale(1)' }],
      { delay: T.move, duration: T.moveDur, easing: IN_OUT },
    );
    const shift = layout === 'horizontal' ? 'translate(26px, 0px)' : 'translate(0px, 16px)';
    Array.from(word.current!.children).forEach((letter, i) => {
      viewBoxOrigin(letter as SVGElement);
      add(letter, [{ opacity: 0, transform: shift }, { opacity: 1, transform: 'translate(0px, 0px)' }], {
        delay: T.letters + i * T.letterGap,
        duration: T.letterDur,
        easing: OUT,
      });
    });
    viewBoxOrigin(desc.current);
    add(desc.current, [{ opacity: 0, transform: 'translate(0px, 10px)' }, { opacity: 1, transform: 'translate(0px, 0px)' }], {
      delay: T.desc,
      duration: T.descDur,
      easing: OUT,
    });

    // 3 · exit: on wide screens the lockup travels into the header logo; otherwise it fades
    const target = document.querySelector<SVGSVGElement>('[data-header-logo]');
    const hr = target?.getBoundingClientRect();
    const toHeader = layout === 'horizontal' && !!hr && hr.width > 0 && hr.top >= 0;
    add(skip.current, [{ opacity: 1 }, { opacity: 0 }], { delay: T.exit, duration: 200 });
    if (toHeader && hr) {
      const box = { x: tx + bb.x * k, y: ty + bb.y * k, w: bb.width * k };
      const q = hr.width / box.w;
      viewBoxOrigin(exitG.current);
      add(
        exitG.current,
        [{ transform: 'translate(0px, 0px) scale(1)' }, { transform: `translate(${hr.left - q * box.x}px, ${hr.top - q * box.y}px) scale(${q})` }],
        { delay: T.exit, duration: T.headerDur, easing: IN_OUT },
      );
      add(bg.current, [{ opacity: 1 }, { opacity: 0 }], { delay: T.exit + 200, duration: T.headerDur - 200, easing: 'ease-in-out' });
    } else {
      if (exitG.current) Object.assign(exitG.current.style, { transformBox: 'view-box', transformOrigin: `${w / 2}px ${h / 2}px` });
      add(exitG.current, [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.97)' }], {
        delay: T.exit,
        duration: 380,
        easing: 'cubic-bezier(0.4, 0, 1, 1)',
      });
      add(bg.current, [{ opacity: 1 }, { opacity: 0 }], { delay: T.exit + 220, duration: T.fadeDur - 220, easing: 'ease-in-out' });
    }
    anims.current = list;

    const exitSignal = bg.current!.animate([{ visibility: 'visible' }, { visibility: 'visible' }], { duration: T.exit });
    list.push(exitSignal);
    exitSignal.finished.then(() => !cancelled && onExitStart()).catch(() => {});
    Promise.all(list.map((a) => a.finished))
      .then(() => !cancelled && onDone())
      .catch(() => {});

    return () => {
      cancelled = true;
      list.forEach((a) => a.cancel());
    };
  }, []);

  return (
    <div className="surface-dark fixed inset-0 z-[100]">
      <div ref={bg} className="absolute inset-0 bg-cacao" />
      <svg ref={svg} aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox={`0 0 ${size.w} ${size.h}`}>
        <g ref={exitG}>
          <g ref={lockup}>
            <g ref={art}>
              <g ref={symPos} transform={L.symbol || undefined}>
                <g ref={symAnim}>
                  <circle ref={disk} cx={SYMBOL.cx} cy={SYMBOL.cy} r={SYMBOL.r} fill={PANNA} />
                  <circle ref={hole} cx={SYMBOL.cx} cy={SYMBOL.cy} r={SYMBOL.r} fill={CACAO} />
                  <path ref={g} d={G_PATH} fill={CACAO} fillRule="evenodd" />
                </g>
              </g>
              <g ref={word} transform={L.wordmark || undefined} fill={PANNA}>
                {LETTER_PATHS.map((d, i) => (
                  <path key={i} d={d} fillRule="evenodd" />
                ))}
              </g>
              <g transform={L.descriptor || undefined}>
                <path ref={desc} d={DESCRIPTOR_PATH} fill={PANNA} fillRule="evenodd" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <button
        ref={skip}
        type="button"
        onClick={() => anims.current.forEach((a) => a.finish())}
        className="t-label absolute bottom-5 right-5 p-3 text-panna-soft"
      >
        Saltar
      </button>
    </div>
  );
}
