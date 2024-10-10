"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  <div className="flex flex-col items-center w-full max-w-[350px] h-[400px] relative p-4">
    <div className="flex justify-center">
      <Image
        src={image}
        alt={userName}
        width={120}
        height={120}
        className="rounded-full z-[2]"
      />
    </div>
    <div className="bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 w-full h-[272px] rounded-[20px] absolute bottom-0">
      <div className="mt-[20px] h-full flex flex-col justify-evenly items-center">
        <p className="font-outfit font-semibold text-[20px] text-white text-center px-4">
          {userName}
        </p>
        <p className="font-tillana text-[18px] text-white text-center px-4 pb-6">
          {testimonial}
        </p>
      </div>
    </div>
  </div>
);

const UserTestimonialsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalTestimonials = AllUserTestimonials.length;
  const clonedTestimonials = [...AllUserTestimonials, ...AllUserTestimonials]; // Duplicate for infinite loop

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const testimonialWidth = 365 + 14; // Card width + gap
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${
        (currentIndex % totalTestimonials) * testimonialWidth
      }px)`;

      if (currentIndex >= totalTestimonials) {
        setTimeout(() => {
          carouselRef.current!.style.transition = "none"; 
          setCurrentIndex(0);
        }, 500); 
      }
    }
  }, [currentIndex, totalTestimonials]);

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-4">
      {AllUserTestimonials.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-full md:w-[300px] lg:w-[350px]">
          <Card
            image={item.image}
            userName={item.userName}
            testimonial={item.testimonial}
          />
        </div>
      ))}
    </div>
  );
};

export default UserTestimonialsCards;
