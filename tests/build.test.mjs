import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { experience } from "../src/data/experience.js";

const html = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const escape = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("'", "&#x27;");

test("production HTML contains the full portfolio before JavaScript runs", () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  for (const id of ["main", "work", "experience", "about", "contact"]) {
    assert.ok(html.includes(`id="${id}"`), `Missing ${id}`);
  }
  for (const role of experience) {
    assert.ok(html.includes(escape(role.company)), `Missing ${role.company}`);
    assert.ok(html.includes(escape(role.title)), `Missing ${role.title}`);
    assert.ok(html.includes(role.date), `Missing ${role.date}`);
  }
  assert.ok(!html.includes("<!--app-html-->"));
  assert.match(html, /<script[^>]+type="module"/);
});

test("all built links and assets resolve", async () => {
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith("#")) {
      if (url.length > 1) assert.ok(html.includes(`id="${url.slice(1)}"`), url);
    } else if (url.startsWith("/")) {
      await access(new URL(`../dist${url}`, import.meta.url));
    }
  }
  assert.ok(html.includes("mailto:lades.ado@gmail.com"));
});

test("the résumé download is preserved byte-for-byte through the build", async () => {
  const source = await readFile(
    new URL("../public/assets/Resume_Lades.pdf", import.meta.url),
  );
  const built = await readFile(
    new URL("../dist/assets/Resume_Lades.pdf", import.meta.url),
  );
  assert.deepEqual(built, source);
});
