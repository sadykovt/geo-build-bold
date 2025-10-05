import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Hazard Stripes Accent */}
      <div className="absolute top-20 right-0 w-32 h-full hazard-stripes opacity-20 -rotate-12" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-6">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                ПРОФЕССИОНАЛЬНОЕ СТРОИТЕЛЬСТВО
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight">
            ПОСТРОИМ <br />
            <span className="text-primary">ВАШЕ БУДУЩЕЕ</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-semibold">
            Качественный ремонт и строительство с гарантией. 
            Более 10 лет опыта, 500+ реализованных проектов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 clip-polygon group"
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToCalculator}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6"
            >
              РАССЧИТАТЬ СТОИМОСТЬ
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl font-black text-primary">10+</div>
              <div className="text-sm text-muted-foreground font-semibold">ЛЕТ ОПЫТА</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl font-black text-primary">500+</div>
              <div className="text-sm text-muted-foreground font-semibold">ПРОЕКТОВ</div>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <div className="text-4xl font-black text-primary">100%</div>
              <div className="text-sm text-muted-foreground font-semibold">ГАРАНТИЯ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
