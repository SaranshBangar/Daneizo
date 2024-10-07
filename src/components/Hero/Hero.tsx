import HeroCarousel from "./Hero Components/HeroCarousel"
import HeroText from "./Hero Components/HeroText"

const Hero = () => {
  return (
    <div className="bg-[#040312] mt-12 md:mt-[50px] mb-20 md:mb-[100px]">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center gap-8 max-md:flex-col">
          <HeroText />
          <HeroCarousel />
        </div>
      </div>
    </div>
  )
}

export default Hero
