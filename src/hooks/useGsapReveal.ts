
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-title h1", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.1,
      });

      // Hero scroll transformation
      gsap.to(".hero-title", {
        y: -80,
        opacity: 0.25,
        scale: 0.94,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Project section heading
      gsap.from(".projects-intro", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Individual project cards
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          scale: 0.985,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });


    gsap.from(".about-headline h2", {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        toggleActions: "play none none reverse",
    },
    });

    gsap.from(".about-description p", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        toggleActions: "play none none reverse",
    },
    });

    });

    return () => ctx.revert();
  }, []);
}
