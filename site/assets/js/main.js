/* ביתא נדל"ן — התנהגות האתר. בלי ספריות. */
(function () {
  "use strict";

  var CFG = window.BITA || {};
  var TEMPLATES = CFG.WA_TEMPLATES || {};
  var PHONE = String(CFG.PHONE_INTL || "").replace(/\D/g, "");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function fill(template, vars) {
    return String(template || "").replace(/\{(\w+)\}/g, function (_, key) {
      return vars && vars[key] != null ? vars[key] : "___";
    });
  }

  function waHref(key, vars) {
    var text = fill(TEMPLATES[key] || TEMPLATES.general || "", vars);
    return "https://wa.me/" + PHONE + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  /* ---------- וואטסאפ וטלפון ---------- */

  function wireWhatsApp(root) {
    $$("[data-wa]", root).forEach(function (a) {
      var vars = null;
      if (a.dataset.waVars) {
        try { vars = JSON.parse(a.dataset.waVars); } catch (e) { vars = null; }
      }
      a.href = waHref(a.dataset.wa, vars);
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  function wirePhone() {
    if (PHONE) {
      $$("[data-tel]").forEach(function (a) { a.href = "tel:+" + PHONE; });
    }
    if (CFG.PHONE_DISPLAY) {
      $$("[data-phone-display]").forEach(function (el) { el.textContent = CFG.PHONE_DISPLAY; });
    }
    $$("[data-copy-phone]").forEach(function (btn) {
      var label = btn.textContent;
      btn.addEventListener("click", function () {
        var value = CFG.PHONE_DISPLAY || "";
        if (!value) return;
        var done = function () {
          btn.textContent = btn.dataset.copiedLabel || "הועתק";
          setTimeout(function () { btn.textContent = label; }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done, function () { selectPhone(btn); });
        } else {
          selectPhone(btn);
        }
      });
    });
  }

  function selectPhone(btn) {
    var target = btn.closest("[data-phone-block]");
    var el = target && $("[data-phone-display]", target);
    if (!el || !window.getSelection) return;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /* ---------- כותרת עליונה ותפריט ---------- */

  function wireHeader() {
    var header = $(".site-header");
    if (!header) return;
    var onScroll = function () { header.classList.toggle("is-compact", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $("[data-menu-toggle]");
    var menu = $("#site-menu");
    if (!toggle || !menu) return;
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
      document.documentElement.classList.toggle("menu-open", open);
      toggle.textContent = open ? (toggle.dataset.closeLabel || "סגירה") : (toggle.dataset.openLabel || "תפריט");
      if (open) {
        var first = $("a", menu);
        if (first) first.focus();
      }
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  }

  /* ---------- פס וואטסאפ תחתון במובייל ---------- */

  function wireStickyBar() {
    var bar = $(".action-bar");
    if (!bar || !("IntersectionObserver" in window)) {
      if (bar) bar.classList.add("is-visible");
      return;
    }
    var heroCta = $("[data-hero-cta]");
    var footer = $(".site-footer");
    var heroGone = !heroCta;
    var footerIn = false;
    var update = function () { bar.classList.toggle("is-visible", heroGone && !footerIn); };
    if (heroCta) {
      new IntersectionObserver(function (entries) {
        heroGone = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
        update();
      }).observe(heroCta);
    }
    if (footer) {
      new IntersectionObserver(function (entries) {
        footerIn = entries[0].isIntersecting;
        update();
      }).observe(footer);
    }
    update();
  }

  /* ---------- מקטע הדגל: שלוש קריאות ---------- */

  function wireLenses() {
    $$("[data-lenses]").forEach(function (root) {
      var tabs = $$("[role=tab]", root);
      var drawing = $("[data-lens-drawing]", root);
      if (!tabs.length) return;
      root.classList.add("is-enhanced");
      var select = function (tab, focus) {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", String(on));
          t.tabIndex = on ? 0 : -1;
          var panel = document.getElementById(t.getAttribute("aria-controls"));
          if (panel) panel.hidden = !on;
        });
        if (drawing) {
          drawing.setAttribute("data-active", tab.dataset.lens);
          if (!reduceMotion) {
            drawing.classList.remove("is-drawing");
            void drawing.getBoundingClientRect();
            drawing.classList.add("is-drawing");
          }
        }
        if (focus) tab.focus();
      };
      tabs.forEach(function (tab, i) {
        tab.addEventListener("click", function () { select(tab, false); });
        tab.addEventListener("keydown", function (e) {
          // ב-RTL החץ השמאלי מתקדם קדימה
          var dir = { ArrowLeft: 1, ArrowRight: -1, Home: "first", End: "last" }[e.key];
          if (dir == null) return;
          e.preventDefault();
          var next = dir === "first" ? 0 : dir === "last" ? tabs.length - 1 : (i + dir + tabs.length) % tabs.length;
          select(tabs[next], true);
        });
      });
      select(tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0] || tabs[0], false);
    });
  }

  /* ---------- נכסים ---------- */

  var DEAL = { sale: "למכירה", rent: "להשכרה" };
  var STATUS_ORDER = { available: 0, negotiation: 1, closed: 2 };
  var money = new Intl.NumberFormat("he-IL", { maximumFractionDigits: 0 });

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function allProperties() {
    var list = (window.BITA_PROPERTIES || []).slice();
    if (!CFG.showSamples) list = list.filter(function (p) { return !p.sample; });
    return list.sort(function (a, b) {
      var s = (STATUS_ORDER[a.status] || 0) - (STATUS_ORDER[b.status] || 0);
      return s || String(b.updated).localeCompare(String(a.updated));
    });
  }

  function statusLabel(p) {
    if (p.status === "negotiation") return "במשא ומתן";
    if (p.status === "closed") return p.deal === "rent" ? "הושכר" : "נמכר";
    return "זמין";
  }

  function priceLabel(p) {
    if (p.price == null) return "מחיר בשיחה";
    return "₪" + money.format(p.price) + (p.deal === "rent" ? " לחודש" : "");
  }

  function roomsLabel(n) { return n + " חד׳"; }

  function floorLabel(p) {
    if (p.floor == null) return "";
    var f = p.floor === 0 ? "קרקע" : "קומה " + p.floor;
    return p.floorsTotal ? f + " מתוך " + p.floorsTotal : f;
  }

  function formatDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
    return m ? Number(m[3]) + "." + Number(m[2]) + "." + m[1] : "";
  }

  // תוכנית קומה זעירה: מלבן אחד, מחולק לפי מספר החדרים. שרטוט, לא צילום.
  function planSVG(p) {
    var rooms = Math.max(1, Math.round(p.rooms || 3));
    var cols = Math.min(rooms, 3);
    var w = 120, h = 84, x0 = 10, y0 = 18;
    var lines = "";
    for (var i = 1; i < cols; i++) {
      var x = x0 + (w * i) / cols;
      lines += '<line x1="' + x + '" y1="' + y0 + '" x2="' + x + '" y2="' + (y0 + h * 0.62) + '"/>';
    }
    if (rooms > 3) {
      lines += '<line x1="' + x0 + '" y1="' + (y0 + h * 0.62) + '" x2="' + (x0 + w * 0.58) + '" y2="' + (y0 + h * 0.62) + '"/>';
    }
    // פתח דלת
    lines += '<path d="M' + (x0 + w - 26) + " " + (y0 + h) + " a18 18 0 0 1 18 -18" + '" class="plan-door"/>';
    var label = p.sqm ? p.sqm + " מ״ר" : "";
    return (
      '<svg class="plan" viewBox="0 0 140 112" role="img" aria-label="' +
      esc("שרטוט סכמטי של " + roomsLabel(p.rooms) + " — יוחלף בצילום של הנכס") +
      '"><g class="plan-dim"><line x1="' + x0 + '" y1="8" x2="' + (x0 + w) + '" y2="8"/>' +
      '<line x1="' + x0 + '" y1="4" x2="' + x0 + '" y2="12"/><line x1="' + (x0 + w) + '" y1="4" x2="' + (x0 + w) + '" y2="12"/></g>' +
      '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" class="plan-wall"/>' +
      '<g class="plan-inner">' + lines + "</g>" +
      (label ? '<text x="' + (x0 + w / 2) + '" y="6" class="plan-label">' + esc(label) + "</text>" : "") +
      "</svg>"
    );
  }

  function propertyVars(p) {
    return { id: p.id, dealLabel: DEAL[p.deal] || "", rooms: p.rooms, neighborhood: p.neighborhood, city: p.city };
  }

  function propertyCTA(p) {
    if (p.status === "closed") return "";
    var key = p.sample ? "search" : p.status === "negotiation" ? "property_negotiation" : "property";
    var label = p.sample
      ? "לכתוב לנו מה אתם מחפשים"
      : p.status === "negotiation" ? "לשאול על נכס דומה" : "לשאול על " + p.id;
    return (
      '<a class="btn btn--wa prop__cta" data-wa="' + key + '" data-wa-vars="' +
      esc(JSON.stringify(propertyVars(p))) + '" href="#">' + esc(label) + "</a>"
    );
  }

  function propertyMedia(p) {
    if (p.image && p.image.src) {
      return '<img src="' + esc(p.image.src) + '" alt="' + esc(p.image.alt || "") + '" width="640" height="480" loading="lazy">';
    }
    return planSVG(p);
  }

  function renderProperty(p) {
    var facts = [roomsLabel(p.rooms), p.sqm ? p.sqm + " מ״ר" : "", floorLabel(p)].filter(Boolean).join(" · ");
    var features = (p.features || []).slice(0, 4).join(" · ");
    var cls = "prop" + (p.sample ? " prop--sample" : "") + (p.status === "closed" ? " prop--closed" : "") +
      (p.status === "negotiation" ? " prop--negotiation" : "");
    return (
      '<article class="' + cls + '" id="' + esc(p.id) + '">' +
        '<div class="prop__media">' + propertyMedia(p) +
          (p.sample ? '<span class="sample-tag">נכס לדוגמה · להחלפה</span>' : "") +
        "</div>" +
        '<div class="prop__body">' +
          '<p class="prop__eyebrow">' + esc(DEAL[p.deal] || "") + (p.type ? " · " + esc(p.type) : "") +
            ' <span class="prop__status prop__status--' + esc(p.status) + '">' + esc(statusLabel(p)) + "</span></p>" +
          '<h3 class="prop__title">' + esc(p.neighborhood) + ", " + esc(p.city) + "</h3>" +
          '<p class="prop__facts">' + esc(facts) + "</p>" +
          (p.summary ? '<p class="prop__summary">' + esc(p.summary) + "</p>" : "") +
          (features ? '<p class="prop__features">' + esc(features) + "</p>" : "") +
          (p.angleNote ? '<p class="prop__angle"><span>מהזווית השנייה</span> ' + esc(p.angleNote) + "</p>" : "") +
        "</div>" +
        '<div class="prop__side">' +
          '<p class="prop__price">' + esc(priceLabel(p)) + "</p>" +
          propertyCTA(p) +
          '<p class="prop__meta">נכס ' + esc(p.id) + (p.updated ? " · עודכן " + esc(formatDate(p.updated)) : "") + "</p>" +
        "</div>" +
      "</article>"
    );
  }

  function renderRow(p) {
    // שורת גיליון מקוצרת לדף הבית
    var facts = [roomsLabel(p.rooms), p.sqm ? p.sqm + " מ״ר" : ""].filter(Boolean).join(" · ");
    return (
      '<li class="sheet__row' + (p.sample ? " is-sample" : "") + '">' +
        '<a class="sheet__link" href="properties.html#' + esc(p.id) + '">' +
          '<span class="sheet__id">' + esc(p.id) + "</span>" +
          '<span class="sheet__place">' + esc(p.neighborhood) + ", " + esc(p.city) +
            (p.sample ? ' <span class="sample-tag sample-tag--inline">לדוגמה</span>' : "") + "</span>" +
          '<span class="sheet__deal">' + esc(DEAL[p.deal] || "") + "</span>" +
          '<span class="sheet__facts">' + esc(facts) + "</span>" +
          '<span class="sheet__price">' + esc(priceLabel(p)) + "</span>" +
        "</a>" +
      "</li>"
    );
  }

  function wirePropertiesPage() {
    var listEl = $("[data-properties-list]");
    if (!listEl) return;
    var all = allProperties();
    var state = { deal: "all", city: "all" };
    try {
      var q = new URLSearchParams(window.location.search);
      if (q.get("deal") === "sale" || q.get("deal") === "rent") state.deal = q.get("deal");
      if (q.get("city")) state.city = q.get("city");
    } catch (e) { /* ignore */ }

    var countEl = $("[data-results-count]");
    var emptyNone = $("[data-empty-none]");
    var emptyFilter = $("[data-empty-filter]");
    var filters = $("[data-filters]");
    var cityBox = $("[data-filter-cities]");
    var sampleNotice = $("[data-sample-notice]");
    var availableEl = $("[data-available-count]");

    var open = all.filter(function (p) { return p.status !== "closed"; });
    if (availableEl) availableEl.textContent = String(all.filter(function (p) { return p.status === "available"; }).length);
    if (sampleNotice) sampleNotice.hidden = !all.some(function (p) { return p.sample; });

    if (!open.length) {
      listEl.hidden = true;
      if (filters) filters.hidden = true;
      if (emptyNone) emptyNone.hidden = false;
      return;
    }

    // ערים נבנות מהנתונים בלבד
    var cities = [];
    all.forEach(function (p) { if (p.city && cities.indexOf(p.city) < 0) cities.push(p.city); });
    if (cities.indexOf(state.city) < 0) state.city = "all";
    if (cityBox) {
      if (cities.length < 2) {
        cityBox.hidden = true;
      } else {
        cityBox.innerHTML =
          '<button type="button" class="chip" data-city="all">כל הערים</button>' +
          cities.map(function (c) { return '<button type="button" class="chip" data-city="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
      }
    }

    var render = function () {
      var shown = all.filter(function (p) {
        return (state.deal === "all" || p.deal === state.deal) && (state.city === "all" || p.city === state.city);
      });
      listEl.innerHTML = shown.map(renderProperty).join("");
      wireWhatsApp(listEl);
      listEl.hidden = !shown.length;
      if (emptyFilter) {
        emptyFilter.hidden = !!shown.length;
        var line = $("[data-empty-filter-line]", emptyFilter);
        var dealWord = state.deal === "all" ? "נכסים" : DEAL[state.deal];
        var cityWord = state.city === "all" ? "" : " ב" + state.city;
        if (line) line.textContent = "אין כרגע " + dealWord + cityWord + ".";
        var wa = $("[data-wa=filter_empty]", emptyFilter);
        if (wa) {
          wa.dataset.waVars = JSON.stringify({ dealLabel: state.deal === "all" ? "נכס" : DEAL[state.deal], city: state.city === "all" ? "השרון" : state.city });
          wireWhatsApp(emptyFilter);
        }
      }
      if (countEl) countEl.textContent = shown.length === 1 ? "מוצג נכס אחד" : "מוצגים " + shown.length + " נכסים";
      $$("[data-deal]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.deal === state.deal)); });
      $$("[data-city]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.city === state.city)); });
      try {
        var params = new URLSearchParams();
        if (state.deal !== "all") params.set("deal", state.deal);
        if (state.city !== "all") params.set("city", state.city);
        var qs = params.toString();
        window.history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : "") + window.location.hash);
      } catch (e) { /* ignore */ }
    };

    document.addEventListener("click", function (e) {
      var deal = e.target.closest("[data-deal]");
      var city = e.target.closest("[data-city]");
      var reset = e.target.closest("[data-filter-reset]");
      if (deal) { state.deal = deal.dataset.deal; render(); }
      if (city) { state.city = city.dataset.city; render(); }
      if (reset) { state.deal = "all"; state.city = "all"; render(); }
    });
    render();

    if (window.location.hash) {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        target.classList.add("is-target");
        target.scrollIntoView({ block: "center", behavior: reduceMotion ? "auto" : "smooth" });
      }
    }
  }

  function wirePreview() {
    var box = $("[data-properties-preview]");
    if (!box) return;
    var rows = allProperties().filter(function (p) { return p.status !== "closed"; }).slice(0, 3);
    var empty = $("[data-preview-empty]");
    if (!rows.length) {
      box.hidden = true;
      if (empty) empty.hidden = false;
      return;
    }
    box.innerHTML = rows.map(renderRow).join("");
  }

  /* ---------- שנה בפוטר ---------- */

  function wireYear() {
    var y = String(new Date().getFullYear());
    $$("[data-year]").forEach(function (el) { el.textContent = y; });
  }

  document.documentElement.classList.add("js");
  wireYear();
  wirePhone();
  wireHeader();
  wireLenses();
  wirePropertiesPage();
  wirePreview();
  wireWhatsApp(document);
  wireStickyBar();
})();
