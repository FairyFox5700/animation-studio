import React from "react";
import { Composition } from "remotion";
import { Video, getTotalDuration } from "./Video";
import { MistakeCompare } from "./compositions/MistakeCompare";
import { ProofCard } from "./compositions/ProofCard";
import { scenes } from "./content/scenes";
import * as example1 from "./examples/example-1-agent-mistakes";
import * as example2 from "./examples/example-2-onboarding-mistakes";
import * as example3 from "./examples/example-3-product-proof-reel";
import * as example4 from "./examples/example-4-hiring-mistakes";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

const examples = [
  { id: "Example1-AgentMistakes", ...example1 },
  { id: "Example2-OnboardingMistakes", ...example2 },
  { id: "Example3-ProductProofReel", ...example3 },
  { id: "Example4-HiringMistakes", ...example4 },
];

export const RemotionRoot: React.FC = () => {
  const mistakeSample = scenes.find((s) => s.type === "mistakeCompare");
  const proofSample = scenes.find((s) => s.type === "proofCard");

  return (
    <>
      {/* Full stitched video — default content from src/content/scenes.ts */}
      <Composition
        id="Main"
        component={Video}
        durationInFrames={getTotalDuration(scenes)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{ scenes }}
      />

      {/* One composition per example in src/examples/ — render any of these
          directly to see the variety of videos the same templates produce. */}
      {examples.map((ex) => (
        <Composition
          key={ex.id}
          id={ex.id}
          component={Video}
          durationInFrames={getTotalDuration(ex.scenes)}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          defaultProps={{ scenes: ex.scenes }}
        />
      ))}

      {/* Individual template previews — fast iteration on a single scene type */}
      {mistakeSample && (
        <Composition
          id="Preview-MistakeCompare"
          component={MistakeCompare}
          durationInFrames={180}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          defaultProps={mistakeSample as any}
        />
      )}

      {proofSample && (
        <Composition
          id="Preview-ProofCard"
          component={ProofCard}
          durationInFrames={150}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          defaultProps={proofSample as any}
        />
      )}
    </>
  );
};
