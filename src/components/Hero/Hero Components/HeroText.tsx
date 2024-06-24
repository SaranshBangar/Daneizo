import React from 'react'
import HeroButton from './HeroButton'
import HeroCat from "./../../../../public/HeroCat.svg"

const HeroText = () => {
  return (
    <div>
        <h1 className='font-outfit font-bold text-[50px] text-white mb-[2px]'>Daneízo</h1>
        <h3 className='font-palanquin font-normal text-[30px] text-white w-[240px]'>Rent, Use, Return - It's That Simple !</h3>
        <div className='relative'>
            <div className='flex justify-between items-center mt-[38px]'>
                <HeroButton
                    key='key1'
                    text="Sign Up"
                    textColour="#040312"
                    backgroundColour="#FFFFFF"
                    borderColour="#FFFFFF"
                />
                <HeroButton
                    key='key2'
                    text="Log in"
                    textColour="#FFFFFF"
                    backgroundColour="#040312"
                    borderColour="#FFFFFF"
                />
            </div>
            {/* <div>
                <img src={HeroCat} alt="Cat" />
            </div> */}
            <div className="absolute w-[381px] h-[148px] bg-pink-200 opacity-30 border-2 z-50 -top-5 left-0 right-0"></div>
        </div>
    </div>
  )
}

export default HeroText