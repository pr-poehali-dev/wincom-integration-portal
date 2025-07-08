import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">
                Винком-инжиниринг
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#supply"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Поставки
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button>Заказать консультацию</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-slate-50 to-blue-50 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Системная интеграция
                <span className="text-primary block">любой сложности</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Поставляем техническое оборудование и проектируем ЦОД. Обширный
                опыт работы с Китаем и комплексные решения для вашего бизнеса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/cb088282-9b8a-4f2b-b69d-9bd4a4ab7f86.jpg"
                alt="Современный ЦОД"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Database" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Проектирование ЦОД</CardTitle>
                <CardDescription>
                  Полный цикл проектирования центров обработки данных с учетом
                  всех требований
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Техническое проектирование</li>
                  <li>• Системы охлаждения</li>
                  <li>• Энергоснабжение</li>
                  <li>• Мониторинг и контроль</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Поставки оборудования</CardTitle>
                <CardDescription>
                  Поставка технического оборудования любой сложности напрямую от
                  производителей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Серверное оборудование</li>
                  <li>• Сетевое оборудование</li>
                  <li>• Системы хранения</li>
                  <li>• Промышленная автоматика</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Icon name="Globe" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Поставки из Китая</CardTitle>
                <CardDescription>
                  Большой опыт работы с китайскими производителями и логистикой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Прямые контракты</li>
                  <li>• Контроль качества</li>
                  <li>• Таможенное оформление</li>
                  <li>• Логистика "под ключ"</li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                О компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Винком-инжиниринг — это команда профессионалов с многолетним
                опытом в области системной интеграции и поставок технического
                оборудования.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-primary mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Обширный опыт проектирования ЦОД
                    </h3>
                    <p className="text-gray-600">
                      Более 50 успешно реализованных проектов центров обработки
                      данных
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-primary mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Большой опыт поставок из Китая
                    </h3>
                    <p className="text-gray-600">
                      Налаженные связи с производителями и понимание специфики
                      работы
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-primary mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Комплексные решения
                    </h3>
                    <p className="text-gray-600">
                      От проектирования до поставки и внедрения "под ключ"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/img/9c57e720-0abb-4c2b-aa8f-b58a5315943b.jpg"
                alt="Техническое оборудование"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/img/53dfe862-6172-4e2b-8bf2-a4c122188588.jpg"
                alt="Поставки из Китая"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supply Section */}
      <section id="supply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Поставки</h2>
            <p className="text-xl text-gray-600">
              Оборудование любой сложности для ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Icon
                name="Server"
                size={48}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Серверы</h3>
              <p className="text-gray-600 text-sm">
                Промышленные и корпоративные серверы
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon
                name="Wifi"
                size={48}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Сеть</h3>
              <p className="text-gray-600 text-sm">
                Коммутаторы, маршрутизаторы, Wi-Fi
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon
                name="HardDrive"
                size={48}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Хранение</h3>
              <p className="text-gray-600 text-sm">
                СХД, NAS, резервное копирование
              </p>
            </Card>

            <Card className="text-center p-6">
              <Icon
                name="Zap"
                size={48}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">ИБП</h3>
              <p className="text-gray-600 text-sm">
                Источники бесперебойного питания
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Заказать консультацию</h2>
              <p className="text-xl text-gray-300 mb-8">
                Свяжитесь с нами для обсуждения вашего проекта. Мы предложим
                оптимальное решение для ваших задач.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@wincom-e.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Быстрая связь</CardTitle>
                <CardDescription className="text-gray-300">
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон или email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Cpu" size={24} className="text-primary" />
              <span className="text-lg font-semibold">Винком-инжиниринг</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Услуги
              </a>
              <a
                href="#supply"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Поставки
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Винком-инжиниринг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
