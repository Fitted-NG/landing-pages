export type ImageAndImageTagType = {
  img: string;
  imgTag: string;
};

export type CarouselImageData = {
  col1: ImageAndImageTagType;
  col2: ImageAndImageTagType[];
};

export type CarouselImagesType = {
  id: number;
  data: CarouselImageData;
};

const carouselImages: CarouselImagesType[] = [
  {
    id: 1,
    data: {
      col1: {
        img: "/slick-woman_in_gold_dress.png",
        imgTag: "Bride’s aso ebi",
      },
      col2: [
        {
          img: "/slick-woman_wearing_jewelry.png",
          imgTag: "",
        },
        {
          img: "/slick-man_in_black_atire.png",
          imgTag: "",
        },
      ],
    },
  },
  {
    id: 2,
    data: {
      col1: {
        img: "/slick-man_in_gold_and_white_kaftan.png",
        imgTag: "Luxury 3 piece agbada",
      },
      col2: [
        {
          img: "/slick-lady_in_light_pink_dress.png",
          imgTag: "",
        },
        {
          img: "/slick-man_wearing_native.png",
          imgTag: "",
        },
      ],
    },
  },
  {
    id: 3,
    data: {
      col1: {
        img: "/slick-tall_woman_in_yellow_atire.png",
        imgTag: "",
      },
      col2: [
        {
          img: "/slick-man_hands_in_pocket.png",
          imgTag: "Street native",
        },
        {
          img: "/slick-woman_hands_in_pocket.png",
          imgTag: "",
        },
      ],
    },
  },
  {
    id: 4,
    data: {
      col1: {
        img: "/slick-lady_in_red_gele.png",
        imgTag: "",
      },
      col2: [
        {
          img: "/slick-native_dress.png",
          imgTag: "Bright red aso oke",
        },
        {
          img: "/slick-kaftan.png",
          imgTag: "",
        },
      ],
    },
  },
  {
    id: 5,
    data: {
      col1: {
        img: "/slick-african_tall_man.png",
        imgTag: "Ankara Pallazo",
      },
      col2: [
        {
          img: "/slick-wedding_gown.png",
          imgTag: "Dini Wedding dress",
        },
        {
          img: "/slick-suit.png",
          imgTag: "Blazing suit",
        },
      ],
    },
  },
  {
    id: 6,
    data: {
      col1: {
        img: "/slick-african_tall_woman.png",
        imgTag: "",
      },
      col2: [
        {
          img: "/slick-beautiful_young_lady.png",
          imgTag: "",
        },
        {
          img: "/slick-young_lady_in_yellow_dress.png",
          imgTag: "",
        },
      ],
    },
  },
  {
    id: 7,
    data: {
      col1: {
        img: "/slick-tall_man_in_white.png",
        imgTag: "",
      },
      col2: [
        {
          img: "/slick-young_man_in_native.png",
          imgTag: "",
        },
        {
          img: "/slick-man_in_corporate.png",
          imgTag: "Blazing suit",
        },
      ],
    },
  },
];

export default carouselImages;
