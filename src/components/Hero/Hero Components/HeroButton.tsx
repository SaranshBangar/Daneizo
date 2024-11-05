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
      className="border-[3px] rounded-[20px] px-3 py-2 md:px-4 md:py-2 font-outfit text-lg md:text-[20px] w-[160px] font-normal cursor-pointer z-[10]
      transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg hover:border-black hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-offset-2"
      style={{
        color: textColour,
        backgroundColor: backgroundColour,
        borderColor: borderColour,
      }}
      aria-label={text}
    >
      <span className="inline-flex items-center">{text || 'Button Text'}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
      </span>
    </button>
  );
};

export default HeroButton;
