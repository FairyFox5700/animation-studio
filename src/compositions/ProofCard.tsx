import React from "react";
import { AbsoluteFill, Img } from "remotion";
import { theme } from "../theme";
import { AnimatedIn } from "../components/Animations";
import { WebcamFrame } from "../components/WebcamFrame";
import { ProofCardScene } from "../content/schema";

export const ProofCard: React.FC<ProofCardScene> = ({
  videoTitle,
  avatarSrc,
  agentName,
  tags,
  heading,
  fileName,
  fileMeta,
  steps,
  writtenBy,
  webcam,
}) => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(120deg, #0b1230 0%, #141c45 45%, #1c2a66 100%)",
      }}
    >
      {/* vertical curtain texture, like the reference background */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 26px)",
        }}
      />

      {videoTitle ? (
        <AnimatedIn from="top" delay={0} style={{ position: "absolute", top: 28, left: 28 }}>
          <div
            style={{
              fontFamily: theme.font.sans,
              fontWeight: 800,
              fontSize: 22,
              color: "#fff",
            }}
          >
            {videoTitle}
          </div>
        </AnimatedIn>
      ) : null}

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 560, fontFamily: theme.font.sans }}>
          {/* profile header */}
          <AnimatedIn from="bottom" delay={6}>
            <div
              style={{
                background: theme.colors.panelBg,
                borderRadius: theme.radius.lg,
                boxShadow: theme.shadow.card,
                padding: "22px 26px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: theme.radius.md,
                  overflow: "hidden",
                  background: "#e5e0d2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {avatarSrc ? (
                  <Img
                    src={avatarSrc}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span style={{ fontSize: 26 }}>🤖</span>
                )}
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: theme.colors.ink }}>
                  {heading}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1,
                    color: theme.colors.muted,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: theme.colors.success,
                      display: "inline-block",
                    }}
                  />
                  {tags.join(" · ")}
                </div>
              </div>
            </div>
          </AnimatedIn>

          {/* file / skill card */}
          <AnimatedIn from="bottom" delay={14}>
            <div
              style={{
                background: theme.colors.panelBg,
                borderRadius: theme.radius.lg,
                boxShadow: theme.shadow.card,
                padding: "26px 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "#6a63e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  📄
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: theme.font.mono,
                      fontWeight: 700,
                      fontSize: 20,
                      color: theme.colors.ink,
                    }}
                  >
                    {fileName}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: 1,
                      fontWeight: 700,
                      color: theme.colors.muted,
                      marginTop: 2,
                    }}
                  >
                    {fileMeta}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 18,
                  background: "#efe9dd",
                  borderRadius: theme.radius.sm,
                  padding: "18px 20px",
                }}
              >
                {steps.map((step, i) => (
                  <AnimatedIn key={step} from="left" delay={20 + i * 6}>
                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                        fontFamily: theme.font.mono,
                        fontSize: 17,
                        color: theme.colors.ink,
                        marginBottom: i === steps.length - 1 ? 0 : 10,
                      }}
                    >
                      <span style={{ color: theme.colors.accent, fontWeight: 700 }}>
                        {i + 1}.
                      </span>
                      {step}
                    </div>
                  </AnimatedIn>
                ))}
              </div>

              <AnimatedIn from="bottom" delay={20 + steps.length * 6 + 6}>
                <div
                  style={{
                    marginTop: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    border: `2px solid ${theme.colors.accent}`,
                    color: theme.colors.accent,
                    borderRadius: theme.radius.pill,
                    padding: "10px 20px",
                    fontWeight: 800,
                    fontSize: 15,
                    fontFamily: theme.font.mono,
                  }}
                >
                  ✎ {writtenBy}
                </div>
              </AnimatedIn>
            </div>
          </AnimatedIn>
        </div>
      </AbsoluteFill>

      {(webcam?.videoSrc || webcam?.imageSrc) && (
        <AnimatedIn
          from="bottom"
          delay={2}
          style={{ position: "absolute", right: -40, bottom: -60 }}
        >
          <WebcamFrame
            videoSrc={webcam.videoSrc}
            imageSrc={webcam.imageSrc}
            width={360}
            height={360}
            style={{ borderRadius: "50%" }}
          />
        </AnimatedIn>
      )}
    </AbsoluteFill>
  );
};
