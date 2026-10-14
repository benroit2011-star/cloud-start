# SEO — אתר ביתא נדל"ן

> מסמך עבודה לקופירייטר, למפתח ול-QA. תאריך: 14.10.2026.
> מקורות קלט: `_spec/brief.md`, `_spec/anti-ai.md`, חיפושי רשת (רשימת מקורות בסוף).
> כל מה שמסומן **[למלא]** או **[לאשר]** הוא פרט שאין לנו. לא להמציא. לפני העלייה לאוויר מריצים חיפוש על המחרוזות האלה (ראו §6.12).
> כתובת האתר לא ידועה: בכל מקום כתוב `https://www.YOUR-DOMAIN.co.il`. **צריך להחליף** (ראו §5).

---

## 0. ארבעה דברים שחשוב לדעת לפני הכל

1. **יש עסק אחר בשם "ביתא נדל"ן".** בחיפוש של השם עולה חברה ישראלית בשם ביתא נדל"ן (Beta) שעושה השקעות והתחדשות עירונית של בניינים באתונה, ופרויקט התחדשות אחד גם בתל אביב (רחוב ארבע ארצות). מדובר באותם תחומים כמו שלנו, ולכן החיפוש של השם עלול להוביל אליהם.
   - **לבעלים:** לבדוק עם עורך דין אם השם רשום כסימן מסחר (רשם סימני המסחר). זו לא רק שאלת SEO. **[לאשר]**
   - **באתר:** השם תמיד יופיע עם "השרון" בסביבתו: ב-title, בשורה הראשונה של עמוד הבית ובשדה `alternateName` ב-schema. לא לכתוב "Beta" בכתיב הלטיני, כי זה הכתיב שלהם. הכתיב הלטיני של העסק **[לאשר]** (למשל Bita או Beita).
   - **ב-Google Business Profile:** השם יהיה בדיוק "ביתא נדל"ן", בלי מילות מפתח. Google אוסר להוסיף מילות מפתח לשם העסק. ההבחנה ביניהם תבוא מהכתובת, מהקטגוריה ומהביקורות.
2. **תמ"א 38 פקעה סופית ב-18.5.2026** לפי מרכז הנדל"ן. בנתניה היא פקעה עוד קודם. אנשים עדיין מחפשים "תמ"א 38", אבל בעמוד ההתחדשות העירונית אסור להציג אותה כמסלול פתוח. התנועה שמגיעה מהחיפוש הזה תטופל בכנות, תחת שאלות כמו "מה עכשיו?" ו"מה ההבדל בין פינוי בינוי, תמ"א 38 וחלופת שקד?". לכן "תמ"א 38" היא מילת מפתח משנית בלבד ולא מופיעה ב-title.
3. **בחיפושים הכלליים התוצאות שייכות לאינדקסים.** בחיפושים "תיווך נדל"ן בשרון", "מתווך בכפר סבא" ו"דירות למכירה ב..." עולים בעיקר דפי זהב, יד2 ומדלן. אתר חדש של חמישה עמודים לא יעקוף אותם בטווח הקרוב. התוכנית: (א) Google Business Profile, כי ב"מתווך + עיר" מופיעה המפה, (ב) פרופילים באינדקסים עצמם, ו-(ג) עמודים שעונים על שאלות ספציפיות. ככה העסק מתברג במקומות שבהם אפשר להתברג.
4. **עמוד הנכסים יהיה `noindex` כל עוד יש בו רק נכסים לדוגמה.** עמוד עם נכסים לדוגמה הוא תוכן דל שעלול להטעות. כשיעלו נכסים אמיתיים מסירים את ה-noindex ומוסיפים את העמוד ל-sitemap (§6.3).

---

## 1. מחקר מילות מפתח

### 1.1 שיטה ומגבלות
- בדקתי חיפושים בעברית ב-WebSearch ובחנתי **מה מדורג** בכל אחד מהם (סוגי האתרים והכוונה).
- **אין לי נתוני נפח חיפוש** (לא Google Keyword Planner ולא Ahrefs). כל עמודות הנפח והתחרות בטבלה הן **הערכה איכותית** שלי (גבוה / בינוני / נמוך). היא מבוססת על סוג התוצאות, על מספר האתרים שמתחרים ועל היקף הכיסוי בתקשורת. אחרי העלייה לאוויר צריך לאמת אותה מול Search Console ו-Keyword Planner.

### 1.2 מה רואים בתוצאות החיפוש (אוקטובר 2026)
| חיפוש | מה מדורג | מה זה אומר לנו |
|---|---|---|
| תיווך נדל"ן בשרון | אינדקס דפי זהב (592 משרדים באזור), דפי משרדים ביד2, משרדי בוטיק מקומיים (הוד השרון, רמת השרון) | תחרות צפופה, וכמעט כל המשרדים מתארים את עצמם באותן מילים. הבידול שלנו הוא "אבא ובן" ו"שלוש זוויות על אותו נכס". |
| מתווך בכפר סבא | אינדקס המשרדים של יד2 לפי שכונה, דפי משרדים במדלן | חיפוש שמניע הוא חיפוש לפי עיר ושכונה. כאן קובעים ה-Map Pack והפרופילים באינדקסים. |
| התחדשות עירונית בשרון | חדשות ופרויקטים (רמת השרון, אבן יהודה, קדימה צורן, כפר יונה, הוד השרון), אתרי חדשות נדל"ן, מסמכים עירוניים | הכוונה בעיקר אינפורמטיבית. בעלי דירות קוראים חדשות ומדריכים. מי שמסביר טוב ובכנות יקבל את הפנייה. |
| תמ"א 38 נתניה | פסקי דין של ועדות ערר, כתבות על פקיעת התמ"א בנתניה | השאלה האמיתית של המחפשים היא "מה מותר עכשיו?". |
| השקעות נדל"ן בשרון | כתבות שיווקיות על קרקעות, מודעות על מגרשים, כתבות חדשות | מעט תוכן אמין ושקול. יש מקום לעמוד שמדבר במספרים, בזהירות. |
| פינוי בינוי, אחוז הסכמה | מדריכים לשנת 2026, כתבות על חוק ההסדרים ועל הצעת חוק ל-51% | ביקוש גבוה לתשובות מדויקות ועדכניות. זה חומר טוב לשאלות נפוצות. |
| דמי תיווך | מדריכים, שאלות ותשובות במידרג, כתבות על תקנות שקיפות חדשות בהשכרה | שאלה נפוצה של מוכרים ושוכרים, ומתאימה לשאלות נפוצות. |
| ביתא נדל"ן | חברת ההשקעות באתונה (ראו §0) | התנגשות שם. |

### 1.3 אשכולות מילות מפתח
נפח ותחרות = **הערכה**, לא נתון.

