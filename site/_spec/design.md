# ביתא נדל״ן: design direction
> Names: Alex Roit (אלכס רויט) is the FATHER, licensed broker no. 3141979, and he photographs every property. The son edits and runs social; his name is [למלא].
Tokens: `design-tokens.json`. Sections and their order follow `sitemap.md` (numbers 0–10 below match it).

**Direction.** A surveyor's field sheet printed in citrus-grove green on chalk paper: hairline rules, tabular numerals, a map scale bar whose units are days, and one Jaffa-orange mark that only ever means "you are here" or "sold".

**Palette origin:**
- Chalk `bg` is coastal light on kurkar limestone, a faint eucalyptus grey. It is not cream.
- `sand` is kurkar, used for one band only.
- `text` and `primary` are citrus leaf.
- `accent` is the Sharon orange.
- `muted`, `border` and the placeholders are eucalyptus bark and leaf.

I dropped hamra red because on a pale ground it turns into the terracotta cliché. The dark theme is a night grove: green-black, a sage CTA, and the same orange.

**Type.** Karantina (display, 700/400), IBM Plex Sans Hebrew (body) and IBM Plex Mono (digits only):
- **Karantina** is condensed and sign-painted, the letterform of a "למכירה" sign tied to a balcony rail. Its numerals (the crossed 7) can carry 0/3/7/14 at 200px.
- **Plex Sans Hebrew** is calm and engineered, like a survey sheet, and has real weights for hierarchy. Its width sets off Karantina's narrowness, so the pair works by contrast. It is also the internal board's face (`social/board.html`).
- **Plex Mono** gives tabular digits for days, specs, prices, the phone and licence numbers. Hebrew letters in the same run fall back to Plex Sans Hebrew, from the same superfamily.

Karantina and Plex Sans Hebrew both ship a `hebrew` subset on Google Fonts (verified). `research.md` suggested Frank Ruhl Libre. I didn't take it, because a serif on a pale ground drifts into the cream-and-serif look. From that research we keep the Monocle lessons: a numbered section label ("02 · שיווק"), hairlines, and one accent.

## Wordmark (type only)
- **Setting:** `ביתא` in Karantina 700, followed by `נדל״ן` (with gershayim) in Plex 600 at 0.32em.
- **Underline:** under ביתא runs the scale bar's segment pattern, a solid bar under **בית** and a hollow bar under **א**. It shows the pun and introduces the scale bar.
- **Sizes:** at least 28px in the header; `display2` in the footer and on the OG image.
- **Not part of it:** a β glyph, Latin "BETA", or a roof drawn over the ב.

## Signature: סרגל 14 הימים (the 14-day scale bar)
A surveyor's map scale bar whose units are days (`signature.scaleBar`):
- A 1px ink baseline with 15 ticks: major ticks at 0/3/7/14 (20px long, 2px wide) and minor ticks (8px, 1px).
- Under the baseline, a 6px band split at the major ticks: 0–3 solid, 3–7 hollow, 7–14 solid.
- Day 0 sits at inline-start (right) and day 14 at inline-end (left). The bar is never mirrored.
- A 12px orange marker with an ink ring sits on "today". On day 14 it becomes the נמכר tag.

It appears in exactly four places:
1. **Hero foot (M):** container width. Under each major tick sits a utility label with a few words (for example "יום 0 · כל הערוצים"). The marker is at 0. Below 720px only the numerals show, plus one link down to section 2.
2. **Section 2, איך נשווק (L), on the band:**
   - Before the bar: steps 01 צילום and 02 עריכה sit above it as a two-row hairline list labelled "לפני יום 0".
   - On the bar: steps 03–06 hang from ticks 0/3/7/14 on a 14-column day grid, taking columns 1–3, 4–7, 8–11 and 12–14 (the last aligned to the end tick). Each block's 1px `bandRule` continues its tick downward.
   - Numerals: the giant day numerals are the loud numbers, and 14 is in `bandAccent`. The step indices (03/06) stay small, in utility.
   - The end: the "נמכר!" step is where the marker lands, as the tag at day 14 plus one line about it.
   - Below 720px the bar runs vertically along the inline-start edge: major ticks only, segments alternating per block.
   - This is the only place the bar animates.
3. **Listings index rows (S):** a 96px bar in each row's status column, with the marker on the listing's launch day and the caption "יום 5/14". A sold row has every segment solid and the נמכר tag. In the empty state there is no bar.
4. **Closing band (M):** the bar is the section's top rule, with no labels and the נמכר tag at day 14. The page ends where every property should.

The wordmark underline echoes the bar; it does not count as a fifth placement. The bar is never a scroll-progress bar or a divider. It always has exactly 15 ticks, and its only colours are ink (`bandText` on the band) plus the orange marker.

