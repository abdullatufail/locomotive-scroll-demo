"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    (async ()=>{
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  },[])
  return (
    <div className="w-full h-full">

      <section className="hero w-full h-full bg-black">
        <div className="bg-img w-full h-full relative">
          <Image src={"/1.jpg"} alt="bg-img" width={1000} height={1000} className="w-full h-full object-cover"></Image>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="font-perfectly-nineties text-6xl mb-4">Perfectly Nineties</h1>
            <p className="font-perfectly-nineties italic text-3xl mb-2">Italic Style</p>
            <p className="font-inter text-xl">Inter font for body text</p>
          </div>
        </div>
      </section>
      <section className="hero w-full h-full bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="font-inter text-4xl mb-4">Inter Font Heading</h2>
          <p className="font-perfectly-nineties text-2xl">Perfectly Nineties for decorative text</p>
        </div>
      </section>
    </div>
  );
}