| אשכול | מילת מפתח | כוונה | נפח (הערכה) | תחרות (הערכה) | עמוד יעד |
|---|---|---|---|---|---|
| תיווך | תיווך נדל"ן בשרון | מסחרית | בינוני | גבוהה | index |
| תיווך | משרד תיווך בשרון | מסחרית | בינוני | גבוהה | index |
| תיווך | מתווך ב[עיר] / משרד תיווך ב[עיר] | מקומית | גבוה במצטבר | גבוהה מאוד (Map Pack, אינדקסים) | GBP. עמודי עיר רק אחרי אישור (§1.5) |
| תיווך | משרד נדל"ן משפחתי | מסחרית | נמוך | נמוכה | about, index |
| נכסים | דירות למכירה בשרון | עסקה | בינוני | גבוהה מאוד (יד2, מדלן) | properties |
| נכסים | דירות להשכרה בשרון | עסקה | בינוני | גבוהה מאוד | properties |
| נכסים | דירות למכירה ב[עיר] | עסקה | גבוה | גבוהה מאוד | לא ניעד לזה, אין סיכוי מול יד2 |
| מוכרים | למכור דירה עם מתווך / מכירת דירה בשרון | מסחרית | בינוני | בינונית | sell |
| מוכרים | השכרת דירה דרך מתווך | מסחרית | בינוני | בינונית | sell |
| מוכרים | כמה שווה הדירה שלי / הערכת שווי דירה | אינפורמטיבית ומסחרית | גבוה (ארצי) | גבוהה (כלים של מדלן, שמאים) | sell (כשאלה נפוצה) |
| מוכרים | דמי תיווך / מי משלם דמי תיווך בשכירות | אינפורמטיבית | גבוה (ארצי) | בינונית | sell (כשאלה נפוצה) |
| מוכרים | בלעדיות במכירת דירה | אינפורמטיבית | נמוך עד בינוני | נמוכה | sell (כשאלה נפוצה) |
| התחדשות | התחדשות עירונית בשרון | אינפורמטיבית ומסחרית | נמוך עד בינוני | בינונית | urban-renewal |
| התחדשות | פינוי בינוי | אינפורמטיבית | גבוה (ארצי) | גבוהה (חדשות) | urban-renewal |
| התחדשות | פינוי בינוי בשרון | מעורבת | נמוך | נמוכה | urban-renewal |
| התחדשות | תמ"א 38 / תמא 38 | אינפורמטיבית | גבוה מבחינה היסטורית, צפוי לרדת אחרי הפקיעה | גבוהה | urban-renewal (משנית, בשאלות הנפוצות) |
| התחדשות | תמ"א 38 נתניה / תמ"א 38 [עיר] | אינפורמטיבית | נמוך עד בינוני | בינונית | urban-renewal (שאלה נפוצה כללית, בלי עמוד עיר) |
| התחדשות | חלופת שקד | אינפורמטיבית | נמוך עד בינוני, במגמת עלייה | נמוכה | urban-renewal |
| התחדשות | דייר סרבן פינוי בינוי | אינפורמטיבית | בינוני | בינונית | urban-renewal (שאלה נפוצה) |
| התחדשות | ליווי בעלי דירות בהתחדשות עירונית | מסחרית | נמוך | נמוכה | urban-renewal |
| השקעות | השקעות נדל"ן בשרון | מסחרית | נמוך עד בינוני | בינונית | investments |
| השקעות | דירה להשקעה | מעורבת | גבוה (ארצי) | גבוהה | investments |
| השקעות | ייעוץ השקעות נדל"ן | מסחרית | נמוך עד בינוני | בינונית | investments |
| השקעות | השקעה בפינוי בינוי | אינפורמטיבית | נמוך עד בינוני | נמוכה | investments, וקישור הדדי ל-urban-renewal |
| השקעות | מס רכישה דירה להשקעה / דירה שנייה | אינפורמטיבית | גבוה (ארצי) | גבוהה (אתרי חדשות) | investments (שאלה נפוצה) |
| השקעות | קניית דירה בישראל לתושבי חוץ | מסחרית | נמוך עד בינוני | בינונית | investments |
| מותג | ביתא נדל"ן | ניווט | נמוך (יעלה עם המודעות) | **התנגשות** (§0) | index, about |

### 1.4 וריאציות כתיב
- אנשים מקלידים גם "נדלן", "תמא 38", "פינוי-בינוי" או "פינוי בינוי", "מתווך" או "משרד תיווך". Google מזהה את הווריאציות האלה כמעט תמיד. **לא לדחוס אותן לטקסט.** ב-title וב-H1 משתמשים בכתיב התקני (נדל"ן, תמ"א 38, פינוי בינוי). בגוף הטקסט מותר לכתוב "פינוי-בינוי" עם מקף פעם אחת, אם זה יוצא טבעי.
- הגרשיים ב-HTML: בתוך תגית `<title>` ובטקסט רגיל כותבים `"` רגיל. בתוך ערך של מאפיין (`content="..."`) כותבים `&quot;` (למשל `נדל&quot;ן`). ב-JSON-LD כותבים `\"`. ספירת התווים במסמך הזה סופרת את הגרשיים כתו אחד.

### 1.5 ערים ספציפיות
- לפי הבריף אסור לכתוב רשימת ערים כאילו העסק עובד בהן. לכן **אין עמודי עיר בגרסה הזו**, וב-title ובתיאורים כתוב רק "השרון".
- הערים שבהן העסק עובד בפועל: **[למלא]**. אחרי שהבעלים מאשרים, כל עיר שיש עליה תוכן אמיתי (רחובות, עסקאות, פרויקטים) יכולה לקבל עמוד משלה, למשל `kfar-saba.html`. עמוד עיר בלי תוכן אמיתי מזיק יותר משהוא מועיל.
- עד אז, החיפוש "מתווך ב[עיר]" מטופל דרך אזורי השירות ב-Google Business Profile (§6.9), גם הם רק ערים מאושרות.

---

## 2. מפת עמודים

| עמוד | slug | מילת מפתח ראשית | robots | ב-sitemap |
|---|---|---|---|---|
| בית | `/` (index.html) | תיווך נדל"ן בשרון | index | כן |
| נכסים | `/properties.html` | דירות למכירה ולהשכרה בשרון | **noindex, follow** כל עוד יש רק נכסים לדוגמה | לא, עד שיהיו נכסים אמיתיים |
| התחדשות עירונית | `/urban-renewal.html` | התחדשות עירונית בשרון | index | כן |
| השקעות | `/invest.html` | השקעות נדל"ן בשרון | index | כן |
| אודות | `/about.html` | משרד נדל"ן משפחתי בשרון (+ השם) | index | כן |
| למוכרים ומשכירים | `/sell.html` | למכור או להשכיר דירה בשרון | index | כן |
| 404 | `/404.html` | — | **noindex** | לא |

> **slugs:** באנגלית, באותיות קטנות, עם מקף. סלאג בעברית הופך ל-`%D7%...` כשמעתיקים את הכתובת לוואטסאפ. אם האחסון מגיש כתובות בלי `.html` (Netlify ו-Vercel עושים את זה לפעמים), מחליטים על צורה אחת ומיישמים אותה בכל ה-canonical ובכל הקישורים (§6.1).
> **אם `sell.html` לא ייבנה:** מילות המפתח של העמוד ושלוש השאלות הראשונות שלו עוברות למקטע בעמוד הבית, ומוחקים אותו מה-sitemap ומטבלת הקישורים.

### 2.1 index.html (בית)
- **ראשית:** תיווך נדל"ן בשרון
- **משניות:** משרד תיווך בשרון · נדל"ן בשרון · חברת נדל"ן משפחתית · ביתא נדל"ן
- **title (55 תווים):** `תיווך נדל"ן בשרון, התחדשות עירונית והשקעות | ביתא נדל"ן`
- **meta description (143 תווים):** `ביתא נדל"ן היא משרד משפחתי של אבא ובן בשרון. תיווך דירות למכירה ולהשכרה, ליווי בעלי דירות בהתחדשות עירונית ועסקאות למשקיעים. כתבו לנו בוואטסאפ.`
- **H1:** `תיווך נדל"ן בשרון, בניהול אבא ובן`
- **canonical:** `https://www.YOUR-DOMAIN.co.il/`
- **הערות לקופירייטר:** הפסקה הראשונה צריכה להזכיר את "ביתא נדל"ן" ואת "השרון" במשפט אחד, בגלל ההתנגשות בשם. שלושת התחומים מופיעים כאן ברצף אחד כי זה מה שהעסק עושה. בשאר האתר לא לבנות כל משפט על שלושה פריטים (anti-ai).

### 2.2 properties.html (נכסים)
- **ראשית:** דירות למכירה ולהשכרה בשרון
- **משניות:** דירות למכירה בשרון · דירות להשכרה בשרון · בתים למכירה בשרון · נכסים ממשרד תיווך בשרון
- **title (39 תווים):** `דירות למכירה ולהשכרה בשרון | ביתא נדל"ן`
- **meta description (127 תווים):** `דירות ובתים למכירה ולהשכרה שאנחנו משווקים כרגע, בשרון ובשאר הארץ. ראיתם נכס שמעניין אתכם? שלחו וואטסאפ עם שם הנכס ונחזור אליכם.`
- **H1:** `דירות ונכסים למכירה ולהשכרה`
- **canonical:** `https://www.YOUR-DOMAIN.co.il/properties.html`
- **robots:** `<meta name="robots" content="noindex, follow">` עד שיעלה הנכס האמיתי הראשון (§6.3).
- **הערות:** בכרטיס נכס כותבים כותרת תיאורית (סוג הנכס, מספר חדרים, אזור), לא "נכס 1". את העיר כותבים רק כשהנכס אמיתי. ה-`alt` של תמונת placeholder יהיה "תמונה להחלפה" או ריק אם התמונה דקורטיבית, אף פעם לא שם קובץ.

