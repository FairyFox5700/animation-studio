import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Generic entrance animation wrapper. Any card/panel/badge can be wrapped
 * with this to get a spring-based "pop in" — the same effect used across
 * all reference videos. Fully reusable across every composition.
 */
export const AnimatedIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "top" | "left" | "right" | "scale";
  distance?: number;
  durationInFrames?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  delay = 0,
  from = "bottom",
  distance = 40,
  durationInFrames = 18,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    durationInFrames,
    config: { damping: 200, stiffness: 180, mass: 0.6 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  let translateX = 0;
  let translateY = 0;
  let scale = 1;

  if (from === "bottom") translateY = (1 - progress) * distance;
  if (from === "top") translateY = -(1 - progress) * distance;
  if (from === "left") translateX = -(1 - progress) * distance;
  if (from === "right") translateX = (1 - progress) * distance;
  if (from === "scale") scale = interpolate(progress, [0, 1], [0.85, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Reveals text/characters as if being typed. Reusable for any string prop. */
export const TypeOn: React.FC<{
  text: string;
  delay?: number;
  charsPerFrame?: number;
  style?: React.CSSProperties;
}> = ({ text, delay = 0, charsPerFrame = 0.9, style }) => {
  const frame = useCurrentFrame();
  const visibleChars = Math.max(
    0,
    Math.min(text.length, Math.floor((frame - delay) * charsPerFrame))
  );
  return <span style={style}>{text.slice(0, visibleChars)}</span>;
};
