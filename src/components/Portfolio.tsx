import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Ремонт квартиры премиум-класса",
    category: "Квартиры",
    area: "120 м²",
  },
  {
    image: project2,
    title: "Строительство торгового центра",
    category: "Коммерческое",
    area: "2500 м²",
  },
  {
    image: project3,
    title: "Дизайнерская кухня",
    category: "Интерьер",
    area: "25 м²",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                НАШИ РАБОТЫ
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            ПОРТФОЛИО <span className="text-primary">ПРОЕКТОВ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры наших реализованных проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden border-4 border-primary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-primary px-4 py-1 inline-block mb-2 clip-polygon">
                  <span className="text-xs font-bold text-primary-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary font-semibold">{project.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