## Layout (RTL)
- Use `<html dir="rtl" lang="he">` and logical properties only: `margin/padding-inline-*`, `inset-inline-*`, `border-inline-start`, `text-align: start/end`. Phone numbers sit in `<bdi dir="ltr">`. Directional transforms are written for RTL: moving toward inline-end means a negative X.
- The container is at most 77.5rem (1240px). The gutter is 16px on phones and grows to 40px. Bleeds go up to 90rem, and paragraph measure is 36rem.
- The grid is 4 columns on mobile, 8 from 720px and 12 from 1024px. Section 2 uses its own 14-column day grid.
- Everything is start-aligned; nothing is centred. Consecutive sections on the same ground are separated by a 1px ink rule across the container, carrying the section label in `label` style ("06 · אזורים").

| # | Structure | Ground | padding-block start / end |
|---|---|---|---|
| 0 Header | Start: the wordmark, and under it the licence line in utility/`muted` ("אלכס רויט, מתווך נדל״ן, רישיון מס׳ 3141979"; the son is not shown as a broker until a licence is given). End: 3 anchors (שיווק · נכסים · שאלות) and a small WhatsApp button. No hamburger. | bg → surface on scroll | 12px / 12px |
| 1 Hero (A) | 5/7 split. Start 5 cols: h1 (`display1`), one line, the proof line, the CTA. End 7 cols: the photo, bleeding to the viewport's inline-end edge (5:4, or 4:5 below 720px). The M bar runs under both. | bg | tight / base |
| 2 איך נשווק (B) | Hairline list for steps 01–02, then the L bar's 14-column day grid. | band | max / max |
| 3 כ-8,600 (C) | Full-bleed, type only. "כ-8,600" in `numeral` at start; the sum "5,400 + 3,200" in utility beside it; the page links. | sand (not orange: orange is reserved) | tight / tight |
| 4 אבא ובן (D) | Broken grid. Alex's frame (the father, 4:5, 4 cols) sits at start. The son's frame (1:1, 3 cols) sits at end, pushed down 96px. The quote (`display3`) spans the middle 5 cols, with its ״ hanging outside the column. | bg | loose / base |
| 5 נכסים (E) | Editorial index of hairline rows. Columns: city · neighbourhood (`heading`), rooms / m² / price (utility), deal type, the S bar, and a "לפרטים ←" WhatsApp link. | surface | base / loose |
| 6 אזורים (F) | City names in `display3` as one flowing line with · separators. At end, a small 2×2 table: מכירה/השכרה × מגורים/מסחרי. | bg | loose / tight |
| 7 המלצה (G) | One large quote, only if it is real; otherwise the section is not rendered. | bg | base / base |
| 8 שאלות (H) | 4/8 split. A sticky h2 at start; a `details/summary` list with hairlines, and a typed "+"/"−" in utility at inline-end. | bg | base / loose |
| 9 סגירה (C′) | Mirror of section 3, on the band. The M bar as top rule, one line, a large WhatsApp button, and 054-4944622 in `display3` as a `tel:` link. | band | base / max |
| 10 Footer | Two columns: business, "אלכס רויט, מתווך נדל״ן, רישיון מס׳ 3141979", phone / areas, social links, accessibility statement, © 2026. | bg | tight / tight + action bar |

**Listings index (section 5):** on desktop, hovering a row or focusing anything inside it shows its 4:3 photo pinned at the section's inline-end, as a plain `fast` opacity change with no slide or scale. On mobile each row starts with a 72px 1:1 thumbnail. The empty state has no empty frames, only the sitemap's one-line message and links.

