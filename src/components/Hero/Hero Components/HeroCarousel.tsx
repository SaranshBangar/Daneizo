"use client";

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

const HeroCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const items = document.querySelectorAll<HTMLElement>('[data-carousel-item]');
        const totalItems = items.length;

        const showSlide = (index: number) => {
            const slider = sliderRef.current;
            if (slider) {
                slider.style.transform = `translateX(-${index * 100}%)`;
            }
        };

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        };

        const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
        };

        const nextButton = document.querySelector('[data-carousel-next]') as HTMLElement;
        const prevButton = document.querySelector('[data-carousel-prev]') as HTMLElement;

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Show the current slide
        showSlide(currentIndex);

        // Set interval for automatic slide transition
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(interval);
            nextButton.removeEventListener('click', nextSlide);
            prevButton.removeEventListener('click', prevSlide);
        };
    }, [currentIndex]);

    return (
        <div className="relative overflow-hidden w-[700px] h-[400px]">
            <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
                <div className="relative h-full overflow-hidden rounded-xl bg-gray-200">
                    <div className="flex transition-transform duration-700 ease-in-out" ref={sliderRef}>
                        <div className="min-w-full h-full overflow-hidden transition-opacity duration-700 ease-in-out opacity-100" data-carousel-item>
                            <Image
                                src="/images/carousel/img1.jpg"
                                alt="Slide 1"
                                width={600}
                                height={300}
                                className="block w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="min-w-full h-full overflow-hidden transition-opacity duration-700 ease-in-out" data-carousel-item>
                            <Image
                                src="/images/carousel/img2.jpg"
                                alt="Slide 2"
                                width={600}
                                height={300}
                                className="block w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="min-w-full h-full overflow-hidden transition-opacity duration-700 ease-in-out" data-carousel-item>
                            <Image
                                src="/images/carousel/img3.jpg"
                                alt="Slide 3"
                                width={600}
                                height={300}
                                className="block w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="min-w-full h-full overflow-hidden transition-opacity duration-700 ease-in-out" data-carousel-item>
                            <Image
                                src="/images/carousel/img6.jpg"
                                alt="Slide 4"
                                width={700}
                                height={300}
                                className="block w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Previous Button */}
                <button type="button" className="absolute top-1/2 left-2 z-30 p-2 bg-transparent text-white rounded-full shadow-lg transition-all duration-150 ease-in-out hover:bg-gray-700" data-carousel-prev>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>

                {/* Next Button */}
                <button type="button" className="absolute top-1/2 right-2 z-30 p-2 bg-transparent text-white rounded-full shadow-lg transition-all duration-150 ease-in-out hover:bg-gray-700" data-carousel-next>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroCarousel;