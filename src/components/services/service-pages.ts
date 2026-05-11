export type ServiceLocale = "en" | "ua" | "ru";

export type ServiceHeroCopy = {
  eyebrow: string;
  h1: string;
  intro: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metadataTitle: string;
  description: string;
  hero: {
    image?: string;
    copy: Record<ServiceLocale, ServiceHeroCopy>;
  };
  eyebrow: string;
  h1: string;
  intro: string;
  forWho: string[];
  delivers: string[];
  benefits: string[];
  process: Array<{
    title: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    title: string;
    text: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export type LocalizedServiceContent = {
  forWho: string[];
  delivers: string[];
  benefits: string[];
  process: Array<{
    title: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    title: string;
    text: string;
    primaryLabel: string;
    secondaryLabel: string;
    emailLabel: string;
  };
};

export type ServiceChromeCopy = {
  nav: {
    services: string;
    work: string;
    pricing: string;
    contact: string;
    bookCall: string;
    languageSwitcherAriaLabel: string;
  };
  sections: {
    forWho: string;
    delivers: string;
    benefits: string;
    processEyebrow: string;
    processTitle: string;
    step: string;
    faqEyebrow: string;
    faqTitle: string;
  };
};

export const siteUrl = "https://aurevio.pro";
export const contactEmail = "aureviodig@gmail.com";
export const whatsappNumber = "447388772715";

export const servicePages: ServicePage[] = [
  {
    slug: "lead-generation-websites",
    title: "Lead-Generation Websites",
    metadataTitle: "Lead-Generation Websites for Small Businesses",
    description:
      "Lead-generation website design for small and local businesses that need clearer offers, stronger enquiry paths, and better contact flows.",
    hero: {
      image: "/images/services/hero-lead-generation-websites.png",
      copy: {
        en: {
          eyebrow: "Lead-Generation Websites",
          h1: "Premium websites built to generate qualified enquiries.",
          intro:
            "Create a sharper website journey for small and local businesses, with clearer offers, trust-building sections, and practical WhatsApp or contact paths.",
          primaryLabel: "Plan My Website",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "Сайти для заявок",
          h1: "Преміальні сайти, створені для якісних звернень.",
          intro:
            "Створіть зрозуміліший шлях для клієнта: сильний офер, блоки довіри та прості переходи до WhatsApp або контакту.",
          primaryLabel: "Обговорити сайт",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "Сайты для заявок",
          h1: "Премиальные сайты, созданные для качественных обращений.",
          intro:
            "Создайте более понятный путь для клиента: сильный оффер, блоки доверия и простые переходы в WhatsApp или контакт.",
          primaryLabel: "Обсудить сайт",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "Lead-Generation Websites",
    h1: "Lead-generation websites for small and local businesses.",
    intro:
      "AurevioPro designs websites that make the offer easy to understand, guide visitors toward action, and support practical lead capture through contact, email, and WhatsApp paths.",
    forWho: [
      "Local service businesses that rely on enquiries and booked calls.",
      "Companies with an outdated website that does not explain the offer clearly.",
      "Businesses preparing to run SEO, Google Ads, Meta Ads, or local campaigns.",
      "Teams that need a more professional presence before scaling marketing.",
    ],
    delivers: [
      "Clear homepage and service-page structure focused on enquiry intent.",
      "Conversion-focused page sections for services, proof, pricing signals, FAQs, and contact.",
      "Mobile-first layouts designed for quick scanning and simple next steps.",
      "WhatsApp, email, and contact CTA paths that reduce friction for visitors.",
      "Basic technical SEO foundations for indexing and sharing.",
    ],
    benefits: [
      "A clearer offer for visitors who are comparing providers.",
      "More direct paths from interest to enquiry.",
      "A stronger base for SEO pages, paid ads, and automation.",
      "A site that feels credible on mobile and desktop.",
    ],
    process: [
      {
        title: "Position the offer",
        text: "We clarify what the business sells, who it serves, and what visitors need to understand before contacting you.",
      },
      {
        title: "Build the page flow",
        text: "We plan the sections, calls to action, trust signals, and lead paths before visual production.",
      },
      {
        title: "Design and launch",
        text: "We create a polished, responsive website structure and prepare it for SEO, analytics, and future lead automation.",
      },
    ],
    faqs: [
      {
        question: "Is a lead-generation website different from a normal business website?",
        answer:
          "Yes. A normal website may simply present information, while a lead-generation website is structured around clarity, trust, and visitor actions such as WhatsApp, email, calls, or form enquiries.",
      },
      {
        question: "Can this work for a small local business?",
        answer:
          "Yes. The structure is especially useful for service businesses where customers need to understand the offer quickly and contact the business with confidence.",
      },
      {
        question: "Do you guarantee a specific number of leads?",
        answer:
          "No. Lead volume depends on demand, traffic, offer strength, and follow-up. The goal is to build a stronger website foundation that can convert suitable traffic more effectively.",
      },
    ],
    cta: {
      title: "Ready to turn your website into a clearer enquiry path?",
      text: "Tell us what your business sells, where you operate, and what kind of leads you want to attract.",
      primaryLabel: "Discuss a Premium Website",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "website-design",
    title: "Website Design",
    metadataTitle: "Website Design for Small Businesses",
    description:
      "Professional website design for small businesses that need a premium, trustworthy, mobile-friendly site built around clear services and enquiries.",
    hero: {
      image: "/images/services/hero-website-design.png",
      copy: {
        en: {
          eyebrow: "Website Design",
          h1: "Brand-led website design for small businesses.",
          intro:
            "Shape a premium online presence with clear structure, strong visual direction, and service pages that help visitors understand why they should contact you.",
          primaryLabel: "Discuss a Premium Website",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "Дизайн сайтів",
          h1: "Брендовий дизайн сайтів для малого бізнесу.",
          intro:
            "Сформуйте преміальну онлайн-присутність із чіткою структурою, сильним візуальним напрямом і сторінками послуг, які ведуть до контакту.",
          primaryLabel: "Обговорити преміальний вебсайт",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "Дизайн сайтов",
          h1: "Брендовый дизайн сайтов для малого бизнеса.",
          intro:
            "Сформируйте премиальное онлайн-присутствие с понятной структурой, сильным визуальным направлением и страницами услуг, которые ведут к контакту.",
          primaryLabel: "Обсудить премиальный сайт",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "Website Design",
    h1: "Website design for small businesses that need to look credible fast.",
    intro:
      "AurevioPro creates premium business websites that communicate clearly, feel trustworthy, and give visitors a simple path to contact you.",
    forWho: [
      "Small businesses launching their first serious website.",
      "Local providers replacing a basic or outdated online presence.",
      "Service businesses that need clearer pages for offers, locations, and industries.",
      "Founders who want a polished site before investing in growth campaigns.",
    ],
    delivers: [
      "A responsive website structure for mobile and desktop visitors.",
      "Professional visual direction aligned with the business offer.",
      "Homepage, service, proof, FAQ, and contact sections where appropriate.",
      "Clear CTA paths for email, WhatsApp, and booked calls.",
      "SEO-ready page basics such as metadata, headings, and crawlable content.",
    ],
    benefits: [
      "A stronger first impression for prospects who check you online.",
      "Clearer explanation of services and reasons to contact you.",
      "A website structure that can grow into SEO and landing-page campaigns.",
      "Less confusion for visitors who need to decide what to do next.",
    ],
    process: [
      {
        title: "Map the business",
        text: "We review the offer, audience, services, and current website gaps.",
      },
      {
        title: "Create the structure",
        text: "We plan the page hierarchy, messaging, and conversion points before building the interface.",
      },
      {
        title: "Build the website",
        text: "We deliver a clean, responsive website that is easy to scan and ready for future SEO improvements.",
      },
    ],
    faqs: [
      {
        question: "Do small businesses need a custom website?",
        answer:
          "A custom site is useful when your business needs to communicate a specific offer, build trust, and guide visitors toward enquiries instead of relying on a generic template.",
      },
      {
        question: "Can the website include WhatsApp contact options?",
        answer:
          "Yes. WhatsApp can be included as a clear contact path, especially for local businesses where customers prefer fast direct messaging.",
      },
      {
        question: "Can the website be expanded later?",
        answer:
          "Yes. A focused website can later grow with SEO landing pages, service pages, case studies, automation, and lead capture improvements.",
      },
    ],
    cta: {
      title: "Need a stronger website for your small business?",
      text: "Share your current website, services, and target market, and we will suggest the best starting point.",
      primaryLabel: "Book a Strategy Call",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    metadataTitle: "AI Agents for Businesses",
    description:
      "AI agent development for small businesses that want faster lead qualification, better follow-up, and practical automation around customer enquiries.",
    hero: {
      image: "/images/services/hero-ai-agents.png",
      copy: {
        en: {
          eyebrow: "AI Agents",
          h1: "Business AI agents for lead qualification and automation.",
          intro:
            "Plan AI-assisted workflows that answer common questions, collect useful lead context, and support WhatsApp, CRM, and follow-up processes.",
          primaryLabel: "Explore AI Agents",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "AI-агенти",
          h1: "AI-агенти для кваліфікації лідів та автоматизації.",
          intro:
            "Сплануйте AI-сценарії, які відповідають на типові питання, збирають контекст заявки та підтримують WhatsApp, CRM і фолоу-ап.",
          primaryLabel: "Обговорити AI-агента",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "AI-агенты",
          h1: "AI-агенты для квалификации лидов и автоматизации.",
          intro:
            "Спланируйте AI-сценарии, которые отвечают на типовые вопросы, собирают контекст заявки и поддерживают WhatsApp, CRM и follow-up.",
          primaryLabel: "Обсудить AI-агента",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "AI Agents",
    h1: "AI agents for businesses that need faster lead handling.",
    intro:
      "AurevioPro plans practical AI agent systems that help businesses respond to enquiries, qualify leads, route requests, and support repeatable customer workflows.",
    forWho: [
      "Businesses that receive repeated questions from prospects.",
      "Teams that need faster first responses without losing human oversight.",
      "Companies that want to qualify website or WhatsApp enquiries before sales follow-up.",
      "Service providers preparing to connect website leads with CRM or automation tools.",
    ],
    delivers: [
      "AI assistant planning for website, WhatsApp, or internal workflows.",
      "Lead qualification questions tailored to services, budget, timeline, and location.",
      "Conversation flows that route visitors toward the right next step.",
      "Safe handoff logic for human review and follow-up.",
      "Implementation plans that keep sensitive keys and business logic server-side.",
    ],
    benefits: [
      "Faster responses to common prospect questions.",
      "Cleaner lead information before a human follows up.",
      "Less manual repetition for service teams.",
      "A practical path toward automation without replacing human judgment.",
    ],
    process: [
      {
        title: "Define the use case",
        text: "We identify the enquiries, questions, and workflows where an AI agent can help safely.",
      },
      {
        title: "Design the conversation",
        text: "We map qualification steps, escalation rules, contact collection, and fallback messages.",
      },
      {
        title: "Prepare implementation",
        text: "We plan the backend, integrations, security requirements, and measurement before launching the agent.",
      },
    ],
    faqs: [
      {
        question: "Is this a chatbot or a business AI agent?",
        answer:
          "The goal is a business-focused assistant, not a novelty chatbot. It should collect useful context, answer suitable questions, and route leads toward the right next step.",
      },
      {
        question: "Can an AI agent connect to WhatsApp or a CRM?",
        answer:
          "Yes, with the right backend and integration setup. Secrets, webhooks, and lead storage should be handled server-side, not directly in the browser.",
      },
      {
        question: "Will the AI agent replace the sales team?",
        answer:
          "No. It should support first response, qualification, and routing while keeping important decisions and follow-up under human control.",
      },
    ],
    cta: {
      title: "Want to explore an AI agent for your business?",
      text: "Start with the workflow: what customers ask, what details you need, and when a human should step in.",
      primaryLabel: "Discuss AI Agent Development",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "seo-landing-pages",
    title: "SEO Landing Pages",
    metadataTitle: "SEO Landing Pages for Small Businesses",
    description:
      "SEO landing pages for service and local businesses that need clear, focused pages for services, locations, campaigns, and search intent.",
    hero: {
      image: "/images/services/hero-seo-landing-pages.png",
      copy: {
        en: {
          eyebrow: "SEO Landing Pages",
          h1: "SEO landing pages for local services and organic leads.",
          intro:
            "Build focused pages for services, locations, and search intent so visitors find clearer answers and stronger reasons to enquire.",
          primaryLabel: "Plan SEO Pages",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "SEO-сторінки",
          h1: "SEO-лендінги для локальних послуг та органічних заявок.",
          intro:
            "Створюйте фокусовані сторінки для послуг, локацій і пошукового наміру, щоб відвідувачі швидше знаходили відповідь і зверталися.",
          primaryLabel: "Спланувати SEO-сторінки",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "SEO-страницы",
          h1: "SEO-лендинги для локальных услуг и органических заявок.",
          intro:
            "Создавайте сфокусированные страницы для услуг, локаций и поискового намерения, чтобы посетители быстрее находили ответ и обращались.",
          primaryLabel: "Спланировать SEO-страницы",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "SEO Landing Pages",
    h1: "SEO landing pages for services, locations, and local search intent.",
    intro:
      "AurevioPro creates focused landing pages that explain one service or market clearly, answer buyer questions, and give visitors a direct route to enquire.",
    forWho: [
      "Service businesses that need dedicated pages for each main offer.",
      "Local companies targeting specific towns, regions, or service areas.",
      "Businesses running ads that need focused post-click pages.",
      "Websites where all services are currently crowded onto one generic page.",
    ],
    delivers: [
      "Service or location page structure based on clear search intent.",
      "Unique headings, metadata, FAQs, and conversion sections for each page.",
      "Internal links that connect related services and the homepage.",
      "CTA paths for WhatsApp, email, calls, or contact sections.",
      "Truthful, useful content without keyword stuffing or unrealistic claims.",
    ],
    benefits: [
      "Clearer pages for visitors searching for a specific service.",
      "A better foundation for organic search and paid campaigns.",
      "More relevant internal links across the website.",
      "A scalable structure for future service and location expansion.",
    ],
    process: [
      {
        title: "Choose the page targets",
        text: "We identify which services, locations, or campaigns deserve dedicated pages.",
      },
      {
        title: "Build the page framework",
        text: "We create clear sections for intent, benefits, process, FAQs, and contact actions.",
      },
      {
        title: "Connect and measure",
        text: "We add internal links, metadata, sitemap entries, and conversion paths so pages can support growth activity.",
      },
    ],
    faqs: [
      {
        question: "Are SEO landing pages the same as blog posts?",
        answer:
          "No. SEO landing pages are usually commercial pages focused on a service, location, or campaign intent. They are designed to inform and convert, not just publish articles.",
      },
      {
        question: "How many SEO pages should a business start with?",
        answer:
          "A safe first step is to cover the most important services and markets before expanding. Thin or duplicated pages should be avoided.",
      },
      {
        question: "Do SEO landing pages guarantee rankings?",
        answer:
          "No. Rankings depend on competition, site authority, content quality, technical health, and ongoing work. The pages create a stronger foundation for discoverability.",
      },
    ],
    cta: {
      title: "Need focused SEO pages for your services?",
      text: "Tell us which services and locations matter most, and we will help shape a sensible first page set.",
      primaryLabel: "Plan SEO Landing Pages",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    metadataTitle: "Business Automation for Small Businesses",
    description:
      "Business automation for small and local companies that need cleaner lead handling, follow-up workflows, and practical operational systems.",
    hero: {
      image: "/images/services/hero-business-automation.png",
      copy: {
        en: {
          eyebrow: "Business Automation",
          h1: "Workflow automation for lead routing, CRM handoff, and follow-up.",
          intro:
            "Reduce manual lead handling with cleaner workflows for contact capture, notifications, CRM handoff, and repeatable business operations.",
          primaryLabel: "Discuss Automation",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "Автоматизація бізнесу",
          h1: "Автоматизація процесів для маршрутизації лідів, CRM і фолоу-апу.",
          intro:
            "Зменшуйте ручну обробку заявок завдяки чітким сценаріям збору контактів, сповіщень, передачі в CRM і повторюваних бізнес-процесів.",
          primaryLabel: "Обговорити автоматизацію",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "Автоматизация бизнеса",
          h1: "Автоматизация процессов для маршрутизации лидов, CRM и follow-up.",
          intro:
            "Сократите ручную обработку заявок с помощью понятных сценариев сбора контактов, уведомлений, передачи в CRM и повторяемых бизнес-процессов.",
          primaryLabel: "Обсудить автоматизацию",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "Business Automation",
    h1: "Business automation for cleaner lead handling and follow-up.",
    intro:
      "AurevioPro helps small businesses plan practical automation around website enquiries, WhatsApp contact, lead routing, follow-up, and repeatable admin workflows.",
    forWho: [
      "Businesses losing time on repetitive enquiry handling.",
      "Teams that need leads routed to the right person or system.",
      "Companies that want better follow-up after website or WhatsApp contact.",
      "Small businesses preparing to connect their website with CRM, email, or workflow tools.",
    ],
    delivers: [
      "Lead capture and routing workflow planning.",
      "Automation maps for email, WhatsApp, CRM, and internal handoff steps.",
      "Qualification fields for service, location, budget, timeline, and contact preference.",
      "Practical implementation plans that avoid exposing private keys in the browser.",
      "Simple reporting points for understanding where enquiries come from.",
    ],
    benefits: [
      "Less manual copying between inboxes, chats, and spreadsheets.",
      "Faster follow-up for qualified enquiries.",
      "More consistent lead information for sales conversations.",
      "A clearer operational base for future AI agent features.",
    ],
    process: [
      {
        title: "Audit the workflow",
        text: "We look at how enquiries arrive, where they go, and what manual steps slow the team down.",
      },
      {
        title: "Design the automation",
        text: "We define triggers, required fields, notifications, handoffs, and safe fallback paths.",
      },
      {
        title: "Prepare for launch",
        text: "We document the implementation, privacy needs, testing steps, and future improvement path.",
      },
    ],
    faqs: [
      {
        question: "What can a small business automate first?",
        answer:
          "Lead capture, notifications, enquiry routing, follow-up reminders, and basic CRM updates are often sensible first steps.",
      },
      {
        question: "Does automation require a large CRM?",
        answer:
          "Not always. The right setup depends on the business. Some teams can start with email, WhatsApp, forms, and lightweight workflow tools before moving to a larger CRM.",
      },
      {
        question: "Can automation connect with an AI agent later?",
        answer:
          "Yes. A clean lead workflow makes it easier to add AI qualification or assistant features safely in a later phase.",
      },
    ],
    cta: {
      title: "Ready to make lead handling less manual?",
      text: "Share the steps you repeat today, and we will help identify where automation can safely support your team.",
      primaryLabel: "Discuss Automation",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    metadataTitle: "Mobile App Design and Development for Small Businesses",
    description:
      "Mobile app design and development for businesses that need practical digital products, better customer flows, and stronger mobile experiences.",
    hero: {
      image: "/images/services/hero-mobile-apps.png",
      copy: {
        en: {
          eyebrow: "Mobile Apps",
          h1: "Mobile apps for stronger customer journeys and digital products.",
          intro:
            "AurevioPro helps small and growing businesses plan and build practical mobile app experiences around clear user flows, useful features, and long-term product growth.",
          primaryLabel: "Discuss Mobile App",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "Мобільні додатки",
          h1: "Мобільні додатки для сильніших клієнтських сценаріїв і цифрових продуктів.",
          intro:
            "AurevioPro допомагає бізнесам планувати й створювати практичні мобільні продукти з чіткими користувацькими сценаріями, корисними функціями та основою для розвитку.",
          primaryLabel: "Обговорити мобільний додаток",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "Мобильные приложения",
          h1: "Мобильные приложения для более сильных клиентских сценариев и цифровых продуктов.",
          intro:
            "AurevioPro помогает бизнесам планировать и создавать практичные мобильные продукты с понятными пользовательскими сценариями, полезными функциями и основой для роста.",
          primaryLabel: "Обсудить мобильное приложение",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "Mobile Apps",
    h1: "Mobile apps for stronger customer journeys and digital products.",
    intro:
      "AurevioPro helps businesses shape mobile app experiences that are useful, focused, and ready to support customer engagement or internal workflows.",
    forWho: [
      "Businesses that need a customer-facing mobile product.",
      "Teams turning an existing workflow or service into a mobile experience.",
      "Founders who need a clear app structure before development investment.",
      "Companies that want better customer engagement beyond a website.",
    ],
    delivers: [
      "Mobile app strategy, feature planning, and user-flow structure.",
      "UX and interface direction for key customer journeys.",
      "App screens and product architecture for launch-ready development.",
      "Practical planning for notifications, accounts, content, or service flows.",
      "A product roadmap that keeps the first version focused and realistic.",
    ],
    benefits: [
      "A clearer product concept before heavy development spend.",
      "Better customer experience on mobile-first journeys.",
      "A focused first version that avoids overloaded feature sets.",
      "A stronger base for future integrations, automation, and growth.",
    ],
    process: [
      {
        title: "Define the product",
        text: "We clarify the app goal, target users, primary flows, and the first version that makes business sense.",
      },
      {
        title: "Map the experience",
        text: "We plan screens, navigation, feature priorities, and the moments where users need clarity or action.",
      },
      {
        title: "Prepare for build",
        text: "We shape the app structure, launch scope, and next steps for development, testing, and iteration.",
      },
    ],
    faqs: [
      {
        question: "Should my business build a mobile app or improve the website first?",
        answer:
          "It depends on the workflow. If the user needs repeated mobile interaction, accounts, notifications, or app-only flows, a mobile app may make sense. Otherwise, a strong website can be the better first step.",
      },
      {
        question: "Can you help plan an app before development?",
        answer:
          "Yes. Planning the structure, user flows, and first-version scope before development helps reduce wasted work and keeps the product focused.",
      },
      {
        question: "Do mobile apps connect with automation or CRM systems?",
        answer:
          "They can, if the backend and integration plan are designed properly. Those connections should be planned around security, privacy, and maintainability.",
      },
    ],
    cta: {
      title: "Need a clearer mobile app plan?",
      text: "Tell us what users need to do, what the app should support, and what a focused first version should achieve.",
      primaryLabel: "Discuss Mobile App",
      secondaryLabel: "Message on WhatsApp",
    },
  },
  {
    slug: "qr-menu-restaurant-payments",
    title: "QR Menus & Restaurant Payments",
    metadataTitle: "QR Menus and Restaurant Payment Systems",
    description:
      "QR menu and restaurant payment systems for cafes, restaurants, and hospitality businesses that need smoother digital ordering and contactless customer flows.",
    hero: {
      image: "/images/services/hero-qr-menu-restaurant-payments.png",
      copy: {
        en: {
          eyebrow: "QR Menus & Payments",
          h1: "QR menu and payment flows for restaurants and cafes.",
          intro:
            "Build a cleaner digital ordering experience with QR menus, structured menu content, and payment-ready customer journeys for hospitality teams.",
          primaryLabel: "Discuss QR Menu System",
          secondaryLabel: "Message on WhatsApp",
        },
        ua: {
          eyebrow: "QR-меню та оплати",
          h1: "QR-меню та платіжні сценарії для ресторанів і кафе.",
          intro:
            "Створіть зручніший цифровий шлях замовлення з QR-меню, структурованим меню та готовими до оплати сценаріями для hospitality-команд.",
          primaryLabel: "Обговорити QR-меню",
          secondaryLabel: "Написати у WhatsApp",
        },
        ru: {
          eyebrow: "QR-меню и оплаты",
          h1: "QR-меню и платёжные сценарии для ресторанов и кафе.",
          intro:
            "Создайте более удобный цифровой путь заказа с QR-меню, структурированным меню и готовыми к оплате сценариями для hospitality-команд.",
          primaryLabel: "Обсудить QR-меню",
          secondaryLabel: "Написать в WhatsApp",
        },
      },
    },
    eyebrow: "QR Menus & Restaurant Payments",
    h1: "QR menu and payment flows for restaurants and cafes.",
    intro:
      "AurevioPro helps hospitality businesses create practical QR menu and ordering systems that improve guest convenience and make menu updates easier.",
    forWho: [
      "Restaurants and cafes that want a clearer digital menu experience.",
      "Hospitality teams that need easier menu updates and seasonal changes.",
      "Venues exploring QR ordering, payment flows, or table-based customer journeys.",
      "Operators who want a more modern contactless customer experience.",
    ],
    delivers: [
      "QR menu structure for categories, items, details, and calls to action.",
      "Mobile-first menu pages designed for fast scanning at the table.",
      "Ordering or payment-flow planning where suitable for the business model.",
      "Content structure for prices, modifiers, allergens, languages, and updates.",
      "A practical path to connect menus with future restaurant workflows.",
    ],
    benefits: [
      "A smoother guest experience from table to order decision.",
      "Easier menu updates without reprinting every small change.",
      "A more modern digital touchpoint for restaurants and cafes.",
      "A foundation for future ordering, payment, or loyalty features.",
    ],
    process: [
      {
        title: "Structure the menu",
        text: "We organize categories, items, details, pricing needs, and the customer journey from scan to action.",
      },
      {
        title: "Design the mobile flow",
        text: "We create a menu experience that is easy to read, quick to navigate, and aligned with the venue brand.",
      },
      {
        title: "Prepare for operations",
        text: "We plan updates, QR placement, payment or ordering paths, and future workflow improvements.",
      },
    ],
    faqs: [
      {
        question: "Is a QR menu only a digital PDF?",
        answer:
          "It should be more than a PDF. A useful QR menu is mobile-friendly, structured, easy to update, and designed around the guest experience.",
      },
      {
        question: "Can QR menus support payments?",
        answer:
          "Yes, depending on the payment provider and restaurant workflow. Payment flows should be planned carefully around operations and customer trust.",
      },
      {
        question: "Can the menu be multilingual?",
        answer:
          "Yes. Multilingual menu structure can be planned from the start so restaurants can support different customer groups more clearly.",
      },
    ],
    cta: {
      title: "Want a cleaner QR menu experience?",
      text: "Share your venue type, menu structure, and whether you need ordering, payment, or simple digital menu flows.",
      primaryLabel: "Discuss QR Menu",
      secondaryLabel: "Message on WhatsApp",
    },
  },
];

export const servicePageSlugs = servicePages.map((page) => page.slug);

export const serviceChromeTranslations: Record<ServiceLocale, ServiceChromeCopy> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      pricing: "Pricing",
      contact: "Contact",
      bookCall: "Book Call",
      languageSwitcherAriaLabel: "Language switcher",
    },
    sections: {
      forWho: "Who It Is For",
      delivers: "What We Build",
      benefits: "Benefits",
      processEyebrow: "Process",
      processTitle: "A simple path from idea to launch.",
      step: "Step",
      faqEyebrow: "FAQ",
      faqTitle: "Common questions.",
    },
  },
  ua: {
    nav: {
      services: "Послуги",
      work: "Роботи",
      pricing: "Ціни",
      contact: "Контакт",
      bookCall: "Замовити дзвінок",
      languageSwitcherAriaLabel: "Перемикач мови",
    },
    sections: {
      forWho: "Для кого це",
      delivers: "Що ми створюємо",
      benefits: "Переваги",
      processEyebrow: "Процес",
      processTitle: "Простий шлях від ідеї до запуску.",
      step: "Крок",
      faqEyebrow: "FAQ",
      faqTitle: "Поширені запитання.",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      work: "Работы",
      pricing: "Цены",
      contact: "Контакт",
      bookCall: "Заказать звонок",
      languageSwitcherAriaLabel: "Переключатель языка",
    },
    sections: {
      forWho: "Для кого это",
      delivers: "Что мы создаём",
      benefits: "Преимущества",
      processEyebrow: "Процесс",
      processTitle: "Понятный путь от идеи до запуска.",
      step: "Шаг",
      faqEyebrow: "FAQ",
      faqTitle: "Частые вопросы.",
    },
  },
};

const serviceBodyTranslations: Partial<Record<string, Partial<Record<ServiceLocale, LocalizedServiceContent>>>> = {
  "lead-generation-websites": {
    ua: {
      forWho: [
        "Локальні сервісні бізнеси, яким потрібні заявки та дзвінки.",
        "Компанії із застарілим сайтом, який нечітко пояснює послуги.",
        "Бізнеси, що готуються запускати SEO, Google Ads, Meta Ads або локальні кампанії.",
        "Команди, яким потрібна професійніша онлайн-присутність перед масштабуванням маркетингу.",
      ],
      delivers: [
        "Структуру головної та сервісних сторінок із фокусом на запити клієнтів.",
        "Конверсійні блоки для послуг, довіри, цінових орієнтирів, FAQ і контакту.",
        "Mobile-first інтерфейс для швидкого сканування та простих наступних кроків.",
        "CTA-шляхи через WhatsApp, email і контакт, які зменшують тертя.",
        "Базову технічну SEO-основу для індексації та поширення.",
      ],
      benefits: [
        "Зрозуміліший офер для відвідувачів, які порівнюють підрядників.",
        "Пряміший шлях від інтересу до звернення.",
        "Сильніша основа для SEO-сторінок, реклами та автоматизації.",
        "Сайт, який виглядає переконливо на мобільних і десктопі.",
      ],
      process: [
        {
          title: "Формуємо офер",
          text: "Уточнюємо, що продає бізнес, для кого це і що відвідувач має зрозуміти перед контактом.",
        },
        {
          title: "Будуємо логіку сторінок",
          text: "Плануємо секції, заклики до дії, блоки довіри та маршрути для заявок до візуальної роботи.",
        },
        {
          title: "Дизайн і запуск",
          text: "Створюємо адаптивну структуру сайту та готуємо її до SEO, аналітики й майбутньої автоматизації лідів.",
        },
      ],
      faqs: [
        {
          question: "Чим сайт для заявок відрізняється від звичайного сайту?",
          answer:
            "Звичайний сайт може просто показувати інформацію. Сайт для заявок будується навколо ясності, довіри та дій: WhatsApp, email, дзвінок або форма.",
        },
        {
          question: "Чи підходить це малому локальному бізнесу?",
          answer:
            "Так. Така структура особливо корисна для сервісних бізнесів, де клієнт має швидко зрозуміти пропозицію й упевнено звернутися.",
        },
        {
          question: "Чи гарантуєте ви конкретну кількість лідів?",
          answer:
            "Ні. Кількість лідів залежить від попиту, трафіку, офера та фолоу-апу. Ми створюємо сильнішу основу, яка краще конвертує релевантний трафік.",
        },
      ],
      cta: {
        title: "Готові зробити сайт зрозумілішим джерелом заявок?",
        text: "Розкажіть, що продає ваш бізнес, де ви працюєте і які заявки хочете отримувати.",
        primaryLabel: "Обговорити преміальний вебсайт",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Локальные сервисные бизнесы, которым нужны обращения и звонки.",
        "Компании с устаревшим сайтом, который неясно объясняет услуги.",
        "Бизнесы, готовящие SEO, Google Ads, Meta Ads или локальные кампании.",
        "Команды, которым нужна более профессиональная онлайн-присутствие перед масштабированием маркетинга.",
      ],
      delivers: [
        "Структуру главной и сервисных страниц с фокусом на намерение клиента.",
        "Конверсионные блоки для услуг, доверия, ценовых ориентиров, FAQ и контакта.",
        "Mobile-first интерфейс для быстрого сканирования и простых следующих шагов.",
        "CTA-пути через WhatsApp, email и контакт, которые снижают трение.",
        "Базовую техническую SEO-основу для индексации и распространения.",
      ],
      benefits: [
        "Более понятный оффер для посетителей, которые сравнивают подрядчиков.",
        "Более прямой путь от интереса к обращению.",
        "Сильная база для SEO-страниц, рекламы и автоматизации.",
        "Сайт, который выглядит убедительно на мобильных и десктопе.",
      ],
      process: [
        {
          title: "Формируем оффер",
          text: "Уточняем, что продаёт бизнес, для кого это и что посетитель должен понять перед контактом.",
        },
        {
          title: "Строим логику страниц",
          text: "Планируем секции, призывы к действию, блоки доверия и маршруты для заявок до визуальной работы.",
        },
        {
          title: "Дизайн и запуск",
          text: "Создаём адаптивную структуру сайта и готовим её к SEO, аналитике и будущей автоматизации лидов.",
        },
      ],
      faqs: [
        {
          question: "Чем сайт для заявок отличается от обычного сайта?",
          answer:
            "Обычный сайт может просто показывать информацию. Сайт для заявок строится вокруг ясности, доверия и действий: WhatsApp, email, звонок или форма.",
        },
        {
          question: "Подходит ли это малому локальному бизнесу?",
          answer:
            "Да. Такая структура особенно полезна для сервисных бизнесов, где клиенту нужно быстро понять предложение и уверенно обратиться.",
        },
        {
          question: "Вы гарантируете конкретное количество лидов?",
          answer:
            "Нет. Количество лидов зависит от спроса, трафика, оффера и follow-up. Мы создаём более сильную основу, которая лучше конвертирует релевантный трафик.",
        },
      ],
      cta: {
        title: "Готовы сделать сайт более понятным источником заявок?",
        text: "Расскажите, что продаёт ваш бизнес, где вы работаете и какие обращения хотите получать.",
        primaryLabel: "Обсудить премиальный сайт",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "website-design": {
    ua: {
      forWho: [
        "Малі бізнеси, які запускають перший серйозний сайт.",
        "Локальні компанії, що замінюють базову або застарілу онлайн-присутність.",
        "Сервісні бізнеси, яким потрібні зрозумілі сторінки послуг, локацій та напрямів.",
        "Власники, які хочуть мати преміальний сайт перед інвестиціями в зростання.",
      ],
      delivers: [
        "Адаптивну структуру сайту для мобільних і десктопних відвідувачів.",
        "Професійний візуальний напрям, узгоджений із бізнес-пропозицією.",
        "Блоки головної, послуг, довіри, FAQ і контакту, де це доречно.",
        "Чіткі CTA-шляхи для email, WhatsApp і дзвінків.",
        "SEO-ready основу: метадані, заголовки та індексований контент.",
      ],
      benefits: [
        "Сильніше перше враження для потенційних клієнтів.",
        "Зрозуміліше пояснення послуг і причин звернутися.",
        "Структура, яку можна розвивати через SEO та лендінги.",
        "Менше плутанини для відвідувачів щодо наступного кроку.",
      ],
      process: [
        { title: "Аналізуємо бізнес", text: "Розбираємо офер, аудиторію, послуги та слабкі місця поточного сайту." },
        { title: "Створюємо структуру", text: "Плануємо ієрархію сторінок, повідомлення та точки конверсії до побудови інтерфейсу." },
        { title: "Будуємо сайт", text: "Запускаємо чистий адаптивний сайт, який легко сканувати й розвивати через SEO." },
      ],
      faqs: [
        {
          question: "Чи потрібен малому бізнесу індивідуальний сайт?",
          answer:
            "Індивідуальний сайт корисний, коли потрібно чітко пояснити пропозицію, сформувати довіру та вести відвідувачів до звернення.",
        },
        {
          question: "Чи можна додати WhatsApp як контактний канал?",
          answer: "Так. WhatsApp добре працює для локального бізнесу, де клієнти часто хочуть швидко написати напряму.",
        },
        {
          question: "Чи можна розширити сайт пізніше?",
          answer:
            "Так. Сайт можна розвивати через SEO-сторінки, сторінки послуг, кейси, автоматизацію та покращення захоплення лідів.",
        },
      ],
      cta: {
        title: "Потрібен сильніший сайт для малого бізнесу?",
        text: "Поділіться поточним сайтом, послугами та ринком, і ми підкажемо найкращий старт.",
        primaryLabel: "Замовити стратегічний дзвінок",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Малые бизнесы, запускающие первый серьёзный сайт.",
        "Локальные компании, которые заменяют базовое или устаревшее онлайн-присутствие.",
        "Сервисные бизнесы, которым нужны понятные страницы услуг, локаций и направлений.",
        "Владельцы, которые хотят премиальный сайт перед инвестициями в рост.",
      ],
      delivers: [
        "Адаптивную структуру сайта для мобильных и десктопных посетителей.",
        "Профессиональное визуальное направление, согласованное с бизнес-предложением.",
        "Блоки главной, услуг, доверия, FAQ и контакта, где это уместно.",
        "Чёткие CTA-пути для email, WhatsApp и звонков.",
        "SEO-ready основу: метаданные, заголовки и индексируемый контент.",
      ],
      benefits: [
        "Более сильное первое впечатление для потенциальных клиентов.",
        "Более понятное объяснение услуг и причин обратиться.",
        "Структура, которую можно развивать через SEO и лендинги.",
        "Меньше путаницы для посетителей по поводу следующего шага.",
      ],
      process: [
        { title: "Анализируем бизнес", text: "Разбираем оффер, аудиторию, услуги и слабые места текущего сайта." },
        { title: "Создаём структуру", text: "Планируем иерархию страниц, сообщения и точки конверсии до построения интерфейса." },
        { title: "Строим сайт", text: "Запускаем чистый адаптивный сайт, который легко сканировать и развивать через SEO." },
      ],
      faqs: [
        {
          question: "Нужен ли малому бизнесу индивидуальный сайт?",
          answer:
            "Индивидуальный сайт полезен, когда нужно ясно объяснить предложение, сформировать доверие и вести посетителей к обращению.",
        },
        { question: "Можно ли добавить WhatsApp как контактный канал?", answer: "Да. WhatsApp хорошо работает для локального бизнеса, где клиенты часто хотят быстро написать напрямую." },
        {
          question: "Можно ли расширить сайт позже?",
          answer:
            "Да. Сайт можно развивать через SEO-страницы, страницы услуг, кейсы, автоматизацию и улучшение захвата лидов.",
        },
      ],
      cta: {
        title: "Нужен более сильный сайт для малого бизнеса?",
        text: "Поделитесь текущим сайтом, услугами и рынком, и мы подскажем лучший старт.",
        primaryLabel: "Заказать стратегический звонок",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "ai-agents": {
    ua: {
      forWho: [
        "Бізнеси, які регулярно отримують повторювані питання від клієнтів.",
        "Команди, яким потрібна швидша перша відповідь без втрати людського контролю.",
        "Компанії, що хочуть кваліфікувати заявки з сайту або WhatsApp перед продажем.",
        "Сервісні провайдери, які готують звʼязку сайту з CRM чи автоматизаціями.",
      ],
      delivers: [
        "Планування AI-асистента для сайту, WhatsApp або внутрішніх процесів.",
        "Питання кваліфікації за послугою, бюджетом, термінами та локацією.",
        "Сценарії діалогу, які ведуть відвідувача до правильного наступного кроку.",
        "Безпечну логіку передачі людині для перевірки та фолоу-апу.",
        "План реалізації, де ключі та бізнес-логіка залишаються на сервері.",
      ],
      benefits: [
        "Швидші відповіді на типові питання потенційних клієнтів.",
        "Чистіша інформація про лід перед фолоу-апом менеджера.",
        "Менше ручного повторення для сервісної команди.",
        "Практичний шлях до автоматизації без заміни людських рішень.",
      ],
      process: [
        { title: "Визначаємо сценарій", text: "Знаходимо запити, питання та процеси, де AI-агент може допомогти безпечно." },
        { title: "Проєктуємо діалог", text: "Плануємо кваліфікацію, правила ескалації, збір контактів і fallback-повідомлення." },
        { title: "Готуємо впровадження", text: "Описуємо backend, інтеграції, вимоги безпеки та метрики перед запуском." },
      ],
      faqs: [
        {
          question: "Це чатбот чи бізнес AI-агент?",
          answer:
            "Мета — бізнес-асистент, а не декоративний чат. Він має збирати корисний контекст, відповідати на доречні питання та маршрутизувати ліди.",
        },
        {
          question: "Чи можна підключити AI-агента до WhatsApp або CRM?",
          answer: "Так, за правильної backend-архітектури. Секрети, webhooks і зберігання лідів не мають працювати напряму в браузері.",
        },
        {
          question: "Чи замінить AI-агент відділ продажів?",
          answer: "Ні. Він підтримує першу відповідь, кваліфікацію та маршрутизацію, а важливі рішення залишає людям.",
        },
      ],
      cta: {
        title: "Хочете розглянути AI-агента для бізнесу?",
        text: "Почніть із процесу: що питають клієнти, які дані потрібні і коли має підключатися людина.",
        primaryLabel: "Обговорити AI-агента",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Бизнесы, которые регулярно получают повторяющиеся вопросы от клиентов.",
        "Команды, которым нужен более быстрый первый ответ без потери человеческого контроля.",
        "Компании, которые хотят квалифицировать заявки с сайта или WhatsApp перед продажей.",
        "Сервисные провайдеры, готовящие связку сайта с CRM или автоматизациями.",
      ],
      delivers: [
        "Планирование AI-ассистента для сайта, WhatsApp или внутренних процессов.",
        "Вопросы квалификации по услуге, бюджету, срокам и локации.",
        "Сценарии диалога, которые ведут посетителя к правильному следующему шагу.",
        "Безопасную логику передачи человеку для проверки и follow-up.",
        "План реализации, где ключи и бизнес-логика остаются на сервере.",
      ],
      benefits: [
        "Более быстрые ответы на типовые вопросы потенциальных клиентов.",
        "Более чистая информация о лиде перед follow-up менеджера.",
        "Меньше ручного повторения для сервисной команды.",
        "Практичный путь к автоматизации без замены человеческих решений.",
      ],
      process: [
        { title: "Определяем сценарий", text: "Находим запросы, вопросы и процессы, где AI-агент может помогать безопасно." },
        { title: "Проектируем диалог", text: "Планируем квалификацию, правила эскалации, сбор контактов и fallback-сообщения." },
        { title: "Готовим внедрение", text: "Описываем backend, интеграции, требования безопасности и метрики перед запуском." },
      ],
      faqs: [
        {
          question: "Это чатбот или бизнес AI-агент?",
          answer:
            "Цель — бизнес-ассистент, а не декоративный чат. Он должен собирать полезный контекст, отвечать на подходящие вопросы и маршрутизировать лиды.",
        },
        {
          question: "Можно ли подключить AI-агента к WhatsApp или CRM?",
          answer: "Да, при правильной backend-архитектуре. Секреты, webhooks и хранение лидов не должны работать напрямую в браузере.",
        },
        { question: "Заменит ли AI-агент отдел продаж?", answer: "Нет. Он поддерживает первый ответ, квалификацию и маршрутизацию, а важные решения оставляет людям." },
      ],
      cta: {
        title: "Хотите рассмотреть AI-агента для бизнеса?",
        text: "Начните с процесса: что спрашивают клиенты, какие данные нужны и когда должен подключаться человек.",
        primaryLabel: "Обсудить AI-агента",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "seo-landing-pages": {
    ua: {
      forWho: [
        "Сервісні бізнеси, яким потрібні окремі сторінки для головних послуг.",
        "Локальні компанії, що працюють у конкретних містах, регіонах або зонах обслуговування.",
        "Бізнеси з рекламою, яким потрібні сфокусовані сторінки після кліку.",
        "Сайти, де всі послуги зараз зібрані на одній загальній сторінці.",
      ],
      delivers: [
        "Структуру сторінок для послуг або локацій на основі пошукового наміру.",
        "Унікальні заголовки, метадані, FAQ та конверсійні блоки для кожної сторінки.",
        "Внутрішні посилання між повʼязаними послугами та головною сторінкою.",
        "CTA-шляхи до WhatsApp, email, дзвінків або контактного блоку.",
        "Корисний правдивий контент без keyword stuffing і нереалістичних обіцянок.",
      ],
      benefits: [
        "Зрозуміліші сторінки для людей, які шукають конкретну послугу.",
        "Краща основа для органічного пошуку та рекламних кампаній.",
        "Більш релевантні внутрішні посилання на сайті.",
        "Масштабована структура для майбутніх сервісних і локальних сторінок.",
      ],
      process: [
        { title: "Обираємо цілі сторінок", text: "Визначаємо, які послуги, локації або кампанії потребують окремих сторінок." },
        { title: "Будуємо каркас", text: "Створюємо секції для наміру, переваг, процесу, FAQ і контактних дій." },
        { title: "Звʼязуємо і вимірюємо", text: "Додаємо внутрішні посилання, метадані, sitemap і шляхи конверсії." },
      ],
      faqs: [
        {
          question: "SEO-лендінги — це те саме, що блог?",
          answer:
            "Ні. SEO-лендінги зазвичай комерційні сторінки під послугу, локацію або кампанію. Вони інформують і ведуть до звернення.",
        },
        {
          question: "Скільки SEO-сторінок варто запускати спочатку?",
          answer:
            "Безпечний старт — покрити найважливіші послуги та ринки перед масштабуванням. Тонких або дубльованих сторінок краще уникати.",
        },
        {
          question: "Чи гарантують SEO-сторінки позиції?",
          answer:
            "Ні. Позиції залежать від конкуренції, авторитету сайту, якості контенту, технічного стану та постійної роботи.",
        },
      ],
      cta: {
        title: "Потрібні сфокусовані SEO-сторінки для послуг?",
        text: "Розкажіть, які послуги та локації найважливіші, і ми допоможемо сформувати перший набір сторінок.",
        primaryLabel: "Спланувати SEO-сторінки",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Сервисные бизнесы, которым нужны отдельные страницы для главных услуг.",
        "Локальные компании, работающие в конкретных городах, регионах или зонах обслуживания.",
        "Бизнесы с рекламой, которым нужны сфокусированные страницы после клика.",
        "Сайты, где все услуги сейчас собраны на одной общей странице.",
      ],
      delivers: [
        "Структуру страниц для услуг или локаций на основе поискового намерения.",
        "Уникальные заголовки, метаданные, FAQ и конверсионные блоки для каждой страницы.",
        "Внутренние ссылки между связанными услугами и главной страницей.",
        "CTA-пути к WhatsApp, email, звонкам или контактному блоку.",
        "Полезный правдивый контент без keyword stuffing и нереалистичных обещаний.",
      ],
      benefits: [
        "Более понятные страницы для людей, которые ищут конкретную услугу.",
        "Лучшая основа для органического поиска и рекламных кампаний.",
        "Более релевантные внутренние ссылки на сайте.",
        "Масштабируемая структура для будущих сервисных и локальных страниц.",
      ],
      process: [
        { title: "Выбираем цели страниц", text: "Определяем, какие услуги, локации или кампании требуют отдельных страниц." },
        { title: "Строим каркас", text: "Создаём секции для намерения, преимуществ, процесса, FAQ и контактных действий." },
        { title: "Связываем и измеряем", text: "Добавляем внутренние ссылки, метаданные, sitemap и пути конверсии." },
      ],
      faqs: [
        {
          question: "SEO-лендинги — это то же самое, что блог?",
          answer:
            "Нет. SEO-лендинги обычно коммерческие страницы под услугу, локацию или кампанию. Они информируют и ведут к обращению.",
        },
        {
          question: "Сколько SEO-страниц стоит запускать сначала?",
          answer:
            "Безопасный старт — покрыть самые важные услуги и рынки перед масштабированием. Тонких или дублированных страниц лучше избегать.",
        },
        {
          question: "Гарантируют ли SEO-страницы позиции?",
          answer:
            "Нет. Позиции зависят от конкуренции, авторитета сайта, качества контента, технического состояния и постоянной работы.",
        },
      ],
      cta: {
        title: "Нужны сфокусированные SEO-страницы для услуг?",
        text: "Расскажите, какие услуги и локации важнее всего, и мы поможем сформировать первый набор страниц.",
        primaryLabel: "Спланировать SEO-страницы",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "business-automation": {
    ua: {
      forWho: [
        "Бізнеси, які втрачають час на повторювану обробку заявок.",
        "Команди, яким потрібно передавати ліди правильній людині або системі.",
        "Компанії, що хочуть кращий фолоу-ап після контакту через сайт або WhatsApp.",
        "Малі бізнеси, які готують звʼязку сайту з CRM, email або workflow-інструментами.",
      ],
      delivers: [
        "Планування workflow для захоплення та маршрутизації лідів.",
        "Карти автоматизації для email, WhatsApp, CRM і внутрішньої передачі.",
        "Поля кваліфікації для послуги, локації, бюджету, терміну та контакту.",
        "Практичний план реалізації без відкриття приватних ключів у браузері.",
        "Прості точки звітності для розуміння джерел заявок.",
      ],
      benefits: [
        "Менше ручного копіювання між поштою, чатами та таблицями.",
        "Швидший фолоу-ап для кваліфікованих звернень.",
        "Більш послідовна інформація про ліди для продажів.",
        "Чіткіша операційна база для майбутніх AI-функцій.",
      ],
      process: [
        { title: "Аудит процесу", text: "Дивимося, як приходять заявки, куди вони потрапляють і які ручні кроки сповільнюють команду." },
        { title: "Проєктуємо автоматизацію", text: "Визначаємо тригери, обовʼязкові поля, сповіщення, передачу та безпечні fallback-шляхи." },
        { title: "Готуємо запуск", text: "Документуємо реалізацію, приватність, тестування та шлях подальших покращень." },
      ],
      faqs: [
        {
          question: "Що малому бізнесу автоматизувати спочатку?",
          answer: "Захоплення лідів, сповіщення, маршрутизацію заявок, нагадування про фолоу-ап і базові оновлення CRM.",
        },
        {
          question: "Чи потрібна велика CRM?",
          answer:
            "Не завжди. Деякі команди можуть почати з email, WhatsApp, форм і легких workflow-інструментів, а потім перейти до CRM.",
        },
        {
          question: "Чи можна підключити AI-агента пізніше?",
          answer: "Так. Чистий lead workflow полегшує безпечне додавання AI-кваліфікації або асистента на наступному етапі.",
        },
      ],
      cta: {
        title: "Готові зробити обробку лідів менш ручною?",
        text: "Поділіться кроками, які повторюєте сьогодні, і ми підкажемо, де автоматизація може допомогти.",
        primaryLabel: "Обговорити автоматизацію",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Бизнесы, которые теряют время на повторяющуюся обработку заявок.",
        "Команды, которым нужно передавать лиды правильному человеку или системе.",
        "Компании, которые хотят лучший follow-up после контакта через сайт или WhatsApp.",
        "Малые бизнесы, готовящие связку сайта с CRM, email или workflow-инструментами.",
      ],
      delivers: [
        "Планирование workflow для захвата и маршрутизации лидов.",
        "Карты автоматизации для email, WhatsApp, CRM и внутренней передачи.",
        "Поля квалификации для услуги, локации, бюджета, срока и контакта.",
        "Практичный план реализации без раскрытия приватных ключей в браузере.",
        "Простые точки отчётности для понимания источников заявок.",
      ],
      benefits: [
        "Меньше ручного копирования между почтой, чатами и таблицами.",
        "Более быстрый follow-up для квалифицированных обращений.",
        "Более последовательная информация о лидах для продаж.",
        "Более понятная операционная база для будущих AI-функций.",
      ],
      process: [
        { title: "Аудит процесса", text: "Смотрим, как приходят заявки, куда они попадают и какие ручные шаги замедляют команду." },
        { title: "Проектируем автоматизацию", text: "Определяем триггеры, обязательные поля, уведомления, передачу и безопасные fallback-пути." },
        { title: "Готовим запуск", text: "Документируем реализацию, приватность, тестирование и путь дальнейших улучшений." },
      ],
      faqs: [
        {
          question: "Что малому бизнесу автоматизировать сначала?",
          answer: "Захват лидов, уведомления, маршрутизацию заявок, напоминания о follow-up и базовые обновления CRM.",
        },
        {
          question: "Нужна ли большая CRM?",
          answer:
            "Не всегда. Некоторые команды могут начать с email, WhatsApp, форм и лёгких workflow-инструментов, а затем перейти к CRM.",
        },
        {
          question: "Можно ли подключить AI-агента позже?",
          answer: "Да. Чистый lead workflow упрощает безопасное добавление AI-квалификации или ассистента на следующем этапе.",
        },
      ],
      cta: {
        title: "Готовы сделать обработку лидов менее ручной?",
        text: "Поделитесь шагами, которые повторяете сегодня, и мы подскажем, где автоматизация может помочь.",
        primaryLabel: "Обсудить автоматизацию",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "mobile-apps": {
    ua: {
      forWho: [
        "Бізнеси, яким потрібен мобільний продукт для клієнтів.",
        "Команди, що переносять сервіс або процес у мобільний досвід.",
        "Засновники, яким потрібна чітка структура додатку перед інвестиціями в розробку.",
        "Компанії, які хочуть сильнішу взаємодію з клієнтами поза сайтом.",
      ],
      delivers: [
        "Стратегію мобільного додатку, план функцій і структуру користувацьких сценаріїв.",
        "UX та інтерфейсний напрям для ключових клієнтських шляхів.",
        "Екрани додатку й продуктову архітектуру для запуску розробки.",
        "Планування сповіщень, акаунтів, контенту або сервісних сценаріїв.",
        "Product roadmap, який тримає першу версію сфокусованою та реалістичною.",
      ],
      benefits: [
        "Зрозуміліша продуктова концепція до великих витрат на розробку.",
        "Кращий клієнтський досвід у mobile-first сценаріях.",
        "Сфокусована перша версія без перевантаження функціями.",
        "Сильніша основа для майбутніх інтеграцій, автоматизації та зростання.",
      ],
      process: [
        { title: "Визначаємо продукт", text: "Уточнюємо мету додатку, користувачів, основні сценарії та першу версію, яка має бізнес-сенс." },
        { title: "Мапимо досвід", text: "Плануємо екрани, навігацію, пріоритети функцій і моменти, де користувачу потрібна ясність або дія." },
        { title: "Готуємо до розробки", text: "Формуємо структуру додатку, обсяг запуску та наступні кроки для розробки, тестування й ітерацій." },
      ],
      faqs: [
        {
          question: "Бізнесу краще робити додаток чи спершу покращити сайт?",
          answer:
            "Залежить від сценарію. Якщо потрібна повторна мобільна взаємодія, акаунти, сповіщення або app-only функції, додаток може мати сенс. Інакше сильний сайт може бути кращим першим кроком.",
        },
        {
          question: "Чи можна спланувати додаток до розробки?",
          answer:
            "Так. Планування структури, сценаріїв і першої версії до розробки допомагає зменшити зайву роботу та сфокусувати продукт.",
        },
        {
          question: "Чи можуть додатки підключатися до CRM або автоматизацій?",
          answer:
            "Так, якщо backend та інтеграції спроєктовані правильно. Такі звʼязки потрібно планувати з урахуванням безпеки, приватності та підтримки.",
        },
      ],
      cta: {
        title: "Потрібен чіткіший план мобільного додатку?",
        text: "Розкажіть, що мають робити користувачі, що має підтримувати додаток і якою має бути сфокусована перша версія.",
        primaryLabel: "Обговорити мобільний додаток",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Бизнесы, которым нужен мобильный продукт для клиентов.",
        "Команды, переносящие сервис или процесс в мобильный опыт.",
        "Основатели, которым нужна понятная структура приложения перед инвестициями в разработку.",
        "Компании, которые хотят более сильное взаимодействие с клиентами за пределами сайта.",
      ],
      delivers: [
        "Стратегию мобильного приложения, план функций и структуру пользовательских сценариев.",
        "UX и интерфейсное направление для ключевых клиентских путей.",
        "Экраны приложения и продуктовую архитектуру для запуска разработки.",
        "Планирование уведомлений, аккаунтов, контента или сервисных сценариев.",
        "Product roadmap, который держит первую версию сфокусированной и реалистичной.",
      ],
      benefits: [
        "Более понятная продуктовая концепция до больших затрат на разработку.",
        "Лучший клиентский опыт в mobile-first сценариях.",
        "Сфокусированная первая версия без перегруза функциями.",
        "Более сильная основа для будущих интеграций, автоматизации и роста.",
      ],
      process: [
        { title: "Определяем продукт", text: "Уточняем цель приложения, пользователей, основные сценарии и первую версию, которая имеет бизнес-смысл." },
        { title: "Мапим опыт", text: "Планируем экраны, навигацию, приоритеты функций и моменты, где пользователю нужна ясность или действие." },
        { title: "Готовим к разработке", text: "Формируем структуру приложения, объём запуска и следующие шаги для разработки, тестирования и итераций." },
      ],
      faqs: [
        {
          question: "Бизнесу лучше делать приложение или сначала улучшить сайт?",
          answer:
            "Зависит от сценария. Если нужна повторная мобильная коммуникация, аккаунты, уведомления или app-only функции, приложение может иметь смысл. Иначе сильный сайт может быть лучшим первым шагом.",
        },
        {
          question: "Можно ли спланировать приложение до разработки?",
          answer:
            "Да. Планирование структуры, сценариев и первой версии до разработки помогает уменьшить лишнюю работу и сфокусировать продукт.",
        },
        {
          question: "Могут ли приложения подключаться к CRM или автоматизациям?",
          answer:
            "Да, если backend и интеграции спроектированы правильно. Такие связи нужно планировать с учётом безопасности, приватности и поддержки.",
        },
      ],
      cta: {
        title: "Нужен более понятный план мобильного приложения?",
        text: "Расскажите, что должны делать пользователи, что должно поддерживать приложение и какой должна быть сфокусированная первая версия.",
        primaryLabel: "Обсудить мобильное приложение",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
  "qr-menu-restaurant-payments": {
    ua: {
      forWho: [
        "Ресторани та кафе, яким потрібне зрозуміліше цифрове меню.",
        "Hospitality-команди, яким потрібно швидше оновлювати меню та сезонні позиції.",
        "Заклади, що розглядають QR-замовлення, платіжні сценарії або шлях гостя від столика.",
        "Оператори, які хочуть сучасніший безконтактний клієнтський досвід.",
      ],
      delivers: [
        "Структуру QR-меню для категорій, позицій, деталей і закликів до дії.",
        "Mobile-first сторінки меню для швидкого перегляду за столиком.",
        "Планування замовлення або оплати, якщо це підходить бізнес-моделі.",
        "Структуру контенту для цін, модифікаторів, алергенів, мов і оновлень.",
        "Практичний шлях до майбутніх ресторанних workflow та інтеграцій.",
      ],
      benefits: [
        "Зручніший досвід гостя від сканування до рішення про замовлення.",
        "Простіші оновлення меню без передруку кожної зміни.",
        "Сучасніша цифрова точка контакту для ресторанів і кафе.",
        "Основа для майбутнього замовлення, оплати або loyalty-функцій.",
      ],
      process: [
        { title: "Структуруємо меню", text: "Організовуємо категорії, позиції, деталі, ціни та шлях гостя від сканування до дії." },
        { title: "Проєктуємо мобільний сценарій", text: "Створюємо меню, яке легко читати, швидко переглядати та яке відповідає бренду закладу." },
        { title: "Готуємо до операцій", text: "Плануємо оновлення, розміщення QR, оплату або замовлення та майбутні покращення процесів." },
      ],
      faqs: [
        {
          question: "QR-меню — це просто цифровий PDF?",
          answer:
            "Ні. Корисне QR-меню має бути mobile-friendly, структурованим, зручним для оновлень і спроєктованим навколо досвіду гостя.",
        },
        {
          question: "Чи може QR-меню підтримувати оплату?",
          answer:
            "Так, залежно від платіжного провайдера та процесів ресторану. Платіжні сценарії потрібно планувати уважно з урахуванням операцій і довіри клієнта.",
        },
        {
          question: "Чи може меню бути багатомовним?",
          answer:
            "Так. Багатомовну структуру варто планувати з початку, щоб ресторан міг зрозуміліше обслуговувати різні групи клієнтів.",
        },
      ],
      cta: {
        title: "Хочете зручніше QR-меню?",
        text: "Розкажіть про формат закладу, структуру меню та чи потрібні вам замовлення, оплата або просте цифрове меню.",
        primaryLabel: "Обговорити QR-меню",
        secondaryLabel: "Написати у WhatsApp",
        emailLabel: "Написати AurevioPro",
      },
    },
    ru: {
      forWho: [
        "Рестораны и кафе, которым нужно более понятное цифровое меню.",
        "Hospitality-команды, которым нужно быстрее обновлять меню и сезонные позиции.",
        "Заведения, которые рассматривают QR-заказ, платёжные сценарии или путь гостя от столика.",
        "Операторы, которые хотят более современный бесконтактный клиентский опыт.",
      ],
      delivers: [
        "Структуру QR-меню для категорий, позиций, деталей и призывов к действию.",
        "Mobile-first страницы меню для быстрого просмотра за столиком.",
        "Планирование заказа или оплаты, если это подходит бизнес-модели.",
        "Структуру контента для цен, модификаторов, аллергенов, языков и обновлений.",
        "Практичный путь к будущим ресторанным workflow и интеграциям.",
      ],
      benefits: [
        "Более удобный опыт гостя от сканирования до решения о заказе.",
        "Более простые обновления меню без перепечатывания каждого изменения.",
        "Более современная цифровая точка контакта для ресторанов и кафе.",
        "Основа для будущего заказа, оплаты или loyalty-функций.",
      ],
      process: [
        { title: "Структурируем меню", text: "Организуем категории, позиции, детали, цены и путь гостя от сканирования к действию." },
        { title: "Проектируем мобильный сценарий", text: "Создаём меню, которое легко читать, быстро просматривать и которое соответствует бренду заведения." },
        { title: "Готовим к операциям", text: "Планируем обновления, размещение QR, оплату или заказ и будущие улучшения процессов." },
      ],
      faqs: [
        {
          question: "QR-меню — это просто цифровой PDF?",
          answer:
            "Нет. Полезное QR-меню должно быть mobile-friendly, структурированным, удобным для обновлений и спроектированным вокруг опыта гостя.",
        },
        {
          question: "Может ли QR-меню поддерживать оплату?",
          answer:
            "Да, в зависимости от платёжного провайдера и процессов ресторана. Платёжные сценарии нужно планировать внимательно с учётом операций и доверия клиента.",
        },
        {
          question: "Может ли меню быть многоязычным?",
          answer:
            "Да. Многоязычную структуру стоит планировать с начала, чтобы ресторан мог понятнее обслуживать разные группы клиентов.",
        },
      ],
      cta: {
        title: "Хотите более удобное QR-меню?",
        text: "Расскажите о формате заведения, структуре меню и нужны ли вам заказ, оплата или простое цифровое меню.",
        primaryLabel: "Обсудить QR-меню",
        secondaryLabel: "Написать в WhatsApp",
        emailLabel: "Написать AurevioPro",
      },
    },
  },
};

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getLocalizedServiceContent(page: ServicePage, locale: ServiceLocale): LocalizedServiceContent {
  const localized = serviceBodyTranslations[page.slug]?.[locale];

  return {
    forWho: localized?.forWho ?? page.forWho,
    delivers: localized?.delivers ?? page.delivers,
    benefits: localized?.benefits ?? page.benefits,
    process: localized?.process ?? page.process,
    faqs: localized?.faqs ?? page.faqs,
    cta: {
      title: localized?.cta?.title ?? page.cta.title,
      text: localized?.cta?.text ?? page.cta.text,
      primaryLabel: localized?.cta?.primaryLabel ?? page.cta.primaryLabel,
      secondaryLabel: localized?.cta?.secondaryLabel ?? page.cta.secondaryLabel,
      emailLabel: localized?.cta?.emailLabel ?? "Email AurevioPro",
    },
  };
}

export function resolveServiceLocale(value: string | string[] | null | undefined): ServiceLocale {
  const locale = Array.isArray(value) ? value[0] : value;

  if (locale === "ua" || locale === "ru" || locale === "en") {
    return locale;
  }

  return "en";
}
