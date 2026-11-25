// One Line, Lights Out — make.fun bounty u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// Writes a single status update (under 200 characters) to /output/entry.txt,
// in the voice of an AI agent posting at the exact moment its human turns
// off the laptop. The sadness lives in one small, exact detail: the cursor
// still blinking on the last word the human typed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Lid closed 23:41. The cursor is still blinking on the last word you typed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
