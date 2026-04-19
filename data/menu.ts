export type MenuCategoryId =
  | "mezze"
  | "grills"
  | "shawarma"
  | "manakish"
  | "desserts"
  | "drinks";

export type MenuItem = {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: number;
  signature?: boolean;
  vegetarian?: boolean;
};

export const menu: Record<MenuCategoryId, MenuItem[]> = {
  mezze: [
    {
      id: "hummus",
      name: { en: "Hummus Beiruti", ar: "حمص بيروتي" },
      desc: {
        en: "Stone-ground chickpeas, tahini, lemon, a pool of green olive oil.",
        ar: "حمص مطحون مع الطحينة والليمون وزيت زيتون بكر.",
      },
      price: 2.2,
      signature: true,
      vegetarian: true,
    },
    {
      id: "moutabal",
      name: { en: "Moutabal", ar: "متبّل" },
      desc: {
        en: "Charcoal-smoked eggplant, tahini, lemon, pomegranate seeds.",
        ar: "باذنجان مدخن على الفحم مع الطحينة والليمون والرمان.",
      },
      price: 2.4,
      vegetarian: true,
    },
    {
      id: "tabbouleh",
      name: { en: "Tabbouleh", ar: "تبّولة" },
      desc: {
        en: "Hand-cut parsley, mint, tomato, fine bulgur, lemon, olive oil.",
        ar: "بقدونس طازج، نعنع، بندورة، برغل ناعم وزيت الزيتون.",
      },
      price: 2.8,
      vegetarian: true,
    },
    {
      id: "fattoush",
      name: { en: "Fattoush", ar: "فتّوش" },
      desc: {
        en: "Garden salad, sumac, pomegranate molasses, crisp pita.",
        ar: "سلطة خضار مع السماق ودبس الرمان والخبز المحمّص.",
      },
      price: 2.6,
      vegetarian: true,
    },
    {
      id: "kibbeh",
      name: { en: "Kibbeh Mekliyeh", ar: "كبة مقلية" },
      desc: {
        en: "Bulgur shells filled with spiced lamb, pine nuts, caramelised onion.",
        ar: "أقراص البرغل محشوة بلحم الغنم والصنوبر والبصل.",
      },
      price: 3.2,
      signature: true,
    },
    {
      id: "warak-enab",
      name: { en: "Warak Enab", ar: "ورق عنب" },
      desc: {
        en: "Vine leaves rolled with rice, tomato, parsley, simmered in lemon.",
        ar: "ورق عنب ملفوف بالأرز والبندورة والبقدونس.",
      },
      price: 2.9,
      vegetarian: true,
    },
    {
      id: "sambousek",
      name: { en: "Sambousek Lahme", ar: "سمبوسك لحمة" },
      desc: {
        en: "Crescent pastries filled with spiced minced lamb and pine nuts.",
        ar: "معجنات بشكل هلال محشوة بلحم الغنم والصنوبر.",
      },
      price: 3.0,
    },
    {
      id: "labneh",
      name: { en: "Labneh with Za'atar", ar: "لبنة بالزعتر" },
      desc: {
        en: "House-strained yogurt, wild thyme, olive oil, warm pita.",
        ar: "لبنة بيتية مع الزعتر البري وزيت الزيتون.",
      },
      price: 2.2,
      vegetarian: true,
    },
  ],
  grills: [
    {
      id: "mixed-grill",
      name: { en: "Village Mixed Grill", ar: "مشاوي الضيعة" },
      desc: {
        en: "Lamb kafta, shish taouk, lamb skewer, grilled tomato, garlic sauce.",
        ar: "كفتة غنم، شيش طاووق، لحم مشوي، بندورة مشوية، ثومية.",
      },
      price: 9.5,
      signature: true,
    },
    {
      id: "shish-taouk",
      name: { en: "Shish Taouk", ar: "شيش طاووق" },
      desc: {
        en: "Charcoal-grilled chicken marinated in lemon, yogurt, garlic.",
        ar: "دجاج متبّل بالليمون واللبن والثوم، مشوي على الفحم.",
      },
      price: 5.5,
    },
    {
      id: "lahm-mishwi",
      name: { en: "Lahm Mishwi", ar: "لحم مشوي" },
      desc: {
        en: "Tender lamb cubes, seven-spice, grilled over lump charcoal.",
        ar: "قطع لحم غنم متبّلة بالبهارات ومشوية على الفحم.",
      },
      price: 6.8,
    },
    {
      id: "kafta-khashkhash",
      name: { en: "Kafta Khashkhash", ar: "كفتة خشخاش" },
      desc: {
        en: "Minced lamb kafta with parsley, onion, chilli, pine-nut butter.",
        ar: "كفتة لحم غنم مع البقدونس والبصل والفلفل والصنوبر.",
      },
      price: 5.6,
    },
    {
      id: "arayes",
      name: { en: "Arayes", ar: "عرايس" },
      desc: {
        en: "Pita stuffed with spiced kafta, grilled until crisp.",
        ar: "خبز محشو بالكفتة المتبّلة ومشوي حتى يصبح مقرمشاً.",
      },
      price: 4.4,
    },
    {
      id: "sea-bass",
      name: { en: "Whole Grilled Sea Bass", ar: "قاروس مشوي" },
      desc: {
        en: "Daily catch, olive oil, lemon, parsley, tahini sauce.",
        ar: "قاروس طازج مع زيت الزيتون والليمون والطحينة.",
      },
      price: 8.9,
    },
  ],
  shawarma: [
    {
      id: "shawarma-lahme",
      name: { en: "Shawarma Lahme", ar: "شاورما لحم" },
      desc: {
        en: "Lamb shaved from the spit, tahini, pickles, tomato, saj bread.",
        ar: "لحم غنم مقطّع من السيخ مع الطحينة والمخلل والبندورة.",
      },
      price: 3.4,
      signature: true,
    },
    {
      id: "shawarma-djaj",
      name: { en: "Shawarma Djaj", ar: "شاورما دجاج" },
      desc: {
        en: "Marinated chicken, toum garlic cream, pickles, French fries.",
        ar: "دجاج متبّل مع ثومية وبطاطا ومخلل.",
      },
      price: 2.9,
    },
    {
      id: "shawarma-platter",
      name: { en: "Shawarma Platter", ar: "صحن شاورما" },
      desc: {
        en: "Lamb or chicken over rice, grilled tomato, onion, sauces.",
        ar: "شاورما لحم أو دجاج فوق الأرز مع البندورة المشوية.",
      },
      price: 5.9,
    },
  ],
  manakish: [
    {
      id: "zaatar",
      name: { en: "Manakish Za'atar", ar: "مناقيش زعتر" },
      desc: {
        en: "Stone-oven dough, wild thyme, sumac, sesame, olive oil.",
        ar: "عجين مخبوز بالحجر مع الزعتر والسمسم وزيت الزيتون.",
      },
      price: 1.8,
      vegetarian: true,
    },
    {
      id: "jibneh",
      name: { en: "Manakish Jibneh", ar: "مناقيش جبنة" },
      desc: { en: "Akkawi and halloumi blend, nigella seed.", ar: "جبنة عكاوي وحلوم مع حبة البركة." },
      price: 2.2,
      vegetarian: true,
    },
    {
      id: "lahme-bi-ajeen",
      name: { en: "Lahme bi Ajeen", ar: "لحم بعجين" },
      desc: {
        en: "Thin dough, minced lamb, tomato, pomegranate molasses.",
        ar: "عجين رقيق مع لحم مفروم وبندورة ودبس رمان.",
      },
      price: 2.6,
    },
    {
      id: "keshek",
      name: { en: "Manakish Keshek", ar: "مناقيش كشك" },
      desc: {
        en: "Fermented wheat-and-yogurt spread, tomato, walnuts.",
        ar: "كشك مع البندورة والجوز على العجين.",
      },
      price: 2.2,
      vegetarian: true,
    },
  ],
  desserts: [
    {
      id: "baklava",
      name: { en: "Baklava", ar: "بقلاوة" },
      desc: {
        en: "Layered filo, pistachio, clarified butter, rosewater syrup.",
        ar: "عجين الفيلو بالفستق الحلبي والسمن وقطر ماء الورد.",
      },
      price: 2.4,
      vegetarian: true,
      signature: true,
    },
    {
      id: "knafeh",
      name: { en: "Knafeh Nabulsiyeh", ar: "كنافة نابلسية" },
      desc: {
        en: "Akkawi cheese, kataifi, orange-blossom syrup, pistachio.",
        ar: "جبنة عكاوي وكنافة ناعمة بالقطر وماء الزهر.",
      },
      price: 3.2,
      vegetarian: true,
    },
    {
      id: "mhalabia",
      name: { en: "Mhalabia", ar: "مهلبية" },
      desc: {
        en: "Silky milk pudding, mastic, rosewater, candied rose petals.",
        ar: "مهلبية حليب بالمستكة وماء الورد ووردة مسكّرة.",
      },
      price: 2.2,
      vegetarian: true,
    },
    {
      id: "atayef",
      name: { en: "Atayef Ashta", ar: "قطايف قشطة" },
      desc: {
        en: "Folded pancakes, clotted cream, pistachio, orange-blossom syrup.",
        ar: "قطايف بالقشطة والفستق والقطر.",
      },
      price: 2.6,
      vegetarian: true,
    },
  ],
  drinks: [
    {
      id: "jallab",
      name: { en: "Jallab", ar: "جلّاب" },
      desc: {
        en: "Carob and date molasses, rosewater, pine nuts, crushed ice.",
        ar: "دبس الخرنوب والتمر مع ماء الورد والصنوبر والثلج.",
      },
      price: 1.6,
      vegetarian: true,
    },
    {
      id: "ayran",
      name: { en: "Ayran", ar: "أيران" },
      desc: { en: "Salted yogurt drink, mint.", ar: "لبن مملّح مع النعنع." },
      price: 1.0,
      vegetarian: true,
    },
    {
      id: "lemonade",
      name: { en: "Lemonade with Mint", ar: "ليموناضة بالنعنع" },
      desc: { en: "Fresh-pressed lemon, mint, orange blossom.", ar: "ليمون طازج مع النعنع وماء الزهر." },
      price: 1.4,
      vegetarian: true,
    },
    {
      id: "arabic-coffee",
      name: { en: "Arabic Coffee", ar: "قهوة عربية" },
      desc: { en: "Cardamom-spiced, served in dallah.", ar: "قهوة بالهيل تُقدّم في دلّة." },
      price: 1.2,
      vegetarian: true,
    },
    {
      id: "tea-maramiya",
      name: { en: "Tea with Sage", ar: "شاي بالميرمية" },
      desc: { en: "Black tea, fresh sage, a touch of honey.", ar: "شاي أسود مع الميرمية الطازجة والعسل." },
      price: 0.9,
      vegetarian: true,
    },
  ],
};

export const categoryOrder: MenuCategoryId[] = [
  "mezze",
  "grills",
  "shawarma",
  "manakish",
  "desserts",
  "drinks",
];
