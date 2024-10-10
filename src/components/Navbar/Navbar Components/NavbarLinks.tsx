"use client";

import React, { useState, useEffect, useRef } from 'react';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { FaBars } from 'react-icons/fa';
import { XIcon } from '@heroicons/react/solid';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Create a ref for the dropdown
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsLogin(currentPath !== '/register');

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Corrected handleClose function to close the dropdown and hide the XIcon
  const handleClose = () => {
    setIsVisible(false); // Hide the XIcon
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-gray-300 relative flex items-center md:hidden"
      >
        <FaBars size={24} />
      </button>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="fixed top-0 right-0 h-full w-2/3 bg-gray-800 rounded-l-md shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-0"
        >
          {isVisible && (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClose(); // Close the dropdown when XIcon is clicked
              }}
              className="block px-4 py-2 mt-5 text-white hover:bg-gray-700"
            >
              <XIcon className="h-10 w-10" />
            </a>
          )}
          <a
            href="#top-rented"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/top-rented');
            }}
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Top Rented Items
          </a>
          <a
            href="#featured"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/featured');
            }}
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Featured Items
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }}
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            About Us
          </a>
          <button
            onClick={() => {
              const targetPage = isLogin ? '/register' : '/login';
              handleNavigation(targetPage);
              toggleLoginRegister();
            }}
            className="block w-full text-left px-4 py-2 bg-white text-gray-700 hover:bg-gray-100"
          >
            Login/Register
            <svg
              className="-mr-1 ml-2 h-5 w-5 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.894.553l3 6a1 1 0 01-.01.914l-3 6A1 1 0 0110 17H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.01-.914l-3-6A1 1 0 015 3h5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="hidden md:flex items-center space-x-6 ml-4">
        <a
          href="#top-rented"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/top-rented');
          }}
          className="text-white cursor-pointer hover:text-gray-300"
        >
          Top Rented Items
        </a>
        <a
          href="#featured"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/featured');
          }}
          className="text-white cursor-pointer hover:text-gray-300"
        >
          Featured Items
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/about');
          }}
          className="text-white cursor-pointer hover:text-gray-300"
        >
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
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.894.553l3 6a1 1 0 01-.01.914l-3 6A1 1 0 0110 17H5a1 1 0 01-.894-1.447l3-6a1 1 0 01.01-.914l-3-6A1 1 0 015 3h5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LinksNavbar;
