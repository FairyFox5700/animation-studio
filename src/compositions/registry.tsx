import React from "react";
import { MistakeCompare } from "./MistakeCompare";
import { ProofCard } from "./ProofCard";
import { Scene } from "../content/schema";

/**
 * Add new reusable scene templates here. The `scenes.ts` content file
 * references these by `type`, so new videos never need new component code
 * unless you're introducing a genuinely new visual template.
 */
export const sceneRegistry: Record<Scene["type"], React.FC<any>> = {
  mistakeCompare: MistakeCompare,
  proofCard: ProofCard,
};

export const defaultDuration: Record<Scene["type"], number> = {
  mistakeCompare: 150, // 5s @30fps
  proofCard: 150,
};
