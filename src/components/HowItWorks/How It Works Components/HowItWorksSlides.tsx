"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";


const HowItWorksSlides = () => {
  const tabs = [
    {
      title: "Register",
      value: "register",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0F2654] to-[#3A284F]">
          <p>Register with us!</p>
          <Slide />
        </div>
      ),
    },
    {
      title: "Upload",
      value: "upload",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0F2654] to-[#3A284F]">
          <p>Upload a photo of your product</p>
          <Slide />
        </div>
      ),
    },
    {
      title: "Details",
      value: "details",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0F2654] to-[#3A284F]">
          <p>Fill in the details for your product</p>
          <Slide />
        </div>
      ),
    },
    {
      title: "Post",
      value: "post",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0F2654] to-[#3A284F]">
          <p>Post your product here</p>
          <Slide />
        </div>
      ),
    },
    {
      title: "Voila",
      value: "voila",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0F2654] to-[#3A284F]">
          <p>Voila! You have just listed your product here!</p>
          <Slide />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-4">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Slide = () => {
  return (
    <Image
      src="https://picsum.photos/100/100"
      alt="dummy image"
      width="100"
      height="100"
      className="object-cover h-[60%] absolute top-28 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default HowItWorksSlides
