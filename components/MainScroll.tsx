import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const MainScroll = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "10% center",
      end: "bottom bottom",
      scrub: true,
      markers: true,
    },
  });

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
        width: "100%",
        height: "100%",
        duration: 0.2,
      })
      .addLabel("middle")
      .to(".hero-1", {
        WebkitMask:
          "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
        mask: "linear-gradient(to right, black 0%, black calc(50% - 75px), transparent calc(50% - 75px), transparent calc(50% + 75px), black calc(50% + 75px), black 100%), linear-gradient(to bottom, black 0%, black calc(50% - 100px), transparent calc(50% - 100px), transparent calc(50% + 100px), black calc(50% + 100px), black 100%)",
        duration: 0.3,
      })
      .addLabel("end")
      .to(".hero-1", {
        scale: 11,

        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(
        ".bg-img",
        {
          scale: 1.2, // Different scale for image
          // Optional: add rotation
          duration: 0.5,
          ease: "power2.out",
        },
        "end"
      )
      .to(
        ".text-container",
        {
          scale: 2.5, // Different scale for image
          // Optional: add rotation
          duration: 0.5,
          ease: "power2.out",
        },
        "end"
      ).to(
        ".nav",
        {
          y:-70, 
          duration: 0.3,
          delay:0.2,
          ease: "power2.out",
        },
        "end"
      );
  }, []);

  return (
    <div className="w-full h-full">
      <section
        className="hero w-full h-[350vh] bg-black "
        
      >
        <div className="nav w-full h-20 flex justify-between fixed z-[50] text-white px-5 ">
          <p className="font-perfectly-nineties italic text-xl">first</p>
          <p className="font-perfectly-nineties italic text-xl">first</p>
          <p className="font-perfectly-nineties italic text-xl">first</p>
        </div>
        <div className="hero-1 w-full h-[100vh] sticky top-0">
          <div className="z-0 bg-img abs-center w-[70%] h-[70%] ">
            <Image
              src={"/1.jpg"}
              alt="bg-img"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          

          <div className=" z-[10] relative h-full w-full flex flex-col items-center justify-center text-white">
             <h1 className="absolute top-30 font-perfectly-nineties text-3xl md:text-7xl tracking-tight">
            GSAP + Locomotive demo
          </h1>
            <div className="text-container flex items-center w-full gap-10 h-[40%] justify-center ">
              <p className="w-[15%] font-perfectly-nineties italic text-lg mb-2 text-right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis, inventore?
              </p>
              <div className="blob w-50 h-70 "></div>

              <p className="w-[15%] font-inter text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                nisi impedit architecto ipsum similique quasi consectetur
                repellat odit quis temporibus.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[150vh] w-full"></div>
        <div className="h-[100vh] w-full text-white flex flex-col items-center pt-[50px]">
          <h1 className="font-perfectly-nineties text-3xl ">
            GSAP + Locomotive demo
          </h1>
          <div className="flex items-center w-full gap-10 h-[40%] justify-center ">
            <p className="w-[15%] font-perfectly-nineties italic text-lg mb-2 text-right ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, inventore?
            </p>
            <div className="blob w-50 h-70 "></div>

            <p className="w-[15%] font-inter text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi
              impedit architecto ipsum similique quasi consectetur repellat odit
              quis temporibus.
            </p>
          </div>
        </div>
      </section>
      <section className="hero w-full h-full bg-black flex  justify-center text-white">
        <div className=" center-img w-[17%] h-[50%]  ">
          <Image src={"/2.png"} alt="center-img" width={1000} height={1000} className="w-full h-full object-cover"></Image>
        </div>
      </section>
    </div>
  );
};

export default MainScroll;
