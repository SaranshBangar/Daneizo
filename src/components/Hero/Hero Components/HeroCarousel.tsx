"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';

const HeroCarousel: React.FC = () => {
    useEffect(() => {
        const items = document.querySelectorAll<HTMLElement>('[data-carousel-item]');
        let currentIndex = 0;

        const showSlide = (index: number) => {
            items.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        };

        const nextButton = document.querySelector('[data-carousel-next]') as HTMLElement;
        const prevButton = document.querySelector('[data-carousel-prev]') as HTMLElement;

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        showSlide(currentIndex);

        return () => {
            nextButton.removeEventListener('click', nextSlide);
            prevButton.removeEventListener('click', prevSlide);
        };
    },
[]);

  return (
    <div className="w-[700px] h-[300px]">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="transition-all duration-700 ease-in-out" data-carousel-item>
            <Image
              src="https://picsum.photos/600/300"
              alt="..."
              width={600}
              height={300}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
            />
          </div>
          <div className="hidden transition-all duration-700 ease-in-out" data-carousel-item>
            <Image
              src="https://picsum.photos/600/299"
              alt="..."
              width={600}
              height={299}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
            />
          </div>
          <div className="hidden transition-all duration-700 ease-in-out" data-carousel-item>
            <Image
              src="https://picsum.photos/599/300"
              alt="..."
              width={599}
              height={300}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
            />
          </div>
          <div className="hidden transition-all duration-700 ease-in-out" data-carousel-item>
            <Image
              src="https://picsum.photos/599/299"
              alt="..."
              width={600}
              height={300}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
            />
          </div>
        </div>
        <button type="button" className="absolute top-1/2 left-0 z-30 rounded-full flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 transition-all duration-150 ease-in-out group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-1/2 right-0 z-30 rounded-full flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 transition-all duration-150 ease-in-out group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
