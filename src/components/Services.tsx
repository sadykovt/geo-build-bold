import { Building2, Home, Hammer, PaintBucket, Ruler, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Строительство зданий",
    description: "Строительство коммерческих и жилых зданий под ключ",
  },
  {
    icon: Home,
    title: "Капитальный ремонт",
    description: "Комплексный ремонт квартир и домов любой сложности",
  },
  {
    icon: Hammer,
    title: "Реконструкция",
    description: "Перепланировка и реконструкция помещений",
  },
  {
    icon: PaintBucket,
    title: "Отделочные работы",
    description: "Качественная отделка интерьеров и фасадов",
  },
  {
    icon: Ruler,
    title: "Дизайн-проект",
    description: "Разработка индивидуального дизайна и проектирование",
  },
  {
    icon: Wrench,
    title: "Инженерные системы",
    description: "Монтаж электрики, водопровода, отопления и вентиляции",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary opacity-10 rotate-45" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-primary opacity-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                НАШИ УСЛУГИ
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            ЧТО МЫ <span className="text-primary">ДЕЛАЕМ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр строительных и ремонтных услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-2 border-border hover:border-primary transition-all duration-300 p-6 group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center clip-polygon group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