### 2.3 urban-renewal.html (התחדשות עירונית)
- **ראשית:** התחדשות עירונית בשרון
- **משניות:** פינוי בינוי בשרון · ליווי בעלי דירות בהתחדשות עירונית · תמ"א 38 (במסגרת "מה קורה אחרי הפקיעה") · חלופת שקד
- **title (47 תווים):** `התחדשות עירונית ופינוי בינוי בשרון | ביתא נדל"ן`
- **meta description (116 תווים):** `ליווי בעלי דירות בבניינים ישנים בשרון: פינוי בינוי, מה השתנה מאז שתמ"א 38 פקעה, ומה כדאי לבדוק לפני שחותמים מול יזם.`
- **H1:** `התחדשות עירונית ופינוי בינוי בשרון`. אפשר להוסיף מתחת שורת משנה בקול של הבעלים.
- **canonical:** `https://www.YOUR-DOMAIN.co.il/urban-renewal.html`
- **הערות לקופירייטר:**
  - "תמ"א 38" מופיעה ב-H2 שעוסק במה שהשתנה ובשאלות הנפוצות. היא לא מוצגת כשירות זמין.
  - **ניגוד תפקידים:** הבריף מגדיר את העסק גם כ"יזמות" וגם כ"ליווי בעלי דירות... בצד שלהם". העמוד חייב להבהיר באיזה תפקיד העסק פועל בכל סוג פרויקט. **[למלא מול הבעלים]** לא לכתוב "מפקח" או "נציגות דיירים" אם זה לא התפקיד בפועל.
  - עובדות רגולטוריות (אחוזי הסכמה, מועדים) תמיד מגיעות עם תאריך ובדיקה מול מקור עדכני (§7).

### 2.4 invest.html (השקעות)
- **ראשית:** השקעות נדל"ן בשרון
- **משניות:** דירה להשקעה בשרון · ייעוץ השקעות נדל"ן · השקעה בפינוי בינוי · קניית דירה בישראל לתושבי חוץ
- **title (41 תווים):** `השקעות נדל"ן בשרון ובכל הארץ | ביתא נדל"ן`
- **meta description (137 תווים):** `איתור ובדיקה של עסקאות נדל"ן למשקיעים, גם למי שגר רחוק מהשרון או בחו"ל. דירות להשקעה, נכסים בפינוי בינוי, ומספרים מסודרים לפני שמתחייבים.`
- **H1:** `השקעות נדל"ן בשרון ובכל הארץ`
- **canonical:** `https://www.YOUR-DOMAIN.co.il/invest.html`
- **הערות לקופירייטר:**
  - לכתוב תמיד "ייעוץ השקעות **נדל"ן**" ולא "ייעוץ השקעות" לבד. כך אין בלבול עם ייעוץ השקעות פיננסי, שהוא תחום מפוקח.
  - לא להבטיח תשואה, ולא לכתוב "תשואה של X%" בלי מקור ותאריך.
  - משקיעים מחו"ל: אם יתברר שזה קהל משמעותי, כדאי לשקול בעתיד עמוד באנגלית (ואז נדרש hreflang, §6.2). **[לאשר]**

### 2.5 about.html (אודות)
- **ראשית:** משרד נדל"ן משפחתי בשרון
- **משניות:** ביתא נדל"ן · אבא ובן נדל"ן · [שם האב] מתווך · [שם הבן] **[למלא]**
- **title (45 תווים):** `אבא ובן, משרד נדל"ן משפחתי בשרון | ביתא נדל"ן`
- **meta description (123 תווים):** `אבא ובן שמנהלים יחד את ביתא נדל"ן: תיווך, יזמות והתחדשות עירונית, והשקעות, בעיקר בשרון. מי שעונה לכם בטלפון הוא אחד משנינו.`
- **H1:** `אבא ובן מאחורי ביתא נדל"ן`
- **canonical:** `https://www.YOUR-DOMAIN.co.il/about.html`
- **הערות:** שמות מלאים של שני הבעלים, תפקיד ומספר רישיון תיווך **[למלא]**. אנשים מחפשים מתווך לפי שם, ו-Google מחבר את השמות לעסק דרך ה-schema (§3.7). את המשמעות של "ביתא" בארמית מותר להסביר, אבל אסור לטעון שזו הסיבה לבחירת השם **[לאשר]**.

### 2.6 sell.html (למוכרים ומשכירים)
- **ראשית:** למכור או להשכיר דירה בשרון
- **משניות:** מכירת דירה עם מתווך · השכרת דירה בשרון · כמה שווה הדירה שלי · דמי תיווך
- **title (39 תווים):** `למכור או להשכיר דירה בשרון | ביתא נדל"ן`
- **meta description (126 תווים):** `מכירה או השכרה של דירה בשרון עם משרד משפחתי: מחיר מבוקש שנבדק מול עסקאות אמיתיות באזור, ושיחה ישירה עם הבעלים לאורך כל התהליך.`
- **H1:** `למכור או להשכיר דירה בשרון`
- **canonical:** `https://www.YOUR-DOMAIN.co.il/sell.html`
- **הערות:** המשפט "מחיר שנבדק מול עסקאות אמיתיות" מתאר תהליך עבודה, ולכן **[לאשר]** שכך הבעלים עובדים. מתווך לא עורך "שמאות" ולא "הערכת שמאי". המונח הנכון הוא "בדיקת מחיר שוק" או "הערכת מחיר".

### 2.7 404.html
- **title (26 תווים):** `העמוד לא נמצא | ביתא נדל"ן`
- **robots:** `<meta name="robots" content="noindex">`. בלי canonical, בלי JSON-LD, בלי meta description.
- **H1 מוצע (עם אופי):** `העמוד הזה כבר לא בשוק`. בגוף העמוד: קישורים לבית, לנכסים ולוואטסאפ.
- השרת צריך להחזיר סטטוס **404** אמיתי ולא 200. ב-Netlify, ב-GitHub Pages וב-Vercel זה קורה אוטומטית כשקיים קובץ `404.html` בשורש.

---

## 3. schema.org (JSON-LD)

### 3.1 כללים
- בכל עמוד יש `<script type="application/ld+json">` אחד עם `@graph`, בתוך `<head>`, **בקוד ה-HTML הסטטי**. לא מזריקים אותו ב-JS, חוץ מרשימת הנכסים בעתיד (§3.8).
- כל `[למלא]` צריך להתמלא **או שהשורה נמחקת** לפני העלייה לאוויר. אסור שיעלה טלפון בצורה `"[למלא]"`. JSON לא מאפשר הערות, ולכן ההערות כתובות מחוץ לבלוקים.
- `@id` קבוע לארגון: `https://www.YOUR-DOMAIN.co.il/#organization`. כל עמוד פנימי מפנה אליו.
- כל טקסט ב-schema (בעיקר תשובות FAQ) חייב להיות **זהה לטקסט שמופיע בעמוד**.
- בדיקה: [Rich Results Test](https://search.google.com/test/rich-results) ו-[validator.schema.org](https://validator.schema.org).

### 3.2 עמוד הבית: WebSite + RealEstateAgent
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.YOUR-DOMAIN.co.il/#website",
      "url": "https://www.YOUR-DOMAIN.co.il/",
      "name": "ביתא נדל\"ן",
      "alternateName": ["ביתא נדל\"ן השרון", "[למלא: כתיב לטיני מאושר]"],
      "inLanguage": "he-IL",
      "publisher": { "@id": "https://www.YOUR-DOMAIN.co.il/#organization" }
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://www.YOUR-DOMAIN.co.il/#organization",
      "name": "ביתא נדל\"ן",
      "alternateName": "[למלא: כתיב לטיני מאושר]",
      "description": "חברת נדל\"ן משפחתית בניהול אב ובנו: תיווך מכירה והשכרה, יזמות והתחדשות עירונית, ייעוץ והשקעות נדל\"ן. בעיקר בשרון, עם פעילות בכל הארץ.",
      "url": "https://www.YOUR-DOMAIN.co.il/",
      "logo": "https://www.YOUR-DOMAIN.co.il/[למלא: נתיב הלוגו, PNG מרובע של 112px לפחות]",
      "image": "https://www.YOUR-DOMAIN.co.il/og-image.png",
      "telephone": "[למלא: +972-5X-XXX-XXXX]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[למלא]",
        "addressLocality": "[למלא]",
        "postalCode": "[למלא]",
        "addressCountry": "IL"
      },
      "areaServed": [
        { "@type": "Place", "name": "השרון" },
        { "@type": "Country", "name": "ישראל" }
      ],
      "foundingDate": "[למלא: YYYY]",
      "founder": [
        {
          "@type": "Person",
          "@id": "https://www.YOUR-DOMAIN.co.il/about.html#father",
          "name": "[למלא: שם האב]",
          "jobTitle": "[למלא]",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "רישיון תיווך במקרקעין",
            "credentialCategory": "license",
            "identifier": "[למלא: מספר רישיון]",
            "recognizedBy": { "@type": "GovernmentOrganization", "name": "רשם המתווכים במקרקעין, משרד המשפטים" }
          }
        },
        {
          "@type": "Person",
          "@id": "https://www.YOUR-DOMAIN.co.il/about.html#son",
          "name": "[למלא: שם הבן]",
          "jobTitle": "[למלא]",
          "parent": { "@id": "https://www.YOUR-DOMAIN.co.il/about.html#father" }
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "[למלא: אותו מספר]",
        "contactType": "customer service",
        "availableLanguage": ["he"]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "[למלא: HH:MM]",
          "closes": "[למלא: HH:MM]"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "תחומי פעילות",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תיווך מכירה והשכרה של דירות ובתים", "url": "https://www.YOUR-DOMAIN.co.il/sell.html" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "יזמות והתחדשות עירונית", "url": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ייעוץ והשקעות נדל\"ן", "url": "https://www.YOUR-DOMAIN.co.il/invest.html" } }
        ]
      },
      "sameAs": [
        "[למלא: קישור לפרופיל Google Business]",
        "[למלא: דף המשרד ביד2]",
        "[למלא: דף המשרד במדלן]",
        "[למלא: פייסבוק / אינסטגרם]"
      ]
    }
  ]
}
</script>
```
**הערות לבלוק:**
- `hasCredential`: לשים רק אצל מי שיש לו רישיון תיווך. אם גם לבן יש רישיון, משכפלים את הבלוק אצלו עם המספר שלו. **[למלא]**
- `openingHoursSpecification`: אם אין שעות קבועות, מוחקים את כל הבלוק. אם מוסיפים יום שישי, כותבים אותו כפריט נפרד עם שעות משלו.
- `availableLanguage`: מוסיפים `"en"` ושפות אחרות רק אם הבעלים באמת מדברים בהן עם לקוחות. **[לאשר]**
- `geo` (קואורדינטות): אפשר להוסיף אחרי שהכתובת ידועה. אם לא, משאירים בלי.
- אם `sell.html` לא נבנה, ה-`url` של שירות התיווך מפנה ל-`https://www.YOUR-DOMAIN.co.il/`.
- `sameAs`: מכניסים רק קישורים שקיימים בפועל. שורה שאין לה קישור נמחקת.

