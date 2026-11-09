import type { SVGProps } from 'react';
import { DESCRIPTOR_PATH, G_PATH, LAYOUT, LETTER_PATHS, SYMBOL, type LogoLayout } from '../brand/logoGeometry';

const PANNA = '#F4EDE1';
const CACAO = '#4B2C1A';

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
  layout?: LogoLayout;
  /** negativo = Panna on dark grounds (default), positivo = Cacao on light grounds. */
  tone?: 'negativo' | 'positivo';
  title?: string;
}

export function Logo({ layout = 'horizontal', tone = 'negativo', title = 'Gelatieri', ...rest }: LogoProps) {
  const L = LAYOUT[layout];
  const ink = tone === 'negativo' ? PANNA : CACAO;
  const knock = tone === 'negativo' ? CACAO : PANNA;
  return (
    <svg viewBox={L.viewBox.join(' ')} role="img" aria-label={title} {...rest}>
      <g transform={L.symbol || undefined}>
        <circle cx={SYMBOL.cx} cy={SYMBOL.cy} r={SYMBOL.r} fill={ink} />
        <path d={G_PATH} fill={knock} fillRule="evenodd" />
      </g>
      {layout !== 'symbol' && (
        <>
          <g transform={L.wordmark || undefined} fill={ink}>
            {LETTER_PATHS.map((d, i) => (
              <path key={i} d={d} fillRule="evenodd" />
            ))}
          </g>
          <path transform={L.descriptor || undefined} d={DESCRIPTOR_PATH} fill={ink} fillRule="evenodd" />
        </>
      )}
    </svg>
  );
}
