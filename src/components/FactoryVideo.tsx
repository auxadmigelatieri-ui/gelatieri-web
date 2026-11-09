import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

const base = import.meta.env.BASE_URL;

export function FactoryVideo({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: '15% 0px' });

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduce]);

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      src={`${base}videos/fabrica.mp4`}
      poster={`${base}videos/fabrica-poster.jpg`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Producción de gelato en la fábrica de Gelatieri"
    />
  );
}
