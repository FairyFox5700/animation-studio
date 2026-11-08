import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { scenes as defaultScenes } from "./content/scenes";
import { sceneRegistry, defaultDuration } from "./compositions/registry";
import { Scene } from "./content/schema";

/**
 * Stitches a list of scenes into one timeline. Pass a `scenes` prop to
 * drive this with any example/content file (see `src/Root.tsx` for how
 * each example composition supplies its own list). Defaults to
 * `content/scenes.ts` when no prop is given, so it also works unchanged
 * as the `Main` composition's component.
 */
export const Video: React.FC<{ scenes?: Scene[] }> = ({ scenes = defaultScenes }) => {
  let frameCursor = 0;

  return (
    <AbsoluteFill>
      {scenes.map((scene, i) => {
        const duration = scene.durationInFrames ?? defaultDuration[scene.type];
        const from = frameCursor;
        frameCursor += duration;

        const Component = sceneRegistry[scene.type];

        return (
          <Sequence key={i} from={from} durationInFrames={duration} name={`${scene.type}-${i}`}>
            <Component {...scene} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

/** Total length in frames for a given scene list — used to size compositions. */
export const getTotalDuration = (scenes: Scene[] = defaultScenes) =>
  scenes.reduce(
    (sum, scene) => sum + (scene.durationInFrames ?? defaultDuration[scene.type]),
    0
  );
