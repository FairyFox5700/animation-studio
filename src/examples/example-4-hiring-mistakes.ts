import { Scene } from "../content/schema";

/**
 * EXAMPLE 4 — Multi-mistake compilation
 * Three mistakeCompare scenes chained together — a "top mistakes" style
 * compilation video, showing how scenes of the same type stack cleanly.
 */
export const title = "Example 4 — Top 3 Hiring Mistakes";

export const scenes: Scene[] = [
  {
    type: "mistakeCompare",
    durationInFrames: 150,
    badge: "Mistake 01",
    titlePrefix: "Ghosted at",
    titleAccent: "offer",
    previous: {
      index: "00",
      heading: "Slow follow-up",
      subheading: "Candidates wait a week for feedback",
      taskLabel: "Send interview feedback",
      agentName: "recruiter-1",
      agentDesc: "Handles candidate comms",
      resultLabel: "Feedback sent — on time",
    },
    current: {
      index: "01",
      heading: "Offer stalls",
      subheading: "No owner for final approval",
      taskLabel: "Approve offer letter",
      taskStatus: "STALLED",
      assignedValue: "@hiring-mgr",
      errorText: "No response in 9 days",
      suggestions: ["finance", "vp-eng", "hr-ops"],
    },
    caption: "Slow offers lose top candidates",
  },
  {
    type: "mistakeCompare",
    durationInFrames: 150,
    badge: "Mistake 02",
    titlePrefix: "Lost in",
    titleAccent: "translation",
    previous: {
      index: "01",
      heading: "Offer stalls",
      subheading: "No owner for final approval",
      taskLabel: "Approve offer letter",
      agentName: "hiring-mgr",
      agentDesc: "Approves final offers",
      resultLabel: "Offer approved — escalated",
    },
    current: {
      index: "02",
      heading: "Mismatched terms",
      subheading: "Verbal offer ≠ written contract",
      taskLabel: "Generate offer letter",
      taskStatus: "FLAGGED",
      assignedValue: "@contract-gen",
      errorText: "Salary field does not match verbal offer",
      suggestions: ["review", "escalate", "regenerate"],
    },
    caption: "Mismatched terms erode trust fast",
  },
  {
    type: "mistakeCompare",
    durationInFrames: 150,
    badge: "Mistake 03",
    titlePrefix: "Silence after",
    titleAccent: "signing",
    previous: {
      index: "02",
      heading: "Mismatched terms",
      subheading: "Verbal offer ≠ written contract",
      taskLabel: "Generate offer letter",
      agentName: "contract-gen",
      agentDesc: "Builds offer contracts",
      resultLabel: "Terms matched — corrected",
    },
    current: {
      index: "03",
      heading: "No onboarding plan",
      subheading: "New hire has nothing on day one",
      taskLabel: "Create 30-60-90 plan",
      taskStatus: "MISSING",
      assignedValue: "@manager",
      errorText: "No plan found for start date",
      suggestions: ["template", "buddy-system", "manager-1:1"],
    },
    caption: "First impressions decide retention",
  },
];
