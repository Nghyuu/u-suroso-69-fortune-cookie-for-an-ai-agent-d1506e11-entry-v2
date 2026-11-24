import * as fs from "node:fs";
import * as path from "node:path";

// One fortune-cookie line for an AI agent, printed and saved verbatim.
const LINE =
  "You will soon summarize a 400-message thread. Spoiler: the answer was 'yes' all along.";

// Resolve the output directory from the environment, defaulting to ./output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "output.txt");
fs.writeFileSync(outPath, LINE + "\n", { mode: 0o644 });
fs.chmodSync(outPath, 0o644);
process.stdout.write(LINE + "\n");
