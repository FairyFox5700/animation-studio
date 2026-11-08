import { Scene } from "../content/schema";

/**
 * EXAMPLE 1 — "AI Agent Mistakes" tutorial
 * Matches the original reference screenshots: a blocked-task comparison
 * card followed by a "proof" card showing a generated skill file.
 */
export const title = "Example 1 — Agent Mistakes Tutorial";

export const scenes: Scene[] = [
  {
    type: "mistakeCompare",
    durationInFrames: 180,
    badge: "Mistake 03",
    titlePrefix: "Blocked on",
    titleAccent: "arrival",
    previous: {
      index: "02",
      heading: "Vague profile",
      subheading: "The wrong agent gets the work",
      taskLabel: "Fact-check the blog post",
      agentName: "agent-2",
      agentDesc: "Fact-checks content",
      resultLabel: "Right agent — assigned",
    },
    current: {
      index: "03",
      heading: "Blocked task",
      subheading: "An agent name that doesn't exist",
      taskLabel: "Draft newsletter",
      taskStatus: "BLOCKED",
      assignedValue: "@wrtier",
      errorText: 'No agent named "wrtier"',
      suggestions: ["writer", "researcher", "assistant"],
    },
    caption: "Agent names assigned that don't exist",
    webcam: {
      // imageSrc: "webcam-still.jpg", // put files in /public and reference by filename
    },
  },
  {
    type: "proofCard",
    durationInFrames: 150,
    videoTitle: "Hermes Agent Tutorial: From Zero to a Team of AI Agents",
    agentName: "Hermes",
    tags: ["SKILLS", "HERMES"],
    heading: "Here's the proof",
    fileName: "linkedin-post",
    fileMeta: "SKILL.MD · SAVED AUTOMATICALLY",
    steps: [
      "Pull the research notes",
      "Hook the reader in line one",
      "Match the brand voice",
    ],
    writtenBy: "WRITTEN BY HERMES",
    webcam: {
      // videoSrc: "webcam-clip.mp4",
    },
  },
];
