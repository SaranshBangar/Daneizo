"use client";

import React, { useState, useEffect, useRef } from 'react';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FaTimes for cross icon

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
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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
    // Reset the visibility of the cross icon each time the dropdown is opened
    setIsVisible(true);
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the X icon when clicked
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
            <div className="flex justify-end px-4 py-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClose(); // Close the dropdown and hide the cross icon
                }}
                className="text-white hover:bg-gray-700"
              >
                <FaTimes size={24} className="h-7 w-7 " /> {/* Cross icon */}
              </a>
            </div>
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
        </button>
      </div>
    </div>
  );
};

export default LinksNavbar;