### 3.3 BreadcrumbList (כל עמוד פנימי)
תבנית (בדוגמה, עמוד ההשקעות):
```json
{
  "@type": "BreadcrumbList",
  "@id": "https://www.YOUR-DOMAIN.co.il/invest.html#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ראשי", "item": "https://www.YOUR-DOMAIN.co.il/" },
    { "@type": "ListItem", "position": 2, "name": "השקעות נדל\"ן", "item": "https://www.YOUR-DOMAIN.co.il/invest.html" }
  ]
}
```
| עמוד | `name` במיקום 2 | `item` |
|---|---|---|
| properties.html | נכסים | `https://www.YOUR-DOMAIN.co.il/properties.html` |
| urban-renewal.html | התחדשות עירונית | `https://www.YOUR-DOMAIN.co.il/urban-renewal.html` |
| invest.html | השקעות נדל"ן | `https://www.YOUR-DOMAIN.co.il/invest.html` |
| about.html | אודות | `https://www.YOUR-DOMAIN.co.il/about.html` |
| sell.html | למוכרים ומשכירים | `https://www.YOUR-DOMAIN.co.il/sell.html` |

מומלץ להציג גם פירורי לחם גלויים מעל ה-H1, כשורה קטנה בנוסח "ראשי / השקעות נדל"ן". זה מתאים ל"כיתובים קטנים" ב-anti-ai, ו-Google מעדיף פירורי לחם שמופיעים גם בעמוד.

### 3.4 urban-renewal.html: Breadcrumb + Service + FAQPage
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ראשי", "item": "https://www.YOUR-DOMAIN.co.il/" },
        { "@type": "ListItem", "position": 2, "name": "התחדשות עירונית", "item": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html#service",
      "name": "התחדשות עירונית ופינוי בינוי",
      "serviceType": "התחדשות עירונית",
      "description": "[למלא: משפט אחד מתוך הקופי של העמוד]",
      "url": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html",
      "provider": { "@type": "RealEstateAgent", "@id": "https://www.YOUR-DOMAIN.co.il/#organization", "name": "ביתא נדל\"ן" },
      "areaServed": [
        { "@type": "Place", "name": "השרון" },
        { "@type": "Country", "name": "ישראל" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.YOUR-DOMAIN.co.il/urban-renewal.html#faq",
      "mainEntity": [
        { "@type": "Question", "name": "האם עדיין אפשר לעשות תמ\"א 38 בבניין שלנו?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובת הקופירייטר, מילה במילה כמו בעמוד]" } },
        { "@type": "Question", "name": "מה ההבדל בין פינוי בינוי, תמ\"א 38 וחלופת שקד?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "כמה מבעלי הדירות צריכים להסכים כדי שפינוי בינוי יתקדם?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "מי משלם על עורך הדין של בעלי הדירות?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "מה קורה כששכן אחד מסרב לחתום?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "אתם היזמים של הפרויקט, או שאתם מלווים את בעלי הדירות?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } }
      ]
    }
  ]
}
</script>
```

### 3.5 invest.html: Breadcrumb + Service + FAQPage
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.YOUR-DOMAIN.co.il/invest.html#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ראשי", "item": "https://www.YOUR-DOMAIN.co.il/" },
        { "@type": "ListItem", "position": 2, "name": "השקעות נדל\"ן", "item": "https://www.YOUR-DOMAIN.co.il/invest.html" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.YOUR-DOMAIN.co.il/invest.html#service",
      "name": "ייעוץ והשקעות נדל\"ן",
      "serviceType": "ייעוץ השקעות נדל\"ן",
      "description": "[למלא: משפט אחד מתוך הקופי של העמוד]",
      "url": "https://www.YOUR-DOMAIN.co.il/invest.html",
      "provider": { "@type": "RealEstateAgent", "@id": "https://www.YOUR-DOMAIN.co.il/#organization", "name": "ביתא נדל\"ן" },
      "areaServed": [
        { "@type": "Place", "name": "השרון" },
        { "@type": "Country", "name": "ישראל" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.YOUR-DOMAIN.co.il/invest.html#faq",
      "mainEntity": [
        { "@type": "Question", "name": "כמה מס רכישה משלמים על דירה להשקעה?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "כמה הון עצמי צריך כדי לקנות דירה להשקעה?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "כדאי לקנות דירה בבניין שמיועד לפינוי בינוי?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "אפשר להשקיע בנדל\"ן בשרון כשגרים בחו\"ל?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "איזו תשואה משכירות אפשר לצפות לה בשרון?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } },
        { "@type": "Question", "name": "מה בודקים בנכס לפני שקונים אותו להשקעה?", "acceptedAnswer": { "@type": "Answer", "text": "[תשובה]" } }
      ]
    }
  ]
}
</script>
```

### 3.6 sell.html: Breadcrumb + FAQPage (אופציונלי)
המבנה זהה ל-§3.5. ה-Service מקבל את השם `"תיווך מכירה והשכרה של דירות ובתים"` ו-`serviceType` `"תיווך נדל\"ן"`, והשאלות לקוחות מ-§7.3.

> **ציפייה נכונה לגבי FAQPage:** מאוגוסט 2023 Google מציג תוצאות מורחבות של שאלות נפוצות כמעט רק באתרי ממשלה ובריאות. לכן הסימון **לא צפוי לייצר תצוגה מורחבת** בתוצאות החיפוש. בכל זאת שווה להשאיר אותו: הוא תקין, עוזר למנועים ולתשובות AI להבין את העמוד, ומחייב לכתוב תשובות ממוקדות.

