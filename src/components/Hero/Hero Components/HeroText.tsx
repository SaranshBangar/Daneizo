import React from 'react'
import HeroButton from './HeroButton'

const HeroText = () => {
  return (
    <div>
        <h1 className='font-outfit font-bold text-[50px] text-white mb-[2px]'>Daneízo</h1>
        <h3 className='font-palanquin font-normal text-[30px] text-white w-[240px]'>Rent, Use, Return - It's That Simple !</h3>
        <div>
            <div className='absolute flex gap-[27px] items-center'>
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
            <div>
                <img src="./HeroCat.svg" alt="" className="w-[381px] h-[148px] mt-[48px]" />
            </div>
        </div>
    </div>
  )
}

export default HeroText