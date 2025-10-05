import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary flex items-center justify-center clip-polygon">
              <span className="text-2xl font-black text-primary-foreground">СМ</span>
            </div>
            <span className="text-2xl font-black text-foreground">
              СТРОЙ<span className="text-primary">МАСТЕР</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Калькулятор
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              Отзывы
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 clip-polygon"
            >
              Контакты
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary font-semibold text-left"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary font-semibold text-left"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-foreground hover:text-primary font-semibold text-left"
              >
                Калькулятор
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary font-semibold text-left"
              >
                Отзывы
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold w-full"
              >
                Контакты
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
