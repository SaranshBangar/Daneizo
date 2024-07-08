import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import TopRentedItems from "@/components/TopRentedItems/TopRentedItems";
import UserTestimonials from "@/components/UserTestimonials/UserTestimonials";

export default function Home() {
  return (
    <main className="bg-[#040312]">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-[75%]">
          <Hero />
          <TopRentedItems />
          <HowItWorks />
          <UserTestimonials />
        </div>
      </div>
      <Footer />
    </main>
  );
}
