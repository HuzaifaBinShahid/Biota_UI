"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type CarouselProps = {
  slides: { src: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-full overflow-hidden " ref={emblaRef}>
      {/* SLIDES */}
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div
            className="relative min-w-full h-full flex justify-center items-center"
            key={index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute left-1/2 -translate-x-1/2 p-[10px]  bg-[#E9F9F2] w-[67px] rounded-full bottom-3  flex justify-center space-x-2"> {/*mujy ye div isky parent div k center ma krna hai*/}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-[9px] h-[9px] rounded-full transition-all ${
              index === selectedIndex
                ? "bg-green-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;