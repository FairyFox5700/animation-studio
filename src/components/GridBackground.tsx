import React from "react";
import { theme } from "../theme";

/**
 * Subtle dotted/grid texture used behind every scene, matching the
 * reference screenshots. Fully reusable — just drop it as a background layer.
 */
export const GridBackground: React.FC<{ color?: string }> = ({
  color = theme.colors.background,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        backgroundImage: `
          linear-gradient(${theme.colors.dotGrid} 1px, transparent 1px),
          linear-gradient(90deg, ${theme.colors.dotGrid} 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    />
  );
};
