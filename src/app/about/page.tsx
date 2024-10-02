import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black py-16 px-6 sm:px-8 lg:px-16 flex flex-col justify-center items-center"
    >
      <div className="max-w-4xl mx-auto bg-opacity-80 rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:scale-105">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-white mb-4 tracking-wide font-serif">
              About <span className="text-blue-500">Daneizo</span>
            </h1>
            <p className="mt-6 text-lg text-white font-sans">
              Welcome to <span className="font-semibold text-blue-500">Daneizo</span>, a revolutionary platform where renting is as exciting as buying! 🎉 
              Our mission is simple: <span className="font-semibold">"Why Buy When You Can Rent It!"</span> We offer a seamless experience for users to explore, rent, and manage a variety of items, from electronics to furniture and more.
            </p>
            <p className="mt-6 text-lg text-white font-sans">
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

        <div className="mt-12 bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white leading-tight mb-6 tracking-tight font-serif">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-white font-sans">
            Daneizo is dedicated to empowering users by offering affordable and accessible rental options. Our mission is to create a hassle-free, secure, and enjoyable rental platform for all types of users.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-white leading-tight mb-6 tracking-tight font-serif">
            Platform Features
          </h2>
          <ul className="list-disc list-inside mt-4 text-lg text-white space-y-2 font-sans">
            <li><span className="font-semibold">Item Rental:</span> Browse, rent, and manage a wide variety of items.</li>
            <li><span className="font-semibold">Search Functionality:</span> Find the items you need quickly and easily.</li>
            <li><span className="font-semibold">Responsive Design:</span> Seamless user experience on all devices.</li>
            <li><span className="font-semibold">User Authentication:</span> Secure login and user management.</li>
            <li><span className="font-semibold">Admin Panel:</span> Efficient management of rental listings and users.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-white leading-tight mb-4 tracking-wide font-serif">
            Join Us on Our Journey!
          </h3>
          <p className="mt-4 text-lg text-white font-sans">
            Whether you’re a user ready to rent or a developer eager to contribute, Daneizo is the perfect platform to join and make an impact. Let’s build something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
