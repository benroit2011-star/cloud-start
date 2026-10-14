# ביתא נדל״ן: design direction

**Direction.** A surveyor's field sheet printed in citrus-grove green on chalk paper: hairline rules, tabular numerals, a map scale bar whose units are days, and one Jaffa-orange mark that only ever means "you are here" or "sold".

**Palette origin** (values in `design-tokens.json`). Chalk `bg` = coastal light on kurkar limestone, a faint eucalyptus grey, deliberately not cream. `sand` = kurkar, used for one band only. `text` and `primary` = citrus leaf. `accent` = the Sharon orange. `muted`, `border` and placeholders = eucalyptus bark and leaf. I tried hamra red and dropped it: on a pale ground it turns into the terracotta cliché. The dark theme is a night grove: green-black, sage CTA, the same orange.

**Type.** Karantina (display, 700/400) + IBM Plex Sans Hebrew (body) + IBM Plex Mono (digits only). Karantina is condensed and sign-painted. It is the letterform of a "למכירה" sign tied to a balcony rail, and its numerals (the crossed 7) can carry 0/3/7/14 at 200px. Plex Sans Hebrew is calm and engineered, like a survey sheet. It reads well at 17px, has real weights for hierarchy, and its width sets off Karantina's narrowness, so the pair works by contrast. Plex Mono gives tabular digits for days, specs, prices and licence numbers. Hebrew letters in the same run fall back to Plex Sans Hebrew, which is from the same superfamily. Karantina and Plex Sans Hebrew are both verified to ship a `hebrew` subset on Google Fonts. Plex is also the internal board's body face (`social/board.html`), which keeps a future "board as a product" in the family.

## Wordmark (type only)
`ביתא` in Karantina 700, followed by `נדל״ן` (with gershayim) in Plex 600 at 0.32em. Under ביתא runs the scale bar's segment pattern: a solid bar under **בית** and a hollow bar under **א**. That is the whole mark. It shows the pun (בית is inside ביתא) and introduces the scale bar before the visitor meets it. Minimum size is 28px in the header; the footer uses `display2`. There is no β glyph, no Latin "BETA" and no roof drawn over the ב.

## Signature: סרגל 14 הימים (the 14-day scale bar)
A surveyor's map scale bar whose units are days (`signature.scaleBar`):
- A 1px ink baseline with 15 ticks: major ticks at 0/3/7/14 (20px long, 2px wide) and minor ticks (8px, 1px).
- Under the baseline, a 6px band split at the major ticks: 0–3 solid, 3–7 hollow, 7–14 solid.
- Day 0 sits at inline-start (right) and day 14 at inline-end (left). The bar is never mirrored.
- A 12px orange marker with an ink ring sits on "today". On day 14 it becomes the נמכר tag.

It appears in exactly four places:
1. **Hero foot (M):** container width, under the hero split. Under each major tick sits a utility label with one short line (for example "יום 0 · כל הערוצים"). The marker is at 0. Below 720px only the numerals show, plus one link line down to the launch band.
2. **Launch band (L):** the bar is the structure of this section. It spans a 14-column day grid, and the numerals 0/3/7/14 hang under their ticks in `numeral` size; 14 is in `bandAccent`. Each day's content hangs from its tick: day 0 takes columns 1–3, day 3 takes 4–7, day 7 takes 8–11, and day 14 takes 12–14, aligned to the end tick. Each block has a 1px `bandRule` on its inline-start edge (the day-14 block on its inline-end edge) that continues the tick downward. Below 720px the bar turns vertical along the inline-start edge, with day 0 at the top, major ticks only, and segments alternating solid/hollow/solid per block. This is the only place the bar animates.
3. **Listing sheets (S):** a bar at the foot of each sheet. The marker sits on the listing's launch day (`data-day`) with the caption "יום 5 מתוך 14". A sold listing has every segment solid and the נמכר tag at the end. Placeholder sheets show the bar with no marker.
4. **Final CTA (M):** the bar is the section's top rule, with no labels and the נמכר tag at day 14. The page ends where every property should.

The wordmark underline echoes the bar; it does not count as a fifth placement. The bar is never a scroll-progress bar or a divider for other sections. It always has exactly 15 ticks, and its only colours are ink (`bandText` on the band) plus the orange marker.

