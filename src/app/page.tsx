import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import TopRentedItems from "@/components/TopRentedItems/TopRentedItems";
import UserTestimonials from "@/components/UserTestimonials/UserTestimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Daneízo", 
  description: "Explore the top rented items, how it works, and user testimonials at Daneízo.", 
  keywords: "rental, items, user testimonials, how it works", 
  openGraph: {
    title: "Daneízo - Home", 
    description: "Discover top rental items and read user testimonials.", 
    url: "https://daneizo.vercel.app", 
    type: "website",
    images: [
      {
        url: "https://daneizo.vercel.app/logo.svg", 
        width: 1200,
        height: 630,
        alt: "Daneízo Home Page Image",
      },
    ],
  },
};

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
