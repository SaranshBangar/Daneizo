import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from "lucide-react";
const socialLinks = [
  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram", hoverColor: "#C13584" },
  { href: "https://www.twitter.com", icon: Twitter, label: "Twitter", hoverColor: "#1DA1F2" },
  { href: "https://www.facebook.com", icon: Facebook, label: "Facebook", hoverColor: "#2D68C4" },
];
const quickLinks = [
  { href: "/blogs", text: "Blogs" },
  { href: "/get-app", text: "Get Desktop/Mobile Apps" },
  { href: "/legal", text: "Legal & Privacy Information" },
];
const supportLinks = [
  { href: "/help", text: "Help Center" },
  { href: "/contact", text: "Contact Us" },
  { href: "/faq", text: "FAQ" },
  { href: "/terms", text: "Terms of Service" },
];
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#28354F] to-[#040312] font-outfit text-base pb-8 pt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-10">
          <div className="h-px w-full max-w-6xl bg-white/20 rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex gap-2 items-center mb-4">
                <Image
                  src="/Logo.svg"
                  alt="Daneízo Logo"
                  width={35}
                  height={35}
                />
                <h2 className="font-praise text-white text-[30px]">Daneízo</h2>
              </Link>
              <p className="text-white/80 text-sm mb-6">Rent, Use, Return - It's That Simple!</p>
              <div className="pt-4">
                <h3 className="text-white text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </div>
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="Support" links={supportLinks} />
          </div>
          <div className="text-center border-t border-white/20 pt-8">
            <p className="text-white/80 text-sm">
              Daneízo - Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
const LinkColumn = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-white text-xl font-semibold mb-6">{title}</h3>
    {links.map((link) => (
      <NavLink key={link.href} {...link} />
    ))}
  </div>
);
const NavLink = ({ href, text }) => (
  <Link href={href} className="block">
    <p className="w-fit text-white/60 transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1">
      {text}
    </p>
  </Link>
);
const SocialLink = ({ href, icon: Icon, label, hoverColor }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group" aria-label={label}>
    <Icon className={`w-6 h-6 text-white/60 transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-1 group-hover:scale-110`} style={{ '--hover-color': hoverColor }} />
  </a>
);
export default Footer;
