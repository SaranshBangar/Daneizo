import React from 'react';
import HeroButton from './HeroButton';
import Image from 'next/image';

const HeroText: React.FC = () => {
  return (
    <div className="relative">
      <h1 className="font-outfit font-bold text-[50px] text-white mb-[2px]">Daneízo</h1>
      <h3 className="font-palanquin font-normal text-[30px] text-white w-[240px]">
        Rent, Use, Return - It's That Simple!
      </h3>
      <div className="flex gap-[27px] items-center mt-[20px]">
        <a href="/login">
        <HeroButton
          text="Go Rent"
          textColour="#040312"
          backgroundColour="#FFFFFF"
          borderColour="#FFFFFF"
        />
        </a>
        {/* <HeroButton
          text="Log in"
          textColour="#FFFFFF"
          backgroundColour="#040312"
          borderColour="#FFFFFF"
        /> */}
      </div>
      <div className="mt-[48px]">
        <Image
          src="/HeroCat.svg"
          alt="HeroCat"
          width={381}
          height={148}
        />
      </div>
    </div>
  );
};

export default HeroText;
