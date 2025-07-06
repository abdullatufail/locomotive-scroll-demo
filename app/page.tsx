"use client"
import MainScroll from "@/components/MainScroll";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
     // Reset scroll position on page load/refresh
    window.scrollTo(0, 0);
    
    // Also reset any smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    // Restore smooth scroll after reset
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 100);
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
