import HowItWorksSlides from "./How It Works Components/HowItWorksSlides"
import HowItWorksTitle from "./How It Works Components/HowItWorksTitle"

const HowItWorks = () => {
  return (
    <section className="mt-[75px]">
        <div className="flex flex-col gap-[14px]">
            <HowItWorksTitle />
            <HowItWorksSlides />
        </div>
    </section>
  )
}

export default HowItWorks