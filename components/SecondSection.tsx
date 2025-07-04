"use client";
import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SecondSection = () => {
  // ✅ Make sure this line exists and is correct
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Add this to debug the initial state
  console.log("Component rendered, initial hoveredIndex:", hoveredIndex);

  useEffect(() => {
    console.log("useEffect triggered, hoveredIndex:", hoveredIndex);
    if (hoveredIndex !== null) {
      console.log(`Item ${hoveredIndex + 1} is hovered`);
    }
  }, [hoveredIndex]);

  return (
    <div className="cont w-full h-[100vh] flex flex-col px-10 justify-between pb-10">
      <h1
        data-scroll-offset="300"
        className="font-perfectly-nineties text-8xl mt-5"
      >
        ScrollTrigger & <br />
        Intersection Observer
      </h1>
      <div className="flex h-[50%] w-full">
        <div className="w-1/2"></div>
        <div className="h-full w-[50%] flex flex-col">
          {[...Array(5)].map((_, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className={cn(
                  "text-white h-1/5 w-full font-perfectly-nineties italic text-3xl flex items-center transition-all duration-300 cursor-pointer border border-red-500",
                  i === 4 ? "border-b-[1px] border-t-[1px]" : "border-t-[1px]",
                  isHovered && "bg-white/10 text-blue-400 scale-105"
                )}
                onClick={() => {
                  console.log("CLICKED ITEM:", i);
                  console.log(
                    "setHoveredIndex function:",
                    typeof setHoveredIndex
                  );
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
                <span>Portrait</span>
                <span>0{i + 1}</span>
              </div>
            );
          })}

          
        </div>
      </div>

      {/* Show image when any item is hovered */}
      {false && (
        <div className="flw w-[17%] h-[50%] absolute right-10 top-1/2 transform -translate-y-1/2 transition-all duration-300">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default SecondSection;