## Layout (RTL)
- Use `<html dir="rtl" lang="he">` and logical properties only: `margin/padding-inline-*`, `inset-inline-*`, `border-inline-start`, `text-align: start/end`. Phone numbers sit in `<bdi dir="ltr">`. Write directional transforms for RTL: moving toward inline-end means a negative X.
- The container is at most 77.5rem (1240px). The gutter is `clamp()` from 16px on phones to 40px. Bleeds go up to 90rem, and paragraph measure is 36rem.
- The grid is 4 columns on mobile, 8 from 720px and 12 from 1024px, with gaps of 16–24px. The launch band uses its own 14-column day grid.
- Everything is start-aligned (right). Nothing is centred: not the hero, not the headings.

| Section | Structure (each used once) | Ground | padding-block start / end |
|---|---|---|---|
| Header | Wordmark at start. At end: 3 anchor links and a small WhatsApp button (desktop). No hamburger menu. | bg | 12px / 12px |
| 1 Hero (owners) | 7/5 split: h1, lead and CTA in the start 7 columns; a 4:5 photo in 5 columns that bleeds to the viewport's inline-end edge; the M bar under both. | bg | tight / base |
| 2 המסלול | Editorial ordered list of 4 rows with hairlines between them: step word (`display3`, 3 cols), what happens (6 cols), who does it as a utility caption (3 cols). | bg | loose / base |
| 3 חבילת ההשקה | 14-column day grid hanging from the L bar. | band | max / max |
| 4 ערוצים | Sticky "כ-8,600" figure (`display3` + source label) in 4 cols, beside a real table in 8 cols: rows are channels, columns are קהל and days 0/3/7/14. | surface | base / loose |
| 5 נכסים בשיווק | Mosaic: one 7-col sheet spanning two rows, plus two stacked 5-col sheets. Stacks on mobile. No slider. | sand | loose / loose |
| 6 אבא ובן | Pull quote in `display3` across 10 cols, with the opening ״ hanging outside the column at inline-start. Two 4:5 frames offset vertically by 64px. | bg | loose / tight |
| 7 Final CTA | Start-aligned h2, lead, WhatsApp button, phone link and licence line, with the M bar as the top rule. | band | base / max |
| Footer | Two columns: details and licences / areas. Everything stays [למלא] until filled. | bg | tight / tight + action bar |

**Channels table rule:** fill only facts that are in the brief. Day 0 covers every channel and day 14 covers the groups. The day 3 and day 7 cells stay [למלא] until the owners confirm them.

## Photos
- **Source:** only the father's own photos and footage. Reel posters are frames from real footage. No stock, no AI stills and no AI people.
- **Ratios** (`aspectRatio`): hero 4:5, listing 4:3, reel 9:16, neighbourhood 3:2, portrait or stand-in 4:5, detail 1:1. Enforce each with `aspect-ratio` + `object-fit: cover`, and set `object-position` per photo.
- **Treatment:** daylight, corrected verticals, square corners. No HDR halo, sky swap, virtual staging, filters, duotone, vignette or hover zoom.
- **Credit line:** under every photo, in utility: place · "צילום: [שם האב]". Repeating the credit is the proof that he shoots everything.
- **אבא ובן frames:** the owners don't appear on camera, so these default to stand-ins (the camera on a tripod in a living room, the son's edit timeline) unless the owners choose to use portraits.
- **Placeholders** keep the final ratio and box:
  - Fill and border: `placeholderBg` with a 45° hatch (a 1px `placeholderHatch` line every 9px, like a hatched parcel on a תשריט) and a 1px dashed `placeholderBorder`.
  - Content: at inline-start top, "תמונה אמיתית תבוא כאן" in label style. Under it, the shot brief (for example "חזית הבניין באור בוקר"). At inline-end bottom, the ratio in utility ("4:5").
  - Markup: `role="img"` with the brief as its `aria-label`. No silhouettes, no sun-and-mountain glyph.
- **[למלא] text** follows the same language: utility font with a dashed `placeholderBorder` underline, so missing facts stay visible in review.

## Buttons, links, CTA
- **WhatsApp (primary):**
  - Look: `primary` fill with `onPrimary` text, radius 2px, minimum height 52px (56px in the mobile bar), padding-inline 22px/26px.
  - Content: the WhatsApp glyph (20px, `currentColor`) at inline-start, the label, and "←" in utility at inline-end. It opens a prefilled wa.me message.
  - On the band it uses `bandCta` / `onBandCta`. It never uses WhatsApp brand green.
- **Phone (secondary):** a text link, not a box: "או להתקשר" plus the number in utility digits, with a 1px underline at a 0.25em offset. There is no outlined button anywhere on the page.
- **Links:** text colour with a 1px underline that becomes 2px on hover. Visited links look the same.
- **States:**
  - Hover: `primaryHover` (or `bandCtaHover`), and the ← moves 3px toward inline-end (`fast`, `standard`).
  - Active: `translateY(1px)`.
  - Focus-visible: 2px solid `focus` (`bandFocus` on the band), 3px offset, on every interactive element.
