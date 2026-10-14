"""Assemble the site from src/ into two outputs.

index.html   - the real website (full document, for hosting and Google)
preview.html - the same page shaped for a Claude Artifact preview
"""
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"

head = (SRC / "head.html").read_text(encoding="utf-8")
body = (SRC / "body.html").read_text(encoding="utf-8")
css = (SRC / "site.css").read_text(encoding="utf-8")
js = (SRC / "site.js").read_text(encoding="utf-8")

FONTS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Hebrew:wght@400;500;600;700&family=Karantina:wght@400;700&display=swap">\n'
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&text=0123456789%2F%3A.%2C-%2B%25%E2%82%AA%E2%86%90&display=swap">\n'
)

index = (
    '<!doctype html>\n<html lang="he" dir="rtl">\n<head>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    + head + FONTS
    + "<style>\n" + css + "</style>\n</head>\n<body>\n"
    + '<div class="site" id="top">\n' + body + "</div>\n"
    + "<script>\n" + js + "</script>\n</body>\n</html>\n"
)
(ROOT / "index.html").write_text(index, encoding="utf-8")

title = "ביתא נדל״ן"
preview = (
    f"<title>{title}</title>\n"
    '<meta name="claude:viewport-fit-sides" content="cover">\n'
    + FONTS
    + "<style>\n" + css + "</style>\n"
    + '<div class="site" id="top" dir="rtl" lang="he">\n' + body + "</div>\n"
    + "<script>\n" + js + "</script>\n"
)
(ROOT / "preview.html").write_text(preview, encoding="utf-8")
print("built index.html and preview.html")
