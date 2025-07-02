"use client"
import MainScroll from "@/components/MainScroll";
import Nav from "@/components/Nav";
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
      
      <MainScroll />
    </div>
  );
}
