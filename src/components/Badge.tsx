import React from "react";
import { theme } from "../theme";

export const Badge: React.FC<{
  label: string;
  dotColor?: string;
}> = ({ label, dotColor = theme.colors.accent }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 26px",
        borderRadius: theme.radius.pill,
        background: theme.colors.pill,
        boxShadow: theme.shadow.soft,
        fontFamily: theme.font.sans,
        fontWeight: 700,
        fontSize: 22,
        letterSpacing: 1.5,
        color: theme.colors.ink,
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: dotColor,
          display: "inline-block",
        }}
      />
      {label.toUpperCase()}
    </div>
  );
};

export const Pill: React.FC<{
  label: string;
  background?: string;
  color?: string;
  filled?: boolean;
}> = ({
  label,
  background = theme.colors.pill,
  color = theme.colors.ink,
  filled = true,
}) => {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 18px",
        borderRadius: theme.radius.pill,
        fontFamily: theme.font.sans,
        fontWeight: 700,
        fontSize: 16,
        background: filled ? background : "transparent",
        border: filled ? "none" : `2px solid ${background}`,
        color,
      }}
    >
      {label}
    </span>
  );
};
