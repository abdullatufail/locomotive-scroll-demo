import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import SecondSection from "./SecondSection";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import MiddleSection from "./MiddleSection";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const MainScroll = () => {
  const [isLoading, setIsLoading] = useState(true);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "20% center",
      end: "bottom bottom",
      scrub: true,
      markers: true,
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
  const handleLoadComplete = () => {
    setIsLoading(false);
  };
  useGSAP(() => {
    // initial state with very small mask (scale zero effect)
    gsap.set(".hero-1", {
      WebkitMask:
        "linear-gradient(to right, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%)",
      mask: "linear-gradient(to right, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 0px), transparent calc(50% - 0px), transparent calc(50% + 0px), black calc(50% + 0px), black 100%)",
      WebkitMaskComposite: "intersect",
      maskComposite: "intersect",
      scale: 1, // scale starts at 1
    });

    timeline
      .addLabel("start")
      .to(".bg-img", {
        clipPath: "inset(0% )",
        duration: 0.4,
      })
      .from(
        ".nav",
        {
          y: -70,
          delay: 0.2,
          duration: 0.2,
          ease: "power1.inOut",
        },
        "start"
      )
      .from(
        ".heading",
        {
          y: 200,
          ease: "power1.out",
          delay: 0.2,
          duration: 0.2,
        },
        "start"
      )
      .from(
        ".para",
        {
          x: -250,
          ease: "power1.out",
          delay: 0.2,
          duration: 0.2,
        },
        "start"
      )

      .addLabel("middle")
      .to(
        ".hero-1",
        {
          WebkitMask:
            "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
          mask: "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
          duration: 0.4,
        },
        "middle"
      )

      .addLabel("end")
      .to(".hero-1", {
        scale: 11,

        duration: 0.6,
        ease: "power1.inOut",
      })
      .to(
        ".bg-img",
        {
          scale: 1.2, // Different scale for image
          // Optional: add rotation
          duration: 0.6,
          ease: "power2.out",
        },
        "end"
      )
      .to(
        ".text-container",
        {
          scale: 2.5, // Different scale for image
          // Optional: add rotation
          duration: 0.6,
          ease: "power2.out",
        },
        "end"
      )
      .to(
        ".nav",
        {
          y: -70,
          duration: 0.4,
          delay: 0.2,
          ease: "power2.out",
        },
        "end"
      )
      .to(
        ".bg-img",
        {
          opacity: 0,

          delay: 0.5,
        },
        "end"
      );
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div className="w-full h-full">
        <section className="hero w-full h-[300vh] bg-black ">
          <div className="nav w-full h-20 flex justify-between fixed z-[60] text-white px-5 ">
            <p className="font-perfectly-nineties italic text-xl">first</p>
            <p className="font-perfectly-nineties italic text-xl">first</p>
            <p className="font-perfectly-nineties italic text-xl">first</p>
          </div>
          <div className="hero-1  w-full h-[100vh] sticky z-[50] top-0">
            <div
              className="z-0 bg-img abs-center w-[100%] h-[100%] "
              style={{ clipPath: "inset(15%)" }}
            >
              <Image
                src={"/1.jpg"}
                alt="bg-img"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              ></Image>
            </div>

            <div className=" z-[10] relative h-full w-full flex flex-col items-center justify-center text-white">
              <div className="heading-cont absolute top-30 overflow-hidden w-fit h-fit ">
                <h1 className="heading  font-perfectly-nineties text-3xl md:text-7xl tracking-tight">
                  GSAP + Locomotive demo
                </h1>
              </div>

              <div className="text-container flex items-center w-full gap-10 h-[40%] justify-center ">
                <div className="blob w-50 h-70 "></div>
                <div className="blob w-50 h-70 "></div>
                <div className="heading-cont  overflow-hidden w-[15%] h-fit ">
                  <p className="para font-inter text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    nisi impedit architecto ipsum similique quasi consectetur
                    repellat odit quis temporibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100vh] w-full"></div>
          <MiddleSection />
        </section>
        <section className=" w-full h-full bg-black  text-white">
          <SecondSection />
        </section>
        <section className=" w-full h-full bg-black  text-white"></section>
      </div>
    </>
  );
};

export default MainScroll;
