"use client";
import { useState } from "react";

export default function Accordions() {
  const [showAccordion1, setShowAccordion1] = useState(false);
  const [showAccordion2, setShowAccordion2] = useState(false);
  const [showAccordion3, setShowAccordion3] = useState(false);
  const [showAccordion4, setShowAccordion4] = useState(false);

  const accordions = [
    {
      title: "Product Details",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus deserunt ipsam obcaecati quod sed quae nesciunt illo quas, vel quaerat quis odit non architecto dolore, mollitia ad labore cupiditate!",
      showAccordion: showAccordion1,
      setShowAccordion: setShowAccordion1,
    },
    {
      title: "Features",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus deserunt ipsam obcaecati quod sed quae nesciunt illo quas, vel quaerat quis odit non architecto dolore, mollitia ad labore cupiditate!",
      showAccordion: showAccordion2,
      setShowAccordion: setShowAccordion2,
    },
    {
      title: "Size & Fit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus deserunt ipsam obcaecati quod sed quae nesciunt illo quas, vel quaerat quis odit non architecto dolore, mollitia ad labore cupiditate!",
      showAccordion: showAccordion3,
      setShowAccordion: setShowAccordion3,
    },
    {
      title: "Delivery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus deserunt ipsam obcaecati quod sed quae nesciunt illo quas, vel quaerat quis odit non architecto dolore, mollitia ad labore cupiditate!",
      showAccordion: showAccordion4,
      setShowAccordion: setShowAccordion4,
    },
  ];

  return (
    <section className="bg-[#F9FAFB] pb-4">
      {accordions.map((item, index) => (
        <div
          key={index}
          className={`${
            item.showAccordion ? "h-[250px]" : "h-[50px]"
          } bg-white py-3 px-[14px] overflow-hidden transition-all duration-300`}
          onClick={() => item.setShowAccordion(!item.showAccordion)}
        >
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-[#1D2939] text-sm">{item.title}</h3>

            <div className="w-3 h-[1px] bg-[#344054] relative after:absolute after:bg-[#344054] after:w-full after:h-full after:left-0 after:top-0 after:rotate-90"></div>
          </div>

          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}
