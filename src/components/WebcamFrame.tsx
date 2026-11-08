import React from "react";
import { OffthreadVideo, Img } from "remotion";
import { theme } from "../theme";

/**
 * Rounded webcam/talking-head frame, pinned to a side of the frame.
 * Pass a video src for real footage, or an image src for a placeholder/still.
 * Omit both to render an empty placeholder panel (useful while drafting).
 */
export const WebcamFrame: React.FC<{
  videoSrc?: string;
  imageSrc?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}> = ({ videoSrc, imageSrc, width = 490, height = 700, style }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: theme.radius.lg,
        overflow: "hidden",
        boxShadow: theme.shadow.card,
        background: "#141a2e",
        position: "relative",
        ...style,
      }}
    >
      {videoSrc ? (
        <OffthreadVideo
          src={videoSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : imageSrc ? (
        <Img
          src={imageSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.4)",
            fontFamily: theme.font.sans,
            fontSize: 20,
          }}
        >
          Webcam placeholder
        </div>
      )}
    </div>
  );
};
