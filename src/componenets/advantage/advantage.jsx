import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import RightBg from "../../assets/advantage.png";
import Dollar from "../../assets/dollar.png";
import Diagramma from "../../assets/diagrama.png";
import Zashita from "../../assets/zashita.png";

const Advantage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: Dollar,
      title: "Фиксируем сроки и стоимость",
      description: "Составляем смету и не повышаем до окончания работ",
    },
    {
      icon: Diagramma,
      title: "Контроль каждого этапа",
      description: "Проводим поэтапную проверку и согласование",
    },
    {
      icon: Zashita,
      title: "Гарантия на все виды работ",
      description: "Закрепляем гарантию официально в договоре",
    },
  ];

  return (
    <section className="mt-18 text-white max-w-[1420px] mx-auto px-4 py-12" >
      <div className="flex flex-col md:flex-row w-full min-h-[510px]">
        <div
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${RightBg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:pl-20 py-10">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-6xl font-bold leading-tight uppercase"
            >
              Преимущества
            </h1>

            {/* Service Cards */}
            <div className="grid md:w-2/3 grid-cols-1 md:grid-cols-3 gap-6 md:mt-10 mt-5 w-full">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full  overflow-hidden "
                >
                  {/* Image */}
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-full  object-cover"
                  />


                  {/* Text */}
                  <div className="absolute w-full md:bottom-10 bottom-10 flex flex-col  items-center  px-4">
                    <h2  data-aos="fade-up" className="md:text-2xl text-4xl md:font-semibold font-extrabold text-white mb-2">{item.title}</h2>
                    <p  data-aos="fade-up" className="md:text-sm text-2xl text-white">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
