import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Home, Compass, Mountain, Lightbulb, MapPin, ChevronRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Слайдер с услугами
const servicesData = [
  {
    id: "remote",
    title: "Удаленные локации",
    description: "Строительство домов и объектов в труднодоступных районах с полной автономностью",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format",
    icon: <Mountain className="h-6 w-6" />,
  },
  {
    id: "custom",
    title: "Индивидуальное проектирование",
    description: "Разработка уникальных проектов, отражающих вашу индивидуальность",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    id: "eco",
    title: "Экологичное строительство",
    description: "Использование экологичных материалов и энергоэффективных технологий",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1200&auto=format",
    icon: <Home className="h-6 w-6" />,
  }
];

// Проекты
const projectsData = [
  {
    id: 1,
    title: "Горная резиденция",
    location: "Алтайский край",
    description: "Современный дом с панорамными окнами в горной местности",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format",
    category: "Жилые дома"
  },
  {
    id: 2,
    title: "Исследовательская станция",
    location: "Камчатка",
    description: "Модульная станция для научных исследований в сейсмоактивной зоне",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format",
    category: "Коммерческие объекты"
  },
  {
    id: 3,
    title: "Лесной ретрит",
    location: "Карелия",
    description: "Уединенный комплекс для отдыха в окружении нетронутой природы",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format",
    category: "Жилые дома"
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideShow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 5000);
  };

  useEffect(() => {
    startSlideShow();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    startSlideShow();
  };

  const prevSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    startSlideShow();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden geometric-bg">
        <div 
          className="absolute inset-0 z-0 bg-black" 
          style={
            {
              backgroundImage: "url(https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1500&auto=format)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.7
            }
          }
        ></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Нестандартные решения для необычных мест
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Мы проектируем и строим уникальные объекты в труднодоступных локациях,
              создавая пространства, отражающие вашу индивидуальность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* О компании */}
      <section className="py-16 md:py-24 geometric-box">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Создаем нестандартные пространства для нестандартных людей</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                GeoHome специализируется на проектировании и строительстве объектов в сложных географических условиях,
                где другие не берутся работать. Мы учитываем все особенности местности и ваши индивидуальные потребности.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-md mt-1">
                    <Compass className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Работаем в любых локациях</h3>
                    <p className="text-muted-foreground">Горы, леса, острова — для нас нет непреодолимых преград</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-md mt-1">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">Каждый проект отражает уникальность своего владельца</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-md mt-1">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Полный цикл работ</h3>
                    <p className="text-muted-foreground">От проектирования до ввода в эксплуатацию под ключ</p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link to="/team">Узнать о команде <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary/20 rounded-br-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1604014048173-7e5c83095532?q=80&w=800&auto=format" 
                alt="Дом в горах" 
                className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Услуги слайдер */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Мы предлагаем полный спектр услуг от проектирования до строительства особенных объектов в необычных местах
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {servicesData.map((service, index) => (
                  <div key={service.id} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <div className="p-6">
                          <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-md mb-6">
                            <div className="text-primary">{service.icon}</div>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-lg mb-6 text-muted-foreground">{service.description}</p>
                          <Button asChild>
                            <Link to={`/services#${service.id}`}>Подробнее</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="order-1 lg:order-2">
                        <div className="relative">
                          <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-tr-2xl"></div>
                          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-bl-2xl"></div>
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md z-10 relative"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (intervalRef.current) {
                      clearInterval(intervalRef.current);
                    }
                    setCurrentSlide(index);
                    startSlideShow();
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full z-10"
              onClick={prevSlide}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Preduccií slid</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full z-10"
              onClick={nextSlide}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Следующий слайд</span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Проекты */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground">
              Каждый проект уникален и создан с учетом индивидуальных потребностей заказчика и особенностей местности
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">Все проекты</TabsTrigger>
                <TabsTrigger value="residential">Жилые дома</TabsTrigger>
                <TabsTrigger value="commercial">Коммерческие объекты</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map(project => (
                  <Card key={project.id} className="overflow-hidden card-hover">
                    <div className="relative h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                        {project.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {project.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="residential" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === "Жилые дома").map(project => (
                  <Card key={project.id} className="overflow-hidden card-hover">
                    <div className="relative h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                        {project.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {project.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="commercial" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === "Коммерческие объекты").map(project => (
                  <Card key={project.id} className="overflow-hidden card-hover">
                    <div className="relative h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                        {project.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {project.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/services">Посмотреть все проекты <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Контактная информация */}
      <section className="py-16 bg-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-tl-3xl transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-br-3xl transform rotate-45"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg opacity-90">
              Готовы обсудить ваш проект или у вас есть вопросы? 
              Мы всегда рады помочь вам воплотить ваши идеи в жизнь!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <Phone className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Телефон</h3>
              <p className="mb-4 opacity-90">Мы доступны с 9:00 до 18:00 по Москве</p>
              <a href="tel:+74951234567" className="font-medium hover:underline">+7 (495) 123-45-67</a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <Mail className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Почта</h3>
              <p className="mb-4 opacity-90">Напишите нам, и мы ответим в течение дня</p>
              <a href="mailto:info@geohome.ru" className="font-medium hover:underline">info@geohome.ru</a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <MapPin className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Адрес</h3>
              <p className="mb-4 opacity-90">г. Москва, ул. Проектная, д. 42, офис 301</p>
              <Button variant="outline" className="border-white hover:bg-white/20">
                <Link to="/contacts">Показать на карте</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
              <Link to="/contacts#form">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;