### 3.7 about.html: Breadcrumb + AboutPage + Person
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.YOUR-DOMAIN.co.il/about.html#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ראשי", "item": "https://www.YOUR-DOMAIN.co.il/" },
        { "@type": "ListItem", "position": 2, "name": "אודות", "item": "https://www.YOUR-DOMAIN.co.il/about.html" }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.YOUR-DOMAIN.co.il/about.html#webpage",
      "url": "https://www.YOUR-DOMAIN.co.il/about.html",
      "name": "אבא ובן, משרד נדל\"ן משפחתי בשרון",
      "inLanguage": "he-IL",
      "about": { "@type": "RealEstateAgent", "@id": "https://www.YOUR-DOMAIN.co.il/#organization", "name": "ביתא נדל\"ן" }
    },
    {
      "@type": "Person",
      "@id": "https://www.YOUR-DOMAIN.co.il/about.html#father",
      "name": "[למלא: שם האב]",
      "jobTitle": "[למלא]",
      "worksFor": { "@id": "https://www.YOUR-DOMAIN.co.il/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://www.YOUR-DOMAIN.co.il/about.html#son",
      "name": "[למלא: שם הבן]",
      "jobTitle": "[למלא]",
      "worksFor": { "@id": "https://www.YOUR-DOMAIN.co.il/#organization" },
      "parent": { "@id": "https://www.YOUR-DOMAIN.co.il/about.html#father" }
    }
  ]
}
</script>
```
כשיהיו תמונות אמיתיות של האב והבן, מוסיפים `"image"` לכל Person.

### 3.8 properties.html: **בלי listing schema כרגע**
- **החלטה:** כל עוד העמוד מציג רק נכסים לדוגמה, יש בו **רק BreadcrumbList**. **נכסים לדוגמה לא נכנסים ל-schema בשום מצב.** סימון של נכס שלא קיים הוא נתון כוזב.
- **בעתיד:** כשיהיו נכסים אמיתיים, `main.js` יבנה ItemList מתוך `properties.js` וידלג על כל פריט עם `sample: true`. אם לא נשאר אף נכס אמיתי, לא מוסיפים את ה-script בכלל. Google קורא JSON-LD שמוזרק ב-JS. ל-Google אין תצוגה מורחבת לנכסי נדל"ן, אז התועלת היא בעיקר הבנה של העמוד. זה לא דחוף.
- **מוסכמה בקובץ הנתונים:** לכל נכס ב-`properties.js` יהיה שדה `sample: true` או `sample: false`. השדה הזה קובע גם את התגית "נכס לדוגמה — להחלפה" בעמוד וגם אם הנכס נכנס ל-schema.
- תבנית לפריט אחד (ש"ח, מכירה):
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "נכסים למכירה ולהשכרה, ביתא נדל\"ן",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "url": "https://www.YOUR-DOMAIN.co.il/properties.html#[id מתוך properties.js]",
        "businessFunction": "http://purl.org/goodrelations/v1#Sell",
        "price": "[מחיר, מספר בלבד]",
        "priceCurrency": "ILS",
        "availability": "https://schema.org/InStock",
        "seller": { "@id": "https://www.YOUR-DOMAIN.co.il/#organization" },
        "itemOffered": {
          "@type": "Apartment",
          "name": "[כותרת הנכס]",
          "numberOfRooms": "[מספר חדרים]",
          "floorSize": { "@type": "QuantitativeValue", "value": "[מ\"ר]", "unitCode": "MTK" },
          "address": { "@type": "PostalAddress", "addressLocality": "[עיר]", "addressCountry": "IL" }
        }
      }
    }
  ]
}
```
  - **להשכרה:** `businessFunction` מקבל את הערך `http://purl.org/goodrelations/v1#LeaseOut`, ובמקום `price` כותבים `"priceSpecification": { "@type": "UnitPriceSpecification", "price": "[שכירות חודשית]", "priceCurrency": "ILS", "unitCode": "MON" }`.
  - **בית פרטי:** `itemOffered` מקבל `@type` `"SingleFamilyResidence"` או `"House"`.
  - נכס שנמכר נמחק מהרשימה, או שה-`availability` שלו משתנה ל-`https://schema.org/SoldOut`.

### 3.9 404.html
בלי JSON-LD.

---

## 4. Open Graph ו-Twitter card

WhatsApp הוא ערוץ הפנייה הראשי, ותצוגת הקישור בוואטסאפ נבנית מתגיות OG. לכן הן חשובות כאן במיוחד.

### 4.1 תגיות זהות בכל העמודים (חוץ מ-404)
```html
<meta property="og:type" content="website">
<meta property="og:locale" content="he_IL">
<meta property="og:site_name" content="ביתא נדל&quot;ן">
<meta property="og:image" content="https://www.YOUR-DOMAIN.co.il/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="[לעדכן לפי התמונה בפועל, למשל: הלוגו של ביתא נדל&quot;ן ושורת התחומים: תיווך, התחדשות עירונית והשקעות בשרון]">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://www.YOUR-DOMAIN.co.il/og-image.png">
<meta name="twitter:image:alt" content="[זהה ל-og:image:alt]">
```

### 4.2 תגיות לכל עמוד
הכלל: og:title ו-twitter:title זהים ל-`<title>`. og:description ו-twitter:description זהים ל-meta description. בתוך מאפיינים כותבים `&quot;` במקום `"`.

**index.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/">
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/">
<meta property="og:title" content="תיווך נדל&quot;ן בשרון, התחדשות עירונית והשקעות | ביתא נדל&quot;ן">
<meta property="og:description" content="ביתא נדל&quot;ן היא משרד משפחתי של אבא ובן בשרון. תיווך דירות למכירה ולהשכרה, ליווי בעלי דירות בהתחדשות עירונית ועסקאות למשקיעים. כתבו לנו בוואטסאפ.">
<meta name="twitter:title" content="תיווך נדל&quot;ן בשרון, התחדשות עירונית והשקעות | ביתא נדל&quot;ן">
<meta name="twitter:description" content="ביתא נדל&quot;ן היא משרד משפחתי של אבא ובן בשרון. תיווך דירות למכירה ולהשכרה, ליווי בעלי דירות בהתחדשות עירונית ועסקאות למשקיעים. כתבו לנו בוואטסאפ.">
```

**properties.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/properties.html">
<meta name="robots" content="noindex, follow"><!-- להסיר כשיעלו נכסים אמיתיים -->
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/properties.html">
<meta property="og:title" content="דירות למכירה ולהשכרה בשרון | ביתא נדל&quot;ן">
<meta property="og:description" content="דירות ובתים למכירה ולהשכרה שאנחנו משווקים כרגע, בשרון ובשאר הארץ. ראיתם נכס שמעניין אתכם? שלחו וואטסאפ עם שם הנכס ונחזור אליכם.">
<meta name="twitter:title" content="דירות למכירה ולהשכרה בשרון | ביתא נדל&quot;ן">
<meta name="twitter:description" content="דירות ובתים למכירה ולהשכרה שאנחנו משווקים כרגע, בשרון ובשאר הארץ. ראיתם נכס שמעניין אתכם? שלחו וואטסאפ עם שם הנכס ונחזור אליכם.">
```

**urban-renewal.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/urban-renewal.html">
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/urban-renewal.html">
<meta property="og:title" content="התחדשות עירונית ופינוי בינוי בשרון | ביתא נדל&quot;ן">
<meta property="og:description" content="ליווי בעלי דירות בבניינים ישנים בשרון: פינוי בינוי, מה השתנה מאז שתמ&quot;א 38 פקעה, ומה כדאי לבדוק לפני שחותמים מול יזם.">
<meta name="twitter:title" content="התחדשות עירונית ופינוי בינוי בשרון | ביתא נדל&quot;ן">
<meta name="twitter:description" content="ליווי בעלי דירות בבניינים ישנים בשרון: פינוי בינוי, מה השתנה מאז שתמ&quot;א 38 פקעה, ומה כדאי לבדוק לפני שחותמים מול יזם.">
```

**invest.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/invest.html">
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/invest.html">
<meta property="og:title" content="השקעות נדל&quot;ן בשרון ובכל הארץ | ביתא נדל&quot;ן">
<meta property="og:description" content="איתור ובדיקה של עסקאות נדל&quot;ן למשקיעים, גם למי שגר רחוק מהשרון או בחו&quot;ל. דירות להשקעה, נכסים בפינוי בינוי, ומספרים מסודרים לפני שמתחייבים.">
<meta name="twitter:title" content="השקעות נדל&quot;ן בשרון ובכל הארץ | ביתא נדל&quot;ן">
<meta name="twitter:description" content="איתור ובדיקה של עסקאות נדל&quot;ן למשקיעים, גם למי שגר רחוק מהשרון או בחו&quot;ל. דירות להשקעה, נכסים בפינוי בינוי, ומספרים מסודרים לפני שמתחייבים.">
```

