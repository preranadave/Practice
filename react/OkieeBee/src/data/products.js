export const products = [
  {
    id: 1,
    brand: "Okie Bee",
    name: "Ashwagandha",
    shortTitle: "Strength, Endurance & Faster Recovery",
    price: 24.99,
    image: "src/assets/images/product-img-1.png",
    description:
      "Formulated to support muscle recovery, enhance endurance, and improve overall athletic performance.",
    usps: [
      {
        title: "Enhances Performance",
        desc: "Supports strength, stamina, and workout efficiency.",
        image: "src/assets/images/usp-img-1.png",
      },
      {
        title: "Faster Recovery",
        desc: "Helps reduce muscle fatigue and soreness.",
        image: "src/assets/images/usp-img-2.png",
      },
      {
        title: "Supports Overall Health",
        desc: "Packed with antioxidants and nutrients.*",
        image: "src/assets/images/usp-img-3.png",
      },
    ],
    quantityOptions: [1, 2, 3],
    productUrl: "/products/athletic-performance-recovery",
    isFeatured: true,
  },

  {
    id: 2,
    brand: "Okie Bee",
    name: "Detox – Cleanse",
    shortTitle: "Daily Detox & Internal Cleansing",
    price: 24.99,
    image: "src/assets/images/product-img-1.png",
    description:
      "A gentle detox blend designed to support liver function and help flush out toxins naturally.",
    usps: [
      {
        title: "Supports Natural Detox",
        desc: "Helps cleanse the body without harsh effects.",
      },
      {
        title: "Improves Digestion",
        desc: "Promotes better gut health and metabolism.",
      },
    ],
    quantityOptions: [1, 2, 3],
    productUrl: "/products/detox-cleanse",
    isFeatured: false,
  },

  {
    id: 3,
    brand: "Okie Bee",
    name: "Energy – Vitality",
    shortTitle: "Sustained Energy & Focus",
    price: 24.99,
    image: "src/assets/images/product-img-1.png",
    description:
      "Designed to boost daily energy levels and mental focus without jitters or crashes.",
    usps: [
      {
        title: "Boosts Natural Energy",
        desc: "Supports all-day vitality and alertness.",
      },
      {
        title: "Improves Mental Focus",
        desc: "Enhances concentration and clarity.",
      },
    ],
    quantityOptions: [1, 2, 3],
    productUrl: "/products/energy-vitality",
    isFeatured: false,
  },

  {
    id: 4,
    brand: "Okie Bee",
    name: "Digestive Health & Weight Management",
    shortTitle: "Gut Balance & Metabolism Support",
    price: 24.99,
    image: "src/assets/images/product-img-1.png",
    description:
      "Supports healthy digestion, nutrient absorption, and effective weight management.",
    usps: [
      {
        title: "Improves Gut Health",
        desc: "Supports digestion and nutrient absorption.",
      },
      {
        title: "Supports Weight Management",
        desc: "Helps maintain a healthy metabolism.",
      },
    ],
    quantityOptions: [1, 2, 3],
    productUrl: "/products/digestive-health-weight-management",
    isFeatured: false,
  },
];
