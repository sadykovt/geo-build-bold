import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 hazard-stripes opacity-5 -rotate-45" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                СВЯЖИТЕСЬ С НАМИ
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            НАЧНИТЕ СВОЙ <span className="text-primary">ПРОЕКТ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-background border-2 border-border p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary flex items-center justify-center clip-polygon mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Телефон
              </h3>
              <a
                href="tel:+74951234567"
                className="text-primary font-semibold hover:underline"
              >
                +7 (495) 123-45-67
              </a>
            </Card>

            <Card className="bg-background border-2 border-border p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary flex items-center justify-center clip-polygon mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@stroymaster.ru"
                className="text-primary font-semibold hover:underline"
              >
                info@stroymaster.ru
              </a>
            </Card>

            <Card className="bg-background border-2 border-border p-6 hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary flex items-center justify-center clip-polygon mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Москва, ул. Строителей, д. 10
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-background border-2 border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Иван Иванов"
                    className="bg-input border-2 border-border focus:border-primary"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-foreground font-semibold">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+7 (999) 123-45-67"
                    className="bg-input border-2 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className="bg-input border-2 border-border focus:border-primary"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Расскажите о вашем проекте..."
                  className="bg-input border-2 border-border focus:border-primary min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 clip-polygon"
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