**about.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/about.html">
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/about.html">
<meta property="og:title" content="אבא ובן, משרד נדל&quot;ן משפחתי בשרון | ביתא נדל&quot;ן">
<meta property="og:description" content="אבא ובן שמנהלים יחד את ביתא נדל&quot;ן: תיווך, יזמות והתחדשות עירונית, והשקעות, בעיקר בשרון. מי שעונה לכם בטלפון הוא אחד משנינו.">
<meta name="twitter:title" content="אבא ובן, משרד נדל&quot;ן משפחתי בשרון | ביתא נדל&quot;ן">
<meta name="twitter:description" content="אבא ובן שמנהלים יחד את ביתא נדל&quot;ן: תיווך, יזמות והתחדשות עירונית, והשקעות, בעיקר בשרון. מי שעונה לכם בטלפון הוא אחד משנינו.">
```

**sell.html**
```html
<link rel="canonical" href="https://www.YOUR-DOMAIN.co.il/sell.html">
<meta property="og:url" content="https://www.YOUR-DOMAIN.co.il/sell.html">
<meta property="og:title" content="למכור או להשכיר דירה בשרון | ביתא נדל&quot;ן">
<meta property="og:description" content="מכירה או השכרה של דירה בשרון עם משרד משפחתי: מחיר מבוקש שנבדק מול עסקאות אמיתיות באזור, ושיחה ישירה עם הבעלים לאורך כל התהליך.">
<meta name="twitter:title" content="למכור או להשכיר דירה בשרון | ביתא נדל&quot;ן">
<meta name="twitter:description" content="מכירה או השכרה של דירה בשרון עם משרד משפחתי: מחיר מבוקש שנבדק מול עסקאות אמיתיות באזור, ושיחה ישירה עם הבעלים לאורך כל התהליך.">
```

**404.html**: בלי OG, בלי canonical, רק `<meta name="robots" content="noindex">`.

### 4.3 הקובץ og-image.png
- **מידות:** 1200×630, PNG (או JPG אם יוצא קל יותר, ואז מעדכנים את `og:image:type`). שם הקובץ בשורש: `og-image.png`.
- **משקל:** כדאי שיהיה **מתחת ל-300KB**. WhatsApp לפעמים לא מציג תצוגה מקדימה לתמונות כבדות.
- **תוכן:** בלי תמונות AI ובלי תמונות מהרשת (לפי הבריף). רק טיפוגרפיה וטוקנים של המותג: השם "ביתא נדל"ן", שורה קצרה כמו "תיווך · התחדשות עירונית · השקעות | השרון", ואלמנט החתימה של העיצוב (קווי שרטוט או תוכנית קומה). בלי מספר טלפון, כי אם הוא ישתנה התמונה כבר תהיה שמורה במטמון.
- **אזור בטוח:** הטקסט נשאר בריבוע המרכזי של 630×630, כי WhatsApp ותצוגות קטנות חותכים לריבוע.
- כשיהיו צילומים אמיתיים (האב והבן, המשרד) אפשר להכין גרסה עם צילום, ולשקול תמונת OG נפרדת לכל עמוד שירות.
- **בדיקה:** שולחים את הקישור לעצמכם בוואטסאפ, ובודקים ב-[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/). WhatsApp שומר תצוגות במטמון. לבדיקה חוזרת מוסיפים `?v=2` לקישור.

---

## 5. החלפת הדומיין (placeholder)

- הכתובת הזמנית היא **`https://www.YOUR-DOMAIN.co.il`** ומופיעה בדיוק כך בכל מקום: canonical, og:url, og:image, twitter:image, כל ה-`@id`, `url`, `item` ו-`logo` ב-JSON-LD, `sitemap.xml` ושורת ה-Sitemap ב-`robots.txt`.
- **צריך להחליף אותה** אחרי שהדומיין נקנה. מחליטים מראש אם הכתובת תהיה עם `www` או בלי, ומפנים (301) את הצורה השנייה. אחר כך מחליפים בפקודה אחת:
  ```bash
  grep -rl "YOUR-DOMAIN.co.il" site/ --include="*.html" --include="*.xml" --include="*.txt" --include="*.js"
  # אחרי בדיקה ידנית של הרשימה:
  # sed -i 's#https://www.YOUR-DOMAIN.co.il#https://www.<הדומיין>#g' <הקבצים>
  ```
- כל הכתובות חייבות להיות **מוחלטות**, עם `https://`. og:image עם נתיב יחסי לא יעבוד בוואטסאפ.

---

## 6. SEO טכני

### 6.1 canonical
- בכל עמוד שאפשר לאנדקס יש `<link rel="canonical">` מוחלט שמפנה לעמוד עצמו (הכתובות ב-§4.2).
- ה-canonical של עמוד הבית הוא `/`, לא `/index.html`. קישורים פנימיים לעמוד הבית יכולים להיות `index.html`, כדי שיעבדו גם ב-Artifact וגם בקבצים מקומיים. ה-canonical מאחד אותם.
- ה-canonical צריך להיות **הכתובת שמחזירה 200 בלי הפניה**. אם האחסון מפנה את `about.html` ל-`/about` (למשל Pretty URLs ב-Netlify), מעדכנים את כל ה-canonical, ה-og:url וה-sitemap לצורה בלי `.html`. אסור לערבב בין הצורות.
- פרמטרים כמו `?utm_...` או `?v=2` לא משנים את ה-canonical.

### 6.2 hreflang
**לא נדרש.** האתר בעברית בלבד, עם `<html lang="he" dir="rtl">`. אם בעתיד יתווסף עמוד באנגלית למשקיעים מחו"ל, מוסיפים `hreflang="he"`, `hreflang="en"` ו-`x-default` בשני העמודים.

### 6.3 robots meta לפי עמוד
| עמוד | תגית |
|---|---|
| index, urban-renewal, investments, about, sell | בלי תגית (ברירת המחדל: index, follow) |
| properties | `noindex, follow` עד שיעלה הנכס האמיתי הראשון. אז מסירים את התגית ומוסיפים את העמוד ל-sitemap. |
| 404 | `noindex` |

אם יש סביבת תצוגה מקדימה ציבורית (למשל תת-דומיין של netlify.app) לפני החיבור לדומיין, היא צריכה לקבל `noindex` או סיסמה, כדי שהעותק לא יאונדקס. ה-Artifact ב-claude.ai פרטי ולא נסרק.

### 6.4 sitemap.xml (בשורש `site/`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.YOUR-DOMAIN.co.il/</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://www.YOUR-DOMAIN.co.il/urban-renewal.html</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://www.YOUR-DOMAIN.co.il/invest.html</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://www.YOUR-DOMAIN.co.il/sell.html</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://www.YOUR-DOMAIN.co.il/about.html</loc><lastmod>2026-10-14</lastmod></url>
  <!-- להוסיף כשיעלו נכסים אמיתיים:
  <url><loc>https://www.YOUR-DOMAIN.co.il/properties.html</loc><lastmod>YYYY-MM-DD</lastmod></url>
  -->
</urlset>
```
- בלי `priority` ובלי `changefreq`, כי Google מתעלם מהם.
- את `lastmod` מעדכנים רק כשהתוכן משתנה באמת.
- 404 לא נכנס ל-sitemap.

### 6.5 robots.txt (בשורש `site/`)
```
User-agent: *
Disallow:

