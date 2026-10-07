import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const slugs = [
  ...readFileSync("data/products.ts", "utf8").matchAll(/slug:\s*"([^"]+)"/g),
].map((match) => match[1]);

const keys = ["en", "fa"];
for (const locale of ["en", "fa"]) {
  for (const slug of slugs) {
    keys.push(`${locale}/products/${slug}`);
  }
}

if (process.argv[2] === "--keys") {
  process.stdout.write(`${keys.join("\n")}\n`);
  process.exit(0);
}

const dist = "dist";
const index = join(dist, "index.html");
copyFileSync(index, join(dist, "404.html"));
for (const key of keys) {
  const dest = join(dist, key, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(index, dest);
}
