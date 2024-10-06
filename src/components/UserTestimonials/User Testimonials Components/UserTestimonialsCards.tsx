"use client";

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
];

const Card: React.FC<AllUserTestimonialsProps> = ({
  image,
  userName,
  testimonial,
}) => (
  <div className="flex flex-col items-center w-full max-w-[400px] h-[400px] relative p-4">
    <div className="flex justify-center">
      <Image
        src={image}
        alt={userName}
        width={120}
        height={120}
        className="rounded-full z-[2]"
      />
    </div>
    <div className="bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 w-full h-[272px] rounded-[20px] absolute bottom-0 flex flex-col justify-center items-center">
      <div className="mt-[20px] h-full flex flex-col justify-evenly items-center">
        <p className="font-outfit font-semibold text-[25px] text-white text-center">{userName}</p>
        <p className="font-tillana text-[20px] text-white text-center px-4 pb-6">{testimonial}</p>
      </div>
    </div>
  </div>
);

const UserTestimonialsCards = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-4">
      {AllUserTestimonials.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-full md:w-1/3">
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
