"use client"; // needed in Next.js App Router
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React, { useEffect, useRef } from "react";
import { LetterDisplay } from "./LetterDisplay";

const lines = ["Hi my name is Tom Devonshire", "I make Web and App Solutions"];
function getRandomRotation() {
  // ±30°
  return Math.random() * 60 - 30;
}
function animateLettersOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  const nodes = ref.current?.querySelectorAll<HTMLElement>(".letter") || [];
  nodes.forEach((letter) => {
    const speed = parseFloat(letter.dataset.speed || "1");
    const xComponent = parseFloat(letter.dataset.x || "1");
    const yComponent = parseFloat(letter.dataset.y || "1");

    console.log(-speed * ScrollTrigger.maxScroll(window) * yComponent)
    gsap.to(letter, {
      // y-offset = fraction of total scroll
      y: -speed * ScrollTrigger.maxScroll(window) * yComponent,
      x: speed * ScrollTrigger.maxScroll(window) * xComponent,
      rotation: getRandomRotation(),
      ease: "power2.out",
      duration: 0.8, // base duration (scrub will sync timing)
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.5, // "momentum" feel
        invalidateOnRefresh: true,
      },
    });
  });
}
export function LetterCollision() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    animateLettersOnScroll(ref);
    ScrollTrigger.addEventListener("refreshInit", () =>
      ScrollTrigger.refresh(),
    );
  }, []);

  return (
    <div ref={ref} className="ml-8 border scroll-smooth">
      {/* layout for two lines + sub-sentence */}
      <div className="-mt-40 mb-36 flex h-screen items-center border flex-col justify-end lg:mb-24">
        {lines.map((line, i) => {
          const words = line.split(" ");
          let count = 1;

          const wordMap = words.map((word, i) => {
            const tuple = { word: word, startIndex: count };
            count = count + word.length;
            return tuple;
          });

          return (
            <div key={i} className="flex justify-center flex-wrap">
              {wordMap.map((word) => {
                return (
                  <>
                  <LetterDisplay
                    word={word.word}
                    startChar={word.startIndex}
                    line={i + 1}
                  />
                  <div className="w-4 sm:w-10" />
                  
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
