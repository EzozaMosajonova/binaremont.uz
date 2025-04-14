import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [scrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const sections = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Наши работы" },
    { href: "#calculator", label: "КАЛЬКУЛЯТОР" },
    { href: "#partners", label: "партнеры" },
    { href: "#process", label: "процесс работы" },
    { href: "#price", label: "СКОЛЬКО СТОИТ РЕМОНТ?" },
  ];

  const mobileSections = [
    { href: "#home", label: "Главная" },
    { href: "#services", label: "Обсудить проэкт" },
    ...sections.slice(1),
  ];

  const getActiveClass = (hash) => (activeHash === hash ? "text-gray-300" : "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveHash(`#${visibleSection.target.id}`);
        }
      },
      {
        threshold: 0.6, // 60% ko‘rinadigan bo‘lsa, aktiv deb hisoblaymiz
      }
    );

    sections.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMenuClick = (hash) => {
    setMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#186e68]" : "bg-[#186e68]"
      }`}
    >
      <div className="max-w-[1420px] flex items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3">
          <img src={Logo} className="md:h-8 h-6" alt="Limsa Logo" />
        </a>

        {/* Desktop menyu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-white font-medium">
            {sections.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass(
                    href
                  )}`}
                >
                  {label}
                </a>
              </li>
            ))}
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

      {/* Mobil menyu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-[#186e68] transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
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
          {mobileSections.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleMenuClick(href)}
                className={`px-3 py-2 rounded transition-transform duration-300 hover:translate-y-[-5px] ${getActiveClass(
                  href
                )}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Qoraygan fon */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-neutral-900 opacity-50 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
}

export default Header;
