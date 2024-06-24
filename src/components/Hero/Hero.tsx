import HeroCarousel from "./Hero Components/HeroCarousel"
import HeroText from "./Hero Components/HeroText"

const Hero = () => {
  return (
    <div className="bg-[#040312] mt-[50px]">
        <div className="flex flex-row justify-between max-md:flex-col">
          <HeroText />
          <HeroCarousel />
        </div>
    </div>
  )
}

export default Hero