"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
 
type AllUserTestimonialsProps = {
  image: string;
  userName: string;
  testimonial: string;
};

const AllUserTestimonials = [
  {
    image: "https://picsum.photos/120",
    userName: "Daniel",
    testimonial: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    image: "https://picsum.photos/120/119",
    userName: "KEN",
    testimonial: "To be honest, when I found out the patriarchy wasn't just about horses, I lost interest.",
  },
  {
    image: "https://picsum.photos/119/120",
    userName: "OFFICER K",
    testimonial: "I have memories but they are not real. They are just implants...",
  },
  {
    image: "https://picsum.photos/121",
    userName: "Emily",
    testimonial:
      "This platform has completely changed the way I work. The user experience is seamless and intuitive!",
  },
  {
    image: "https://picsum.photos/122",
    userName: "Michael",
    testimonial:
      "I’ve never been more satisfied with a product. The attention to detail and functionality is outstanding!",
  },
  {
    image: "https://picsum.photos/123",
    userName: "Sarah",
    testimonial:
      "Incredible service! I couldn’t be happier with the support and overall experience. Highly recommend!",
  },
];

const Card: React.FC<AllUserTestimonialsProps> = ({
  image,
  userName,
  testimonial,
}) => (
  <div className="group w-full max-w-[350px] h-[400px] [perspective:1000px]">
    <div className="relative h-80 w-65 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front Face */}
      <div className="justify-center absolute bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 flex flex-col items-center inset-0 rounded-xl [backface-visibility:hidden]">
        <Image
          src={image}
          alt={userName}
          width={120}
          height={120}
          className="rounded-full z-[2]"
        />
        <p className="font-outfit mt-3 font-semibold text-[20px] text-white text-center px-4">
          {userName}
        </p>
      </div>
      {/* Back Face will go here */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="mt-[20px] h-full flex flex-col justify-evenly items-center">
          <p className="font-tillana">{testimonial}</p>
        </div>
      </div>


    </div>
  </div>
);

const UserTestimonialsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalTestimonials = AllUserTestimonials.length;


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   if (carouselRef.current) {
  //     const testimonialWidth = 365 + 14; // Card width + gap
  //     carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  //     carouselRef.current.style.transform = `translateX(-${(currentIndex % totalTestimonials) * testimonialWidth
  //       }px)`;

  //     if (currentIndex >= totalTestimonials) {
  //       setTimeout(() => {
  //         carouselRef.current!.style.transition = "none";
  //         setCurrentIndex(0);
  //       }, 500);
  //     }
  //   }
  // }, [currentIndex, totalTestimonials]);

  return (

    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full"

      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>{AllUserTestimonials.map((item, index) => (
        <div key={index} className="flex-shrink-0 basis-1/3 w-full md:w-[300px] lg:w-[350px]">
          <Card
            image={item.image}
            userName={item.userName}
            testimonial={item.testimonial}
          />
        </div>
      ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    // <div className="marquee-content gap-3 flex justify-center animate-marquee" >
    //   {AllUserTestimonials.map((item, index) => (
    //     <div key={index} className="flex-shrink-0 w-full md:w-[300px] lg:w-[350px]">
    //       <Card
    //         image={item.image}
    //         userName={item.userName}
    //         testimonial={item.testimonial}
    //       />
    //     </div>
    //   ))}
    // </div>
  );
};

export default UserTestimonialsCards;
