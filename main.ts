import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const source = join(botDir, "POST.json");
  const data = readFileSync(source);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "POST.json"), data);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(
    `failed to copy ${join(botDir, "POST.json")} to ${join(outputDir, "POST.json")}: ${detail}`,
  );
  process.exit(1);
}