- **Mobile action bar (<720px):**
  - Placement: fixed to the bottom on `surface`, with a top hairline, `shadow.actionBar`, and padding for `env(safe-area-inset-bottom)`.
  - Content: WhatsApp at 2fr and phone at 1fr ("חיוג" with the number under it, behind a 1px `borderStrong` divider).
  - Behaviour: it appears once the hero CTA has scrolled away and hides while the final CTA is on screen. It replaces any floating WhatsApp bubble.
- **נמכר tag:** `accent` fill, `onAccent` text in label style, a 1px `accentBorder`, radius 2px. It sits straight, not as a rotated stamp.
- **Listing sheets on hover:** the border turns `borderStrong`, plus `shadow.sheetHover` in the light theme. Nothing moves.

**Micro-interactions (only these two):**
1. **The bar draws once,** in the launch band, when the band is 35% visible. The ticks rise from day 0 to day 14 (`base` duration each, `tickStagger` apart) and the segments fill. Then the marker travels from 0 to 14 (`draw`, `travel`) and settles into the נמכר tag (`fast`, `settle`). It tells the whole plan in about a second.
2. **The phone number copies on desktop.** Under `(hover:hover) and (pointer:fine)`, clicking the number copies it and the label reads "המספר הועתק" for 2.4s (`aria-live="polite"`). On touch devices it simply dials.

**prefers-reduced-motion: reduce:** the bar renders in its final state. There are no transforms (no arrow nudge, press or bar slide). Colour and opacity transitions are 80ms at most, and `scroll-behavior` is `auto`.

## Don't (this project)
- No cream, serif, terracotta or hamra; no near-black with acid green; no gradients except the placeholder hatch.
- Orange appears only in the marker, the נמכר tag, the band's 14, the focus ring and `::selection`. Never on buttons, headings, backgrounds or icons.
- The only icons are the WhatsApp glyph and ←. No houses, keys, roofs, map pins, handshakes or icon-in-a-square cards.
- No "BETA" badge, β glyph or Latin "Beta" in the visible UI; it reads as unfinished software.
- Karantina is never set below 36px and never used for body text, buttons, tables or labels. No letter-spacing on Hebrew and no faux italics.
- No centred hero, no three identical cards, no carousel, no fade-up on scroll, no parallax.
- No invented listings, prices, counts or testimonials. "כ-8,600" is static text with its source (two Facebook pages), never an animated counter.
- Only the two token shadows exist. Radius is only 0, 2px, or the marker dot.
- Licence numbers (required by חוק המתווכים) are visible as text near the final CTA and in the footer, never in a tooltip.

## Contrast (WCAG 2.x relative luminance, computed from the tokens)
| Pair | Min | Light | Dark |
|---|---|---|---|
| text / bg · surface · sand | 4.5 | 13.89 · 15.49 · 11.84 | 14.90 · 13.72 · 13.73 |
| muted / bg · surface · sand | 4.5 | 6.19 · 6.90 · 5.28 | 7.78 · 7.17 · 7.17 |
| onPrimary / primary · primaryHover | 4.5 | 8.77 · 11.45 | 8.93 · 10.80 |
| accentText / bg · surface · sand | 4.5 | 5.78 · 6.45 · 4.93 | 8.89 · 8.19 · 8.19 |
| onAccent / accent (נמכר tag) | 4.5 | 5.26 | 7.40 |
| bandText / band | 4.5 | 10.74 | 11.46 |
| bandMuted / band | 4.5 | 6.68 | 6.65 |
| bandAccent / band (the 14) | 3 | 5.02 | 5.69 |
| onBandCta / bandCta · hover | 4.5 | 10.74 · 12.53 | 8.93 · 10.80 |
| placeholderText / placeholderBg | 4.5 | 6.03 | 6.95 |
| focus / bg · surface · sand | 3 | 4.40 · 4.90 · 3.75 | 8.89 · 8.19 · 8.19 |
| bandFocus / band | 3 | 6.03 | 6.84 |
| borderStrong (scale bar) / bg · surface · sand | 3 | 13.89 · 15.49 · 11.84 | 11.73 · 10.80 · 10.81 |
| accent fill / bg | n/a | 2.64 | 7.40 |

In the light theme the orange fill is decorative only. The marker is identified by its ink ring (13.89:1) and the tag by its ink text (5.26:1), which is why orange is never used as text or as a lone signal there.
