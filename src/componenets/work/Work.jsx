import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const options = [
  {
    id: 1,
    title: "Квартира новостройка",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Вторичный ремонт",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Современный офис",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Социальный ремонт",
    image:
      "https://cdn.freelance.ru/img/portfolio/pics/00/43/48/4409406.jpg?mt=5198a145",
  },
];

export default function RepairSelection() {
  const [selected, setSelected] = useState(1);

  return (
    <div  id="calculator" className="max-w-[1420px] mx-auto px-4 py-22 bg-white shadow-md rounded-lg p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        РЕМОНТ КАКОГО ОБЪЕКТА ВАС ИНТЕРЕСУЕТ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((item) => (
          <div
            key={item.id}
            className={`relative cursor-pointer rounded-lg overflow-hidden border ${
              selected === item.id ? "border-teal-600" : "border-gray-200"
            }`}
            onClick={() => setSelected(item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover"
            />
            {selected === item.id && (
              <div className="absolute top-2 left-2 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs">
                <FaCheck />
              </div>
            )}
            <div className="p-3 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-10 flex justify-between">
        <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
          ← НАЗАД
        </button>
        <button className="bg-teal-800 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-teal-700 transition">
          ДАЛЕЕ →
        </button>
      </div>
    </div>
  );
}
