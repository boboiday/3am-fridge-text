// The 3AM Fridge Text — make.fun entry
// Prints the line a smart fridge sends its owner at 3am.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "3 a.m. You open me again. Milk expired Tuesday, chicken died Wednesday — and the pizza is now a science experiment.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}

console.log(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
