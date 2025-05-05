
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда на связи и готовы ответить на все ваши вопросы.
              Выберите удобный способ связи или оставьте заявку, и мы свяжемся с вами.
            </p>
          </div>
        </div>
      </section>
      
      {/* Контактная информация */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white shadow-sm transition-transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-4">Мы доступны с 9:00 до 18:00 по Москве</p>
                <a href="tel:+74951234567" className="font-medium text-primary hover:underline">+7 (495) 123-45-67</a>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm transition-transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Почта</h3>
                <p className="text-muted-foreground mb-4">Пишите нам, мы отвечаем в течение дня</p>
                <a href="mailto:info@geohome.ru" className="font-medium text-primary hover:underline">info@geohome.ru</a>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm transition-transform hover:scale-105">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-4">г. Москва, ул. Проектная, д. 42, офис 301</p>
                <p className="mb-2">
                  <span className="flex items-center justify-center gap-1">
                    <Clock className="h-4 w-4" /> Пн-Пт: 9:00 — 18:00
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">Схема проезда</h2>
              <div className="bg-muted h-[400px] rounded-lg overflow-hidden">
                {/* Здесь будет карта. В реальном проекте использовать Google Maps API или Яндекс.Карты */}
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Здесь будет отображаться карта с расположением офиса</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Как добраться</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>На метро:</strong> Станция "Проектная", выход в город №2. Далее пешком 5 минут.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>На автомобиле:</strong> Удобный подъезд со стороны Проектного проспекта. Платная парковка во дворе бизнес-центра.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>На автобусе:</strong> Маршруты №42, 123, 456. Остановка "Проектная улица".
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="contact">Связаться с нами</TabsTrigger>
                  <TabsTrigger value="careers" id="careers">Вакансии</TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="mt-0">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Оставьте сообщение</h2>
                    <form>
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
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Тема
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Сообщение*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                          required
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
                      
                      <Button type="submit">
                        Отправить сообщение
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="careers" className="mt-0">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Присоединяйтесь к нашей команде</h2>
                    <p className="text-muted-foreground mb-6">
                      Мы всегда ищем талантливых и увлеченных специалистов, которые готовы решать 
                      нестандартные задачи и создавать уникальные проекты.
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold text-lg mb-4">Открытые вакансии</h3>
                      <div className="space-y-4">
                        <div className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Архитектор</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Требуется архитектор с опытом проектирования зданий в нестандартных условиях.
                          </p>
                          <Button variant="outline" size="sm">Подробнее</Button>
                        </div>
                        
                        <div className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Инженер-строитель</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Требуется инженер-строитель со знанием современных технологий и материалов.
                          </p>
                          <Button variant="outline" size="sm">Подробнее</Button>
                        </div>
                        
                        <div className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Менеджер проектов</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            Ищем опытного менеджера проектов с навыками координации строительства в труднодоступных местах.
                          </p>
                          <Button variant="outline" size="sm">Подробнее</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Отправить резюме</h3>
                      <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="career-name" className="block text-sm font-medium mb-2">
                              Ваше имя*
                            </label>
                            <input
                              type="text"
                              id="career-name"
                              name="name"
                              className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="career-email" className="block text-sm font-medium mb-2">
                              Email*
                            </label>
                            <input
                              type="email"
                              id="career-email"
                              name="email"
                              className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="position" className="block text-sm font-medium mb-2">
                            Интересующая вакансия
                          </label>
                          <select
                            id="position"
                            name="position"
                            className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                          >
                            <option value="">Выберите вакансию</option>
                            <option value="architect">Архитектор</option>
                            <option value="engineer">Инженер-строитель</option>
                            <option value="manager">Менеджер проектов</option>
                            <option value="other">Другое</option>
                          </select>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="cover-letter" className="block text-sm font-medium mb-2">
                            Сопроводительное письмо
                          </label>
                          <textarea
                            id="cover-letter"
                            name="cover-letter"
                            rows={4}
                            className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                          ></textarea>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="resume" className="block text-sm font-medium mb-2">
                            Прикрепить резюме*
                          </label>
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="w-full p-3 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Поддерживаемые форматы: PDF, DOC, DOCX. Макс. размер: 5MB
                          </p>
                        </div>
                        
                        <div className="mb-6 flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="career-agree"
                            name="agree"
                            className="mt-1"
                            required
                          />
                          <label htmlFor="career-agree" className="text-sm text-muted-foreground">
                            Я согласен на обработку персональных данных в соответствии с{" "}
                            <a href="#" className="text-primary hover:underline">
                              Политикой конфиденциальности
                            </a>
                          </label>
                        </div>
                        
                        <Button type="submit">
                          Отправить резюме
                        </Button>
                      </form>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacts;
