
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Данные о команде
const teamData = [
  {
    id: 1,
    name: "Александр Смирнов",
    position: "Главный архитектор",
    bio: "Более 15 лет опыта в проектировании нестандартных архитектурных решений. Специализируется на интеграции зданий в сложный ландшафт.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format"
  },
  {
    id: 2,
    name: "Елена Волкова",
    position: "Инженер-конструктор",
    bio: "Разрабатывает прочные и надежные конструкции для экстремальных условий. Обладает экспертизой в области энергоэффективных систем.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format"
  },
  {
    id: 3,
    name: "Михаил Орлов",
    position: "Руководитель проектов",
    bio: "Координирует все этапы строительства в труднодоступных местах. Имеет опыт реализации более 30 уникальных объектов.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format"
  },
  {
    id: 4,
    name: "Анна Соколова",
    position: "Дизайнер интерьеров",
    bio: "Создает уникальные интерьеры, гармонично сочетающиеся с окружающей средой и архитектурой здания.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format"
  },
  {
    id: 5,
    name: "Дмитрий Казаков",
    position: "Инженер по автономным системам",
    bio: "Разрабатывает системы жизнеобеспечения для автономных объектов: электроснабжение, водоснабжение, отопление.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&auto=format"
  },
  {
    id: 6,
    name: "Наталья Лебедева",
    position: "Эколог",
    bio: "Обеспечивает экологическую безопасность проектов и минимизацию воздействия на окружающую среду.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format"
  }
];

// Данные для новостного блока
const newsData = [
  {
    id: 1,
    title: "Завершен проект горной резиденции на Алтае",
    date: "15 апреля 2024",
    summary: "Наша команда успешно завершила строительство уникального проекта на высоте 1200 метров над уровнем моря.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format"
  },
  {
    id: 2,
    title: "Новые технологии автономного энергоснабжения",
    date: "3 апреля 2024",
    summary: "Мы внедрили инновационную систему гибридного энергоснабжения, позволяющую обеспечить полную автономность объектов.",
    image: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=500&auto=format"
  },
  {
    id: 3,
    title: "GeoHome получила награду за экологичное строительство",
    date: "20 марта 2024",
    summary: "Наша компания стала лауреатом премии в области устойчивого развития за проект в Карелии.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=500&auto=format"
  }
];

const Team = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Наша команда</h1>
            <p className="text-lg text-muted-foreground">
              Мы — команда профессионалов, объединенных страстью к созданию нестандартных решений.
              Каждый член команды GeoHome обладает уникальным опытом и экспертизой.
            </p>
          </div>
        </div>
      </section>
      
      {/* Команда */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <Card key={member.id} className="overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Наша команда обладает уникальными навыками и опытом, которые позволяют нам 
              браться за самые сложные и нестандартные проекты
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Лет опыта</h3>
                <p className="text-muted-foreground">Мы работаем в сфере нестандартного строительства более 15 лет</p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Проектов</h3>
                <p className="text-muted-foreground">Более 50 реализованных уникальных проектов по всей России</p>
              </div>
              
              <div className="bg-muted rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Довольных клиентов</h3>
                <p className="text-muted-foreground">Все наши клиенты остались довольны результатом работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Новостной блок */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Последние новости</h2>
            <p className="text-lg text-muted-foreground">
              Следите за нашими последними проектами, достижениями и интересными событиями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <Card key={news.id} className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{news.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/blog">Все новости <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Присоединяйтесь к команде */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-accent text-accent-foreground p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Присоединяйтесь к нашей команде</h2>
              <p className="text-lg opacity-90 mb-6">
                Мы всегда ищем талантливых и увлеченных специалистов, которые готовы решать 
                нестандартные задачи и создавать уникальные проекты.
              </p>
              <Button asChild className="bg-white text-accent hover:bg-white/90">
                <Link to="/contacts#careers">Вакансии</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
