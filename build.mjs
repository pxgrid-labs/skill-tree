import { cpSync, mkdirSync, rmSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);

for (const file of ["index.html", "data.json", "assets"]) {
  cpSync(join(root, file), join(dist, file), {
    recursive: true,
    filter: (source) => basename(source) !== ".DS_Store",
  });
}