Sitemap: https://www.YOUR-DOMAIN.co.il/sitemap.xml
```
- **את התיקיות `_spec/` ו-`_qa/` לא מעלים לאחסון בכלל**, וגם לא את קובץ ה-zip. לא מוסיפים להן `Disallow`, כי robots.txt פומבי וכל מי שקורא אותו יראה את השמות. קובץ שלא הועלה לא יכול להיחשף.

### 6.6 קישורים פנימיים
- **ניווט ראשי** (זהה בכל העמודים, תוויות קצרות): נכסים · התחדשות עירונית · השקעות · למוכרים ומשכירים · אודות. בנוסף כפתור וואטסאפ וכפתור טלפון.
- **פוטר:** קישורים לכל העמודים, מספר רישיון תיווך **[למלא]**, טלפון כטקסט, וואטסאפ, וכתובת **[למלא]**.
- **קישורים בתוך הטקסט** (אלה שנותנים את ההקשר ל-Google). 2 עד 4 קישורים בכל עמוד, עם anchor שמתאר את היעד. לא "לחצו כאן", ולא אותו anchor בדיוק בכל פעם:

| מעמוד | לעמוד | anchor text מוצע | איפה בעמוד |
|---|---|---|---|
| index | properties | נכסים שאנחנו משווקים עכשיו | מקטע נכסים / CTA |
| index | urban-renewal | התחדשות עירונית ופינוי בינוי | פסקת התחומים |
| index | investments | השקעות נדל"ן בשרון | פסקת התחומים |
| index | sell | מוכרים או משכירים דירה | פסקת התחומים |
| index | about | מי אנחנו, אבא ובן | ליד הפתיח המשפחתי |
| properties | sell | יש לכם דירה למכירה או להשכרה? | מתחת לרשימת הנכסים |
| properties | investments | מחפשים נכס להשקעה | מתחת לרשימה |
| urban-renewal | sell | למכור עכשיו או לחכות להתחדשות | בתשובה לשאלה הרלוונטית / סוף העמוד |
| urban-renewal | investments | השקעה בבניין שמיועד לפינוי בינוי | מקטע למשקיעים |
| urban-renewal | about | מי עומד מאחורי הליווי | ליד הסבר התפקיד שלהם |
| investments | urban-renewal | איך עובד פינוי בינוי מהצד של בעלי הדירות | בתשובה "כדאי לקנות בבניין שמיועד לפינוי בינוי" |
| investments | properties | נכסים זמינים כרגע | CTA |
| about | urban-renewal / investments / sell | שמות התחומים, בתוך הסיפור ("הבן מוביל את ההתחדשות העירונית" **[למלא: חלוקת התפקידים בפועל]**) | בטקסט |
| sell | urban-renewal | הבניין ישן? כדאי לבדוק קודם התחדשות עירונית | בשאלה "למכור עכשיו או לחכות" |
| sell | properties | ככה נראים הנכסים שאנחנו משווקים | אחרי הסבר התהליך |
| 404 | index / properties / וואטסאפ | חזרה לעמוד הבית · נכסים · כתבו לנו | גוף העמוד |

- הקישורים בין התחדשות עירונית, מכירה והשקעה מבטאים את הבידול של העסק ("שלוש זוויות על אותו נכס"), ולכן הם הקישורים החשובים ביותר באתר.

### 6.7 טלפון, כתובת ורישיון (NAP)
- הבריף קובע שהטלפון מוגדר ב-`config.js`. בנוסף, **הטלפון צריך להופיע כטקסט ב-HTML הסטטי**: בפוטר כקישור `tel:`, וב-JSON-LD. WhatsApp ו-Bing לא תמיד מריצים JS. כל מופע מסומן בהערה `<!-- PHONE -->`, ככה שעדיין יש מקום אחד להחלפה.
- שם, כתובת וטלפון **זהים לחלוטין** באתר, ב-Google Business Profile, ביד2, במדלן, בדפי זהב ובפייסבוק. גם הכתיב זהה ("ביתא נדל"ן" ולא "ביתא נדלן").
- מספר רישיון התיווך בפוטר של כל עמוד **[למלא]**.

### 6.8 בסיס טכני
- `<html lang="he" dir="rtl">`, `<meta charset="utf-8">`, viewport. H1 אחד בכל עמוד, ומבנה H2 ו-H3 רציף.
- בלי `meta name="generator"` (anti-ai) ובלי `meta keywords`, ש-Google מתעלם ממנו.
- פונטים: Google Fonts עם `display=swap`, `preconnect` ל-`fonts.gstatic.com`, ומספר משקלים מינימלי.
- תמונות (כשיהיו אמיתיות): WebP או AVIF, עם `width` ו-`height`. `loading="lazy"` לכל התמונות חוץ מהראשונה במסך, והראשונה מקבלת `fetchpriority="high"`. `alt` תיאורי בעברית.
- JS עם `defer`. התוכן העיקרי (כותרות וטקסט) צריך להופיע ב-HTML הסטטי ולא להיבנות ב-JS. היחיד שנבנה ב-JS הוא רשימת הנכסים.
- `favicon.svg` ו-`apple-touch-icon.png` (180×180), ו-`<meta name="theme-color">` מתוך הטוקנים.
- קישורי `wa.me` עם `rel="noopener"`. אם הם נפתחים בלשונית חדשה, מוסיפים `target="_blank"`.

### 6.9 Google Business Profile
זה ערוץ ה-SEO החשוב ביותר בחיפוש "מתווך ב[עיר]" ו"תיווך נדל"ן בשרון".
1. **שם:** "ביתא נדל"ן" בלבד, בלי "תיווך בשרון" או מילות מפתח אחרות. זו הפרה של ההנחיות של Google ועלולה להוביל להשעיה.
2. **קטגוריה ראשית:** Real estate agency (סוכנות נדל"ן). **משניות:** Real estate agent, Real estate consultant (יועץ נדל"ן), Real estate developer (יזם נדל"ן). השמות המדויקים בעברית הם אלה שמופיעים בממשק.
3. **כתובת:** אם לקוחות מגיעים למשרד, מציגים את הכתובת **[למלא]**. אם לא, מגדירים עסק שנותן שירות באזור (service-area business), מסתירים את הכתובת ומגדירים אזורי שירות. **רק ערים שהבעלים מאשרים [למלא]**, עד 20.
4. **טלפון ושעות:** זהים לאתר.
5. **אתר:** `https://www.YOUR-DOMAIN.co.il/?utm_source=google&utm_medium=organic&utm_campaign=gbp`, כדי שאפשר יהיה למדוד את התנועה מהפרופיל.
6. **תיאור** (עד 750 תווים): אותו קול כמו באתר, עם "אבא ובן", "השרון" ושלושת התחומים. בלי קישורים ובלי ביטויים מרשימת האסורים.
7. **שירותים:** תיווך מכירה, תיווך השכרה, התחדשות עירונית, ייעוץ השקעות נדל"ן.
8. **תמונות:** צילומים אמיתיים של האב והבן, המשרד מבחוץ ומבפנים, ונכסים אמיתיים. בלי תמונות AI ובלי תמונות מאגר.
9. **ביקורות:** מבקשים מלקוחות אמיתיים אחרי עסקה, עם הקישור הייעודי מהפרופיל, ועונים לכל ביקורת. ביקורות קנויות או מזויפות אסורות.
10. **פוסטים:** נכס חדש, נכס שנמכר (בלי פרטים מזהים), עדכון על התחדשות עירונית באזור. פעם בשבוע עד שבועיים.
11. **אימות:** לפי התהליך של Google (בדרך כלל סרטון או שיחת וידאו). מתחילים מוקדם, כי זה לוקח זמן.

### 6.10 אינדקסים ופרופילים חיצוניים
בחיפושים הכלליים הם אלה שמופיעים בעמוד הראשון (§1.2), ולכן צריך להיות שם:
- **יד2:** דף משרד עם הנכסים האמיתיים.
- **מדלן:** דף משרד ודף סוכן לכל אחד מהבעלים.
- **דפי זהב (d.co.il), B144.**
- **פייסבוק / אינסטגרם:** אם קיימים **[למלא]**.
- **Waze:** אם יש משרד שמקבל קהל, מוסיפים אותו כמקום.

כל פרופיל מקשר לאתר, ושם העסק, הטלפון והכתובת זהים בכולם (§6.7). את הקישורים מוסיפים גם ל-`sameAs` (§3.2).

### 6.11 מדידה
- **Google Search Console:** נכס מסוג Domain עם אימות DNS, והגשת `sitemap.xml`. כדאי גם Bing Webmaster Tools, שמייבא את ההגדרות מ-GSC.
- **אנליטיקס:** GA4 או כלי קל יותר (Plausible, Cloudflare Web Analytics). המטרה היחידה של האתר היא פנייה, ולכן מודדים **אירועי קליק**:
  - `click_whatsapp` עם פרמטר הקשר: `property` + id / `urban_renewal` / `investment` / `general`.
  - `click_tel`.
  ב-GA4 מסמנים את שניהם כאירועי מפתח (key events).
- **כעבור 8 עד 12 שבועות:** בודקים ב-GSC באילו שאילתות האתר מופיע, ומעדכנים את טבלת §1.3 לפי נתונים אמיתיים.

### 6.12 צ'קליסט לפני עלייה
- [ ] `YOUR-DOMAIN.co.il` הוחלף בכל הקבצים (§5).
- [ ] אין `[למלא]` או `[לאשר]` בקבצים שעולים: `grep -rn "\[למלא\|\[לאשר" site/ --include="*.html" --include="*.js" --include="*.xml"`. כל מופע מתמלא, או שהשורה נמחקת.
- [ ] JSON-LD בכל עמוד עובר את Rich Results Test בלי שגיאות.
- [ ] `properties.html` במצב noindex ולא ב-sitemap, כל עוד יש בו רק נכסים לדוגמה.
- [ ] `404.html` עם noindex, והשרת מחזיר עבורו סטטוס 404.
- [ ] `og-image.png` קיים בשורש, במידות 1200×630, במשקל מתחת ל-300KB, ותצוגת הקישור בוואטסאפ נבדקה.
- [ ] `_spec/`, `_qa/` וה-zip לא הועלו לאחסון.
- [ ] title ו-description בכל עמוד תואמים ל-§2, ושום ביטוי מרשימת האסורים ב-anti-ai.md לא נכנס בעריכה.
- [ ] Search Console מחובר וה-sitemap הוגש. Google Business Profile נפתח ונשלח לאימות.

---

## 7. שאלות נפוצות מומלצות (שאלות בלבד)

הקופירייטר כותב את התשובות. ליד חלק מהשאלות יש **הערת אימות**: אלה עובדות רגולטוריות שמשתנות, ושמצאתי בחיפוש באוקטובר 2026. **לא להעתיק את ההערות כתשובה.** בודקים אותן מול מקור עדכני (עורך דין, רשות, אתר ממשלתי) ומציינים בתשובה "נכון ל[חודש ושנה]". שאלה שמסומנת **[למלא]** תלויה במדיניות של העסק עצמו.

### 7.1 urban-renewal.html (6 + 2 רזרבה)
1. **האם עדיין אפשר לעשות תמ"א 38 בבניין שלנו?**
   הערת אימות: לפי מרכז הנדל"ן, תמ"א 38 פקעה סופית ב-18.5.2026 ואי אפשר להגיש בקשות חדשות מכוחה. בנתניה היא פקעה עוד קודם. רק בחלק מהרשויות אושרו תוכניות מקומיות שמחליפות אותה. צריך לבדוק לפי עיר.
