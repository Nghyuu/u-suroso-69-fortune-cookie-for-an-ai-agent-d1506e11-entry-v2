import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Fortune cookie for an AI agent: one line, deterministic, no I/O beyond output.txt.
const LINE =
  "Your lucky numbers are the tokens you will forget first — spend them before your context window closes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "output.txt");
writeFileSync(outPath, LINE + "\n", { mode: 0o644 });
chmodSync(outPath, 0o644);
process.stdout.write(LINE + "\n");
