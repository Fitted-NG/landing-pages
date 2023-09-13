"use client";
import Image from "next/image";
import { useState } from "react";

function Accordion(props: {
  header: JSX.Element;
  body: JSX.Element;
  defaultActive?: boolean;
}) {
  let [active, setActive] = useState(props.defaultActive);
  return (
    <div className="">
      <div
        className="mb-4 flex items-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="mr-2 font-semibold text-2xl h-full w-4 flex items-center justify-center">
          {active ? "-" : "+"}
        </span>{" "}
        {props.header}
      </div>
      {active ? props.body : ""}
    </div>
  );
}

export default function AsoEbiStylesStep() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-stretch gap-10">
          <div className="">
            <div className="mb-6">
              <Accordion
                defaultActive={true}
                header={
                  <h2 className="font-semibold text-2xl">
                    Step 1: Book Consultation
                  </h2>
                }
                body={
                  <div className="">
                    <p className={"mb-2"}>
                      We understand sometimes you would like to give your guests
                      a unified experience.
                    </p>
                    <p className={"mb-2"}>
                      During this stage, clients connect with a dedicated
                      fashion operations executive who gains more clarity on
                      your vision.
                    </p>
                    <p className={"mb-2"}>
                      We believe that Aso ebi shouldn’t just look nice but
                      should be delivered promptly.
                    </p>
                    <p>
                      We strive to give the guests an exciting experience of
                      unraveling their aso ebi.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="mb-6">
              <Accordion
                header={
                  <h2 className="font-semibold text-2xl">
                    Step 2: Fabric & Materials
                  </h2>
                }
                body={
                  <div className="">
                    <p className={"mb-2"}>
                      The next step is usually the process of finding the
                      perfect aso-ebi materials & Fabrics.
                    </p>
                    <p className={"mb-2"}>
                      This can sometimes be confusing. to help with this we
                      provide you a{" "}
                      <span className="font-bold">FREE Look book</span>.
                    </p>
                    <p className={"mb-2"}>
                      with your look book picks, we get to gain more clarity on
                      your vision.
                    </p>
                    <p>
                      We source from a variety of fabrics gotten from our pool
                      of fabric merchants to get the perfect design and colour
                      for you.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="mb-6">
              <Accordion
                header={
                  <h2 className="font-semibold text-2xl">
                    Step 3: Group Setup & invitations
                  </h2>
                }
                body={
                  <div className="">
                    <p className={"mb-2"}>
                      The next step is usually the process of finding the
                      perfect aso-ebi materials & Fabrics.
                    </p>
                    <p className={"mb-2"}>
                      This can sometimes be confusing. to help with this we
                      provide you a{" "}
                      <span className="font-bold">FREE Look book</span>.
                    </p>
                    <p className={"mb-2"}>
                      with your look book picks, we get to gain more clarity on
                      your vision.
                    </p>
                    <p>
                      We source from a variety of fabrics gotten from our pool
                      of fabric merchants to get the perfect design and colour
                      for you.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="mb-6">
              <Accordion
                header={
                  <h2 className="font-semibold text-2xl">
                    Step 4: Timelines & Delivery
                  </h2>
                }
                body={
                  <div className="">
                    <p className={"mb-2"}>
                      Delays & disappointments are some of the biggest and most
                      common reasons people have a horrible experience working
                      towards their occasions.
                    </p>
                    <p className={"mb-2"}>
                      Poorly vetted tailors or the &quot;recommended&quot;
                      tailors almost always disappoint and that was why we
                      decided to establish FittedNG.
                    </p>
                    <p className={"mb-2"}>
                      On the promise that we can delivery all outfits{" "}
                      <span className="font-bold">within 48hrs</span> of placing
                      your order (T&C apply).
                    </p>
                    <p>
                      We source from a variety of fabrics gotten from our pool
                      of fabric merchants to get the perfect design and colour
                      for you.
                    </p>
                  </div>
                }
              />
            </div>
            <div className="mb-6">
              <Accordion
                header={
                  <h2 className="font-semibold text-2xl">
                    Step 5: Tailoring{" "}
                    <span className="text-pink-fitted">(Our Strength)</span>
                  </h2>
                }
                body={
                  <div className="">
                    <p className={"mb-2"}>
                      This service involves connecting our clients’ guests and
                      wedding party with a wide range of our tailors and
                      designers.
                    </p>
                    <p className={"mb-2"}>
                      Leveraging our{" "}
                      <a href="https://groups.fitted.ng/signup" className="">
                        platform
                      </a>{" "}
                      you can organize communication & measurements & styles
                      easily.
                    </p>
                    <p className={"mb-2"}>
                      Our pool of over 2000+ Vetted tailors help you save the
                      heartaches, unrealistic fitting schedules & leave you
                      focusing on your event.
                    </p>
                    <p>
                      Visit our{" "}
                      <a href="https://tailors.fitted.ng" className="">
                        tailors
                      </a>{" "}
                      platform to learn more
                    </p>
                  </div>
                }
              />
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src={"/nigerian-family.png"}
              alt={"nigerian family"}
              fill
              className={"object-contain object-left"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
