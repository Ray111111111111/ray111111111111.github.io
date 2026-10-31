import { build, createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const configFile = resolve("vite.pages.config.mts");
await build({ configFile });
const server = await createServer({ configFile, server: { middlewareMode: true }, appType: "custom" });
try {
  for (const entry of ["", "orbit/"]) {
    const { render } = await server.ssrLoadModule(`/${entry}render.tsx`);
    const file = resolve(`dist-pages/${entry}index.html`);
    const html = await readFile(file, "utf8");
    if (!/<div id="root">\s*<\/div>/.test(html)) throw new Error("Missing static rendering mount");
    await writeFile(file, html.replace(/<div id="root">\s*<\/div>/, () => `<div id="root">${render()}</div>`));
  }
  await writeFile(resolve("dist-pages/.nojekyll"), "");
  console.log("Static portfolio built and prerendered in dist-pages. No backend required.");
} finally { await server.close(); }
