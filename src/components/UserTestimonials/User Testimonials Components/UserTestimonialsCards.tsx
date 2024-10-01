"use client"

import Image from "next/image";

type AllUserTestimonialsProps = {
    image : string;
    userName : string;
    testimonial : string;
}

const AllUserTestimonials = [
    {
        image : "https://picsum.photos/120",
        userName : "Daniel",
        testimonial : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
        image : "https://picsum.photos/120/119",
        userName : "KEN",
        testimonial : "To be honest, when I found out the patriarchy wasn't just about horses, I lost interest.",
    },
    {
        image : "https://picsum.photos/119/120",
        userName : "OFFICER K",
        testimonial : "I have memories but they are not real. They are just implants...",
    },
]

const Card : React.FC<AllUserTestimonialsProps> = ({
    image,
    userName,
    testimonial,
}) => (
    <div className="w-[365px] h-[350px] ">
        <div className="flex justify-center">
            <Image
                src={image}
                alt={userName}
                width={120}
                height={120}
                className="rounded-full z-[2]"
            />
        </div>
        <div className="bg-gradient-to-br from-[#433FD7]/20 to-[#8D8BD3]/20 w-[365px] h-[272px] rounded-[20px] absolute bottom-0">
            <div className="mt-[20px] h-full flex flex-col justify-evenly items-center">
                <p className="font-outfit font-semibold text-[25px] text-white text-center px-4]">{userName}</p>
                <p className="font-tillana text-[22px] text-white text-center px-4 pb-6">{testimonial}</p>
            </div>
        </div>
    </div>
)

const UserTestimonialsCards = () => {
  return (
    <div className="relative">
        {/* Gradient effect on cards left and right */}
        {/* <div className="z-100 bg-gradient-to-r from-[#040312] to-transparent absolute top-0 bottom-0 left-0 w-[75px] pointer-events-none"></div>
            <div className="z-100 bg-gradient-to-l from-[#040312] to-transparent absolute top-0 bottom-0 right-0 w-[75px] pointer-events-none"></div> */}
        <div
            className="flex flex-row max-lg:flex-co gap-[14px] justify-evenly items-center overflow-auto no-scrollbar"
        >
            {AllUserTestimonials.map((item : any, index) => (
                <div key={index}>
                    <Card
                        image={item.image}
                        userName={item.userName}
                        testimonial={item.testimonial}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserTestimonialsCards