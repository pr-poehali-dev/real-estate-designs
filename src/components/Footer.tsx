
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <div className="w-5 h-5 bg-accent rounded-sm transform rotate-45"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-accent-foreground">GeoHome</span>
            </Link>
            <p className="text-sm opacity-80 mb-4 max-w-xs">
              Мы строим нестандартные постройки в труднодоступных местах, 
              создавая индивидуальные решения для нестандартных заказчиков.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/team" className="text-sm hover:text-white transition-colors">Команда</Link></li>
              <li><Link to="/contacts" className="text-sm hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/services#remote" className="text-sm hover:text-white transition-colors">Строительство в труднодоступных местах</Link></li>
              <li><Link to="/services#custom" className="text-sm hover:text-white transition-colors">Индивидуальное проектирование</Link></li>
              <li><Link to="/services#eco" className="text-sm hover:text-white transition-colors">Экологичное строительство</Link></li>
              <li><Link to="/services#modernization" className="text-sm hover:text-white transition-colors">Модернизация объектов</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">г. Москва, ул. Проектная, д. 42, офис 301</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+74951234567" className="text-sm hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@geohome.ru" className="text-sm hover:text-white transition-colors">info@geohome.ru</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 mt-8 pt-6 text-sm opacity-80">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© 2024 GeoHome. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
