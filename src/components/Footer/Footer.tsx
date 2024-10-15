import React from "react";
import {
  Facebook,
  Instagram,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#28354F] to-[#040312] font-outfit text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex gap-2 items-center">
              <a href="/" className="cursor-default">
                <Image src="/Logo.svg" alt="Logo" width={35} height={35} />
              </a>
              <a href="/" className="cursor-default">
                <h2 className="font-praise text-white text-[30px]">Daneízo</h2>
              </a>
            </div>
            <p className="text-white/70 mb-4">
              Empowering your digital journey with innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white hover:text-[#C13584] transition-colors duration-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-6 h-6 text-white font:bolder hover:text-[#000000] transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-white hover:text-[#2D68C4] transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/blogs"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/get-app"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Get Desktop/Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Legal & Privacy Information
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contributor"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Our Contributors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:info@daneizo.com"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  info@daneizo.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a
                  href="tel:+11234567890"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-white/70">
                  123 Tech Street, Digital City, 12345
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder-white/50 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">
            &copy; 2024 Daneízo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
