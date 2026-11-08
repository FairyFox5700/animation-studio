import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// The automatic Chrome Headless Shell download is unavailable in this
// environment, so fall back to the system-installed Microsoft Edge
// (Chromium-based, fully compatible with Remotion's renderer).
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
Config.setBrowserExecutable(edgePath);
