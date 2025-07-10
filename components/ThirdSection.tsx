import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
       
        snap: {
          snapTo: (progress) => {
            // Only snap when progress is between 0 and 0.2
            if (progress >= 0 && progress <= 0.2) {
              const snapPoints = [0, 0.22]; // Only these two snap points
              const tolerance = 0.05; // How close to snap backward (5%)

              // Find current position relative to snap points
              for (let i = 0; i < snapPoints.length; i++) {
                const currentSnap = snapPoints[i];
                const nextSnap = snapPoints[i + 1];

                // If we're very close to current snap point, snap to it
                if (Math.abs(progress - currentSnap) <= tolerance) {
                  return currentSnap;
                }

                // If we're between two snap points, snap forward to next one
                if (nextSnap && progress > currentSnap && progress < nextSnap) {
                  return nextSnap;
                }
              }
            }

            // Return progress unchanged for values outside 0-0.2 range
            return progress;
          },
          duration: { min: 0.2, max: 0.2 }, // Snap animation duration
          ease: "power1.in",
        },
      },
    });

    gsap.set(".sticker", {
      WebkitMask:
        "linear-gradient(to right, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%)",
      mask: "linear-gradient(to right, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%)",
      WebkitMaskComposite: "intersect",
      maskComposite: "intersect",
      scale: 1, // scale starts at 1
    });

    timeline
      .to(".sticker", {
        WebkitMask:
          "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
        mask: "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
        delay: 0.2,
        duration: 0.3,
      })
      .to(".last", {
        scale: 11,
        duration: 0.8,
      }).to(
        ".last",
        {
          opacity: 0,

          delay: 0.5,
        }
      );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="parent h-[250vh] w-full bg-white relative text-black">
      <div className="last h-[100vh]  w-full sticky top-0">
        <div className="sticker z-0 bg-black w-[100%] h-[100vh] ">
          <div className="h-[70vh]"></div>
        </div>
      </div>
      <div className="h-[95vh] w-full">
        <h1 className="heading  font-perfectly-nineties text-3xl md:text-7xl lg:text-9xl tracking-tight">
                  GSAP + Locomotive demo
                </h1>
                <div className="heading-cont  overflow-hidden w-[15%] h-fit ">
                  <p className="para font-inter text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    nisi impedit architecto ipsum similique quasi consectetur
                    repellat odit quis temporibus.
                  </p>
                </div>
      </div>
      <div className="h-[70vh] bg-white w-full  flex flex-col justify-between">
        <div className="flex items-center justify-between pr-5">
          <h1 className="heading  font-perfectly-nineties text-3xl md:text-[300px] tracking-tighter">
            GSAP DEMO
          </h1>
          <p className="font-perfectly-nineties text-2xl relative -translate-y-[75px]">
            M. Abdullah Tufail
          </p>
        </div>
        <div className="p-5 flex justify-between z-[90]">
          <Link href={"https://github.com/abdullatufail"}>
            <p className="font-perfectly-nineties text-2xl ">Github</p>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-abdullah-tufail-0273aa2a3"
            }
          >
            <p className="font-perfectly-nineties text-2xl ">Linkedin</p>
          </Link>
          <Link href={"https://www.instagram.com/abdullatufail/"}>
            <p className="font-perfectly-nineties text-2xl ">Instagram</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
