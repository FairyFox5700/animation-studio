import { Scene } from "../content/schema";

/**
 * EXAMPLE 2 — "Onboarding Mistakes" tutorial
 * Same templates, totally different subject matter: a SaaS onboarding
 * flow instead of AI agents. Demonstrates how far re-skinning the content
 * file alone can take you.
 */
export const title = "Example 2 — Onboarding Mistakes";

export const scenes: Scene[] = [
  {
    type: "mistakeCompare",
    durationInFrames: 180,
    badge: "Mistake 01",
    titlePrefix: "Lost at",
    titleAccent: "signup",
    previous: {
      index: "00",
      heading: "No welcome email",
      subheading: "Users don't know what's next",
      taskLabel: "Send welcome sequence",
      agentName: "email-bot",
      agentDesc: "Sends onboarding emails",
      resultLabel: "Welcome email — delivered",
    },
    current: {
      index: "01",
      heading: "Dead-end form",
      subheading: "A required field that was never built",
      taskLabel: "Complete company profile",
      taskStatus: "STUCK",
      assignedValue: "#company_size",
      errorText: 'Field "company_size" not found',
      suggestions: ["team_size", "org_size", "headcount"],
    },
    caption: "Missing fields block 1 in 4 signups",
  },
  {
    type: "proofCard",
    durationInFrames: 150,
    videoTitle: "Onboarding Teardown: 5 Mistakes Killing Activation",
    agentName: "Atlas",
    tags: ["ANALYTICS", "ATLAS"],
    heading: "Here's the fix",
    fileName: "signup-flow",
    fileMeta: "FLOW.JSON · UPDATED JUST NOW",
    steps: [
      "Collect only what's needed",
      "Validate before submit",
      "Confirm with a success state",
    ],
    writtenBy: "FIXED BY ATLAS",
  },
];
