
import { Link } from "react-router-dom";
import { ChevronRight, Home, Compass, Mountains, Lightbulb, Wrench, Cpu, GalleryThumbnails } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Данные по услугам
const servicesData = [
  {
    id: "remote",
    title: "Строительство в труднодоступных местах",
    description: "Мы специализируемся на строительстве объектов в местах, где другие компании не берутся работать. Горы, леса, побережья — мы доставим все необходимые материалы и организуем полноценное строительство.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format",
    icon: <Mountains className="h-6 w-6" />,
    benefits: [
      "Логистика в любых условиях",
      "Автономные инженерные системы",
      "Адаптация к сложному рельефу",
      "Прочные конструкции для экстремальных условий"
    ],
    price: "от 80 000 ₽/м²"
  },
  {
    id: "custom",
    title: "Индивидуальное проектирование",
    description: "Создаем уникальные проекты, которые отражают вашу индивидуальность и учитывают все особенности участка. От концепции до полного комплекта рабочей документации.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format",
    icon: <Lightbulb className="h-6 w-6" />,
    benefits: [
      "Нестандартные архитектурные решения",
      "3D-визуализация проекта",
      "Интеграция с ландшафтом",
      "Полный комплект документации"
    ],
    price: "от 3 000 ₽/м²"
  },
  {
    id: "eco",
    title: "Экологичное строительство",
    description: "Используем экологически чистые материалы и современные технологии для создания энергоэффективных зданий, которые минимально воздействуют на окружающую среду.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1200&auto=format",
    icon: <Home className="h-6 w-6" />,
    benefits: [
      "Экологичные строительные материалы",
      "Системы рекуперации тепла",
      "Солнечные панели и альтернативные источники энергии",
      "Эффективная теплоизоляция"
    ],
    price: "от 95 000 ₽/м²"
  },
  {
    id: "modernization",
    title: "Модернизация существующих объектов",
    description: "Обновляем и модернизируем существующие здания, адаптируя их к современным требованиям по комфорту, безопасности и энергоэффективности.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format",
    icon: <Wrench className="h-6 w-6" />,
    benefits: [
      "Усиление конструкций",
      "Модернизация инженерных систем",
      "Обновление фасадов",
      "Повышение энергоэффективности"
    ],
    price: "от 45 000 ₽/м²"
  },
  {
    id: "utility",
    title: "Инженерные коммуникации",
    description: "Разрабатываем и внедряем автономные инженерные системы для объектов в удаленных районах, включая энергоснабжение, водоснабжение и канализацию.",
    image: "https://images.unsplash.com/photo-1581094281020-9e81b675a005?q=80&w=1200&auto=format",
    icon: <Cpu className="h-6 w-6" />,
    benefits: [
      "Автономные системы электроснабжения",
      "Скважины и системы очистки воды",
      "Локальные очистные сооружения",
      "Системы умного дома"
    ],
    price: "от 15 000 ₽/м²"
  },
  {
    id: "interior",
    title: "Дизайн интерьера",
    description: "Создаем уникальные интерьерные решения, учитывающие архитектуру здания, окружающую среду и ваши индивидуальные предпочтения.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format",
    icon: <GalleryThumbnails className="h-6 w-6" />,
    benefits: [
      "Индивидуальные планировочные решения",
      "Подбор материалов и мебели",
      "3D-визуализация интерьеров",
      "Авторский надзор"
    ],
    price: "от 4 000 ₽/м²"
  }
];

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Наши услуги</h1>
              <p className="text-lg mb-6 text-muted-foreground">
                Мы предлагаем полный комплекс услуг по созданию нестандартных объектов в необычных местах — 
                от разработки концепции и проектирования до строительства и ввода в эксплуатацию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="#price-list">Прайс-лист</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#request-form">Оставить заявку</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary/20 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format" 
                alt="Строительство в горах" 
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs с услугами */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Выберите необходимую услугу</h2>
            <p className="text-muted-foreground">
              Мы предлагаем широкий спектр услуг для реализации ваших самых смелых идей
            </p>
          </div>
          
          <Tabs defaultValue={servicesData[0].id}>
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {servicesData.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>
                  <div className="flex flex-col items-center gap-2 px-1 py-2">
                    <div className="text-primary">{service.icon}</div>
                    <span className="text-xs text-center">{service.title.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {servicesData.map((service) => (
              <TabsContent key={service.id} value={service.id} id={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="relative rounded-lg overflow-hidden mb-6">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <h4 className="font-semibold mb-3">Преимущества:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Стоимость</CardTitle>
                        <CardDescription>Ориентировочные цены на услуги</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                          <p className="text-sm text-muted-foreground">Финальная стоимость зависит от сложности проекта и условий строительства</p>
                        </div>
                        <Button asChild className="w-full mb-3">
                          <a href="#request-form">Оставить заявку</a>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/contacts">Связаться с нами</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Прайс-лист */}
      <section id="price-list" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Прайс-лист на услуги</h2>
            <p className="text-muted-foreground">
              Ориентировочные цены на основные виды услуг. Для получения индивидуального расчета оставьте заявку
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-background rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-md">{service.description.split('.')[0]}.</p>
                  </div>
                </div>
                <div className="md:min-w-[150px] text-right">
                  <div className="font-bold text-primary text-lg">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6 mt-8 max-w-4xl mx-auto">
            <h3 className="font-semibold mb-2">Важно!</h3>
            <p className="text-sm text-muted-foreground">
              Приведенные цены являются ориентировочными и могут меняться в зависимости от сложности проекта, 
              удаленности объекта, особенностей местности и других факторов. Для получения точного расчета, 
              пожалуйста, оставьте заявку или свяжитесь с нашими специалистами.
            </p>
          </div>
        </div>
      </section>
      
      {/* Форма заявки */}
      <section id="request-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground">
                Заполните форму, и наши специалисты свяжутся с вами для обсуждения деталей проекта
              </p>
            </div>
            
            <form className="bg-muted p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Интересующая услуга
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-background"
                >
                  <option value="">Выберите услугу</option>
                  {servicesData.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Опишите ваш проект или задайте вопрос"
                ></textarea>
              </div>
              
              <div className="mb-6 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="mt-1"
                  required
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-primary hover:underline">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
