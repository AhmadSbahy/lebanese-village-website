export type GalleryImage = {
  src: string;
  alt: { en: string; ar: string };
  span?: "tall" | "wide" | "normal";
};

export const signature = [
  {
    id: "hummus",
    src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Hummus Beiruti", ar: "حمص بيروتي" },
    caption: { en: "Stone-ground · tahini · olive oil", ar: "مطحون · طحينة · زيت زيتون" },
  },
  {
    id: "mixed-grill",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Village Mixed Grill", ar: "مشاوي الضيعة" },
    caption: { en: "Lump charcoal · seven spice", ar: "فحم · بهار سبعة" },
  },
  {
    id: "kibbeh",
    src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Kibbeh Mekliyeh", ar: "كبة مقلية" },
    caption: { en: "Bulgur · lamb · pine nut", ar: "برغل · لحم · صنوبر" },
  },
  {
    id: "tabbouleh",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Tabbouleh", ar: "تبّولة" },
    caption: { en: "Parsley · mint · bulgur", ar: "بقدونس · نعنع · برغل" },
  },
  {
    id: "baklava",
    src: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Baklava", ar: "بقلاوة" },
    caption: { en: "Filo · pistachio · rosewater", ar: "فيلو · فستق · ماء الورد" },
  },
  {
    id: "shawarma",
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1400&q=80",
    name: { en: "Shawarma Lahme", ar: "شاورما لحم" },
    caption: { en: "Lamb · tahini · pickles", ar: "لحم · طحينة · مخلل" },
  },
];

export const gallery: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Mezze spread on a wooden table", ar: "مائدة مزّات على طاولة خشبية" },
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Grilled lamb skewers", ar: "أسياخ لحم مشوي" },
  },
  {
    src: "https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Fresh hummus with olive oil", ar: "حمص طازج مع زيت الزيتون" },
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Warm pita bread from the oven", ar: "خبز طازج من الفرن" },
  },
  {
    src: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Za'atar manakish", ar: "مناقيش زعتر" },
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Lebanese dining table with guests", ar: "طاولة عشاء لبنانية" },
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Platter of shawarma", ar: "صحن شاورما" },
  },
  {
    src: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Baklava with pistachio", ar: "بقلاوة بالفستق" },
  },
];
