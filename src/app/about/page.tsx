import React from 'react';
import Head from 'next/head';
import Link from 'next/link';  // Importing Link for navigation
import Navbar from '@/components/Navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Daneizo" 
};

const AboutUs: React.FC = () => {
  const pageTitle = metadata.title as string;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar />

      {/* Back Button */}
      <div className="fixed top-4 left-4">
   <Link href="/">
    <button className="text-white font-bold bg-transparent w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-500 hover:border-white transition-all">
      ←
    </button>
  </Link>
</div>



      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-auto bg-opacity-80 rounded-lg shadow-2xl p-6 md:p-8 transform transition-all duration-300 hover:scale-105">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                About <span className="text-blue-500">Daneizo</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white">
                Welcome to <span className="font-bold text-blue-500">Daneizo</span>, a revolutionary platform where renting is as exciting as buying! 🎉 
                Our mission is simple: <span className="font-semibold">"Why Buy When You Can Rent It!"</span> We offer a seamless experience for users to explore, rent, and manage a variety of items, from electronics to furniture and more.
              </p>
              <p className="mt-6 text-base sm:text-lg text-white">
                Our platform is built with the latest technologies and is constantly evolving with the help of our growing community of contributors. Whether you’re a skilled developer or just starting, Daneizo is open for everyone to contribute and make a difference.
              </p>
            </div>

            <div className="hidden md:block">
              <img 
                src="/images/rental-items.png" 
                alt="Rental Items"
                className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-12 bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-base sm:text-lg text-white">
              Daneizo is dedicated to empowering users by offering affordable and accessible rental options. Our mission is to create a hassle-free, secure, and enjoyable rental platform for all types of users.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Platform Features</h2>
            <ul className="list-disc list-inside mt-4 text-base sm:text-lg text-white space-y-2">
              <li><span className="font-semibold">Item Rental:</span> Browse, rent, and manage a wide variety of items.</li>
              <li><span className="font-semibold">Search Functionality:</span> Find the items you need quickly and easily.</li>
              <li><span className="font-semibold">Responsive Design:</span> Seamless user experience on all devices.</li>
              <li><span className="font-semibold">User Authentication:</span> Secure login and user management.</li>
              <li><span className="font-semibold">Admin Panel:</span> Efficient management of rental listings and users.</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Join Us on Our Journey!</h3>
            <p className="mt-4 text-base sm:text-lg text-white">
              Whether you’re a user ready to rent or a developer eager to contribute, Daneizo is the perfect platform to join and make an impact. Let’s build something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
