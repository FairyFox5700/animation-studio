# Animation Studio

A reusable Remotion (React/TypeScript) toolkit for tutorial-style overlay
videos — the "mistake callout" and "here's the proof" card animations shown
in talking-head tutorials.

## Quick start

```bash
npm install
npm start      # opens Remotion Studio for live preview
npm run build  # renders Main composition to out/video.mp4
```

## How reuse works

You almost never need to touch component code. To make a **new video**:

1. Open `src/content/scenes.ts` (or copy one of the files in `src/examples/`).
2. Edit the `scenes` array — reorder, duplicate, or add scene objects.
   Each scene is plain data (`type`, text, labels, webcam source).
3. Drop webcam footage/images into `public/` and set `webcam.videoSrc` or
   `webcam.imageSrc` to the filename.
4. `npm start` to preview live, `npm run build` to render the final MP4.

To keep a video around permanently alongside the others, add it as a new
file in `src/examples/` and register it in `src/Root.tsx` (copy the pattern
used for the existing examples) — it'll show up as its own composition in
Remotion Studio and get its own renderable id.

## Examples

Four ready-to-render examples ship in `src/examples/`, all built from the
same two templates — proof that the tool generalizes beyond the original
reference video:

| Composition id                    | File                                        | What it shows                                   |
|------------------------------------|----------------------------------------------|--------------------------------------------------|
| `Example1-AgentMistakes`          | `example-1-agent-mistakes.ts`                | Original reference: blocked-task card + proof card |
| `Example2-OnboardingMistakes`     | `example-2-onboarding-mistakes.ts`           | Same templates, SaaS onboarding subject matter    |
| `Example3-ProductProofReel`       | `example-3-product-proof-reel.ts`            | Two `proofCard` scenes chained — proof-only reel  |
| `Example4-HiringMistakes`         | `example-4-hiring-mistakes.ts`               | Three `mistakeCompare` scenes — compilation style |

Preview any of them in Remotion Studio (`npm start`, pick the composition
in the sidebar) or render directly:

```bash
npx remotion render Example1-AgentMistakes out/example1.mp4
npx remotion render Example2-OnboardingMistakes out/example2.mp4
npx remotion render Example3-ProductProofReel out/example3.mp4
npx remotion render Example4-HiringMistakes out/example4.mp4
```

`Main` renders whatever is currently in `src/content/scenes.ts` (defaults
to a re-export of Example 1).

## Available scene templates

| `type`            | Matches reference          | Key fields                                   |
|-------------------|-----------------------------|-----------------------------------------------|
| `mistakeCompare`  | "Mistake 0X" two-panel card | `badge`, `titlePrefix/Accent`, `previous`, `current`, `caption` |
| `proofCard`       | "Here's the proof" skill card | `heading`, `fileName`, `steps`, `writtenBy`  |

## Extending with new templates

1. Add the new shape to `src/content/schema.ts` (a new member of the `Scene` union).
2. Build the component in `src/compositions/YourTemplate.tsx` using the shared
   primitives in `src/components/` (`GridBackground`, `Badge`, `Pill`,
   `AnimatedIn`, `TypeOn`, `WebcamFrame`) so it stays visually consistent.
3. Register it in `src/compositions/registry.tsx`.
4. Use it from `scenes.ts` like any other scene.

## Shared building blocks (`src/components/`)

- **`GridBackground`** — the dotted-grid texture behind every scene.
- **`Badge` / `Pill`** — rounded label chips (status badges, tags, suggestions).
- **`AnimatedIn`** — generic spring-based entrance wrapper (`from="bottom" | "top" | "left" | "right" | "scale"`). Wrap anything to animate it in.
- **`TypeOn`** — typewriter-reveal text helper.
- **`WebcamFrame`** — rounded/circular webcam video or image panel, accepts `videoSrc`/`imageSrc`.

## Theming

All colors, fonts, radii and shadows live in `src/theme.ts`. Change them once
to re-skin every video and every template consistently.

## Rendering a specific composition

```bash
npx remotion render Main out/video.mp4
npx remotion render Preview-MistakeCompare out/mistake-preview.mp4
npx remotion render Preview-ProofCard out/proof-preview.mp4
```
