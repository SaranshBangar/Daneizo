"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const HeroCarousel: React.FC = () => {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const showSlide = (index: number) => {
        itemsRef.current.forEach((item, i) => {
            if (item) {
                item.classList.toggle('hidden', i !== index);
            }
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsRef.current.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsRef.current.length) % itemsRef.current.length);
    };

    useEffect(() => {
        showSlide(currentIndex);
    }, [currentIndex]);

    return (
        <div className="w-full md:w-[700px] h-[200px] md:h-[300px]">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {["https://picsum.photos/600/300", "https://picsum.photos/600/299", "https://picsum.photos/599/300", "https://picsum.photos/599/299"].map((src, index) => (
                        <div
                        key={index}
                        ref={(el) => { itemsRef.current[index] = el; }}
                        className={`transition-all duration-700 ease-in-out ${index !== currentIndex ? 'hidden' : ''}`}
                        data-carousel-item
                    >
                        <Image
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            width={600}
                            height={300}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
                        />
                    </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-1/2 left-0 z-30 rounded-full flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 transition-all duration-150 ease-in-out group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                        </svg>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-0 z-30 rounded-full flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 transition-all duration-150 ease-in-out group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HeroCarousel;
