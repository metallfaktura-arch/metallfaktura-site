import { motion } from "framer-motion";
import { useState } from "react";
export default function MetallFactureSite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleTelegramSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const type = form.get('type');
    const construction = form.get('construction');
    const volume = form.get('volume');
    const city = form.get('city');
    const phone = form.get('phone');

    const BOT_TOKEN = '7986028475:AAFhaVDrtwGtO-vSUgAw-98OyfOGimdUEVM';
    const CHAT_ID = '1639716258';

    const message = `Новая заявка с сайта МеталлФАКТУРА%0A%0AТип работ: ${type}%0AТип конструкций: ${construction}%0AОбъём: ${volume}%0AГород: ${city}%0AТелефон: ${phone}`;

    try {
      await fetch("http://localhost:5000/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    type,
    construction,
    volume,
    city,
    phone
  })
});
      alert('Заявка успешно отправлена');
      e.target.reset();
    } catch (error) {
      alert('Ошибка отправки заявки');
    }
  };
  const services = [
    {
      title: 'Ангары и склады',
      desc: 'Производство и монтаж быстровозводимых объектов любой сложности.',
      image:
        '/images/hangar.jpg'
    },
    {
      title: 'Производственные цеха',
      desc: 'Металлоконструкции для промышленных предприятий и заводов.',
      image:
        '/images/ceh.jpg'
    },
    {
      title: 'КМ / КМД',
      desc: 'Разработка проектной документации и инженерных решений.',
      image:
        '/images/km.jpg'
    },
    {
      title: 'Монтаж металлоконструкций',
      desc: 'Профессиональный монтаж промышленных и коммерческих объектов под ключ.',
      image:
        '/images/montage.jpg'
    }
  ]

  const stats = [
    { value: '7', label: 'лет опыта в производстве металлоконструкций' },
    { value: '120', label: 'реализованных проектов по всей России' },
    { value: '400 т', label: 'готовых металлоконструкций в месяц' }
  ]

  const projects = [
    {
      title: 'Промышленные очистные сооружения',
      area: '1 500 м²',
      image:
        '/images/oches1.jpg',
        description: 'Производство и монтаж 170 тонн металлоконструкций, поставка и монтаж 2700 м2 сэндвич-панелей, постака и монтаж 1570м2 профнастила.'
    },
    {
      title: 'Склад продукции г.Санкт-Петербург',
      area: '650 м²',
      image:
        '/images/npo.jpg',
        description: 'Разработка чертежей КМД, производство и поставка 67 тонн металлоконструкций здания склада готовой продукции.'
    },
    {
      title: 'Проект Монплезир г.Москва',
      area: '790 м²',
      image:
        '/images/monplez.jpg',
        description: 'Разработка чертежей КМД, производство и поставка и монтаж 42 тонн металлоконструкций здания Зимнего сада.'
    }
  ]

  return (
      <>
    <div className="particles">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="bg-[#030507] text-white min-h-screen overflow-x-hidden font-sans scroll-smooth relative z-10">

        <style>{`html { scroll-behavior: smooth; }`}</style>
        <section id="top" className="relative min-h-screen border-b border-white/10 overflow-hidden">

          <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/video/bg.mp4" type="video/mp4" />
</video>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020406] via-[#020406]/92 to-[#020406]/40" />

          <header className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-[1680px] mx-auto px-10 py-8 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
  src="/logo.png"
  alt="МеталлФАКТУРА"
  className="w-16 h-16 object-contain"
/>

                <div>
                  <div className="text-[28px] font-black tracking-tight leading-none">
                    МеталлФАКТУРА
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Производство и монтаж металлоконструкций
                  </div>
                </div>
              </div>

              <nav className="hidden xl:flex items-center gap-5 text-gray-200 text-[12px] 2xl:text-[13px] uppercase tracking-[0.06em] whitespace-nowrap">
                <a href="#services" className="hover:text-red-500 transition">Услуги</a>
                <a href="#production" className="hover:text-red-500 transition">Производство</a>
                <a href="#about" className="hover:text-red-500 transition">О компании</a>
                <a href="#guarantees" className="hover:text-red-500 transition">Гарантии</a>
                <a href="#projects" className="hover:text-red-500 transition">Объекты</a>
                <a href="#contacts" className="hover:text-red-500 transition">Контакты</a>
              </nav>

              <div className="flex items-center gap-5">
                <div className="text-right hidden xl:block">
                  <div className="text-[18px] font-bold leading-tight">
                    +7 (343) 312-39-14
                  </div>
                  <div className="text-gray-300 text-[17px] font-medium mt-1 leading-tight">
                    info@mf-66.ru
                  </div>
                </div>

                <a
                  href="mailto:info@mf-66.ru?subject=Заявка%20с%20сайта%20МеталлФАКТУРА"
                  className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-6 py-3 rounded-2xl text-[16px] font-semibold shadow-[0_0_40px_rgba(255,0,0,0.3)] whitespace-nowrap"
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          </header>
        

          <div className="relative z-10 max-w-[1680px] mx-auto px-10 pt-[190px] pb-24 min-h-screen grid xl:grid-cols-[1fr_360px] gap-16 items-center">
            <div className="max-w-[980px]">
              <div className="text-red-500 uppercase tracking-[0.2em] text-sm font-bold mb-8">
                Инженерно-производственная компания
              </div>

              <h1 className="text-[58px] 2xl:text-[82px] leading-[0.95] font-black uppercase tracking-[-0.04em] max-w-[900px]">
                Производство металлоконструкций для промышленности и бизнеса
              </h1>

              <p className="mt-10 text-[20px] 2xl:text-[24px] leading-[1.6] text-gray-300 max-w-[760px]">
                Проектируем, производим и монтируем металлоконструкции для
                заводов, складов, ангаров и промышленных объектов по всей
                России. Полный цикл работ — от КМ/КМД до монтажа.
              </p>

              <div className="grid md:grid-cols-3 gap-5 mt-10 max-w-[980px]">
                {[
                  {
                    title: 'Производство металлоконструкций',
                    price: 'от 40 000 ₽',
                    desc: 'за тонну'
                  },
                  {
                    title: 'Проектирование КМ / КМД',
                    price: 'от 2 500 ₽',
                    desc: 'за м²'
                  },
                  {
                    title: 'Монтаж металлоконструкций',
                    price: 'от 30 000 ₽',
                    desc: 'за тонну'
                  }
                ].map((item) => (
                              <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                    key={item.title}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-7 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="text-gray-300 text-[15px] uppercase tracking-[0.08em] leading-[1.5] mb-5 min-h-[48px]">
                      {item.title}
                    </div>

                    <div className="text-[40px] font-black text-red-500 leading-none mb-3">
                      {item.price}
                    </div>

                    <div className="text-gray-400 text-[16px]">
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 mt-14">
                <a
                  href="#contacts"
                  className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-5 rounded-[22px] text-xl font-bold shadow-[0_0_50px_rgba(255,0,0,0.35)]"
                >
                  Получить расчёт
                 
                </a>

                <a
                  href="#projects"
                  className="border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 px-10 py-5 rounded-[22px] text-xl font-semibold backdrop-blur-md"
                >
                  Смотреть объекты
                </a>{/* КНОПКА СКАЧАТЬ ПРЕЗЕНТАЦИЮ */}

<a
  href="/presentation.pdf"
  download
  className="group inline-flex items-center gap-4 bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-5 rounded-[22px] text-xl font-bold shadow-[0_0_50px_rgba(255,0,0,0.35)]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 group-hover:translate-y-1 transition"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v10m0 0l-4-4m4 4l4-4m-9 8h10"
    />
  </svg>

  Скачать презентацию
</a>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-16 max-w-[920px]">
                {stats.map((item) => (
                  <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-7"
>
  
                    <div className="text-[42px] font-black text-red-500 leading-none">
                      {item.value}
                    </div>
                    <div className="text-gray-300 mt-4 text-[16px] leading-relaxed">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {[
                'Собственное производство',
                'Монтаж по всей России',
                'Современное оборудование',
                'Соблюдение сроков'
              ].map((item) => (
                            <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                  key={item}
                  className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[28px] p-7 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="text-red-500 text-xl mb-4">✦</div>
                  <div className="text-[18px] leading-[1.5] text-gray-100 font-medium">
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-28 bg-[#05080D] border-b border-white/10">
          <div className="max-w-[1680px] mx-auto px-10">
            <div className="flex items-end justify-between gap-10 mb-16">
              <div>
                <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                  Услуги
                </div>

                <h2 className="text-[48px] 2xl:text-[64px] leading-[1] font-black uppercase tracking-[-0.03em] max-w-[760px]">
                  Комплексные решения для промышленных объектов
                </h2>
              </div>

              <div className="max-w-[420px] text-red-500 text-lg leading-relaxed hidden xl:block font-semibold">
                Полный цикл производства металлоконструкций от проектирования до монтажа.
              </div>
            </div>

            <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6">
              {services.map((service) => (
                            <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                  key={service.title}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#060A10] hover:border-red-500/40 transition-all duration-300"
                >
                  <div
                    className="h-[260px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }} />

                  <div className="p-8">
                    <h3 className="text-[28px] leading-[1.1] font-black uppercase mb-5">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-[16px] mb-8">
                      {service.desc}
                    </p>

                    <div className="text-red-500 text-lg font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 relative overflow-hidden border-b border-white/10 bg-[#04070B]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,0,0,0.08),transparent_35%)]" />

          <div className="relative max-w-[1680px] mx-auto px-10 grid xl:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
            <div className="relative">
              <img
                src="/images/project1.jpg" 
                className="rounded-[40px] object-cover h-[760px] w-full border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.55)]" />

              <div className="absolute -bottom-10 -right-10 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 w-[340px] shadow-[0_0_60px_rgba(0,0,0,0.55)]">
                <div className="text-red-500 text-[58px] font-black leading-none mb-4">
                  7
                </div>

                <div className="text-white text-[22px] font-bold leading-[1.2] mb-3 uppercase">
                  Лет на рынке металлоконструкций
                </div>

                <div className="text-gray-400 leading-relaxed text-[15px]">
                  Реализуем проекты для промышленности, логистики, агросектора и коммерческих объектов.
                </div>
              </div>
            </div>

            <div>
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                О компании
              </div>

              <h2 className="text-[52px] 2xl:text-[72px] leading-[0.98] font-black uppercase tracking-[-0.04em] max-w-[920px] mb-10">
                МеталлФАКТУРА — современное производство металлоконструкций полного цикла
              </h2>

              <p className="text-gray-300 text-[21px] leading-[1.8] max-w-[860px] mb-12">
                Компания специализируется на проектировании, производстве и монтаже металлоконструкций для промышленных, складских и коммерческих объектов по всей России. Мы сопровождаем проект на каждом этапе — от разработки КМ и КМД до изготовления и монтажа конструкций на объекте.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    title: '8 сварочных постов',
                    text: 'Современные рабочие места для серийного и индивидуального производства.'
                  },
                  {
                    title: '2500 м² производственных площадей',
                    text: 'Собственная производственная база для реализации крупных проектов.'
                  },
                  {
                    title: '2 малярных поста',
                    text: 'Подготовка и окраска металлоконструкций с соблюдением технологий.'
                  },
                  {
                    title: 'Камера порошковой покраски 6×2 м',
                    text: 'Профессиональная порошковая окраска металлоконструкций.'
                  },
                  {
                    title: '10+ лет опыта сварщиков и слесарей',
                    text: 'Квалифицированные специалисты с большим производственным опытом.'
                  },
                  {
                    title: '15 лет опыта инженера-проектировщика',
                    text: 'Разработка КМ и КМД для объектов любой сложности.'
                  },
                  {
                    title: '5+ лет опыта маляров',
                    text: 'Качественная подготовка и окраска металлоконструкций.'
                  },
                  {
                    title: '0 рекламаций и арбитражных дел',
                    text: 'Без претензий по качеству и обязательствам перед Заказчиками.'
                  }
                ].map((item) => (
                              <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                    key={item.title}
                    className="bg-[#070B10] border border-white/10 rounded-[28px] p-7 hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="text-red-500 text-lg font-bold uppercase tracking-[0.12em] mb-4">
                      {item.title}
                    </div>

                    <div className="text-gray-400 leading-relaxed text-[16px]">
                      {item.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:info@mf-66.ru?subject=Консультация%20МеталлФАКТУРА"
                  className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-5 rounded-[22px] text-xl font-bold shadow-[0_0_50px_rgba(255,0,0,0.35)]"
                >
                  Получить консультацию
                </a>

                <a
                  href="#production"
                  className="border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 px-10 py-5 rounded-[22px] text-xl font-semibold backdrop-blur-md"
                >
                  Смотреть производство
                </a>
              </div>
            </div>
          </div>
        </section>



        <section className="py-28 bg-[#05080D] border-b border-white/10 overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-8">
            <div className="text-center mb-20">
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-6">
                Почему выбирают нас
              </div>
              <h2 className="text-[64px] font-black leading-[1.05] mb-8">
                Почему нам доверяют
                <br />
                генподрядчики
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                'Работаем по КМ и КМД',
                'Собственное производство в Екатеринбурге',
                'Соблюдаем сроки изготовления',
                'Паспорта качества и сертификаты',
                'Фото и видео отчёты по проекту',
                'Монтаж металлоконструкций под ключ',
                'Работа по договору и с НДС',
                '0 рекламаций по качеству работ',
                'Индивидуальные условия оплаты'
              ].map((item, index) => (
                            <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-[28px] p-10 backdrop-blur-xl hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="text-red-500 text-2xl font-black mb-6">
                    0{index + 1}
                  </div>
                  <div className="text-[24px] leading-[1.5] font-semibold text-white">
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="production" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,red,transparent_35%)]" />
          <div className="max-w-[1680px] mx-auto px-10 grid xl:grid-cols-[0.95fr_1.05fr] gap-24 items-center">
            <div>
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                Производство
              </div>

              <h2 className="text-[48px] 2xl:text-[64px] leading-[1] font-black uppercase tracking-[-0.03em] max-w-[760px] mb-10">
                Комплексное производство металлоконструкций
              </h2>

              <p className="text-gray-400 text-[20px] leading-[1.7] max-w-[760px] mb-12">
                Производственные мощности компании позволяют реализовывать проекты любой сложности: от небольших металлоконструкций до крупных промышленных объектов.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  'Лазерная резка',
                  'Сварочные работы',
                  'Токарные работы',
                  'Малярные работы',
                  'Гибочные работы',
                  'Вальцовочные работы'
                ].map((item) => (
                              <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                    key={item}
                    className="bg-[#070B10] border border-white/10 rounded-[24px] p-6 text-lg font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/images/zavod.jpg" 
                alt= "Производство металлоконструкций"
                className="rounded-[40px] object-cover h-[760px] w-full shadow-[0_0_80px_rgba(0,0,0,0.55)] border border-white/10" />
            </div>
          </div>
        </section>
        <section className="py-28 bg-[#04070B] border-y border-white/10 overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-8">
            <div className="text-center mb-20">
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-6">
                Этапы работы
              </div>
              <h2 className="text-[64px] font-black leading-[1.05] mb-8">
                Как мы работаем
              </h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                'Получаем ТЗ и документацию',
                'Согласовываем сроки и стоимость',
                'Проектируем КМ и КМД',
                'Изготавливаем конструкции',
                'Проводим контроль качества',
                'Организуем доставку',
                'Выполняем монтаж',
                'Сдаём готовый объект'
              ].map((step, index) => (
                            <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }} key={index} className="bg-white/5 border border-white/10 rounded-[28px] p-10 backdrop-blur-xl">
                  <div className="text-red-500 text-[48px] font-black mb-6">
                    0{index + 1}
                  </div>
                  <div className="text-[24px] leading-[1.5] font-semibold text-white">
                    {step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="guarantees" className="py-28 bg-[#04070B] border-y border-white/10 overflow-hidden">
          <div className="max-w-[1680px] mx-auto px-10 mb-24">
            <div className="flex items-end justify-between gap-10 mb-16">
              <div>
                <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                  Гарантии и условия
                </div>

                <h2 className="text-[48px] 2xl:text-[64px] leading-[1] font-black uppercase tracking-[-0.03em] max-w-[980px]">
                  Прозрачные условия сотрудничества и гарантии выполнения обязательств
                </h2>
              </div>

              <div className="hidden xl:block max-w-[420px] text-gray-400 text-lg leading-relaxed">
                Работаем официально, соблюдаем сроки и обеспечиваем контроль качества на каждом этапе производства.
              </div>
            </div>

            <div className="grid xl:grid-cols-2 gap-8">
              <div className="bg-[#070B10] border border-white/10 rounded-[36px] p-10">
                <div className="text-red-500 uppercase tracking-[0.16em] text-sm font-bold mb-8">
                  Гарантии
                </div>

                <div className="space-y-6">
                  {[
                    'Соблюдение сроков производства и поставки',
                    'Контроль качества на всех этапах производства с предоставлением паспортов качества и сертификатов на материалы',
                    'Работа по договору с фиксированными обязательствами',
                    'Гарантия на изготовленные металлоконструкции',
                    '0 рекламаций и арбитражных дел по качеству'
                  ].map((item) => (
                                <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                      key={item}
                      className="flex items-start gap-4 border-b border-white/5 pb-5"
                    >
                      <div className="text-red-500 text-2xl leading-none mt-1">✦</div>
                      <div className="text-[20px] leading-[1.6] text-gray-200 font-medium">
                        {item}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-[#070B10] border border-white/10 rounded-[36px] p-10">
                <div className="text-red-500 uppercase tracking-[0.16em] text-sm font-bold mb-8">
                  Условия оплаты
                </div>

                <div className="space-y-6">
                  {[
                    'Работаем с НДС и без НДС',
                    'Поэтапная оплата по договору',
                    'Варианты оплаты 50/50 и 70/30',
                    'Индивидуальные условия для крупных объектов',
                    'Подготовка коммерческого предложения в короткие сроки',
                    'Полное сопровождение проекта до сдачи объекта'
                  ].map((item) => (
                                <motion.div
  key={item.label}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
                      key={item}
                      className="flex items-start gap-4 border-b border-white/5 pb-5"
                    >
                      <div className="text-red-500 text-2xl leading-none mt-1">✦</div>
                      <div className="text-[20px] leading-[1.6] text-gray-200 font-medium">
                        {item}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-28 bg-[#05080D] border-y border-white/10 overflow-hidden">
          <div className="max-w-[1680px] mx-auto px-10">
            <div className="flex items-end justify-between gap-10 mb-16">
              <div>
                <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                  Проекты
                </div>

                <h2 className="text-[48px] 2xl:text-[64px] leading-[1] font-black uppercase tracking-[-0.03em] max-w-[820px]">
                  Реализованные объекты по всей России
                </h2>
              </div>

              <div className="hidden xl:block max-w-[420px] text-gray-400 text-lg leading-relaxed">
                Производим и монтируем металлоконструкции для промышленных и коммерческих объектов.
              </div>
            </div>

            <div className="grid xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 h-[620px]"
                >
                  <img
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="text-red-500 uppercase tracking-[0.16em] text-sm font-bold mb-4">
                      {project.area}
                    </div>

                    <div className="text-[40px] leading-[1] font-black uppercase max-w-[320px] mb-6">
                      {project.title}
                    </div>

                    <button
  onClick={() => setSelectedProject(project)}
  className="bg-red-600 hover:bg-red-500 transition px-6 py-4 rounded-2xl font-bold"
>
  Смотреть кейс
</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-32 bg-[#05080D] relative overflow-hidden border-y border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.15),transparent_55%)]"></div>

          <div className="relative z-10 max-w-[1500px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">

              <div className="flex flex-col justify-center">
                <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-6">
                  Отправьте проект и получите расчёт
                </div>

                <h2 className="text-[56px] 2xl:text-[84px] leading-[0.95] font-black uppercase tracking-[-0.04em] mb-10">
                  Производство
                  <br />
                  металлоконструкций
                  <br />
                  под ключ
                </h2>

                <p className="text-gray-400 text-[22px] leading-[1.7] mb-12 max-w-[720px]">
                  Подготовим коммерческое предложение, выполним расчёт стоимости
                  и предложим оптимальное решение под ваш объект.
                </p>

                <div className="space-y-5 mb-14 text-[22px] text-gray-300">
                  <div>• Производство — от 40 000 ₽ за тонну</div>
                  <div>• Проектирование — от 2500 ₽ за м²</div>
                  <div>• Монтаж — от 30 000 ₽ за тонну</div>
                  <div>• Индивидуальные условия оплаты и дисконт</div>
                  <div>• Работаем по всей России</div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <a
                    href="mailto:info@mf-66.ru?subject=Заявка%20с%20сайта"
                    className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-12 py-6 rounded-[24px] text-2xl font-bold shadow-[0_0_60px_rgba(255,0,0,0.35)]"
                  >
                    Отправить заявку
                  </a>

                  <a
                    href="tel:+73433123914"
                    className="border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 px-12 py-6 rounded-[24px] text-2xl font-semibold backdrop-blur-md"
                  >
                    Позвонить
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[36px] p-12 backdrop-blur-xl">
                <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-6">
                  Отправить проект
                </div>

                <h3 className="text-[48px] leading-[1.05] font-black mb-8">
                  Прикрепите проект
                  <br />
                  и получите расчёт
                </h3>

                <p className="text-gray-400 text-[20px] leading-[1.7] mb-10">
                  Отправьте PDF, чертежи или техническое задание —
                  мы подготовим стоимость и сроки производства.
                </p>

                <form
                  className="space-y-7"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const formData = new FormData(e.target);

                    const name = formData.get('name');
                    const phone = formData.get('phone');
                    const file = formData.get('file');

                    const BOT_TOKEN = '7986028475:AAFhaVDrtwGtO-vSUgAw-98OyfOGimdUEVM';
                    const CHAT_ID = '1639716258';

                    const caption = `Новая заявка с сайта МеталлФАКТУРА\n\n` +
                      `Имя: ${name}\n` +
                      `Телефон: ${phone}`;

                    try {
                      const data = new FormData();

                      data.append('chat_id', CHAT_ID);
                      data.append('caption', caption);
                      data.append('document', file);

                      await fetch(
                        `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
                        {
                          method: 'POST',
                          body: data
                        }
                      );

                      alert('Проект успешно отправлен');
                      e.target.reset();
                    } catch (error) {
                      alert('Ошибка отправки');
                    }
                  } }
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition" />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition" />

                  <input
                    type="file"
                    name="file"
                    required
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-lg text-gray-400 outline-none focus:border-red-500 transition" />

                  <label className="flex items-start gap-4 text-gray-400 text-[15px] leading-[1.6]">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 accent-red-600" />

                    <span>
                      Я соглашаюсь на обработку персональных данных
                      и принимаю условия политики конфиденциальности.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-6 rounded-[24px] text-2xl font-bold shadow-[0_0_50px_rgba(255,0,0,0.35)]"
                  >
                    Отправить проект
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>



        <section className="py-28 bg-[#04070B] border-y border-white/10 overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-8">
            <div className="text-center mb-20">
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-6">
                Калькулятор стоимости
              </div>
              <h2 className="text-[64px] leading-[1.05] font-black tracking-tight mb-8">
                Рассчитайте примерную
                <br />
                стоимость проекта
              </h2>
              <p className="text-gray-400 text-[22px] max-w-[900px] mx-auto leading-[1.7]">
                Предварительный расчёт стоимости металлоконструкций,
                проектирования и монтажа.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 backdrop-blur-xl">
                <form onSubmit={handleTelegramSubmit} className="space-y-8">
                  <div>
                    <div className="text-sm uppercase tracking-[0.14em] text-gray-500 mb-3">
                      Тип работ
                    </div>
                    <select name="type" className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white outline-none focus:border-red-500 transition">
                      <option>Производство металлоконструкций</option>
                      <option>Проектирование КМ/КМД</option>
                      <option>Монтаж металлоконструкций</option>
                    </select>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.14em] text-gray-500 mb-3">
                      Тип металлоконструкций
                    </div>
                    <select
                      name="construction"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white outline-none focus:border-red-500 transition"
                    >
                      <option>Здание</option>
                      <option>Площадки</option>
                      <option>Лестницы</option>
                      <option>Ёмкости</option>
                      <option>Мачты</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.14em] text-gray-500 mb-3">
                      Объём проекта
                    </div>
                    <input
                      type="text"
                      name="volume"
                      placeholder="Например: 25 тонн"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition" />
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.14em] text-gray-500 mb-3">
                      Город объекта
                    </div>
                    <input
                      type="text"
                      name="city"
                      placeholder="Екатеринбург"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition" />
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-[0.14em] text-gray-500 mb-3">
                      Ваш телефон
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-xl text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition" />
                  </div>

                  <label className="flex items-start gap-4 text-gray-400 text-[15px] leading-[1.6]">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 accent-red-600" />
                    <span>
                      Я соглашаюсь на обработку персональных данных и принимаю условия
                      политики конфиденциальности.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="block w-full text-center bg-red-600 hover:bg-red-500 transition-all duration-300 px-10 py-6 rounded-[24px] text-2xl font-bold shadow-[0_0_50px_rgba(255,0,0,0.35)]"
                  >
                    Получить расчёт
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-br from-red-600/10 to-transparent border border-red-500/20 rounded-[32px] p-12 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.2),transparent_60%)]"></div>

                <div className="relative z-10">
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-6">
                    Что вы получите
                  </div>

                  <div className="space-y-8 text-[22px] leading-[1.7] text-gray-300">
                    <div className="flex gap-4">
                      <div className="text-red-500">01</div>
                      <div>Предварительный расчёт стоимости проекта</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="text-red-500">02</div>
                      <div>Консультацию руководителя проекта</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="text-red-500">03</div>
                      <div>Оценку сроков производства и монтажа</div>
                    </div>

                    <div className="flex gap-4">
                      <div className="text-red-500">04</div>
                      <div>Подбор оптимального решения под ваш объект</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-16 pt-10 border-t border-white/10">
                  <div className="text-[52px] font-black text-white mb-4">
                    от 40 000 ₽
                  </div>
                  <div className="text-gray-400 text-xl">
                    стоимость производства металлоконструкций за тонну
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section id="contacts" className="py-28 bg-[#05080D] border-t border-white/10">
          <div className="max-w-[1680px] mx-auto px-10">
            <div className="mb-16">
              <div className="text-red-500 uppercase tracking-[0.18em] text-sm font-bold mb-5">
                Контакты
              </div>

              <h2 className="text-[48px] 2xl:text-[64px] leading-[1] font-black uppercase tracking-[-0.03em] max-w-[820px]">
                Свяжитесь с нами
              </h2>
            </div>

            <div className="grid xl:grid-cols-2 gap-10">
              <div className="bg-[#070B10] border border-white/10 rounded-[36px] p-10 space-y-8">
                <div>
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    Наш телефон
                  </div>
                  <a href="tel:+73433123914" className="text-[32px] font-black hover:text-red-500 transition">
                    +7 (343) 312-39-14
                  </a>
                </div>

                <div>
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    E-Mail
                  </div>
                  <a href="mailto:info@mf-66.ru" className="text-[24px] font-semibold text-gray-200 hover:text-red-500 transition">
                    info@mf-66.ru
                  </a>
                </div>

                <div>
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    Чат Telegram
                  </div>
                  <a href="mailto:info@mf-66.ru?subject=Заявка%20с%20сайта%20МеталлФАКТУРА" target="_blank" className="text-[24px] font-semibold text-gray-200 hover:text-red-500 transition">
                    @metallfaktura
                  </a>
                </div>
              </div>

              <div className="bg-[#070B10] border border-white/10 rounded-[36px] p-10 space-y-8">
                <div>
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    Наш офис
                  </div>
                  <div className="text-[24px] leading-[1.6] font-semibold text-gray-200 mb-6">
                    620075, г. Екатеринбург<br />
                    ул. Зоологическая д.9 оф.401
                  </div>

                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    Адрес производства
                  </div>
                  <div className="text-[24px] leading-[1.6] font-semibold text-gray-200">
                    г. Екатеринбург<br />
                    ул. Шефская 2А
                  </div>
                </div>

                <div>
                  <div className="text-red-500 uppercase tracking-[0.14em] text-sm font-bold mb-3">
                    График работы
                  </div>
                  <div className="text-[24px] font-semibold text-gray-200">
                    пн-пт: с 09:00 до 18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a
          href="#top"
          className="fixed bottom-8 right-8 z-50 w-[68px] h-[68px] rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-3xl font-black shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          ↑
        </a>
      </div>
      {selectedProject && (
  <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-6">

    <div className="bg-[#111] max-w-5xl w-full rounded-[30px] overflow-hidden relative max-h-[90vh] overflow-y-auto">

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-5 right-5 bg-red-600 w-12 h-12 rounded-full text-2xl"
      >
        ×
      </button>

      <img
        src={selectedProject.image}
        alt=""
        className="w-full h-[420px] object-cover"
      />

      <div className="p-10">

        <h2 className="text-5xl font-black mb-5">
          {selectedProject.title}
        </h2>

        <div className="text-red-500 text-2xl mb-6">
          {selectedProject.area}
        </div>

        <p className="text-gray-300 text-xl leading-relaxed">
          {selectedProject.description}
        </p>

      </div>
    </div>
  </div>
)}
      </>
  )
}
<section className="max-w-7xl mx-auto px-6 py-24 text-gray-300">
  <h2 className="text-4xl font-bold text-white mb-8">
    Производство металлоконструкций под ключ
  </h2>

  <p className="leading-8 text-lg">
    Компания МеталлФАКТУРА выполняет проектирование,
    производство и монтаж металлоконструкций любой сложности.
    Изготавливаем ангары, склады, производственные цеха,
    фермы, колонны, балки и металлокаркасы для промышленности
    и коммерческих объектов по всей России.
  </p>

  <p className="leading-8 text-lg mt-6">
    Разрабатываем документацию КМ и КМД,
    выполняем изготовление металлоконструкций,
    доставку и профессиональный монтаж под ключ.
  </p>
</section>