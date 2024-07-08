"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const testimonials = [
    {
        description : "Kya website hai, kya dsign hai, kya team hai. Matlab maza aagaya. 10/10 would recommend. Itna mast hai ki kya bataun. Bas ek baar try karke dekho. Aap bhi khush ho jaoge. Matlab low cost, full masti.",
        title : "Rakiul Islam",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://picsum.photos/300/300"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        description : "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        title : "Saransh Bangar",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://picsum.photos/300/299"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        description : "Kya website hai, kya dsign hai, kya team hai. Matlab maza aagaya. 10/10 would recommend. Itna mast hai ki kya bataun. Bas ek baar try karke dekho. Aap bhi khush ho jaoge. Matlab low cost, full masti.",
        title : "Dev Karan Singh",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://picsum.photos/299/300"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
const UserTestimonialsStickyScroll = () => {
    return (
        <div className="p-10">
            <StickyScroll content={testimonials} />
        </div>
    );
}
export default UserTestimonialsStickyScroll