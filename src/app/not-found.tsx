import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Custom404: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#28354F] to-[#040312] font-outfit text-[16px] pb-2">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-3xl mt-4 font-praise">Page Not Found</h2>
        <p className="mt-2">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block bg-white text-blue-500 rounded-full px-6 py-2 text-lg font-semibold hover:bg-gray-200 transition">
          Go Back Home
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Custom404;
