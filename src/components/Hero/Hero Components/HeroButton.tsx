import React from 'react';

interface HeroButtonProps {
  text?: string;
  textColour?: string;
  backgroundColour?: string;
  borderColour?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ text, textColour, backgroundColour, borderColour }) => {

  return (
    <button
      className="border-[3px] rounded-[20px] px-4 py-2 font-outfit text-[20px] w-[106px] font-normal cursor-pointer z-[10] 
      transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg hover:border-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-4"
      style={{
        color: textColour,
        backgroundColor: backgroundColour,
        borderColor: borderColour,
      }}
    >
      {text ? text : 'Button Text'}
    </button>
  );
};

export default HeroButton;
