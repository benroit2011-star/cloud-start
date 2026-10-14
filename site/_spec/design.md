# מערכת העיצוב: ביתא נדל"ן

> נכתב ע"י ה-Orchestrator אחרי בניית דף הבית. **המקור הקובע הוא הקוד:** `assets/css/tokens.css` + `assets/css/site.css`, ודף הבית `_src/pages/index.html` כדוגמה חיה.

## כיוון במשפט אחד
**תשריט של הוועדה המקומית:** נייר פלוטר בהיר, קווי גרפיט דקים, קווי מידה, ואקסנט אחד בלבד: **הצהוב של "אזור מגורים" בתשריט תב"ע**, שמשמש כמרקר. אדום חותמת רק ל-404 ולסימוני [למלא].

## אלמנט חתימה
**קו מידה** (`|←→|`): קו דק עם שתי סיומות אנכיות.
- לפני כל `.eyebrow` (נבנה אוטומטית ב-CSS).
- מתחת לפריט הניווט הנוכחי (`aria-current`).
- בשרטוטים (`<g class="dim">` עם `.dim__text`).
וגם **שרטוט קווי** (תוכנית קומה / חתך בניין) במקום כל תמונה, עם **מילוי צהוב "אזור"** (`.zone`) על אזור אחד.

## טיפוגרפיה
- כותרות: Rubik 700/800 (`--font-display`). גוף: IBM Plex Sans Hebrew 400/500/600 (`--font-body`).
- סקאלה: `--step--1` (כיתוב) עד `--step-5` (דיספליי), `--step-giant` למילה "ביתא", `--step-phone` לטלפון ענק.
- מספרים בטבלאות/מחירים: `font-variant-numeric: tabular-nums`.

## צבעים (רק דרך טוקנים)
`--paper` רקע · `--surface` משטח מוגבה (מקטע דגל, שרטוטים) · `--ink` טקסט · `--ink-soft` טקסט משני · `--muted` כיתובים · `--line` קו דק · `--line-strong` קו חזק · `--zone` צהוב · `--zone-wash` מרקר על טקסט · `--zone-ink` טקסט על צהוב · `--stamp` אדום חותמת · `--fill-bg`/`--fill-ink` ל-[למלא].
אסור hex בקבצי עמודים. dark mode מגיע חינם מהטוקנים.

## מילון לייאאוטים → מחלקות קיימות ב-site.css
| לייאאוט (sitemap) | מחלקה | הערות |
|---|---|---|
| פתיחת עמוד פנימי (טקסט רחב + צר) | `.page-hero` עם `.page-hero__main` + `.page-hero__aside` | נתיב `.crumbs` בתוך `.page-hero__main` מעל ה-H1 |
| טקסט רחב + צר | `.wide-narrow` > `.wide-narrow__wide` + `.wide-narrow__narrow` | |
| מפוצל 50/50 | `.split` > `.split__side` ×2 | |
| טבלה | `.table-wrap` > `table.table` (thead + tbody עם th בשורה) | `.table--sheet` + `td.cell-empty` לגיליון ריק |
| אקורדיון | `.faq` > `details` > `summary` + `div.faq__answer` | בלי JS |
| ציר זמן | `ol.timeline` > `li.timeline__step[tabindex=0]` (h3 + p + `p.timeline__you`) | ממוספר אוטומטית |
| רשימה ממוספרת עורכית | `ol.numbered` > `li` (h3 + p) | ממוספר אוטומטית 01, 02 |
| צעדים עם מספרים ענקיים | `.steps` (כמו בדף הבית) | |
| ציטוט ענק | `blockquote.bigquote` (+ `footer`) | שובר גריד בדסקטופ |
| רצועה דקה | `.strip` / `.strip--quiet` | |
| full-bleed | `section.section` עם רקע `--surface` וגבולות (ראו `.lenses`) — הגדירו מחלקה בקובץ CSS של העמוד | |
| רשת אסימטרית | כמו `.doors__grid` / `.family` — הגדירו בקובץ CSS של העמוד | |
| סגירה עם טלפון גדול | `.call-block` + `a.tel-link.tel-link--huge` + `.btn.btn--wa.btn--lg` | |
| מצב ריק | `.empty-state`, `.empty-filter` | |

**מקטע:** `<section class="section">` (ריווח רגיל), `.section--tight`, `.section--breath`, `.section--rule` (קו עליון). הילדים הישירים מקבלים `max-width: var(--container)` אוטומטית. **אל תשימו שני מקטעים רצופים באותו ריווח ובאותו מבנה.**

## רכיבים
- **וואטסאפ:** `a.btn.btn--wa` (+ `--lg`/`--sm`) עם `data-wa="<key>"`, `href="https://wa.me/972000000000"`, ה-SVG `wa-glyph` (העתיקו מדף הבית), `<span>` לטקסט ו-`<span class="sr-only"> (נפתח בוואטסאפ)</span>`. קישור טקסט: `a.link-wa[data-wa]`.
- **טלפון:** `<a class="tel-link" data-tel href="tel:+972000000000"><span class="sr-only">להתקשר: </span><!-- PHONE --><span class="phone" data-phone-display>[למלא: מספר טלפון]</span></a>`. עטפו את הבלוק ב-`data-phone-block`.
- **קישור פנימי עם חץ:** `a.link-arrow`.
- **[למלא]**: פשוט כותבים `[למלא: …]` / `[לאשר]` / `[לאמת]` בטקסט — `build.py` עוטף אוטומטית ב-`mark.fill`. **לא** בתוך מאפיינים (alt/aria-label): שם כותבים תיאור רגיל.
- **שרטוט placeholder:** `<svg class="drawing" viewBox=…>` עם `rect.wall`, `.wall-inner`, `.door`, `.window`, `g.dim`, `rect.zone`, `.future` (מקווקו). מעט צורות, בלי path ארוך. דקורטיבי → `aria-hidden="true"`; אחרת `role="img" aria-label`.
- **הדגשה במרקר:** `<span class="zone-mark">מילה</span>` — לכל היותר פעם אחת בעמוד.

## כללים
- mobile-first, אין גלילה אופקית ב-375px. טבלאות רחבות בתוך `.table-wrap`.
- אנימציות: רק מה שכבר קיים (מעבר עדשות, ציר זמן ב-hover/focus, hover של כפתורים). אין fade-up.
- כל `section` עם `aria-labelledby` לכותרת שלו. H1 אחד בעמוד.
- אין אייקונים בכרטיסים, אין אימוג'י, אין כרטיסים זהים בשורה.
