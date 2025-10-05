import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Петров",
    project: "Ремонт квартиры 85м²",
    text: "Отличная работа! Сделали всё точно в срок, качество на высоте. Особенно понравилась отделка и внимание к деталям.",
    rating: 5,
  },
  {
    name: "Мария Соколова",
    project: "Строительство дома",
    text: "Профессиональная команда. Построили дом моей мечты, всегда были на связи, решали все вопросы оперативно.",
    rating: 5,
  },
  {
    name: "Дмитрий Козлов",
    project: "Офисное помещение",
    text: "Ремонт офиса прошёл без задержек. Работали аккуратно, не мешали рабочему процессу. Результат превзошёл ожидания!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                ОТЗЫВЫ КЛИЕНТОВ
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            ЧТО О НАС <span className="text-primary">ГОВОРЯТ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мнения наших довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-border p-8 relative hover:border-primary transition-colors"
            >
              <div className="absolute top-6 right-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center clip-polygon mb-4">
                  <span className="text-2xl font-black text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-primary font-semibold">
                  {testimonial.project}
                </p>
              </div>

              <p className="text-muted-foreground italic">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
