"use client"

import React, { useState, useEffect } from 'react';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const showProgressbar = (): void => {
  nProgress.start();
  nProgress.set(0.2);
  nProgress.set(0.4);
  nProgress.set(0.6);
  nProgress.set(0.8);
  nProgress.done();
};

const LinksNavbar: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/register') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  const toggleLoginRegister = () => {
    setIsLogin((prev) => !prev);
  };

  const handleNavigation = (href: string) => {
    showProgressbar();
    setTimeout(() => {
      window.location.href = href; 
      nProgress.done();
    }, 300);
  };

  return (
    <div className="flex items-center space-x-6">
      <a href="#top-rented" onClick={(e) => { e.preventDefault(); handleNavigation('/top-rented'); }} className="text-white cursor-pointer hover:text-gray-300">
        Top Rented Items
      </a>
      <a href="#featured" onClick={(e) => { e.preventDefault(); handleNavigation('/featured'); }} className="text-white cursor-pointer hover:text-gray-300">
        Featured Items
      </a>
      <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }} className="text-white cursor-pointer hover:text-gray-300">
        About Us
      </a>
      <button
        onClick={() => {
          const targetPage = isLogin ? '/register' : '/login'; 
          handleNavigation(targetPage); 
          toggleLoginRegister(); 
        }}
        className="inline-flex justify-center rounded-lg border border-gray-300 shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700 transition-all duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
      >
        Login/Register 
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.894.553l3 6a1 1 0 01-.01.914l-3 6A1 1 0 0110 17H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.01-.914l-3-6A1 1 0 015 3h5z" clipRule="evenodd" />
          </svg>
      </button>
    </div>
  );
};

export default LinksNavbar;
