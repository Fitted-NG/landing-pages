import Image from "next/image";
import ImageTag from "./ImageTag";

export default function SlickFits() {
  return (
    <section className="mt-24 mb-[50px]">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="hidden lg:block text-dark-text text-center text-5xl font-bold mb-[70px]">
          Slick fits for the whole crew
        </h1>

        <div className="h-[480px] overflow-x-scroll no-scrollbar mb-6">
          <div className="h-full flex gap-4 animate-carousel1">
            <div className="flex gap-4">
              <div className="min-w-fit flex gap-4">
                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-native_dress.png"
                      alt="Native dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Bright red aso oke" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-kaftan.png"
                      alt="Kaftan"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Ancient luxury agbada" />
                  </div>
                </div>

                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-african_tall_man.png"
                    alt="Tall african man"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Ankara Pallazo" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-wedding_gown.png"
                      alt="Wedding gown"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Dini Wedding dress" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-suit.png"
                      alt="suit"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Blazing suit" />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-african_tall_woman.png"
                    alt="African tall woman"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Gada Agbada" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-beautiful_young_lady.png"
                      alt="Beautiful young lady"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-young_lady_in_yellow_dress.png"
                      alt="Young lady in yellow dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-tall_man_in_white.png"
                    alt="Tall man in white"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-young_man_in_native.png"
                      alt="Young man wearing native"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_in_corporate.png"
                      alt="A man in corporate"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-fit flex gap-4">
                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-native_dress.png"
                      alt="Native dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Bright red aso oke" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-kaftan.png"
                      alt="Kaftan"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Ancient luxury agbada" />
                  </div>
                </div>

                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-african_tall_man.png"
                    alt="Tall african man"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Ankara Pallazo" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-wedding_gown.png"
                      alt="Wedding gown"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Dini Wedding dress" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-suit.png"
                      alt="suit"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Blazing suit" />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-african_tall_woman.png"
                    alt="African tall woman"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Gada Agbada" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-beautiful_young_lady.png"
                      alt="Beautiful young lady"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-young_lady_in_yellow_dress.png"
                      alt="Young lady in yellow dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-tall_man_in_white.png"
                    alt="Tall man in white"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-young_man_in_native.png"
                      alt="Young man wearing native"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_in_corporate.png"
                      alt="A man in corporate"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[480px] overflow-x-scroll no-scrollbar">
          <div className="h-full flex gap-4 animate-carousel2">
            <div className="flex gap-4">
              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-woman_in_gold_dress.png"
                    alt="African woman in gold and white dress"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Bride’s aso ebi" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_hands_in_pocket.png"
                      alt="Man with his hands in his pocket"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Street native" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-woman_hands_in_pocket.png"
                      alt="Woman with her hands in her pocket"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-man_in_gold_and_white_kaftan.png"
                    alt="Man in a gold and white kaftan"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Gada Agbada" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-woman_wearing_jewelry.png"
                      alt="Woman wearing jewelry"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_in_black_atire.png"
                      alt="A man in black atire"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-tall_woman_in_yellow_atire.png"
                    alt="A tall woman in a yellow atire"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-lady_in_light_pink_dress.png"
                      alt="A lady in a light-pink dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_wearing_native.png"
                      alt="A man wearing native"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-lady_in_red_gele.png"
                    alt="A lady wearing a red gele"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-woman_in_gold_dress.png"
                    alt="African woman in gold and white dress"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Bride’s aso ebi" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_hands_in_pocket.png"
                      alt="Man with his hands in his pocket"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                    <ImageTag text="Street native" />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-woman_hands_in_pocket.png"
                      alt="Woman with her hands in her pocket"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-man_in_gold_and_white_kaftan.png"
                    alt="Man in a gold and white kaftan"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                  <ImageTag text="Luxury 3 piece agbada" />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-woman_wearing_jewelry.png"
                      alt="Woman wearing jewelry"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_in_black_atire.png"
                      alt="A man in black atire"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="min-w-fit flex gap-4">
                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-tall_woman_in_yellow_atire.png"
                    alt="A tall woman in a yellow atire"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>

                <div className="h-full flex flex-col justify-between">
                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-lady_in_light_pink_dress.png"
                      alt="A lady in a light-pink dress"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="w-[300px] h-[230px] relative overflow-hidden rounded-lg">
                    <Image
                      src="/slick-man_wearing_native.png"
                      alt="A man wearing native"
                      fill={true}
                      loading="lazy"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-[350px] h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/slick-lady_in_red_gele.png"
                    alt="A lady wearing a red gele"
                    fill={true}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
