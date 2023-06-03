const cardData = [
  {
    id: 1,
    image: "./assets/images/bag/bag_1.webp",
    title: "Gold-Tone Metal & Metallic Lambskin Gold",
    price: 9400,
    code: "Ref.  AS4026 B10994 NN767",
  },
  {
    id: 2,
    image: "./assets/images/bag/bag_2.webp",

    title: "Lambskin, Wood & Gold-Tone Metal Black",
    price: 6300,
    code: "Ref.  AS3053 B10658 94305",
  },
  {
    id: 3,
    image: "./assets/images/bag/bag_3.webp",

    title: "Washed Denim & Silver-Tone Metal Light Blue",
    price: 5400,
    code: "Ref.  AS3261 B10439 NM981",
  },
  {
    id: 4,
    image: "./assets/images/bag/bag_4.webp",

    title: "Metallic Calfskin & Silver-Tone Metal Silver",
    price: 6100,
    code: "Ref.  AS3261 B10363 NM938",
  },
  {
    id: 5,
    image: "./assets/images/bag/bag_5.webp",

    title: "Shiny Calfskin & Gold-Tone Metal Red & White",
    price: 5800,
    code: "Ref.  AS3313 B09981 NM243",
  },
  {
    id: 6,
    image: "./assets/images/bag/bag_6.webp",

    title: "Tweed, Lambskin & Gold-Tone Metal Orange & Ecru",
    price: 5700,
    code: "Ref.  AS4035 B10786 NN371",
  },
  {
    id: 7,
    image: "./assets/images/bag/bag_7.webp",

    title:
      "Tweed, Gold-Tone, Silver-Tone & Ruthenium-Finish Metal Blue, Pink, Black & White",
    price: 6200,
    code: "Ref.  AS1160 B10489 NM448",
  },
  {
    id: 8,
    image: "./assets/images/bag/bag_8.webp",

    title:
      "Cotton Tweed, Gold-tone, Silver-Tone & Ruthenium-Finish Metal Blue, White & Navy Blue",
    price: 7500,
    code: "Ref.  AS1162 B10488 NM667",
  },
  {
    id: 9,
    image: "./assets/images/bag/bag_9.webp",

    title:
      "Shiny Lambskin, Gold-Tone, Silver-Tone & Ruthenium-Finish Metal White",
    price: 7100,
    code: " Ref.  AS1161 B04852 10601 ",
  },
  {
    id: 10,
    image: "./assets/images/bag/bag_10.webp",

    title:
      "Shiny Lambskin, Gold-Tone, Silver-Tone & Ruthenium-Finish Metal Dark Green",
    price: 6400,
    code: " Ref.  AS1160 B04852 NM378",
  },
  {
    id: 11,
    image: "./assets/images/bag/bag_11.webp",

    title: "Raffia Effect Braided Tweed & Gold-Tone Metal White & Black",
    price: 5000,
    code: " Ref.  AS3944 B10621 NN546 ",
  },
  {
    id: 12,
    image: "./assets/images/bag/bag_12.webp",

    title: "Tweed, Lambskin & Gold-Tone Metal Orange & Ecru",
    price: 5700,
    code: "Ref.  AS4035 B10786 NN371 ",
  },
  {
    id: 13,
    image: "./assets/images/bag/bag_13.webp",

    title: "Shaded Calfskin & Gold-Tone Metal Blue & Dark Blue",
    price: 5300,
    code: "Ref.  AS3980 B10681 NN490 ",
  },
  {
    id: 14,
    image: "./assets/images/bag/bag_14.webp",

    title: "Imitation Pearls & Gold-Tone Metal White & Black",
    price: 8000,
    code: " Ref.  AS3771 B10869 NN893",
  },
  {
    id: 15,
    image: "./assets/images/bag/bag_15.webp",

    title: "Grained Shiny Calfskin & Gold-Tone Metal Lilac",
    price: 5700,
    code: " Ref.  AS3787 B10184 NM368",
  },
  {
    id: 16,
    image: "./assets/images/parfum/parfum_1.webp",
    title: "N°5 AKA WONDER N°5",
    details:
      "The original superhero, who set the tone for all the others.The strength: Always being ahead of their time. The power: Keeps an air of mystery.The distinguishing mark: An aldehydic bouquet.",
  },
  {
    id: 17,
    image: "./assets/images/parfum/parfum_2.webp",

    title: "CHANCE EAU TENDRE AKA INCREDIBLE CHANCE",
    details:
      "The House’s olfactory talisman.The strength: Perfect timing.The power: Boosts luck.The distinguishing mark: A round shape.",
  },
  {
    id: 18,
    image: "./assets/images/parfum/parfum_3.webp",

    title: "COCO MADEMOISELLE AKA FANTASTIC COCO MADEMOISELLE",
    details:
      "The feminine CHANEL fragrance with the most complex character. The strength: Being where you least expect.The power: Intensifies sensuality.The distinguishing mark: A vibrant and voluptuous trail.",
  },
  {
    id: 19,
    image: "./assets/images/parfum/parfum_4.webp",

    title: "COCO NOIR AKA COCO WOMAN",
    details:
      "A fragrance full of paradoxes.The strength: Being different. The power: Magnetism.The distinguishing mark: A luminous darkness.",
  },
  {
    id: 20,
    image: "./assets/images/parfum/parfum_5.webp",

    title: "GABRIELLE CHANEL ESSENCE AKA SUPER GABRIELLE",
    details:
      "The most solar scent of all.The strength: Believing in destiny.The power: A free spirit. The distinguishing mark: A radiant heart.",
  },
  {
    id: 21,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_2.webp",
  },
  {
    id: 22,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_3.webp",
  },
  {
    id: 23,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_4.webp",
  },
  {
    id: 24,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_5.webp",
  },
  {
    id: 25,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_6.webp",
  },
  {
    id: 26,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show.webp",
  },
  {
    id: 27,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_7.webp",
  },
  {
    id: 28,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_8.webp",
  },
  {
    id: 29,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_9.webp",
  },
  {
    id: 30,
    image: "./assets/images/clothes/spring-summer-2023-chanel-show_10.webp",
  },
  {
    id: 31,
    image: "./assets/images/eyewear/eyewear_1.webp",
  },
  {
    id: 32,
    image: "./assets/images/eyewear/eyewear_2.webp",
  },
  {
    id: 33,
    image: "./assets/images/eyewear/eyewear_3.webp",
  },
];
