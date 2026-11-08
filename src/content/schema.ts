/**
 * SCENE SCHEMA
 * ============
 * This is the reusable "API" of the tool. To make a new video you normally
 * only need to edit `src/content/scenes.ts` (or create a new file following
 * this same shape) — no component code changes required.
 *
 * Each scene has a `type` that maps to a composition in
 * `src/compositions/registry.tsx`. Add new scene types there to extend
 * the library without touching existing videos.
 */

export type WebcamConfig = {
  videoSrc?: string;
  imageSrc?: string;
};

export type MistakeCompareScene = {
  type: "mistakeCompare";
  durationInFrames?: number;
  badge: string; // e.g. "MISTAKE 03"
  titlePrefix: string; // e.g. "Blocked on"
  titleAccent: string; // e.g. "arrival" (rendered in italic accent color)
  previous: {
    index: string; // "02"
    heading: string;
    subheading: string;
    taskLabel: string;
    agentName: string;
    agentDesc: string;
    resultLabel: string;
  };
  current: {
    index: string; // "03"
    heading: string;
    subheading: string;
    taskLabel: string;
    taskStatus: string; // "BLOCKED"
    assignedValue: string; // "@wrtier"
    errorText: string; // 'No agent named "wrtier"'
    suggestions: string[]; // ["writer", "researcher", "assistant"]
  };
  caption?: string;
  webcam?: WebcamConfig;
};

export type ProofCardScene = {
  type: "proofCard";
  durationInFrames?: number;
  videoTitle?: string; // small top-left label, e.g. tutorial title
  avatarSrc?: string;
  agentName: string; // "HERMES"
  tags: string[]; // ["SKILLS", "HERMES"]
  heading: string; // "Here's the proof"
  fileName: string; // "linkedin-post"
  fileMeta: string; // "SKILL.MD · SAVED AUTOMATICALLY"
  steps: string[];
  writtenBy: string; // "WRITTEN BY HERMES"
  webcam?: WebcamConfig;
};

export type Scene = MistakeCompareScene | ProofCardScene;

export type SceneWithTiming = Scene & {
  durationInFrames: number;
};
