
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">GeoHome</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Услуги
          </Link>
          <Link to="/team" className="text-sm font-medium transition-colors hover:text-primary">
            Команда
          </Link>
          <Link to="/contacts" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link to="/contacts#form">Оставить заявку</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contacts">Связаться</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-base font-medium transition-colors hover:text-primary">
                  Главная
                </Link>
                <Link to="/services" className="text-base font-medium transition-colors hover:text-primary">
                  Услуги
                </Link>
                <Link to="/team" className="text-base font-medium transition-colors hover:text-primary">
                  Команда
                </Link>
                <Link to="/contacts" className="text-base font-medium transition-colors hover:text-primary">
                  Контакты
                </Link>
                <Button asChild className="mt-4">
                  <Link to="/contacts#form">Оставить заявку</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
