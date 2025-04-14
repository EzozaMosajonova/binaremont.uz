import React from "react";
import RightBg from "../../assets/hero.jpg"; // rasm

const Hero = () => {
    return (
        <section className="mt-18 text-white">
            <div className="flex flex-col md:flex-row w-full min-h-[510px]">

                {/* Chap blok - Background + Overlay */}
                <div
                    className="relative md:w-2/3 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${RightBg})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Kontent */}
                    <div className="relative z-10 flex flex-col justify-center h-full px-6 md:pl-20 py-10">
                        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-bold leading-tight">
                            Pемонтировать
                            <br />
                            капитално <br />
                            я космитехно
                        </h1>
                        <p data-aos="fade-down" className="text-lg md:text-2xl text-gray-200 mt-4">
                            Создаём уют, функциональность и эстетику
                        </p>

                        {/* Xizmatlar */}
                        <div className="flex flex-wrap gap-4 text-sm mt-10">
                            <div data-aos="fade-up-left" className="border-l-4 pl-3 border-cyan-400 bg-white/10 py-2 px-3 rounded">
                                Опытные мастера
                            </div>
                            <div data-aos="fade-up-left" className="border-l-4 pl-3 border-cyan-400 bg-white/10 py-2 px-3 rounded">
                                Стильный дизайн
                            </div>
                            <div data-aos="fade-up-left" className="border-l-4 pl-3 border-cyan-400 bg-white/10 py-2 px-3 rounded">
                                Качественные материалы
                            </div>
                        </div>

                        {/* Tugmalar */}
                        <div className="flex md:justify-between  justify-center gap-4 pt-10 flex-wrap md:mb-0 mb-10">
                            <a href="#form" 
                            className="bg-cyan-100 md:w-[33%] w-[85%] text-teal-900 font-medium text-2xl px-5 py-5 rounded hover:bg-cyan-200 transition">
                            <button>
                                Обсудить проект
                            </button>
                            </a>
                            <a
                                href="tel:+998900975000"
                                className="bg-cyan-100 md:w-[33%] w-[85%] text-teal-900 font-medium text-2xl px-5 py-5 rounded hover:bg-cyan-200 transition"
                            >
                                +998 90 097 50 00
                            </a>
                        </div>
                    </div>
                </div>

                {/* O‘ng blok - toza rasm */}
                <div
                    className="md:w-1/2 w-full bg-cover bg-center hidden md:block"
                    style={{ backgroundImage: `url(${RightBg})` }}
                />
            </div>
        </section>
    );
};

export default Hero;