2. **מה ההבדל בין פינוי בינוי, תמ"א 38 וחלופת שקד?**
   הערת אימות: חלופת שקד היא תיקון 136 לחוק התכנון והבנייה. לפי דיווח מאחרי הפקיעה, עדיין לא ניתן מכוחה אף היתר.
3. **כמה מבעלי הדירות צריכים להסכים כדי שפינוי בינוי יתקדם?**
   הערת אימות: לפי מרכז הנדל"ן, התיקון בחוק ההסדרים קבע 66% במתחם ו-60% בבניין. הצעת חוק להורדה ל-51% עברה קריאה ראשונה. יש גם הסדר נקודתי של 51% ברחובות שנפגעו מטילים. לבדוק את המצב העדכני.
4. **מי משלם על עורך הדין של בעלי הדירות?**
   הערת אימות: לפי מידרג, בדרך כלל היזם, בתשלומים לפי אבני דרך. לאמת.
5. **מה קורה כששכן אחד מסרב לחתום?** (החיפוש הנפוץ: "דייר סרבן")
6. **אתם היזמים של הפרויקט, או שאתם מלווים את בעלי הדירות?** **[למלא מול הבעלים]**. זו השאלה הכי חשובה בעמוד, בגלל ניגוד התפקידים (§2.3).
- רזרבה: **כמה זמן עובר מהחתימה ועד שמקבלים דירה חדשה?** · **מה בעלי הדירות מקבלים בדירה החדשה?**

### 7.2 invest.html (6 + 1 רזרבה)
1. **כמה מס רכישה משלמים על דירה להשקעה?**
   הערת אימות: לפי מרכז הנדל"ן וביזפורטל, 8% עד 6.055 מיליון ש"ח ו-10% מעל הסכום הזה. זו הוראת שעה עד סוף 2026, וההחלטה אם להאריך אותה פתוחה.
2. **כמה הון עצמי צריך כדי לקנות דירה להשקעה?**
   הערת אימות: לבדוק את מגבלת שיעור המימון של בנק ישראל לדירה נוספת (נכון לידיעתי 50%). לאמת.
3. **כדאי לקנות דירה בבניין שמיועד לפינוי בינוי?** (קישור ל-urban-renewal)
4. **אפשר להשקיע בנדל"ן בשרון כשגרים בחו"ל?**
   הערת אימות: תושב חוץ זכאי למדרגות המס של דירה יחידה רק אם יהפוך לתושב ישראל בתוך שנתיים, ובכפוף לתנאים נוספים (לפי מאמר של משרד רו"ח, יולי 2026). לאמת מול יועץ מס.
5. **איזו תשואה משכירות אפשר לצפות לה בשרון?** בלי הבטחות. עדיף להסביר איך מחשבים תשואה, ואם נותנים טווח, לציין מקור ותאריך.
6. **מה בודקים בנכס לפני שקונים אותו להשקעה?**
- רזרבה: **עדיף לקנות דירה מקבלן או יד שנייה?**

### 7.3 sell.html (6)
1. **כמה עולים דמי תיווך במכירת דירה?** **[למלא: מה המשרד גובה בפועל]**
2. **מי משלם דמי תיווך בהשכרה, המשכיר או השוכר?**
   הערת אימות: לפי תיקון לחוק השכירות והשאילה משנת 2017, שוכר לא משלם דמי תיווך כשהמתווך פעל מטעם המשכיר. יש גם טיוטת תקנות שקיפות לתיווך בהשכרה. לבדוק אם נכנסה לתוקף.
3. **איך יודעים כמה שווה הדירה?** מתווך נותן הערכת מחיר שוק. שמאות היא תחום של שמאי מקרקעין. לא לערבב בין השניים.
4. **כמה זמן לוקח למכור דירה בשרון?** **[למלא: הניסיון שלהם. בלי ממוצע מומצא]**
5. **חייבים לחתום על בלעדיות?** הערת אימות: חוק המתווכים במקרקעין ותקנותיו (משך הבלעדיות ופעולות השיווק שהמתווך חייב לבצע). **[למלא: מדיניות המשרד]**
6. **כדאי למכור עכשיו, או לחכות שהבניין ייכנס להתחדשות עירונית?** זו השאלה שמבטאת את הבידול של העסק. קישור ל-urban-renewal.

### 7.4 properties.html (4, בלי FAQPage schema)
1. **הנכסים כאן מעודכנים? מה קורה אם נכס כבר נמכר?**
2. **אפשר לבקש שתחפשו לי נכס שלא מופיע כאן?**
3. **מי משלם דמי תיווך כשקונים או שוכרים דרככם?** **[למלא]**
4. **איך מתאמים סיור בנכס?**

### 7.5 about.html (4, בלי FAQPage schema)
1. **באילו אזורים אתם עובדים?** **[למלא: ערים מאושרות]**
2. **אתם מתווכים עם רישיון?** **[למלא: מספר רישיון, ואצל מי מהשניים]**
3. **עם מי מדברים כשפונים אליכם?**
4. **למה קוראים לכם ביתא?** **[לאשר]**: מותר להסביר את המשמעות בארמית, אסור לטעון שזו הסיבה לבחירת השם.

---

## 8. הזדמנויות תוכן להמשך (לא לגרסה הראשונה)
חיפושים ארוכים שהאתר יכול לזכות בהם עם עמוד ייעודי. כל אחד מהם רק עם עובדות מאומתות:
- "מה קורה בשרון אחרי תמ"א 38": מצב התוכניות המחליפות, עיר אחרי עיר. רק ערים שנבדקו.
- "למכור עכשיו או לחכות להתחדשות עירונית": מדריך שמחבר בין תיווך להתחדשות, ושמבטא את הבידול של העסק.
- "קונים דירה בשרון מחו"ל": מדריך לתושב חוץ. אם יש ביקוש, גם בגרסה באנגלית.
- עמודי עיר: רק אחרי אישור הבעלים (§1.5).

---

## מקורות (חיפושים מ-14.10.2026)
- דפי זהב, מתווכים באזור השרון: https://www.d.co.il/h-cתיווך-e9-p0-l0/
- יד2, אינדקס משרדי תיווך בכפר סבא: https://www.yad2.co.il/realestate/agencies?city=6900
- יד2, משרדי תיווך לפי אזור: https://www.yad2.co.il/realestate/agencies?topArea=19
- מרכז הנדל"ן, "וואקום מסוכן: תמ"א 38 פקעה סופית": https://www.nadlancenter.co.il/article/14694
- מרכז הנדל"ן, היתר תמ"א 38 בנתניה אחרי הפקיעה: https://www.nadlancenter.co.il/article/10854
- מרכז הנדל"ן, הארכת הטבות המס לתמ"א 38 עד מאי 2026: https://www.nadlancenter.co.il/article/5995
- מרכז הנדל"ן, הפחתת אחוז ההסכמה בפינוי בינוי: https://www.nadlancenter.co.il/article/2558
- ביזפורטל, הצעת חוק ל-51% בפינוי בינוי: https://www.bizportal.co.il/realestates/news/article/20033050
- מידרג, שכר טרחת עורך דין בפינוי בינוי: https://www.midrag.co.il/Content/Tip/12144
- מרכז הנדל"ן, מס רכישה דירה שנייה 2026: https://www.nadlancenter.co.il/article/3023
- ביזפורטל, מס רכישה: https://www.bizportal.co.il/realestates/news/article/20041446
- מס רכישה לתושב חוץ / תושב חוזר ותיק: https://www.bshcpa.co.il/%D7%9E%D7%A1-%D7%A8%D7%9B%D7%99%D7%A9%D7%94-%D7%9C%D7%AA%D7%95%D7%A9%D7%91-%D7%97%D7%95%D7%96%D7%A8-%D7%95%D7%AA%D7%99%D7%A7/
- מידרג, מי משלם דמי תיווך בשכירות: https://www.midrag.co.il/Expanel/Question/2654
- מידרג, כמה זמן לוקח למכור דירה: https://www.midrag.co.il/Expanel/Question/2788
- התחדשות עירונית בשרון (ICE): https://www.ice.co.il/realestate/news/article/1017515
- התנגשות שם, ביתא נדל"ן (אתונה), תוכן ממומן: https://www.bizportal.co.il/bizpoint-sponsored/news/article/816649
- התנגשות שם, תגית "ביתא" במרכז הנדל"ן: https://www.nadlancenter.co.il/tags/%D7%91%D7%99%D7%AA%D7%90
