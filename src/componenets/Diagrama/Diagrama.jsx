import React from "react";
import Aka from "../../assets/aka.jpg";
import Narvon from "../../assets/narvon.png";
import Home from "../../assets/home.jpg";
import Images4 from "../../assets/images4.jpg";
import Time from "../../assets/time.png";

const steps = [
  {
    step: "01",
    title: "ЧЕРНОВЫЕ РАБОТЫ",
    items: [
      "Создание дизайн-проекта",
      "Утверждение сметы",
      "Демонтаж и возведение стен",
      "Разводка сантехники и электрики",
      "Инженерные работы",
    ],
    duration: "1–2 НЕДЕЛИ",
    image: Aka,
  },
  {
    step: "02",
    title: "ПРЕДЧИСТОВЫЕ РАБОТЫ",
    items: [
      "Финальная отделка потолка",
      "Финальная отделка стен",
      "Демонтаж и возведение стен",
      "Инженерные работы",
      "Разводка сантехники и электрики",
      "Стяжка пола",
    ],
    duration: "3–4 НЕДЕЛИ",
    image: Narvon,
  },
  {
    step: "03",
    title: "ОТДЕЛОЧНЫЕ РАБОТЫ",
    items: [
      "Обшивка потолка",
      "Плиточные работы",
      "Шпаклевка стен",
      "Шпаклевка потолков",
      "Шлифовка стен и потолков",
      "Грунтовка стен и потолков",
    ],
    duration: "3–4 НЕДЕЛИ",
    image: Home,
  },
  {
    step: "04",
    title: "ФИНАЛЬНОЕ РАБОТЫ",
    items: [
      "Покраска потолков и стен",
      "Наклейка обоев",
      "Монтаж пола и плинтус",
      "Установка розеток и выключатели",
      "Установка мебели и люстр",
      "Установка сантехники",
    ],
    duration: "3–4 НЕДЕЛИ",
    image: Images4,
  },
];

const Steps = () => {
  return (
    <section  className="py-16 px-4 md:px-10 max-w-[1420px] bg-white text-[#333] font-sans">
      <div className="text-center mb-16">
        <p data-aos="fade-down" className="text-sm md:text-2xl text-[#00B2B2] font-medium uppercase tracking-wide">
          КАКАЯ ОЧЕРЕДНОСТЬ РЕМОНТА И СКОЛЬКО ПО ВРЕМЕНИ?
        </p>
        <h2 data-aos="fade-up" className="text-2xl md:text-5xl font-extrabold mt-2">
          КАК БУДЕТ ДЕЛАТЬСЯ ВАШ РЕМОНТ?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-xl shadow-md p-4 md:p-6 h-full min-h-[500px]"
          >
            <div className="w-full md:w-[240px] h-[400px] overflow-hidden  flex-shrink-0">
              <img
                src={step.image}
                alt={`Step ${step.step}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="mb-2">
                  <span className="text-[#00B2B2] font-bold text-2xl">
                    {step.step}
                  </span>
                  <h3 data-aos="fade-left" className="text-xl md:text-3xl font-extrabold uppercase mt-1">
                    {step.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-1 text-sm leading-relaxed">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00B2B2] text-lg">➤</span>
                      <span data-aos="fade-right">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <img src={Time} alt="Time Icon" className="w-4 h-4" />
                <span data-aos="fade-right" className="font-medium">Длительность:</span>
                <span data-aos="fade-right" className="text-[#00B2B2] font-semibold ml-1">
                  {step.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
