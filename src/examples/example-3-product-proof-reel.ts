import { Scene } from "../content/schema";

/**
 * EXAMPLE 3 — Product proof reel
 * Two proof cards back-to-back for a product-marketing style short,
 * showing the proofCard template can carry a whole video by itself.
 */
export const title = "Example 3 — Product Proof Reel";

export const scenes: Scene[] = [
  {
    type: "proofCard",
    durationInFrames: 150,
    videoTitle: "Shipped This Week",
    agentName: "Nova",
    tags: ["RELEASE", "NOVA"],
    heading: "Auto-generated changelog",
    fileName: "changelog-oct",
    fileMeta: "CHANGELOG.MD · SAVED AUTOMATICALLY",
    steps: [
      "Scan merged pull requests",
      "Group by feature area",
      "Write in plain English",
    ],
    writtenBy: "WRITTEN BY NOVA",
  },
  {
    type: "proofCard",
    durationInFrames: 150,
    videoTitle: "Shipped This Week",
    agentName: "Nova",
    tags: ["SUPPORT", "NOVA"],
    heading: "Auto-drafted reply",
    fileName: "ticket-4821",
    fileMeta: "REPLY.MD · DRAFTED IN 4s",
    steps: [
      "Read the full ticket thread",
      "Pull the relevant doc section",
      "Match our support tone",
    ],
    writtenBy: "DRAFTED BY NOVA",
  },
];
