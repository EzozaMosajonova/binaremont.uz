import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [scrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hashni tekshirib, faollikni aniqlash
  const getActiveClass = (hash) => {
    return window.location.hash === hash ? "text-gray-300" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#186e68]" : "bg-[#186e68]"
        }`}
    >
      <div className="max-w-[1420px] flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <img src={Logo} className="md:h-8 h-6" alt="Limsa Logo" />
        </a>

        {/* Menu (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-white font-medium">
            <li>
              <a
                href="#home"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#home")}`}
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#services")}`}
              >
                Наши работы
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#calculator")}`}
              >
                КАЛЬКУЛЯТОР
              </a>
            </li>
            <li>
              <a
                href="#partners"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#partners")}`}
              >
                партнеры
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#process")}`}
              >
                процесс работы
              </a>
            </li>
            <li>
              <a
                href="#price"
                className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#price")}`}
              >
                СКОЛЬКО СТОИТ РЕМОНТ?
              </a>
            </li>
          </ul>
        </div>

        {/* Telefon tugmasi */}
        <div className="hidden md:block">
          <a href="#form">
            <button className="text-white bg-transparent border-2 border-[#5daaa5] focus:outline-none font-medium rounded-2xl text-sm px-6 py-3">
              +998 (33) 258 73 58
            </button>
          </a>
        </div>

        {/* Mobil menyu tugmasi */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg focus:outline-none"
          >
            <MenuIcon className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobil menyu (chapdan chiqadi) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-[#186e68] transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col p-5 space-y-6 mt-10 text-white font-medium">
          <li>
            <a
              href="#home"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#home")}`}
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#about")}`}
            >
              Обсудить проэкт
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#services")}`}
            >
              Наши работы
            </a>
          </li>
          <li>
            <a
              href="#calculator"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#calculator")}`}
            >
              КАЛЬКУЛЯТОР
            </a>
          </li>
          <li>
            <a
              href="#partners"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#partners")}`}
            >
              партнеры
            </a>
          </li>
          <li>
            <a
              href="#process"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#process")}`}
            >
              процесс работы
            </a>
          </li>
          <li>
            <a
              href="#price"
              className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass("#price")}`}
            >
              СКОЛЬКО СТОИТ РЕМОНТ?
            </a>
          </li>
        </ul>
      </div>

      {/* Ekran orqasini qoraytirish */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900 opacity-50 ${menuOpen ? "block" : "hidden"
          }`}
      ></div>
    </nav>
  );
}

export default Header;
