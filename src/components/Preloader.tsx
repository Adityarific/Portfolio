
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const sandRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const number = numberRef.current;
    const sand = sandRef.current;
    const curtain = curtainRef.current;

    if (!loader || !number || !sand || !curtain) return;

    const panels = curtain.querySelectorAll(".fabric-panel");
    const progress = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.set(curtain, {
        scaleY: 0,
        transformOrigin: "bottom",
      });

      gsap.set(panels, {
        scaleY: 1,
        transformOrigin: "top",
      });

      gsap.set(loader, { autoAlpha: 1 });
      gsap.set(sand, { scaleY: 1 });

      number.textContent = "00";

      const tl = gsap.timeline({
        onComplete,
      });

      tl.to(progress, {
        value: 100,
        duration: 2.8,
        ease: "none",
        onUpdate: () => {
          number.textContent = String(
            Math.floor(progress.value).toString().padStart(2, "0")
          );
        },
      })
        .to(
          sand,
          {
            scaleY: 0.05,
            duration: 2.8,
            ease: "power1.in",
          },
          0
        )
        .to(curtain, {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(panels, {
          scaleY: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.inOut",
        })
        .to(loader, {
          autoAlpha: 0,
          duration: 0.3,
        });
    }, loader);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader" ref={loaderRef}>
      <div className="loader-content">
        <p className="loader-label">
          ADITYA® — DIGITAL PORTFOLIO
        </p>

        <div className="hourglass" aria-label="Loading portfolio">
          <div className="glass-top">
            <div className="sand-pile" />
          </div>

          <div className="glass-neck" />

          <div className="glass-bottom">
            <div className="sand-stream" />
            <div className="sand-pile bottom-pile" ref={sandRef} />
          </div>
        </div>

        <div className="loader-counter">
          <span>INITIALIZING EXPERIENCE</span>
          <span>
            <span ref={numberRef}>00</span>%
          </span>
        </div>
      </div>

      <div className="fabric-curtain" ref={curtainRef}>
        <div className="fabric-panel panel-one" />
        <div className="fabric-panel panel-two" />
        <div className="fabric-panel panel-three" />
      </div>
    </div>
  );
}
