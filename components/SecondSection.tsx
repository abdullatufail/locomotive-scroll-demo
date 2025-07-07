"use client";
import TextReveal from "@/animations/TextReveal";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SecondSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const flwRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const follower = flwRef.current;

    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.2,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.2,
      ease: "power2.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX + 100);
      yTo(e.clientY - 300);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useGSAP(() => {
    // Animate all cards based on hover state
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const shouldExpand = hoveredIndex === index;
        const tl = gsap.timeline();
        tl.to(card, {
          height: shouldExpand ? "100%" : "0%",
          duration: shouldExpand ? 0.3 : 0.4,
          ease: "power2.out",
        })
      }
    });
  }, [hoveredIndex]);

  return (
    <div className="cont w-full h-[100vh] flex flex-col px-10 justify-between pb-10 relative">
      <h1
        data-scroll-offset="300"
        className="font-perfectly-nineties text-8xl mt-5"
      >
        <TextReveal>
          ScrollTrigger & <br />
          Intersection Observer{" "}
        </TextReveal>
      </h1>
      <div className="flex h-[50%] w-full">
        <div className="w-1/2"></div>
        <div ref={containerRef} className="h-full w-[50%] flex flex-col">
          {[...Array(5)].map((_, i) => {
            return (
              <div
                key={i}
                className={cn(
                  "text-white h-1/5 w-full relative font-perfectly-nineties italic text-3xl flex justify-between items-center px-3 cursor-pointer z-[70]",
                  i === 4 ? "border-b-[1px] border-t-[1px]" : "border-t-[1px]"
                )}
                onClick={() => {
                  setHoveredIndex(i);
                }}
                onMouseEnter={() => {
                  console.log("MOUSE ENTERED ITEM:", i);
                  setHoveredIndex(i);
                }}
                onMouseLeave={() => {
                  console.log("MOUSE LEFT ITEM");
                  setHoveredIndex(null);
                }}
              >
                <div
                  ref={(el) => {
                    if (!cardsRef.current) cardsRef.current = [];
                    cardsRef.current[i] = el;
                  }}
                  className="h-0 w-full bg-amber-50 absolute top-0 left-0"
                >
                </div>
                <div className="text-black relative z-10">Portrait</div>
                <div className="text-lg relative z-10">0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Show image when any item is hovered */}
      <div
        ref={flwRef}
        className={cn(
          "w-[17%] h-[50%] absolute z-[80] transition-opacity duration-200",
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        )}
      >
        {hoveredIndex !== null && (
          <Image
            src={`/hovered/${hoveredIndex + 1}.png`}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default SecondSection;
