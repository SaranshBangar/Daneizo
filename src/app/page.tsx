import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-[#040312]">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-[75%]">
          <Hero />
        </div>
      </div>
    </main>
  );
}
