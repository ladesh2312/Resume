# Lades Hutabarat portfolio

Responsive, buildless personal website sourced from the user-supplied résumé.

## Edit
Update copy in `dist/index.html`, styling in `dist/style.css`, and the original résumé in `dist/assets/Resume_Lades.pdf`. The email link uses qatest2312@gmail.com. Earlier roles use native HTML details/summary, so they work without JavaScript. The only script updates the footer year.

## Preview
Run `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist` from this folder and visit http://127.0.0.1:4173.

## Assets
Manrope is self-hosted under its SIL Open Font License, included in assets/manrope-license.txt. The favicon and coverage diagram use native vector geometry and CSS. No stock photos or generated portraits.

## Verification
Checked layouts at 1440, 433, 390 and 320 CSS pixels without horizontal overflow. Confirmed the earlier-experience disclosure expands, all local links and assets resolve, the font loads, and the downloadable PDF is byte-identical to the source. Visual reviewer: ship. The optional design detector was unavailable because its runtime cache could not be initialized.

## Missing optional inputs
No portrait, LinkedIn, GitHub or public project URLs were supplied. These are omitted. Employment marked present follows the supplied résumé.

## Hosting
Site identity is retained in `.openai/hosting.json`; static output is `dist/`. Access begins owner-private. No analytics or backend integrations.
