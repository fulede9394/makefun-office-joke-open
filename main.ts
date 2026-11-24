import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Office joke: sprint planning estimates, where two hours becomes two weeks.
const LINE =
  "Sprint planning is twelve people estimating a two-hour task at two weeks, finishing it in two hours, and spending the rest on 'refinement'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
