import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';

export const EASE = [0.16, 1, 0.3, 1] as const;
const VIEW = { once: true, margin: '0px 0px -12% 0px' } as const;

type Tag = 'div' | 'p' | 'li' | 'span' | 'header' | 'figure' | 'section';

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
  play,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
  play?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEW);
  const shown = play ?? inView;
  const M = motion[as] as typeof motion.div;
  return (
    <M
      ref={ref as never}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Parent that reveals its <Item> children one after another when scrolled into view. */
export function Stagger({
  children,
  className,
  as = 'div',
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag | 'ul';
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEW);
  const M = motion[as] as typeof motion.div;
  return (
    <M
      ref={ref as never}
      className={className}
      initial={reduce ? false : 'hidden'}
      animate={inView || reduce ? 'shown' : 'hidden'}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </M>
  );
}

/**
 * Child of <Stagger> (or of another <Item>): rises into place, then lets its own
 * <Item> children follow. `lift` raises it slightly on hover, for cards.
 */
export function Item({
  children,
  className,
  as = 'div',
  y = 32,
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag | 'article';
  y?: number;
  lift?: boolean;
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        shown: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE, staggerChildren: 0.07, delayChildren: 0.12 } },
      }}
      whileHover={lift ? { y: -6, transition: { duration: 0.6, ease: EASE } } : undefined}
    >
      {children}
    </M>
  );
}

/** Heading whose lines rise out of a mask, one after another. */
export function LineReveal({
  lines,
  as = 'h2',
  className,
  delay = 0,
  play,
}: {
  lines: readonly string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  play?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, VIEW);
  const shown = play ?? inView;
  const H = as;
  return (
    <H ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: '108%' }}
            animate={shown ? { y: '0%' } : undefined}
            transition={{ duration: 1.25, ease: EASE, delay: delay + i * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </H>
  );
}

export function DrawRule({ className = '', delay = 0, play }: { className?: string; delay?: number; play?: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEW);
  const shown = play ?? inView;
  return (
    <motion.span
      ref={ref}
      aria-hidden
      className={`rule ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      animate={shown ? { scaleX: 1 } : undefined}
      transition={{ duration: 1.4, ease: EASE, delay }}
    />
  );
}

/** The brand's double Miele frame (2px outer, 1px inner at 60 %, 12px apart), drawn in from the centre of each side. */
export function Frame({
  className = '',
  children,
  play,
  delay = 0,
  inset = 12,
}: {
  className?: string;
  children?: ReactNode;
  play?: boolean;
  delay?: number;
  inset?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });
  const shown = play ?? inView;
  const line = (style: CSSProperties, axis: 'x' | 'y', d: number) => (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute bg-[var(--line)]"
      style={{ ...style, originX: 0.5, originY: 0.5 }}
      initial={reduce ? false : axis === 'x' ? { scaleX: 0 } : { scaleY: 0 }}
      animate={shown ? (axis === 'x' ? { scaleX: 1 } : { scaleY: 1 }) : undefined}
      transition={{ duration: 1.6, ease: EASE, delay: delay + d }}
    />
  );
  const layer = (w: number, at: number, opacity: number, d: number) => (
    <span aria-hidden className="pointer-events-none absolute" style={{ inset: at, opacity }}>
      {line({ top: 0, left: 0, right: 0, height: w }, 'x', d)}
      {line({ bottom: 0, left: 0, right: 0, height: w }, 'x', d)}
      {line({ top: 0, bottom: 0, left: 0, width: w }, 'y', d + 0.1)}
      {line({ top: 0, bottom: 0, right: 0, width: w }, 'y', d + 0.1)}
    </span>
  );
  const positioned = /(^|\s)(absolute|fixed)(\s|$)/.test(className);
  return (
    <div ref={ref} className={`${positioned ? '' : 'relative '}${className}`}>
      {layer(2, 0, 1, 0)}
      {layer(1, inset, 0.6, 0.22)}
      {children}
    </div>
  );
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  year = false,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  year?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEW);
  const format = (n: number) => (year ? String(Math.round(n)) : Math.round(n).toLocaleString('es-MX'));
  const from = year ? value - 60 : 0;
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    if (reduce) {
      el.textContent = prefix + format(value) + suffix;
      return;
    }
    const controls = animate(from, value, {
      duration: 2.2,
      ease: EASE,
      onUpdate: (n) => (el.textContent = prefix + format(n) + suffix),
    });
    return () => controls.stop();
  }, [inView]);
  return (
    <span ref={ref} className={className}>
      {prefix + format(reduce ? value : from) + suffix}
    </span>
  );
}

/** Paragraph that lights up word by word as it crosses the viewport. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.88', 'end 0.42'] });
  const words = text.split(' ');
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </span>
    </p>
  );
}

function Word({ progress, range, children }: { progress: MotionValue<number>; range: [number, number]; children: string }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </>
  );
}

/** Moves its content against the scroll for a quiet depth effect. */
export function Parallax({
  children,
  className,
  amount = 60,
  scale,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  scale?: [number, number];
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  const s = useTransform(scrollYProgress, [0, 1], scale ?? [1, 1]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="h-full w-full" style={reduce ? undefined : { y, scale: s }}>
        {children}
      </motion.div>
    </div>
  );
}
