import React from "react";
import { AbsoluteFill } from "remotion";
import { theme } from "../theme";
import { GridBackground } from "../components/GridBackground";
import { Badge, Pill } from "../components/Badge";
import { AnimatedIn } from "../components/Animations";
import { WebcamFrame } from "../components/WebcamFrame";
import { MistakeCompareScene } from "../content/schema";

const cardBase: React.CSSProperties = {
  background: theme.colors.panelBg,
  border: `1px solid ${theme.colors.panelBorder}`,
  borderRadius: theme.radius.md,
  boxShadow: theme.shadow.soft,
  padding: "32px 36px",
  fontFamily: theme.font.sans,
};

export const MistakeCompare: React.FC<MistakeCompareScene> = ({
  badge,
  titlePrefix,
  titleAccent,
  previous,
  current,
  caption,
  webcam,
}) => {
  return (
    <AbsoluteFill>
      <GridBackground />

      <AbsoluteFill style={{ padding: "60px 90px", justifyContent: "flex-start" }}>
        {/* Badge */}
        <AnimatedIn from="top" delay={0}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Badge label={badge} dotColor={theme.colors.accent} />
          </div>
        </AnimatedIn>

        {/* Title */}
        <AnimatedIn from="bottom" delay={6}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: theme.font.sans,
              fontWeight: 800,
              fontSize: 68,
              color: theme.colors.ink,
              margin: "28px 0 48px",
            }}
          >
            {titlePrefix}{" "}
            <span
              style={{
                fontFamily: theme.font.serif,
                fontStyle: "italic",
                color: theme.colors.accent,
                fontWeight: 400,
              }}
            >
              {titleAccent}
            </span>
          </h1>
        </AnimatedIn>

        <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
          {/* Previous mistake panel (dimmed) */}
          <AnimatedIn from="left" delay={14} style={{ flex: 1, opacity: 0.55 }}>
            <div style={cardBase}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span
                  style={{
                    fontFamily: theme.font.serif,
                    fontStyle: "italic",
                    color: theme.colors.danger,
                    fontSize: 34,
                  }}
                >
                  {previous.index}
                </span>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: theme.colors.ink }}>
                    {previous.heading}
                  </div>
                  <div style={{ fontSize: 15, color: theme.colors.muted }}>
                    {previous.subheading}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: theme.colors.muted,
                  fontWeight: 700,
                }}
              >
                INCOMING TASK
              </div>
              <div
                style={{
                  marginTop: 10,
                  background: "#d8d2c4",
                  borderRadius: theme.radius.pill,
                  padding: "14px 20px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                ▶ {previous.taskLabel}
              </div>

              <div
                style={{
                  marginTop: 28,
                  border: `1px dashed ${theme.colors.panelBorder}`,
                  borderRadius: theme.radius.sm,
                  padding: 18,
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: theme.colors.muted }}>
                  {previous.agentName}
                </div>
                <div style={{ fontSize: 15, color: theme.colors.muted, marginTop: 6 }}>
                  {previous.agentDesc}
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: theme.colors.success,
                  fontWeight: 700,
                }}
              >
                ✓ {previous.resultLabel}
              </div>
            </div>
          </AnimatedIn>

          {/* Current blocked task panel (highlighted) */}
          <AnimatedIn from="right" delay={18} style={{ flex: 1.1 }}>
            <div style={cardBase}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span
                  style={{
                    fontFamily: theme.font.serif,
                    fontStyle: "italic",
                    color: theme.colors.danger,
                    fontSize: 34,
                  }}
                >
                  {current.index}
                </span>
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: theme.colors.ink }}>
                    {current.heading}
                  </div>
                  <div style={{ fontSize: 15, color: theme.colors.muted }}>
                    {current.subheading}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 28,
                  border: `1px solid ${theme.colors.panelBorder}`,
                  borderRadius: theme.radius.sm,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 24, fontWeight: 800 }}>{current.taskLabel}</span>
                  <Pill label={current.taskStatus} background={theme.colors.danger} color="#fff" />
                </div>

                <div
                  style={{
                    marginTop: 20,
                    fontSize: 12,
                    letterSpacing: 1.5,
                    color: theme.colors.muted,
                    fontWeight: 700,
                  }}
                >
                  ASSIGNED TO
                </div>
                <div
                  style={{
                    marginTop: 8,
                    border: `2px solid ${theme.colors.danger}`,
                    borderRadius: theme.radius.sm,
                    padding: "14px 18px",
                    fontSize: 22,
                    fontWeight: 700,
                    color: theme.colors.ink,
                  }}
                >
                  {current.assignedValue}
                </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                <span style={{ color: theme.colors.danger, fontWeight: 800 }}>
                  ✕ {current.errorText}
                </span>
                {current.suggestions.map((s) => (
                  <Pill key={s} label={s} background="#efe9dd" color={theme.colors.ink} />
                ))}
              </div>
            </div>
          </AnimatedIn>
        </div>

        {caption ? (
          <AnimatedIn from="bottom" delay={30}>
            <div
              style={{
                marginTop: 40,
                background: theme.colors.ink,
                color: "#fff",
                display: "inline-block",
                padding: "16px 28px",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {caption}
            </div>
          </AnimatedIn>
        ) : null}
      </AbsoluteFill>

      {(webcam?.videoSrc || webcam?.imageSrc) && (
        <AnimatedIn
          from="right"
          delay={4}
          style={{ position: "absolute", right: 70, top: 110 }}
        >
          <WebcamFrame videoSrc={webcam.videoSrc} imageSrc={webcam.imageSrc} />
        </AnimatedIn>
      )}
    </AbsoluteFill>
  );
};
