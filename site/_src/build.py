#!/usr/bin/env python3
"""
בונה את קבצי ה-HTML של האתר מתוך _src/pages/*.html.

כל קובץ ב-pages מכיל בראשו בלוק הגדרות בתוך הערה, ואחריו את התוכן של <main>:

    <!--
    title: ...
    description: ...
    wa: general              (מפתח הוואטסאפ של העמוד: כפתור הכותרת והפס התחתון)
    nav: properties          (איזה פריט בתפריט מסומן; ריק בדף הבית)
    robots: noindex, follow  (לא חובה)
    scripts: properties      (לא חובה: טוען גם את רשימת הנכסים)
    jsonld: index.json       (לא חובה: קובץ מתוך _src/jsonld)
    -->
    <main id="main"> ... </main>

הרצה:  python3 site/_src/build.py
כל [למלא: ...] / [לאשר] / [לאמת] בטקסט הגלוי נעטף אוטומטית ב-<mark class="fill">.
"""
import json
import re
from pathlib import Path

SRC = Path(__file__).resolve().parent
SITE = SRC.parent

# [למלא] הדומיין הסופי, בלי / בסוף
SITE_URL = "https://www.YOUR-DOMAIN.co.il"
FONTS_URL = (
    "https://fonts.googleapis.com/css2?"
    "family=Rubik:wght@400;500;700;800&family=IBM+Plex+Sans+Hebrew:wght@400;500;600&display=swap"
)
PHONE_PLACEHOLDER_INTL = "972000000000"
OG_IMAGE_ALT = 'ביתא נדל"ן: תיווך, התחדשות עירונית והשקעות בשרון'

NAV = [
    ("properties", "properties.html", "נכסים"),
    ("sell", "sell.html", "למכור או להשכיר"),
    ("urban-renewal", "urban-renewal.html", "התחדשות עירונית"),
    ("invest", "invest.html", "השקעות"),
    ("about", "about.html", "אבא ובן"),
]

FOOT_NAV = [("index", "index.html", "דף הבית")] + NAV + [
    ("accessibility", "accessibility.html", "הצהרת נגישות")
]

FILL_RE = re.compile(r"\[(?:למלא|לאשר|לאמת)[^\]\[]*\]")


def attr(s):
    return s.replace("&", "&amp;").replace('"', "&quot;")


def mark_fills(html):
    """עוטף [למלא ...] בטקסט גלוי בלבד: לא בתוך תגיות, לא בתוך script/style, לא אם כבר עטוף."""
    out = []
    parts = re.split(r"(<script\b.*?</script>|<style\b.*?</style>|<[^>]+>)", html, flags=re.S)
    prev_tag = ""
    for part in parts:
        if not part:
            continue
        if part.startswith("<"):
            out.append(part)
            prev_tag = part
            continue
        if prev_tag.startswith('<mark class="fill"'):
            out.append(part)
            continue
        out.append(FILL_RE.sub(lambda m: '<mark class="fill">' + m.group(0) + "</mark>", part))
    return "".join(out)


WA_GLYPH = (
    '<svg class="wa-glyph" viewBox="0 0 20 20" aria-hidden="true" focusable="false">'
    '<path d="M10 2.5a7.5 7.5 0 0 0-6.5 11.2L2.5 17.5l3.9-1A7.5 7.5 0 1 0 10 2.5z"/></svg>'
)


def wa_link(key, label, cls="btn btn--wa", extra=""):
    return (
        f'<a class="{cls}" data-wa="{key}" href="https://wa.me/{PHONE_PLACEHOLDER_INTL}"{extra}>'
        f"{WA_GLYPH}<span>{label}</span><span class=\"sr-only\"> (נפתח בוואטסאפ)</span></a>"
    )


def phone_text():
    return (
        '<!-- PHONE --><span class="phone" data-phone-display>'
        '<mark class="fill">[למלא: מספר טלפון]</mark></span>'
    )


