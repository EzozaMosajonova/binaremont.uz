import React from "react";

// Rasm manzillari
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

const projects = [
  {
    id: "residential",
    title: "ЖИЛЫЕ ПРОЕКТЫ",
    image: img1,
  },
  {
    id: "commercial",
    title: "КОММЕРЧЕСКИЕ ПРОЕКТЫ",
    image: img2,
  },
  {
    id: "offices",
    title: "ОФИСЫ",
    image: img3,
  },
];

const Project = () => {
  return (
    <section id="services" className="max-w-[1420px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div>
            <a
              href={`/`}
              key={project.id}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Rasm */}
              <div className="w-full h-[600px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
              </div>

              {/* Matn */}
              <div className="absolute inset-0 bg-teal-950/80 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </a>
            <p data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" className="mt-4 text-center text-2xl font-medium">
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
