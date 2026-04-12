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
      category: string;
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
    subtitle: string;
    items: Array<{
      name: string;
      price: string;
      description: string;
      points: string[];
      cta: string;
      light?: boolean;
      featured?: boolean;
      premium?: boolean;
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
      email: "aureviodig@gmail.com",
      whatsappNumber: "447388772715",
      strategyCallSubject: "Aurevio Strategy Call",
    },
    nav: {
      services: "Services",
      work: "Work",
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
        {
          title: "QR Menus & Restaurant Payments",
          summary:
            "QR-based menu systems, digital ordering flows, and seamless payment experiences for restaurants and cafes.",
        },
        {
          title: "Mobile Apps",
          summary:
            "Custom mobile app design and development for businesses that need stronger digital products, user flows, and customer engagement.",
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
          category: "Website",
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Sharper positioning and enquiry flow for hospitality-focused procurement.",
        },
        {
          category: "Website",
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Clearer service architecture and lead routing for technical buyers.",
        },
        {
          category: "Mobile App",
          title: "LifeHelper Global",
          image: "/images/home/lifehelper-global.png",
          result:
            "A multilingual mobile app designed to help newcomers navigate daily life, documents, communication, and essential local tasks more confidently.",
        },
        {
          category: "Mobile App",
          title: "Kids Bedtime Stories",
          image: "/images/home/kids-bedtime-stories.png",
          result: "A children’s mobile app focused on bedtime stories and a calm, engaging reading experience for families.",
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
      eyebrow: "Pricing",
      title: "Choose the right starting point for your business.",
      subtitle: "From a clean brochure-style website to a full digital growth system.",
      items: [
        {
          name: "Starter",
          price: "From $750",
          description:
            "For businesses that need a clean, professional online presence at the right starting budget.",
          points: [
            "1–3 pages",
            "Responsive design",
            "Contact form / WhatsApp",
            "Trust-building layout",
            "Basic SEO setup",
            "Domain connection",
          ],
          cta: "Get Started",
          light: true,
        },
        {
          name: "Growth",
          price: "From $1950",
          description:
            "For businesses that need a stronger website built to generate enquiries, not just look good.",
          points: [
            "5–8 pages",
            "Conversion-focused structure",
            "Lead capture forms",
            "WhatsApp / email / CTA flow",
            "Local SEO foundation",
            "Mobile and speed optimization",
            "Services / case studies / FAQ sections",
            "Basic conversion tracking",
          ],
          cta: "Choose Growth",
          featured: true,
        },
        {
          name: "Scale",
          price: "From $6500",
          description:
            "For companies that need a premium digital growth system with strategy, automation, and performance in mind.",
          points: [
            "Custom premium design",
            "Strategic website structure",
            "Multi-page site + landing pages",
            "SEO pages for services / locations",
            "CRM / webhook / automation integration",
            "Google Ads / Meta Ads setup",
            "Lead qualification logic",
            "Analytics and conversion tracking",
            "Multilingual setup",
            "Premium launch support",
          ],
          cta: "Book a Call",
          premium: true,
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
      email: "aureviodig@gmail.com",
      whatsappNumber: "447388772715",
      strategyCallSubject: "Стратегічний дзвінок Aurevio",
    },
    nav: {
      services: "Послуги",
      work: "Роботи",
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
        {
          title: "QR-меню та оплати для ресторанів",
          summary:
            "QR-меню, цифрові сценарії замовлення та зручні платіжні рішення для ресторанів і кафе.",
        },
        {
          title: "Мобільні додатки",
          summary:
            "Індивідуальна розробка та дизайн мобільних додатків для бізнесу, якому потрібні сильні цифрові продукти, зручні сценарії користування та краща взаємодія з клієнтами.",
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
          category: "Сайт",
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Точніше позиціонування та кращий потік заявок для готельного закупівельного сегмента.",
        },
        {
          category: "Сайт",
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Чітка архітектура послуг і маршрутизація заявок для технічних клієнтів.",
        },
        {
          category: "Мобільний додаток",
          title: "LifeHelper Global",
          image: "/images/home/lifehelper-global.png",
          result:
            "Багатомовний мобільний додаток, створений для допомоги новоприбулим у щоденних справах, документах, комунікації та важливих локальних питаннях.",
        },
        {
          category: "Мобільний додаток",
          title: "Kids Bedtime Stories",
          image: "/images/home/kids-bedtime-stories.png",
          result: "Дитячий мобільний додаток з казками на ніч і спокійним, приємним форматом читання для сімей.",
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
      eyebrow: "Ціни",
      title: "Оберіть правильну стартову модель для вашого бізнесу.",
      subtitle: "Від чистого презентаційного сайту до повної цифрової системи зростання.",
      items: [
        {
          name: "Starter",
          price: "From $750",
          description:
            "Для бізнесів, яким потрібна чиста професійна онлайн-присутність у правильному стартовому бюджеті.",
          points: [
            "1–3 сторінки",
            "Адаптивний дизайн",
            "Контактна форма / WhatsApp",
            "Структура для формування довіри",
            "Базове SEO налаштування",
            "Підключення домену",
          ],
          cta: "Почати",
          light: true,
        },
        {
          name: "Growth",
          price: "From $1950",
          description:
            "Для бізнесів, яким потрібен сильніший сайт, що генерує заявки, а не лише гарно виглядає.",
          points: [
            "5–8 сторінок",
            "Структура з фокусом на конверсію",
            "Форми захоплення лідів",
            "WhatsApp / email / CTA логіка",
            "Локальна SEO основа",
            "Мобільна та швидкісна оптимізація",
            "Секції послуг / кейсів / FAQ",
            "Базове відстеження конверсій",
          ],
          cta: "Обрати Growth",
          featured: true,
        },
        {
          name: "Scale",
          price: "From $6500",
          description:
            "Для компаній, яким потрібна преміальна система цифрового зростання з фокусом на стратегію та автоматизацію.",
          points: [
            "Індивідуальний преміальний дизайн",
            "Стратегічна структура сайту",
            "Багатосторінковий сайт + лендінги",
            "SEO-сторінки для послуг / локацій",
            "CRM / webhook / automation інтеграція",
            "Налаштування Google Ads / Meta Ads",
            "Логіка кваліфікації лідів",
            "Аналітика та відстеження конверсій",
            "Мультимовне налаштування",
            "Преміальна підтримка запуску",
          ],
          cta: "Замовити дзвінок",
          premium: true,
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
      email: "aureviodig@gmail.com",
      whatsappNumber: "447388772715",
      strategyCallSubject: "Стратегический звонок Aurevio",
    },
    nav: {
      services: "Услуги",
      work: "Работы",
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
        {
          title: "QR-меню и оплаты для ресторанов",
          summary:
            "QR-меню, цифровые сценарии заказа и удобные платёжные решения для ресторанов и кафе.",
        },
        {
          title: "Мобильные приложения",
          summary:
            "Индивидуальная разработка и дизайн мобильных приложений для бизнеса, которому нужны сильные цифровые продукты, удобные пользовательские сценарии и лучшее взаимодействие с клиентами.",
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
          category: "Сайт",
          title: "QWave Hospitality",
          image: "/images/home/case-qwave.png",
          result: "Более точное позиционирование и сильнее поток заявок для гостиничного закупочного сегмента.",
        },
        {
          category: "Сайт",
          title: "RosPro Engineering",
          image: "/images/home/case-rospro.png",
          result: "Более понятная архитектура услуг и маршрутизация лидов для технических клиентов.",
        },
        {
          category: "Мобильное приложение",
          title: "LifeHelper Global",
          image: "/images/home/lifehelper-global.png",
          result:
            "Многоязычное мобильное приложение, созданное для помощи новичкам в ежедневных задачах, документах, коммуникации и важных локальных вопросах.",
        },
        {
          category: "Мобильное приложение",
          title: "Kids Bedtime Stories",
          image: "/images/home/kids-bedtime-stories.png",
          result: "Детское мобильное приложение со сказками на ночь и спокойным, приятным форматом чтения для семей.",
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
      eyebrow: "Цены",
      title: "Выберите правильную стартовую модель для вашего бизнеса.",
      subtitle: "От аккуратного презентационного сайта до полной цифровой системы роста.",
      items: [
        {
          name: "Starter",
          price: "From $750",
          description:
            "Для бизнеса, которому нужно аккуратное профессиональное онлайн-присутствие в правильном стартовом бюджете.",
          points: [
            "1–3 страницы",
            "Адаптивный дизайн",
            "Контактная форма / WhatsApp",
            "Структура для доверия",
            "Базовая SEO-настройка",
            "Подключение домена",
          ],
          cta: "Начать",
          light: true,
        },
        {
          name: "Growth",
          price: "From $1950",
          description:
            "Для бизнеса, которому нужен более сильный сайт, созданный для заявок, а не только для внешнего вида.",
          points: [
            "5–8 страниц",
            "Конверсионная структура",
            "Формы захвата лидов",
            "WhatsApp / email / CTA логика",
            "Локальная SEO-основа",
            "Мобильная и скоростная оптимизация",
            "Разделы услуг / кейсов / FAQ",
            "Базовый трекинг конверсий",
          ],
          cta: "Выбрать Growth",
          featured: true,
        },
        {
          name: "Scale",
          price: "From $6500",
          description:
            "Для компаний, которым нужна премиальная цифровая система роста с акцентом на стратегию и автоматизацию.",
          points: [
            "Индивидуальный премиальный дизайн",
            "Стратегическая структура сайта",
            "Многостраничный сайт + лендинги",
            "SEO-страницы для услуг / локаций",
            "CRM / webhook / automation интеграция",
            "Настройка Google Ads / Meta Ads",
            "Логика квалификации лидов",
            "Аналитика и трекинг конверсий",
            "Мультиязычная настройка",
            "Премиальная поддержка запуска",
          ],
          cta: "Заказать звонок",
          premium: true,
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
