/*
 * רשימת הנכסים של ביתא נדל"ן.
 * להוספת נכס: מעתיקים בלוק {...}, משנים את הפרטים ושומרים. אין צורך לגעת בעיצוב.
 * sample: true = נכס לדוגמה (מסומן באתר, הכפתור שלו לא שואל עליו). בנכס אמיתי מוחקים את השורה או כותבים false.
 * angleNote = שורת "מהזווית השנייה" — רק מידע אמיתי, אחרת null.
 * הנכסים הבאים הם דוגמה בלבד: ערים, מחירים ושטחים להמחשת הפורמט.
 */
window.BITA_PROPERTIES = [
  {
    id: "B-001",
    sample: true,
    deal: "sale",
    type: "דירה",
    city: "עיר לדוגמה א'",
    neighborhood: "שכונה לדוגמה",
    rooms: 4,
    sqm: 98,
    outdoorSqm: 12,
    floor: 3,
    floorsTotal: 6,
    price: 2450000,
    summary: "דירה מוארת עם שלושה כיווני אוויר ומרפסת שמש למערב. המטבח שופץ, שאר הדירה במצב מקורי ושמור.",
    features: ["מעלית", "חניה", "ממ\"ד", "מחסן"],
    angleNote: "הבניין בשלב של התארגנות דיירים לפינוי-בינוי. כדאי לשאול אותנו מה זה אומר למחיר.",
    status: "available",
    image: null,
    updated: "2026-10-14"
  },
  {
    id: "B-002",
    sample: true,
    deal: "rent",
    type: "דירה",
    city: "עיר לדוגמה ב'",
    neighborhood: "שכונה לדוגמה",
    rooms: 3,
    sqm: 72,
    outdoorSqm: null,
    floor: 2,
    floorsTotal: 4,
    price: 6800,
    summary: "דירה שמורה בבניין עם מעלית, מרוהטת חלקית (ארונות ומזגנים). הכניסה בתיאום עם השוכרים הנוכחיים.",
    features: ["מעלית", "ממ\"ד"],
    angleNote: null,
    status: "available",
    image: null,
    updated: "2026-10-12"
  },
  {
    id: "B-003",
    sample: true,
    deal: "sale",
    type: "דירת גן",
    city: "עיר לדוגמה ב'",
    neighborhood: "שכונה לדוגמה",
    rooms: 5,
    sqm: 130,
    outdoorSqm: 60,
    floor: 0,
    floorsTotal: 4,
    price: null,
    summary: "דירת גן עם כניסה נפרדת וגינה משני צדי הדירה. חדרי השינה פונים לגינה, והסלון לרחוב שקט.",
    features: ["כניסה פרטית", "חניה כפולה"],
    angleNote: null,
    status: "negotiation",
    image: null,
    updated: "2026-10-09"
  }
];
