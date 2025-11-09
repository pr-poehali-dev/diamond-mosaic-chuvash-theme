import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-primary">Алмазная мозаика</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('history')}
                className="hover:text-primary transition-colors"
              >
                История
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('ornaments')}
                className="hover:text-primary transition-colors"
              >
                Орнаменты
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('masterclass')}
                className="hover:text-primary transition-colors"
              >
                Мастер-класс
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors"
              >
                О проекте
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section
        id="hero"
        className="container mx-auto px-4 py-20 text-center animate-fade-in"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block mb-4">
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
              Образовательный проект • 10 класс
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Алмазная мозаика в чувашской культуре
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в мир традиционных чувашских орнаментов и узнайте, как создавать
            удивительные картины из алмазных страз
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('history')}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg"
            >
              Начать знакомство
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('masterclass')}
              className="border-primary text-primary hover:bg-primary/5"
            >
              Смотреть мастер-класс
            </Button>
          </div>
        </div>
      </section>

      <section id="history" className="container mx-auto px-4 py-20 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">История техники</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-scale-in">
              <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="History" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Происхождение</h3>
                      <p className="text-muted-foreground">
                        Алмазная вышивка появилась в Китае в 2010-х годах как современная
                        интерпретация традиционной вышивки. Техника быстро распространилась по
                        всему миру благодаря своей доступности и впечатляющим результатам.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Icon name="Palette" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Принцип работы</h3>
                      <p className="text-muted-foreground">
                        Техника заключается в приклеивании блестящих акриловых страз на клейкую
                        основу по схеме. Каждый цвет обозначен символом, что делает процесс
                        похожим на раскрашивание по номерам.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Heart" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Популярность</h3>
                      <p className="text-muted-foreground">
                        Сегодня алмазная мозаика стала любимым хобби миллионов людей по всему
                        миру. Она развивает внимательность, усидчивость и творческие способности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/fdf7117e-cafe-4dba-81a6-5f0941b8417c/files/f517d661-8b5c-47ec-b75d-820e75e07eff.jpg"
                alt="Чувашский орнамент"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ornaments" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Чувашские орнаменты</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Традиционные узоры чувашского народа отражают связь с природой, космосом и
              культурными традициями
            </p>
          </div>

          <Tabs defaultValue="geometric" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="geometric">Геометрические</TabsTrigger>
              <TabsTrigger value="nature">Природные</TabsTrigger>
              <TabsTrigger value="symbolic">Символические</TabsTrigger>
            </TabsList>

            <TabsContent value="geometric" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <img
                    src="https://cdn.poehali.dev/projects/fdf7117e-cafe-4dba-81a6-5f0941b8417c/files/78b3bb66-0594-41ff-98ff-4c6b6044f704.jpg"
                    alt="Геометрические узоры"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Ромбы и зигзаги</h3>
                    <p className="text-muted-foreground">
                      Основные геометрические элементы чувашской вышивки. Ромб символизирует
                      плодородие и женское начало, а зигзаг - воду и жизненную силу.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <img
                    src="https://cdn.poehali.dev/projects/fdf7117e-cafe-4dba-81a6-5f0941b8417c/files/60fa5ede-0bb6-41fa-9b0b-5da88cde7b1b.jpg"
                    alt="Орнаментальные мотивы"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Кресты и розетки</h3>
                    <p className="text-muted-foreground">
                      Крест олицетворяет четыре стороны света и единство мира. Розетки
                      символизируют солнце и небесные светила.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nature" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Leaf" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Растительные мотивы</h3>
                  <p className="text-muted-foreground text-sm">
                    Листья, цветы и ветви символизируют связь с природой и плодородие земли
                  </p>
                </Card>

                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sun" className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Солярные знаки</h3>
                  <p className="text-muted-foreground text-sm">
                    Солнце, звёзды и луна - главные небесные символы в орнаментах
                  </p>
                </Card>

                <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Droplet" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Водные элементы</h3>
                  <p className="text-muted-foreground text-sm">
                    Волны и капли отражают важность воды в жизни народа
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="symbolic" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Shield" className="text-primary" size={24} />
                    Защитные символы
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>
                        <strong>Оберег</strong> - узоры для защиты от злых сил
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>
                        <strong>Благополучие</strong> - знаки счастья и достатка
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>
                        <strong>Древо жизни</strong> - связь поколений и семьи
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Star" className="text-secondary" size={24} />
                    Цветовая символика
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-[#ea384c] rounded-full mt-1 flex-shrink-0"></div>
                      <span>
                        <strong>Красный</strong> - жизнь, солнце, красота
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-white border-2 border-primary rounded-full mt-1 flex-shrink-0"></div>
                      <span>
                        <strong>Белый</strong> - чистота, свет, правда
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-[#F97316] rounded-full mt-1 flex-shrink-0"></div>
                      <span>
                        <strong>Жёлтый</strong> - богатство, солнечный свет
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="masterclass" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Мастер-класс</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">
              Пошаговая инструкция создания алмазной мозаики с чувашским орнаментом
            </p>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold">Подготовка материалов</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>
                      Холст с клеевой основой и напечатанной схемой чувашского орнамента
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Акриловые стразы нужных цветов (красный, золотой, белый, синий)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Пинцет или карандаш-аппликатор для страз</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Лоток для страз и защитная плёнка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold">Организация рабочего места</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Выберите хорошо освещённое место или используйте настольную лампу</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Разложите холст на ровной поверхности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Отклейте защитную плёнку только с небольшого участка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold">Процесс выкладки</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Начните с одного цвета, высыпав стразы в лоток</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>
                      Аккуратно берите стразы пинцетом и прикладывайте к клеевой основе по
                      символам
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Работайте рядами или по цветам - как вам удобнее</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Периодически прижимайте выложенные участки для лучшего сцепления</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold">Завершение работы</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>После завершения прокатайте всю поверхность скалкой</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Проверьте, все ли стразы плотно приклеены</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Оформите готовую работу в раму или багет</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>Повесьте картину на стену и наслаждайтесь результатом!</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Полезные советы</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Работайте в спокойной обстановке, техника требует концентрации</li>
                    <li>• Делайте перерывы каждые 30-40 минут, чтобы не уставали глаза</li>
                    <li>• Храните незавершённую работу под плёнкой</li>
                    <li>
                      • Можно использовать воск для аппликатора - так стразы лучше захватываются
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-b from-muted/50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">О проекте</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <Card className="shadow-xl border-primary/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Target" className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Цель проекта</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Этот образовательный проект создан для учеников 10 класса с целью изучения
                      традиционной чувашской культуры через современное искусство алмазной
                      мозаики. Мы объединили древние орнаменты с новой техникой рукоделия, чтобы
                      показать, как культурное наследие может жить в современном мире.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="BookOpen" className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Образовательная ценность</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Работа с алмазной мозаикой развивает мелкую моторику, внимание, усидчивость
                      и художественный вкус. Изучение чувашских орнаментов знакомит с богатым
                      культурным наследием народа, его символикой и традициями.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Users" className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Для кого проект</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Проект предназначен для учащихся 10 класса, интересующихся декоративно-прикладным
                      искусством, этнографией и творчеством. Материалы также будут полезны
                      учителям, родителям и всем, кто хочет узнать больше о чувашской культуре.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    Результаты обучения
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">
                        Знание истории и техники алмазной мозаики
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">
                        Понимание чувашской орнаментики
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">Практические навыки работы</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">
                        Уважение к культурному наследию
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Алмазная мозаика</h3>
          </div>
          <p className="text-white/70 mb-4">
            Образовательный проект о чувашской культуре и алмазной вышивке
          </p>
          <p className="text-white/50 text-sm">2024 • 10 класс</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
