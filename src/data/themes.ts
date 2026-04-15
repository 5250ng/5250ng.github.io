// Loads the 13 terminal theme JSON files at build time and exposes a clean
// shape for the theme gallery. Keyed by the source filename (not the `id`
// field) because the upstream `ibm_infowindow_ii.json` has an `id` collision
// with `classic_green`.

const files = import.meta.glob<ThemeJson>('./themes/*.json', { eager: true });

export interface ThemeJson {
  id?: string;
  displayName?: string;
  description?: string;
  background?: { mode?: string; color?: string };
  monochrome?: { enabled?: boolean; color?: string };
  colors?: Record<string, string>;
  cursor?: { shape?: string; blinkMs?: number };
  crtEffect?: {
    enabled?: boolean;
    scanlineIntensity?: number;
    phosphorBloom?: number;
    glowRadius?: number;
    curvature?: number;
  };
  font?: { family?: string; size?: number };
}

export interface Theme {
  key: string;           // stable id derived from filename
  displayName: string;
  description: string;
  background: string;
  foreground: string;
  monochrome: boolean;
  palette: string[];     // swatch strip (6 colors)
  crt: boolean;
  raw: ThemeJson;
}

function filenameKey(path: string): string {
  const name = path.split('/').pop() || '';
  return name.replace(/\.json$/, '');
}

function pick(colors: Record<string, string> | undefined, key: string, fallback: string) {
  return (colors && colors[key]) || fallback;
}

function buildTheme(path: string, data: ThemeJson): Theme {
  const key = filenameKey(path);
  const bg = data.background?.color ?? '#000000';
  const mono = !!data.monochrome?.enabled;
  const fg = mono
    ? data.monochrome?.color ?? pick(data.colors, 'green', '#33ff33')
    : pick(data.colors, 'green', '#33ff33');

  const palette = mono
    ? [fg, fg, fg, fg, fg, fg]
    : [
        pick(data.colors, 'green',  '#33ff33'),
        pick(data.colors, 'blue',   '#3b8eea'),
        pick(data.colors, 'red',    '#ff5555'),
        pick(data.colors, 'cyan',   '#8be9fd'),
        pick(data.colors, 'pink',   '#ff79c6'),
        pick(data.colors, 'yellow', '#f1fa8c'),
      ];

  return {
    key,
    displayName: data.displayName ?? key,
    description: data.description ?? '',
    background: bg,
    foreground: fg,
    monochrome: mono,
    palette,
    crt: !!data.crtEffect?.enabled,
    raw: data,
  };
}

// Preferred display order (retro → authentic IBM → modern → accessibility)
const ORDER: string[] = [
  'amber_phosphor',
  'classic_green',
  'classic_white',
  'blue_terminal',
  'matrix',
  'ibm_3179',
  'ibm_infowindow_ii',
  'modern_dark',
  'dracula',
  'monokai',
  'nord',
  'solarized_dark',
  'high_contrast',
];

const all = Object.entries(files).map(([path, mod]) => buildTheme(path, mod as ThemeJson));

export const themes: Theme[] = ORDER
  .map(k => all.find(t => t.key === k))
  .filter((t): t is Theme => !!t)
  .concat(all.filter(t => !ORDER.includes(t.key))); // any future themes appended
