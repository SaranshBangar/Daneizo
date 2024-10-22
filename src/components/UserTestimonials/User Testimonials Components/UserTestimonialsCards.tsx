"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    image: "https://picsum.photos/120/",
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
    testimonial: "This platform has completely changed the way I work. The user experience is seamless and intuitive!",
  },
  {
    image: "https://picsum.photos/122",
    userName: "Michael",
    testimonial: "I’ve never been more satisfied with a product. The attention to detail and functionality is outstanding!",
  },
  {
    image: "https://picsum.photos/123",
    userName: "Sarah",
    testimonial: "Incredible service! I couldn’t be happier with the support and overall experience. Highly recommend!",
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
      {/* Back Face */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="mt-[20px] h-full flex flex-col justify-evenly items-center">
          <p className="font-tillana">{testimonial}</p>
        </div>
      </div>
    </div>
  </div>
);

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        right: "10px",
        transform: "translateY(-50%)",
        top: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M10 17l5-5-5-5v10z" />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        left: "10px",
        transform: "translateY(-50%)",
        top: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M14 17l-5-5 5-5v10z" />
      </svg>
    </div>
  );
};

const UserTestimonialsCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {AllUserTestimonials.map((item, index) => (
          <div key={index} className="flex justify-center">
            <Card
              image={item.image}
              userName={item.userName}
              testimonial={item.testimonial}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserTestimonialsCards;