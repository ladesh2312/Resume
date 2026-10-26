import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import App from "../.prerender/App.js";

const template = await readFile("dist/index.html", "utf8");
const markup = renderToString(createElement(App));
if (!template.includes("<!--app-html-->"))
  throw new Error("Missing pre-render placeholder");
await writeFile("dist/index.html", template.replace("<!--app-html-->", markup));
console.log(
  "Pre-rendered the complete portfolio for immediate reading and SEO.",
);
