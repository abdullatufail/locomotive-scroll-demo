import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const TextReveal = ({ className, children, rootRef }) => {
  const targetRef = useRef(null);
  
  // Ensure children is a string before splitting
  const text = typeof children === 'string' ? children : children?.toString() || '';
  const letters = text.split("");

  useGSAP(() => {
    const target = targetRef.current;
    const root = rootRef?.current;
    if (!target) return;

    // Set initial state for all letter spans
    gsap.set(target.children, {
      y: 200,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(target.children, {
              y: 0,
              duration: 0.2,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.05, // Animate letters one by one
            });
          }
          
        });
      },
      {
        root: root,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    // Observe the parent container, not the children
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [rootRef, letters.length]); // Add letters.length to dependencies

  return (
    <div className={className}>
      <h1 className="h-full w-full" ref={targetRef}>
        {letters.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextReveal;