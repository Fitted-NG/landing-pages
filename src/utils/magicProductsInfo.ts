export type ProductType = {
  code: string;
  name: string;
  description: string;
  images: Array<string>;
  sexOfClothing: string;
  price: number;
  piecesSold: number;
  colors: string;
  brand: string;
  sizes: Array<string>;
  fabricName: string;
  fabricQuantity: string;
};

export type ProductTypeTwo = {
  uuid: string;
  name: string;
  description: string;
  image_url_0: string;
  image_url_1?: string;
  image_url_2?: string;
  image_url_3?: string;
  price: string;
  currency: string;
  tag: string;
  chart_link: string;
  size: string[];
  color: string[];
  created_at: string;
  updated_at: string;
  user: {
    uuid: string;
    email: string;
    name?: string;
    phone_number?: string;
    brand_name: string;
    brand_logo: string | null;
    created_at: string;
    updated_at: string;
  };
};

export const productsInfo: ProductType[] = [
  {
    code: "a1b2c3",
    name: "Thrifted denim dress",
    description: "Reconstructed oufit from 3 pairs of old jeans",
    images: [
      "/magic-tags/thrifted-denim-dress/thrifted-denim-dress-1.png",
      "/magic-tags/thrifted-denim-dress/thrifted-denim-dress-2.png",
      "/magic-tags/thrifted-denim-dress/thrifted-denim-dress-3.png",
      "/magic-tags/thrifted-denim-dress/thrifted-denim-dress-4.png",
    ],
    sexOfClothing: "Womenswear",
    price: 20000,
    piecesSold: 1,
    colors: "Deep blue, light blue, black",
    brand: "Fitted Sator",
    sizes: ["Custom"],
    fabricName: "Denim",
    fabricQuantity: "1 yard deep blue, 1 yard light blue, 0.5 yards black",
  },
  {
    code: "a2b1c4",
    name: "Zebra one-piece",
    description: "Comfortable striking zebra onesie for Men",
    images: [
      "/magic-tags/zebra-one-piece/zebra-one-piece-1.png",
      "/magic-tags/zebra-one-piece/zebra-one-piece-2.png",
      "/magic-tags/zebra-one-piece/zebra-one-piece-3.png",
      "/magic-tags/zebra-one-piece/zebra-one-piece-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 50000,
    piecesSold: 45,
    colors: "Black & White pattern",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Patterned cotton",
    fabricQuantity: "4 yards",
  },
  {
    code: "Liz-Leg",
    name: "Lizard Legend",
    description: "Channel your inner reptile",
    images: [
      "/magic-tags/lizard-legend/lizard-legend-1.png",
      "/magic-tags/lizard-legend/lizard-legend-2.png",
      "/magic-tags/lizard-legend/lizard-legend-3.png",
      "/magic-tags/lizard-legend/lizard-legend-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 50000,
    piecesSold: 12,
    colors: "Green & black printed pattern",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Patterned cotton",
    fabricQuantity: "4 yards",
  },
  {
    code: "Army-tr",
    name: "Fitted Army Trad",
    description: "Enchanting military grade embroidered kaftan for Senior Men",
    images: [],
    sexOfClothing: "Menswear",
    price: 50000,
    piecesSold: 15,
    colors: "Green",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Cashmere - 7 star",
    fabricQuantity: "4 yards",
  },
  {
    code: "Sky-b",
    name: "Fitted Sky Blue Baby",
    description: "Fitted-embroidered sky baby powder blue trad",
    images: [],
    sexOfClothing: "Menswear",
    price: 50000,
    piecesSold: 16,
    colors: "Sky blue",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Cashmere - 7 star",
    fabricQuantity: "4 yards",
  },
  {
    code: "Yelloke",
    name: "Yellow Passion Oke Lagos",
    description: "Yellow endowed flashy aso-oke shirt from Oke Lagos",
    images: [
      "/magic-tags/yellow-oke/yellow-oke-1.png",
      "/magic-tags/yellow-oke/yellow-oke-2.png",
      "/magic-tags/yellow-oke/yellow-oke-3.png",
      "/magic-tags/yellow-oke/yellow-oke-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 60000,
    piecesSold: 18,
    colors: "Bright yellow",
    brand: "Oke Lagos",
    sizes: ["L"],
    fabricName: "Aso-oke",
    fabricQuantity: "4 yards",
  },
  {
    code: "Crin-be",
    name: "Beige casual crinkle set",
    description: "Comfortable and elegant crinkle 2 piece",
    images: [
      "/magic-tags/beige-casual-crinkle/beige-casual-crinkle-1.png",
      "/magic-tags/beige-casual-crinkle/beige-casual-crinkle-2.png",
      "/magic-tags/beige-casual-crinkle/beige-casual-crinkle-3.png",
      "/magic-tags/beige-casual-crinkle/beige-casual-crinkle-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 30000,
    piecesSold: 287,
    colors: "Beige",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Crinkle fabric",
    fabricQuantity: "4 yards",
  },
  {
    code: "Crin-sb",
    name: "Sky blue casual crinkle set",
    description: "Comfortable and elegant crinkle 2 piece",
    images: [
      "/magic-tags/sky-blue-casual-crinkle/sky-blue-casual-crinkle-1.png",
      "/magic-tags/sky-blue-casual-crinkle/sky-blue-casual-crinkle-2.png",
      "/magic-tags/sky-blue-casual-crinkle/sky-blue-casual-crinkle-3.png",
      "/magic-tags/sky-blue-casual-crinkle/sky-blue-casual-crinkle-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 30000,
    piecesSold: 345,
    colors: "Sky blue",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Crinkle fabric",
    fabricQuantity: "4 yards",
  },
  {
    code: "Crin-pi",
    name: "Hot pink casual crinkle set",
    description: "Comfortable and elegant crinkle 2 piece",
    images: [
      "/magic-tags/hot-pink-casual-crinkle/hot-pink-casual-crinkle-1.png",
      "/magic-tags/hot-pink-casual-crinkle/hot-pink-casual-crinkle-2.png",
      "/magic-tags/hot-pink-casual-crinkle/hot-pink-casual-crinkle-3.png",
      "/magic-tags/hot-pink-casual-crinkle/hot-pink-casual-crinkle-4.png",
    ],
    sexOfClothing: "Unisex",
    price: 30000,
    piecesSold: 423,
    colors: "Hot pink",
    brand: "Fitted Sator",
    sizes: ["L"],
    fabricName: "Crinkle fabric",
    fabricQuantity: "4 yards",
  },
  {
    code: "Purp-pl",
    name: "Purple Puffy Dress",
    description: "Exceptional elegant dress",
    images: [
      "/magic-tags/purple-puffy-dress/purple-puffy-dress-1.jpg",
      "/magic-tags/purple-puffy-dress/purple-puffy-dress-2.jpg",
      "/magic-tags/purple-puffy-dress/purple-puffy-dress-3.jpg",
      "/magic-tags/purple-puffy-dress/purple-puffy-dress-4.jpg",
    ],
    sexOfClothing: "Womenswear",
    price: 30000,
    piecesSold: 278,
    colors: "Purple",
    brand: "Fitted Sator",
    sizes: ["12"],
    fabricName: "Organza",
    fabricQuantity: "3 yards",
  },
];