## Photos
- **Source:** only the father's own photos and footage. Reel posters are frames from real footage. No stock, no AI stills and no AI people.
- **Ratios** (`aspectRatio`): hero 5:4 (4:5 on mobile), listing preview 4:3, listing thumbnail 1:1, reel 9:16, father (Alex) 4:5, son 1:1, OG 1200×630. Enforce each with `aspect-ratio` + `object-fit: cover`, and set `object-position` per photo.
- **Treatment:** daylight, corrected verticals, square corners. No HDR halo, sky swap, virtual staging, filter, duotone, vignette or hover zoom. Under every photo goes a credit line in utility, place · "צילום: אלכס רויט"; repeating it is the proof that he shoots everything.
- **Section 4 frames:** the owners don't appear on camera, so these default to stand-ins: Alex's (the father's) camera on a tripod in a living room, and the son's edit timeline.
- **Placeholders** (hero, section 4, OG) keep the final box:
  - Fill and border: `placeholderBg`, a 45° hatch (a 1px `placeholderHatch` line every 9px, like a hatched parcel on a תשריט), and a 1px dashed `placeholderBorder`.
  - Content: at inline-start top, "תמונה אמיתית תבוא כאן" in `label`. Under it, the shot brief (for example "חזית הבניין באור בוקר"). At inline-end bottom, the ratio in utility.
  - Markup: `role="img"` with the brief as its `aria-label`. No silhouettes or sun-and-mountain glyphs.
- **[למלא] text** gets the same language: utility font with a dashed `placeholderBorder` underline, so missing facts stay visible in review.

## Buttons, links, CTA
- **WhatsApp (primary):**
  - Look: `primary` fill with `onPrimary` text, radius 2px, minimum height 52px (56px in the mobile bar), padding-inline 22px/26px.
  - Content: the WhatsApp glyph (20px, `currentColor`) at inline-start, the label, and "←" at inline-end. The prefilled text follows the sitemap.
  - On the band it uses `bandCta`. It never uses WhatsApp brand green.
- **Phone (secondary) and links:** a text link, "או התקשרו 054-4944622", with the digits in utility. Links are text colour with a 1px underline at a 0.25em offset, 2px on hover, and visited links look the same. There is no outlined button anywhere on the page.
- **States:**
  - Hover: `primaryHover` (or `bandCtaHover`), and the ← moves 3px toward inline-end (`fast`, `standard`).
  - Active: `translateY(1px)`.
  - Focus-visible: 2px solid `focus` (`bandFocus` on the band), 3px offset, on every interactive element, including `summary` and index rows.
- **Mobile action bar (<720px):**
  - Placement: fixed to the bottom on `surface`, with a top hairline, `shadow.actionBar`, and padding for `env(safe-area-inset-bottom)`.
  - Content: WhatsApp at 2fr and phone at 1fr ("חיוג" with the number under it, behind a 1px `borderStrong` divider).
  - Behaviour: it appears once the hero CTA has scrolled away and hides while section 9 is on screen. No floating WhatsApp bubble.
- **נמכר tag:** `accent` fill, `onAccent` text in `label` style, a 1px `accentBorder`, radius 2px. It sits straight, not as a rotated stamp.

**Micro-interactions (only these two):**
1. **The bar draws once,** in section 2, when it is 35% visible. The ticks rise from day 0 to day 14 (`base` duration each, `tickStagger` apart) and the segments fill. Then the marker travels from 0 to 14 (`draw`, `travel`) and settles into the נמכר tag (`fast`, `settle`). It tells the whole plan in about a second.
2. **The phone number copies on desktop.** Under `(hover:hover) and (pointer:fine)`, clicking a phone link copies the number and the label reads "המספר הועתק" for 2.4s (`aria-live="polite"`). On touch devices it dials.

**prefers-reduced-motion: reduce:** the bar renders in its final state. There are no transforms (no arrow nudge, press or bar slide). Colour and opacity transitions are 80ms at most, and `scroll-behavior` is `auto`.

## Don't (this project)
- No cream, serif, terracotta or hamra; no near-black with acid green; no gradients except the placeholder hatch.
- Orange appears only in the marker, the נמכר tag, the band's 14, the focus ring and `::selection`. Never on buttons, headings, backgrounds or icons, and never as section 3's ground.
- The only icons are the WhatsApp glyph and ←. No houses, keys, roofs, map pins, handshakes or icon-in-a-square cards.
- No "BETA" badge, β glyph or Latin "Beta" in the visible UI; it reads as unfinished software.
- Karantina is never set below 36px and never used for body text, buttons, tables or labels. No letter-spacing on Hebrew and no faux italics.
- No centred hero, no three identical cards, no carousel, no fade-up on scroll, no parallax.
- No invented listings, prices or counts. "כ-8,600" is static text, never an animated counter.
- Only the two token shadows exist; radius is only 0, 2px, or the marker dot.
- Licence numbers are text in the header, near CTAs, in the listings and in the footer, never in a tooltip.

## Contrast (WCAG 2.x relative luminance, computed from the tokens)
| Pair | Min | Light | Dark |
|---|---|---|---|
| text / bg · surface · sand | 4.5 | 13.89 · 15.49 · 11.84 | 14.90 · 13.72 · 13.73 |
| muted / bg · surface · sand | 4.5 | 6.19 · 6.90 · 5.28 | 7.78 · 7.17 · 7.17 |
| onPrimary / primary · primaryHover | 4.5 | 8.77 · 11.45 | 8.93 · 10.80 |
| accentText / bg · surface · sand | 4.5 | 5.78 · 6.45 · 4.93 | 8.89 · 8.19 · 8.19 |
| onAccent / accent (נמכר tag) | 4.5 | 5.26 | 7.40 |
| bandText · bandMuted / band | 4.5 | 10.74 · 6.68 | 11.46 · 6.65 |
| bandAccent / band (the 14) | 3 | 5.02 | 5.69 |
| onBandCta / bandCta · hover | 4.5 | 10.74 · 12.53 | 8.93 · 10.80 |
| placeholderText / placeholderBg | 4.5 | 6.03 | 6.95 |
| focus / bg · surface · sand | 3 | 4.40 · 4.90 · 3.75 | 8.89 · 8.19 · 8.19 |
| bandFocus / band | 3 | 6.03 | 6.84 |
| borderStrong (scale bar) / bg · surface · sand | 3 | 13.89 · 15.49 · 11.84 | 11.73 · 10.80 · 10.81 |
| accent fill / bg | n/a | 2.64 | 7.40 |

In the light theme the orange fill is decorative only. The marker is identified by its ink ring (13.89:1) and the tag by its ink text (5.26:1), which is why orange is never used as text or as a lone signal there.