def tel_link(cls="tel-link", prefix='<span class="sr-only">להתקשר: </span>'):
    return f'<a class="{cls}" data-tel href="tel:+{PHONE_PLACEHOLDER_INTL}">{prefix}{phone_text()}</a>'


def header(nav_key, wa_key):
    items = []
    menu_items = []
    for i, (key, href, label) in enumerate(NAV, 1):
        cur = ' aria-current="page"' if key == nav_key else ""
        items.append(f'<li><a href="{href}"{cur}>{label}</a></li>')
        menu_items.append(
            f'<li><a href="{href}"{cur}><span class="site-menu__num">{i:02d}</span>{label}</a></li>'
        )
    return f"""<header class="site-header">
  <div class="site-header__inner">
    <a class="brand" href="index.html" aria-label="ביתא נדל&quot;ן, לדף הבית">
      <span class="brand__mark" aria-hidden="true">ב</span><span class="brand__name">ביתא נדל״ן</span>
    </a>
    <nav class="site-nav" aria-label="ראשי">
      <ul>
        {''.join(items)}
      </ul>
    </nav>
    <div class="site-header__contact">
      {tel_link()}
      {wa_link(wa_key, "וואטסאפ", "btn btn--wa btn--sm")}
    </div>
    <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-menu" data-open-label="תפריט" data-close-label="סגירה">תפריט</button>
  </div>
  <div class="site-menu" id="site-menu">
    <nav aria-label="תפריט">
      <ol class="site-menu__list">
        {''.join(menu_items)}
      </ol>
    </nav>
    <div class="site-menu__foot">
      {tel_link("tel-link tel-link--big")}
      {wa_link(wa_key, "לכתוב לנו בוואטסאפ")}
      <p class="license">מתווך מקרקעין מורשה, רישיון מס' [למלא]</p>
    </div>
  </div>
</header>"""


def footer(wa_key):
    links = "".join(f'<li><a href="{href}">{label}</a></li>' for _, href, label in FOOT_NAV)
    return f"""<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__call" data-phone-block>
      <p class="site-footer__label">טלפון</p>
      {tel_link("tel-link tel-link--huge")}
      <p class="site-footer__note">המספר הזה מגיע ישר אלינו. [לאשר]</p>
      {wa_link("general", "או לכתוב בוואטסאפ", "link-wa")}
    </div>
    <div class="site-footer__details">
      <p class="site-footer__name">ביתא נדל״ן</p>
      <p class="dict"><span class="dict__word">ביתא</span>, בארמית: הבית.</p>
      <p>עסק נדל"ן משפחתי של אבא ובן. בעיקר בשרון, עם עסקאות בכל הארץ.</p>
      <dl class="facts">
        <div><dt>משרד</dt><dd>[למלא: רחוב, מספר, עיר]</dd></div>
        <div><dt>שעות</dt><dd>[למלא: ימים ושעות]</dd></div>
        <div><dt>דוא"ל</dt><dd>[למלא: כתובת מייל. אם אין, השורה יורדת]</dd></div>
        <div><dt>רישיון</dt><dd>מתווך מקרקעין מורשה, רישיון מס' [למלא]</dd></div>
      </dl>
    </div>
    <nav class="site-footer__nav" aria-label="ניווט בתחתית העמוד">
      <ul>{links}</ul>
    </nav>
    <p class="site-footer__small">פרטי הנכסים והמחירים באתר מתעדכנים ידנית ועשויים להשתנות. [לאשר]
      <span class="site-footer__copy">© <span data-year>2026</span> ביתא נדל״ן</span></p>
  </div>
</footer>
<div class="action-bar" role="region" aria-label="יצירת קשר">
  {wa_link(wa_key, "לכתוב בוואטסאפ", "action-bar__wa")}
  <a class="action-bar__tel" data-tel href="tel:+{PHONE_PLACEHOLDER_INTL}"><span>להתקשר</span><span class="sr-only">: </span><!-- PHONE --><span class="sr-only" data-phone-display>[למלא: מספר טלפון]</span></a>
</div>"""


