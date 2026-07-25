"use client";

import * as React from "react";

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x"
      >
        {children}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
      >
        →
      </button>
    </div>
  );
}

function CarouselItem({ children }: { children: React.ReactNode }) {
  return <div className="min-w-[300px] snap-start">{children}</div>;
}

export { Carousel, CarouselItem };
