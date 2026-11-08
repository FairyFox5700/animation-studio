/**
 * Design tokens shared by every composition/component.
 * Change these to re-skin ALL videos at once.
 */
export const theme = {
  colors: {
    background: "#efe9dd",
    panelBg: "#faf6ec",
    panelBorder: "#e4ddcb",
    ink: "#211d17",
    muted: "#8a8371",
    accent: "#d97a3f",
    accentSoft: "#f0cba0",
    danger: "#c1443b",
    dangerSoft: "#f6dcd9",
    success: "#4b8a63",
    successSoft: "#dcebe0",
    pill: "#ffffff",
    dotGrid: "rgba(33, 29, 23, 0.07)",
  },
  font: {
    sans: "'Inter', 'Segoe UI', system-ui, sans-serif",
    serif: "'Georgia', 'Times New Roman', serif",
    mono: "'Consolas', 'SF Mono', monospace",
  },
  radius: {
    sm: 10,
    md: 18,
    lg: 28,
    pill: 999,
  },
  shadow: {
    card: "0 20px 45px rgba(33, 29, 23, 0.12)",
    soft: "0 8px 20px rgba(33, 29, 23, 0.08)",
  },
} as const;

export type Theme = typeof theme;
