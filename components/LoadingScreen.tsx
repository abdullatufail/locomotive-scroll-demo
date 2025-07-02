"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
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
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".loading-bar", {
      scaleX: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(".loading-progress", {
      width: "100%",
      duration: 2,
      ease: "power2.out"
    })
    .to(".loading-screen", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      delay: 0.5,
      onComplete: onLoadComplete
    });
  }, []);

  return (
    <div className="loading-screen fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="loading-title font-perfectly-nineties text-4xl mb-8">
          GSAP SCROLLER
        </h1>
        
        <div className="loading-bar w-80 h-2 bg-white/20 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="loading-progress h-full bg-white rounded-full w-0"></div>
        </div>
        
        <div className="flex space-x-1 justify-center mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 bg-white rounded-full"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;