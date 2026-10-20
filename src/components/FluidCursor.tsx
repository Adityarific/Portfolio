
import { useEffect, useRef } from "react";
import "./FluidCursor.css";

export default function FluidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (
      !cursor ||
      !dot ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;
    let previousX = x;
    let previousY = y;
    let frame = 0;

    const magneticElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );

    const interactiveSelector =
      'a, button, [data-cursor="hover"]';

    const setVisible = (value: boolean) => {
  cursor.classList.toggle("is-visible", value);
};

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setVisible(true);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest(
        interactiveSelector
      );

      if (!target) return;

      cursor.classList.add("is-hovering");
      cursor.dataset.label =
        target.getAttribute("data-cursor-label") || "EXPLORE";
    };

    const onPointerOut = (event: PointerEvent) => {
      const from = (event.target as Element | null)?.closest(
        interactiveSelector
      );
      const to = (event.relatedTarget as Element | null)?.closest(
        interactiveSelector
      );

      if (from && from !== to) {
        cursor.classList.remove("is-hovering");
        cursor.dataset.label = "";
      }
    };

    const onMagneticMove = (event: PointerEvent) => {
      magneticElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;
        const distance = Math.hypot(dx, dy);

        if (distance < 110) {
          element.style.setProperty(
            "--magnetic-x",
            `${dx * 0.12}px`
          );
          element.style.setProperty(
            "--magnetic-y",
            `${dy * 0.12}px`
          );
          element.classList.add("is-magnetic");
        } else {
          element.classList.remove("is-magnetic");
        }
      });
    };

    const animate = () => {
      const dx = mouseX - x;
      const dy = mouseY - y;

      x += dx * 0.17;
      y += dy * 0.17;

      const velocityX = x - previousX;
      const velocityY = y - previousY;
      const speed = Math.min(
        Math.hypot(velocityX, velocityY),
        25
      );

      const angle =
        Math.atan2(velocityY, velocityX) * (180 / Math.PI);

      const stretch = 1 + speed * 0.035;
      const squash = 1 / stretch;

      const hoverScale = cursor.classList.contains("is-hovering")
        ? 1.08
        : 1;

      cursor.style.transform =
      `translate3d(${x}px, ${y}px, 0) ` +
      `rotate(${angle}deg) ` +
      `scale(${stretch * hoverScale}, ${squash * hoverScale})`;

      dot.style.transform =
        `translate3d(${mouseX - x}px, ${mouseY - y}px, 0)`;

      previousX = x;
      previousY = y;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);
    window.addEventListener("pointermove", onMagneticMove);

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointermove", onMagneticMove);

      magneticElements.forEach((element) => {
        element.classList.remove("is-magnetic");
        element.style.removeProperty("--magnetic-x");
        element.style.removeProperty("--magnetic-y");
      });

      cursor.classList.remove("is-visible", "is-hovering");
    };
  }, []);

  return (
    <div
      className="fluid-cursor"
      ref={cursorRef}
      aria-hidden="true"
    >
      <span className="fluid-cursor-label">
        <span />
      </span>

      <div className="fluid-cursor-dot" ref={dotRef} />
    </div>
  );
}
