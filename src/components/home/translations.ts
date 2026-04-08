export const LOCALES = ["en", "ua", "ru"] as const;

export type Locale = (typeof LOCALES)[number];
export type QuestionKey = "service" | "region" | "budget" | "timeline" | "contact";

export type QuickHelpQuestion = {
  key: QuestionKey;
  label: string;
  options: string[];
};

export type QuickHelpTranslations = {
  button: string;
  title: string;
  enquiryLabel: string;
  mailSubject: string;
  questions: QuickHelpQuestion[];
  actionGetRecommendation: string;
  actionBookCall: string;
  actionWhatsApp: string;
  actionSubmit: string;
  close: string;
  step: string;
  back: string;
};

export type HomeTranslations = {
  brand: string;
  contact: {
    email: string;
    whatsappNumber: string;
    strategyCallSubject: string;
  };
  nav: {
    services: string;
    work: string;
    process: string;
    pricing: string;
    contact: string;
    bookCall: string;
    menu: string;
    languageSwitcherAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    visualAlt: string;
  };
  capabilities: string[];
  solutions: {
    eyebrow: string;
    title: string;
    cta: string;
    items: Array<{
      title: string;
      summary: string;
    }>;
  };
  work: {
    eyebrow: string;
    title: string;
    viewDetails: string;
    imageAltSuffix: string;
    items: Array<{
      title: string;
      image: string;
      result: string;
    }>;
  };
  industries: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  smartHelpTeaser: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    assistantLabel: string;
    assistantQuestion: string;
    assistantOptions: string[];
    suggestedPathLabel: string;
    suggestedPathValue: string;
  };
  packages: {
    eyebrow: string;
    title: string;
    items: Array<{
      name: string;
      tag: string;
      price: string;
      points: string[];
      featured?: boolean;
    }>;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    tagline: string;
    locales: string;
  };
  quickHelp: QuickHelpTranslations;
};

