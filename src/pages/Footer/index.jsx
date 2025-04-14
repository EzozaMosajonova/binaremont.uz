import React from "react";
import Logo from "../../assets/logo.png";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-teal-800 text-white px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* Logo */}
              <a href="#home" className="flex items-center space-x-3">
                <img src={Logo} className="md:h-8 h-6" alt="Limsa Logo" />
              </a>

            </div>
            <p className="text-sm leading-relaxed">
              Комплексные услуги в сфере жилой и нежилой недвижимости, включая в себя ремонтные услуги.
            </p>
          </div>

          {/* Center Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">МЫ В СОЦИАЛЬНЫХ СЕТЯХ:</h3>
            <div className="flex items-center space-x-4 text-2xl">
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Telegram" className="hover:text-gray-300">
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">КОНТАКТНЫЙ НОМЕР ТЕЛЕФОНА:</h3>
            <p className="mb-2">+998 90 097 50 00</p>
            <p>ПРОСПЕКТ МУСТАҚИЛЛИК 59</p>
          </div>
        </div>
      </footer>
    </>
  );
}
