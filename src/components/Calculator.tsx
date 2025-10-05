import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calculator as CalcIcon } from "lucide-react";

const Calculator = () => {
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateCost = () => {
    if (!area || !type || !level) return;

    const areaNum = parseFloat(area);
    let basePrice = 0;

    // Base price per m²
    switch (type) {
      case "apartment":
        basePrice = 15000;
        break;
      case "house":
        basePrice = 20000;
        break;
      case "commercial":
        basePrice = 25000;
        break;
    }

    // Level multiplier
    let multiplier = 1;
    switch (level) {
      case "basic":
        multiplier = 0.8;
        break;
      case "standard":
        multiplier = 1;
        break;
      case "premium":
        multiplier = 1.5;
        break;
    }

    const total = areaNum * basePrice * multiplier;
    setEstimate(total);
  };

  return (
    <section id="calculator" className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="hazard-stripes px-6 py-2 clip-polygon">
              <span className="text-sm font-bold text-primary-foreground tracking-wider">
                КАЛЬКУЛЯТОР
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            РАССЧИТАТЬ <span className="text-primary">СТОИМОСТЬ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите предварительную оценку стоимости вашего проекта
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-background border-2 border-border p-8">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="area" className="text-foreground font-semibold">
                Площадь (м²)
              </Label>
              <Input
                id="area"
                type="number"
                placeholder="Введите площадь"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="bg-input border-2 border-border focus:border-primary"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type" className="text-foreground font-semibold">
                Тип объекта
              </Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="bg-input border-2 border-border focus:border-primary">
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Квартира</SelectItem>
                  <SelectItem value="house">Частный дом</SelectItem>
                  <SelectItem value="commercial">Коммерческое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="level" className="text-foreground font-semibold">
                Уровень отделки
              </Label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="bg-input border-2 border-border focus:border-primary">
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Базовый</SelectItem>
                  <SelectItem value="standard">Стандарт</SelectItem>
                  <SelectItem value="premium">Премиум</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={calculateCost}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 clip-polygon"
            >
              <CalcIcon className="mr-2" />
              РАССЧИТАТЬ
            </Button>

            {estimate !== null && (
              <div className="mt-6 p-6 bg-primary/10 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground mb-2">
                  Предварительная стоимость:
                </p>
                <p className="text-4xl font-black text-primary">
                  {estimate.toLocaleString("ru-RU")} ₽
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  * Окончательная стоимость определяется после осмотра объекта
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Calculator;