export const homeTranslations: Record<Locale, HomeTranslations> = {
  en: {
    brand: "Aurevio",
    contact: {
      email: "hello@aurevio.co.uk",
      whatsappNumber: "447000000000",
      strategyCallSubject: "Aurevio Strategy Call",
    },
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      pricing: "Pricing",
      contact: "Contact",
      bookCall: "Book Call",
      menu: "Menu",
      languageSwitcherAriaLabel: "Language switcher",
    },
    hero: {
      eyebrow: "Premium websites, SEO & ads",
      title: "Turn your website into a real source of enquiries.",
      subtitle:
        "We build premium websites, landing pages, paid campaigns, and lead-handling systems that help businesses attract better leads and convert more attention into action.",
      primaryCta: "Book Strategy Call",
      secondaryCta: "View Work",
      visualAlt: "Aurevio digital growth workspace",
    },
    capabilities: ["Websites", "SEO", "Paid Ads", "Automation"],
    solutions: {
      eyebrow: "Solutions",
      title: "Modular growth capabilities.",
      cta: "Get Recommendation",
      items: [
        {
          title: "Business Websites",
          summary: "Premium brand-led websites engineered to convert serious enquiries.",
        },
        {
          title: "Landing Pages",
          summary: "Fast, focused conversion pages for offers, launches, and campaigns.",
        },
        {
          title: "SEO Systems",
          summary: "Structured service and location SEO designed for durable growth.",
        },
        {
          title: "Google Ads / PPC",
          summary: "Intent-driven campaigns for high-value demand and measurable ROI.",
        },
        {
          title: "Meta Ads",
          summary: "Targeted social campaigns that move prospects into your pipeline.",
        },
        {
          title: "AI Lead Handling",
          summary: "Smart follow-up and CRM automation to capture and qualify leads faster.",
        },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "Proof of execution.",
      viewDetails: "View Details",
      imageAltSuffix: "case study preview",
      items: [
        {
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Sharper positioning and enquiry flow for hospitality-focused procurement.",
        },
        {
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Clearer service architecture and lead routing for technical buyers.",
        },
      ],
    },
    industries: {
      eyebrow: "Who We Work With",
      title: "Service industries where trust and enquiry quality drive growth.",
      items: [
        "Hospitality",
        "Interiors",
        "Construction",
        "Healthcare",
        "Professional Services",
        "Local & Regional Service Brands",
      ],
    },
    smartHelpTeaser: {
      eyebrow: "Quick Help",
      title: "Smart qualification widget for faster service routing.",
      description:
        "Visitors answer a few quick questions and get the right service path while your team captures warm intent instantly.",
      cta: "Enable Smart Intake",
      assistantLabel: "Aurevio Assistant",
      assistantQuestion: "What do you need most right now?",
      assistantOptions: ["More enquiries", "Better lead quality", "Scale paid campaigns", "Automate follow-up"],
      suggestedPathLabel: "Suggested Path",
      suggestedPathValue: "Growth Engine Package",
    },
    packages: {
      eyebrow: "Engagement Models",
      title: "Premium, outcome-led options.",
      items: [
        {
          name: "Foundation",
          tag: "Website + Core SEO",
          price: "From $3,000+",
          points: ["Premium website build", "Local SEO baseline", "Lead capture setup"],
        },
        {
          name: "Growth Engine",
          tag: "Web + SEO + Paid Ads",
          price: "From $5,000+",
          points: ["Conversion website system", "Search campaign setup", "Landing page stack"],
          featured: true,
        },
        {
          name: "Performance Partner",
          tag: "Ongoing Growth",
          price: "Custom Retainer",
          points: ["Ads + SEO optimisation", "Automation workflows", "Monthly strategy reporting"],
        },
      ],
    },
    finalCta: {
      title: "Build your next growth system with Aurevio.",
      subtitle: "Built to turn attention into qualified enquiries.",
      primaryCta: "Book Strategy Call",
      secondaryCta: "Message on WhatsApp",
    },
    footer: {
      tagline: "Premium digital growth and lead-generation agency for service businesses.",
      locales: "Built for service businesses that want consistent, qualified enquiries.",
    },
    quickHelp: {
      button: "Quick Help",
      title: "Find the right starting point",
      enquiryLabel: "Quick Help",
      mailSubject: "Aurevio Enquiry",
      questions: [
        {
          key: "service",
          label: "What do you need?",
          options: ["New website", "Website redesign", "Landing page", "SEO", "Paid ads", "Lead automation"],
        },
        {
          key: "region",
          label: "Where do you want to grow?",
          options: ["UK", "Europe", "USA", "Canada", "Other"],
        },
        {
          key: "budget",
          label: "What is your budget range?",
          options: ["Under $1,500", "$1,500–$3,000", "$3,000–$5,000", "$5,000+"],
        },
        {
          key: "timeline",
          label: "When do you want to launch?",
          options: ["ASAP", "This month", "Next 1–2 months", "Just exploring"],
        },
        {
          key: "contact",
          label: "How should we contact you?",
          options: ["WhatsApp", "Email", "Call"],
        },
      ],
      actionGetRecommendation: "Get Recommendation",
      actionBookCall: "Book Call",
      actionWhatsApp: "Send on WhatsApp",
      actionSubmit: "Submit Enquiry",
      close: "Close",
      step: "Step",
      back: "Back",
    },
  },
  ua: {
    brand: "Aurevio",
    contact: {
      email: "hello@aurevio.co.uk",
      whatsappNumber: "447000000000",
      strategyCallSubject: "Стратегічний дзвінок Aurevio",
    },
    nav: {
      services: "Послуги",
      work: "Роботи",
      process: "Процес",
      pricing: "Ціни",
      contact: "Контакт",
      bookCall: "Замовити дзвінок",
      menu: "Меню",
      languageSwitcherAriaLabel: "Перемикач мови",
    },
    hero: {
      eyebrow: "Преміальні сайти, SEO та реклама",
      title: "Перетворіть свій сайт на реальне джерело заявок.",
      subtitle:
        "Ми створюємо преміальні сайти, цільові сторінки, рекламні кампанії та системи обробки лідів, які допомагають залучати кращих клієнтів і перетворювати увагу в дію.",
      primaryCta: "Замовити стратегічний дзвінок",
      secondaryCta: "Переглянути роботи",
      visualAlt: "Робочий простір Aurevio для цифрового зростання",
    },
    capabilities: ["Сайти", "SEO", "Платна реклама", "Автоматизація"],
    solutions: {
      eyebrow: "Рішення",
      title: "Модульні можливості для зростання.",
      cta: "Отримати рекомендацію",
      items: [
        {
          title: "Бізнес-сайти",
          summary: "Преміальні сайти з фокусом на бренд, створені для стабільного потоку заявок.",
        },
        {
          title: "Цільові сторінки",
          summary: "Швидкі та сфокусовані сторінки для оферів, запусків і рекламних кампаній.",
        },
        {
          title: "SEO-системи",
          summary: "Структуроване SEO для послуг і локацій з акцентом на довгостроковий результат.",
        },
        {
          title: "Google Ads / PPC",
          summary: "Кампанії за наміром, що приносять якісний попит і вимірювану окупність.",
        },
        {
          title: "Meta Ads",
          summary: "Точні соціальні кампанії, які переводять увагу клієнтів у ваш воронковий потік.",
        },
        {
          title: "AI-обробка лідів",
          summary: "Розумний фолоу-ап і CRM-автоматизація для швидшої кваліфікації лідів.",
        },
      ],
    },
    work: {
      eyebrow: "Обрані роботи",
      title: "Підтверджені результати.",
      viewDetails: "Детальніше",
      imageAltSuffix: "превʼю кейсу",
      items: [
        {
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Точніше позиціонування та кращий потік заявок для готельного закупівельного сегмента.",
        },
        {
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Чітка архітектура послуг і маршрутизація заявок для технічних клієнтів.",
        },
      ],
    },
    industries: {
      eyebrow: "З ким ми працюємо",
      title: "Сервісні галузі, де довіра і якість заявок визначають зростання.",
      items: [
        "Гостинність",
        "Інтер’єри",
        "Будівництво",
        "Охорона здоров’я",
        "Професійні послуги",
        "Локальні та регіональні сервісні бренди",
      ],
    },
    smartHelpTeaser: {
      eyebrow: "Швидка допомога",
      title: "Віджет швидкої кваліфікації для точнішого маршрутування запитів.",
      description:
        "Відвідувачі відповідають на кілька запитань і одразу отримують правильний шлях послуги, а команда фіксує теплий попит.",
      cta: "Увімкнути Smart Intake",
      assistantLabel: "Помічник Aurevio",
      assistantQuestion: "Що для вас найважливіше зараз?",
      assistantOptions: ["Більше заявок", "Краща якість лідів", "Масштабувати рекламу", "Автоматизувати фолоу-ап"],
      suggestedPathLabel: "Рекомендований шлях",
      suggestedPathValue: "Пакет Growth Engine",
    },
    packages: {
      eyebrow: "Моделі співпраці",
      title: "Преміальні варіанти, орієнтовані на результат.",
      items: [
        {
          name: "База",
          tag: "Сайт + базове SEO",
          price: "Від $3,000+",
          points: ["Преміальна розробка сайту", "Базова локальна SEO-основа", "Налаштування захоплення лідів"],
        },
        {
          name: "Система зростання",
          tag: "Сайт + SEO + платна реклама",
          price: "Від $5,000+",
          points: ["Конверсійна система сайту", "Налаштування пошукових кампаній", "Пакет цільових сторінок"],
          featured: true,
        },
        {
          name: "Партнер зростання",
          tag: "Постійний розвиток",
          price: "Індивідуальний ретейнер",
          points: ["Оптимізація реклами + SEO", "Автоматизація процесів", "Щомісячна стратегічна звітність"],
        },
      ],
    },
    finalCta: {
      title: "Побудуйте вашу наступну систему зростання з Aurevio.",
      subtitle: "Створено, щоб перетворювати увагу на якісні звернення.",
      primaryCta: "Замовити стратегічний дзвінок",
      secondaryCta: "Написати у WhatsApp",
    },
    footer: {
      tagline: "Преміальна агенція цифрового зростання та генерації лідів для сервісного бізнесу.",
      locales: "Для сервісного бізнесу, який прагне стабільних та якісних заявок.",
    },
    quickHelp: {
      button: "Швидка допомога",
      title: "Знайдіть правильний старт для вашого проєкту",
      enquiryLabel: "Швидка допомога",
      mailSubject: "Запит до Aurevio",
      questions: [
        {
          key: "service",
          label: "Що вам потрібно?",
          options: ["Новий сайт", "Редизайн сайту", "Цільова сторінка", "SEO", "Платна реклама", "Автоматизація лідів"],
        },
        {
          key: "region",
          label: "Де ви хочете рости?",
          options: ["Велика Британія", "Європа", "США", "Канада", "Інше"],
        },
        {
          key: "budget",
          label: "Який у вас бюджет?",
          options: ["До $1,500", "$1,500–$3,000", "$3,000–$5,000", "Від $5,000"],
        },
        {
          key: "timeline",
          label: "Коли хочете запуститися?",
          options: ["Якнайшвидше", "Цього місяця", "Протягом 1–2 місяців", "Поки що вивчаю"],
        },
        {
          key: "contact",
          label: "Як з вами зв’язатися?",
          options: ["WhatsApp", "Email", "Дзвінок"],
        },
      ],
      actionGetRecommendation: "Отримати рекомендацію",
      actionBookCall: "Замовити дзвінок",
      actionWhatsApp: "Написати у WhatsApp",
      actionSubmit: "Надіслати запит",
      close: "Закрити",
      step: "Крок",
      back: "Назад",
    },
  },
  ru: {
    brand: "Aurevio",
    contact: {
      email: "hello@aurevio.co.uk",
      whatsappNumber: "447000000000",
      strategyCallSubject: "Стратегический звонок Aurevio",
    },
    nav: {
      services: "Услуги",
      work: "Работы",
      process: "Процесс",
      pricing: "Цены",
      contact: "Контакт",
      bookCall: "Заказать звонок",
      menu: "Меню",
      languageSwitcherAriaLabel: "Переключатель языка",
    },
    hero: {
      eyebrow: "Премиальные сайты, SEO и реклама",
      title: "Превратите сайт в реальный источник заявок.",
      subtitle:
        "Мы создаём премиальные сайты, лендинги, рекламные кампании и системы обработки лидов, которые помогают привлекать лучших клиентов и превращать внимание в действие.",
      primaryCta: "Заказать стратегический звонок",
      secondaryCta: "Посмотреть работы",
      visualAlt: "Рабочее пространство Aurevio для цифрового роста",
    },
    capabilities: ["Сайты", "SEO", "Платная реклама", "Автоматизация"],
    solutions: {
      eyebrow: "Решения",
      title: "Модульные возможности для роста.",
      cta: "Получить рекомендацию",
      items: [
        {
          title: "Бизнес-сайты",
          summary: "Премиальные брендовые сайты, спроектированные для стабильного потока заявок.",
        },
        {
          title: "Лендинги",
          summary: "Быстрые и сфокусированные страницы для офферов, запусков и рекламных кампаний.",
        },
        {
          title: "SEO-системы",
          summary: "Структурированное SEO для услуг и локаций с фокусом на долгосрочный рост.",
        },
        {
          title: "Google Ads / PPC",
          summary: "Кампании по намерению, которые дают качественный спрос и измеримый ROI.",
        },
        {
          title: "Meta Ads",
          summary: "Точные социальные кампании, переводящие внимание в реальный поток лидов.",
        },
        {
          title: "AI-обработка лидов",
          summary: "Умный фоллоу-ап и CRM-автоматизация для быстрого захвата и квалификации лидов.",
        },
      ],
    },
    work: {
      eyebrow: "Избранные проекты",
      title: "Подтверждённые результаты.",
      viewDetails: "Подробнее",
      imageAltSuffix: "превью кейса",
      items: [
        {
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Более точное позиционирование и сильнее поток заявок для гостиничного закупочного сегмента.",
        },
        {
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Более понятная архитектура услуг и маршрутизация лидов для технических клиентов.",
        },
      ],
    },
    industries: {
      eyebrow: "С кем мы работаем",
      title: "Сервисные отрасли, где доверие и качество заявок определяют рост.",
      items: [
        "Гостеприимство",
        "Интерьеры",
        "Строительство",
        "Здравоохранение",
        "Профессиональные услуги",
        "Локальные и региональные сервисные бренды",
      ],
    },
    smartHelpTeaser: {
      eyebrow: "Быстрая помощь",
      title: "Виджет быстрой квалификации для более точной маршрутизации запросов.",
      description:
        "Посетители отвечают на несколько коротких вопросов и сразу получают подходящий путь услуги, а команда фиксирует тёплый спрос.",
      cta: "Включить Smart Intake",
      assistantLabel: "Ассистент Aurevio",
      assistantQuestion: "Что вам сейчас важнее всего?",
      assistantOptions: ["Больше заявок", "Лучшее качество лидов", "Масштабировать рекламу", "Автоматизировать фоллоу-ап"],
      suggestedPathLabel: "Рекомендованный путь",
      suggestedPathValue: "Пакет Growth Engine",
    },
    packages: {
      eyebrow: "Форматы сотрудничества",
      title: "Премиальные варианты, ориентированные на результат.",
      items: [
        {
          name: "База",
          tag: "Сайт + базовое SEO",
          price: "От $3,000+",
          points: ["Премиальная разработка сайта", "Базовая локальная SEO-основа", "Настройка захвата лидов"],
        },
        {
          name: "Система роста",
          tag: "Сайт + SEO + платная реклама",
          price: "От $5,000+",
          points: ["Конверсионная система сайта", "Настройка поисковых кампаний", "Набор лендингов"],
          featured: true,
        },
        {
          name: "Партнёр по росту",
          tag: "Постоянное развитие",
          price: "Индивидуальный ретейнер",
          points: ["Оптимизация рекламы + SEO", "Автоматизация процессов", "Ежемесячная стратегическая отчётность"],
        },
      ],
    },
    finalCta: {
      title: "Постройте вашу следующую систему роста вместе с Aurevio.",
      subtitle: "Создано, чтобы превращать внимание в качественные заявки.",
      primaryCta: "Заказать стратегический звонок",
      secondaryCta: "Написать в WhatsApp",
    },
    footer: {
      tagline: "Премиальное агентство цифрового роста и лидогенерации для сервисного бизнеса.",
      locales: "Для сервисного бизнеса, которому нужны стабильные и качественные заявки.",
    },
    quickHelp: {
      button: "Быстрая помощь",
      title: "Найдите правильный старт для вашего проекта",
      enquiryLabel: "Быстрая помощь",
      mailSubject: "Запрос в Aurevio",
      questions: [
        {
          key: "service",
          label: "Что вам нужно?",
          options: ["Новый сайт", "Редизайн сайта", "Лендинг", "SEO", "Платная реклама", "Автоматизация лидов"],
        },
        {
          key: "region",
          label: "Где вы хотите расти?",
          options: ["Великобритания", "Европа", "США", "Канада", "Другое"],
        },
        {
          key: "budget",
          label: "Какой у вас бюджет?",
          options: ["До $1,500", "$1,500–$3,000", "$3,000–$5,000", "От $5,000"],
        },
        {
          key: "timeline",
          label: "Когда хотите запуститься?",
          options: ["Как можно скорее", "В этом месяце", "В течение 1–2 месяцев", "Пока изучаю"],
        },
        {
          key: "contact",
          label: "Как с вами связаться?",
          options: ["WhatsApp", "Email", "Звонок"],
        },
      ],
      actionGetRecommendation: "Получить рекомендацию",
      actionBookCall: "Заказать звонок",
      actionWhatsApp: "Написать в WhatsApp",
      actionSubmit: "Отправить запрос",
      close: "Закрыть",
      step: "Шаг",
      back: "Назад",
    },
  },
};

export function resolveLocale(value: string | null | undefined): Locale {
  if (value === "ua" || value === "ru" || value === "en") {
    return value;
  }

  return "en";
}

export function getHomeTranslations(value: string | null | undefined) {
  const locale = resolveLocale(value);
  return {
    locale,
    copy: homeTranslations[locale],
  };
}
