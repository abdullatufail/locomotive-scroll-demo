"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [percent,setPercent] = useState(0);
  // Lock scroll when loading screen mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate loading elements
    tl.from(".loading-title", {
      y: 50,
      opacity: 0,
      // duration: 0.8,
      duration: 0.2,
      ease: "power2.out",
      
    })
    .from(".loading-bar", {
      scaleX: 0,
      duration: 0.6,
      ease: "power2.out",
     
    }, "-=0.4")
    .to(".loading-progress", {
      width: "100%",
      duration: 2,
      ease: "power2.out",
       onUpdate:function(){
        const progress = this.progress();
        setPercent(Math.round(progress*100))

      }
    })
    .to(".loading-screen", {
      y: "-100%",
      
      ease: "power2.inOut",
      delay: 0.5,
      onComplete: onLoadComplete,
      duration: 1,
    });
  }, []);

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="loading-title font-perfectly-nineties text-4xl mb-8">
          GSAP SCROLLER
        </h1>
        
        <div className="loading-bar w-80 h-2 bg-white/20  mx-auto mb-4 overflow-hidden">
          <div className="loading-progress h-full bg-white  w-0"></div>
        </div>
        <div>
          <h1 className="text-6xl font-perfectly-nineties italic text-white">{percent}%</h1>
        </div>
        
        
      </div>
    </div>
  );
};
export default LoadingScreen;