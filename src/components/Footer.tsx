const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center clip-polygon">
              <span className="text-xl font-black text-primary-foreground">СМ</span>
            </div>
            <span className="text-xl font-black text-foreground">
              СТРОЙ<span className="text-primary">МАСТЕР</span>
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 СтройМастер. Все права защищены.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Лицензия № 123456 от 01.01.2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
