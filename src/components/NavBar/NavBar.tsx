"use client";

import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";

const menuItems = [
  { path: "/akdeniz-diyeti", label: "AKDENİZ DİYETİ" },
  { path: "/saglik", label: "SAĞLIK" },
  { path: "/hastaliklar", label: "HASTALIKLAR" },
  { path: "/cocuk", label: "ÇOCUK" },
  { path: "/ulkeler", label: "ÜLKELER" },
  { path: "/tr-mutfak", label: "TÜRK MUTFAĞI" },
  { path: "/ornek-menu", label: "ÖRNEK MENU" },
  { path: "/stratejiler", label: "STRATEJİLER" },
  { path: "/tarifler", label: "TARİFLER" },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md fixed top-0 w-full z-50 mb-20">
      <div className="container mx-auto flex flex-wrap justify-between md:justify-center items-center">
        <div className="text-xl font-bold text-gray-700 font-serif">
          <NavLink to="/">SAĞLIKLI YAŞAM</NavLink>
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        <div
          className={`w-full md:flex md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block md:inline-block"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