def parse(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"\s*<!--(.*?)-->\s*", text, re.S)
    meta = {}
    if m:
        for line in m.group(1).strip().splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip()
        text = text[m.end():]
    return meta, text


def head(meta, filename):
    title = meta["title"]
    desc = meta.get("description", "")
    is_404 = filename == "404.html"
    url = SITE_URL + "/" + ("" if filename == "index.html" else filename)
    robots = meta.get("robots")
    lines = [
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
        f"<title>{title}</title>",
        f'<meta name="description" content="{attr(desc)}">',
    ]
    if robots:
        lines.append(f'<meta name="robots" content="{robots}">')
    if not is_404:
        lines += [
            f'<link rel="canonical" href="{url}">',
            '<meta property="og:type" content="website">',
            '<meta property="og:locale" content="he_IL">',
            '<meta property="og:site_name" content="ביתא נדל&quot;ן">',
            f'<meta property="og:title" content="{attr(title)}">',
            f'<meta property="og:description" content="{attr(desc)}">',
            f'<meta property="og:url" content="{url}">',
            f'<meta property="og:image" content="{SITE_URL}/og-image.png">',
            '<meta property="og:image:width" content="1200">',
            '<meta property="og:image:height" content="630">',
            '<meta property="og:image:type" content="image/png">',
            f'<meta property="og:image:alt" content="{attr(OG_IMAGE_ALT)}">',
            '<meta name="twitter:card" content="summary_large_image">',
            f'<meta name="twitter:title" content="{attr(title)}">',
            f'<meta name="twitter:description" content="{attr(desc)}">',
            f'<meta name="twitter:image" content="{SITE_URL}/og-image.png">',
        ]
    lines += [
        '<meta name="theme-color" content="#f7f7f4" media="(prefers-color-scheme: light)">',
        '<meta name="theme-color" content="#1c1d1f" media="(prefers-color-scheme: dark)">',
        '<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">',
        '<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">',
        '<link rel="preconnect" href="https://fonts.googleapis.com">',
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
        f'<link rel="stylesheet" href="{FONTS_URL}">',
        '<link rel="stylesheet" href="assets/css/tokens.css">',
        '<link rel="stylesheet" href="assets/css/site.css">',
    ]
    page_css = SITE / "assets" / "css" / "pages" / filename.replace(".html", ".css")
    if page_css.exists():
        lines.append(f'<link rel="stylesheet" href="assets/css/pages/{page_css.name}">')
    lines += [
        '<script src="assets/js/config.js" defer></script>',
    ]
    if "properties" in meta.get("scripts", ""):
        lines.append('<script src="assets/js/properties.js" defer></script>')
    lines.append('<script src="assets/js/main.js" defer></script>')
    if meta.get("jsonld"):
        data = (SRC / "jsonld" / meta["jsonld"]).read_text(encoding="utf-8").strip()
        json.loads(data)  # נכשל כאן אם ה-JSON שבור
        lines.append('<script type="application/ld+json">\n' + data + "\n</script>")
    return "\n".join(lines)


def build_page(path):
    meta, main = parse(path)
    filename = path.name
    wa = meta.get("wa", "general")
    html = f"""<!doctype html>
<html lang="he" dir="rtl">
<head>
{head(meta, filename)}
</head>
<body data-wa="{wa}">
<a class="skip-link" href="#main">דלגו לתוכן</a>
{header(meta.get("nav", ""), wa)}
{main.strip()}
{footer(wa)}
</body>
</html>
"""
    html = mark_fills(html)
    (SITE / filename).write_text(html, encoding="utf-8")
    return filename


if __name__ == "__main__":
    built = [build_page(p) for p in sorted((SRC / "pages").glob("*.html"))]
    print("built:", ", ".join(built))
