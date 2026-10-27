import Image from "next/image";
import type { Locale } from "./translations";

const text = {
  en: {
    intro: "One partner. From the first conversation to what comes next.",
    detail: "Your website, app and everyday systems should work together. We bring design, development and automation into one clear plan, shaped around your business.",
    label: "Design · Build · Connect",
    process: "A clear path from idea to launch.",
    steps: [["Discover", "We understand your business, audience and goals. Together, we define the scope and priorities."], ["Design", "Review the structure and visual direction before development. Your feedback shapes the experience."], ["Build", "We develop the agreed solution, connect the right tools and check key journeys across screen sizes."], ["Launch & evolve", "Launch with a clear handover. Agree any ongoing support and improvements around your next priorities."]],
    faq: "Good questions. Clear answers.",
    questions: [["Can you improve my existing website?", "Yes. We can review your current website and recommend a focused redesign or a rebuild, depending on its condition and your goals."], ["Do you work with businesses outside the UK?", "Yes. We work remotely with businesses in the UK and internationally. The language, market and communication arrangements are agreed at the start."], ["What does a project cost?", "The packages above are starting prices in US dollars. We confirm the scope, deliverables, currency and any ongoing costs in a written proposal before work begins."], ["How long will it take?", "Timing depends on the scope, content and integrations. We agree milestones after the initial discussion rather than promise a deadline before understanding the work."], ["Can AI and automation work with my existing tools?", "Often, yes. We first check the tools, available integrations and access requirements. Sensitive credentials stay on the server; access is limited to what the integration needs."]],
  },
  ua: {
    intro: "Один партнер. Від першої розмови до наступного кроку.",
    detail: "Сайт, додаток і щоденні процеси мають працювати разом. Ми об’єднуємо дизайн, розробку та автоматизацію в зрозумілий план для вашого бізнесу.",
    label: "Дизайн · Розробка · Інтеграція",
    process: "Зрозумілий шлях від ідеї до запуску.",
    steps: [["Знайомство", "Вивчаємо бізнес, аудиторію та цілі. Разом визначаємо обсяг робіт і пріоритети."], ["Дизайн", "Ви погоджуєте структуру та візуальний напрям до початку розробки. Враховуємо ваші відгуки."], ["Розробка", "Створюємо рішення, підключаємо потрібні інструменти та перевіряємо основні сценарії на різних екранах."], ["Запуск і розвиток", "Запускаємо проєкт і передаємо необхідну інформацію. Подальшу підтримку та покращення погоджуємо окремо."]],
    faq: "Ваші запитання. Зрозумілі відповіді.",
    questions: [["Чи можете ви покращити наявний сайт?", "Так. Ми проаналізуємо ваш сайт і запропонуємо редизайн або перебудову залежно від його стану та ваших цілей."], ["Чи працюєте ви за межами Великої Британії?", "Так, працюємо дистанційно з бізнесами у Великій Британії та інших країнах. Мову, ринок і формат спілкування погоджуємо на початку."], ["Скільки коштує проєкт?", "Пакети вище містять стартові ціни в доларах США. Обсяг, результати, валюту та регулярні витрати підтверджуємо письмовою пропозицією до початку робіт."], ["Скільки часу займає розробка?", "Терміни залежать від обсягу, контенту та інтеграцій. Етапи погоджуємо після першої розмови й уточнення завдання."], ["Чи можна підключити AI до моїх інструментів?", "У багатьох випадках так. Спочатку перевіряємо можливості інтеграції та необхідні права доступу. Секретні ключі зберігаються на сервері, а доступ обмежується потребами інтеграції."]],
  },
  ru: {
    intro: "Один партнёр. От первого разговора до следующего шага.",
    detail: "Сайт, приложение и ежедневные процессы должны работать вместе. Мы объединяем дизайн, разработку и автоматизацию в понятный план для вашего бизнеса.",
    label: "Дизайн · Разработка · Интеграция",
    process: "Понятный путь от идеи до запуска.",
    steps: [["Знакомство", "Изучаем бизнес, аудиторию и цели. Вместе определяем объём работ и приоритеты."], ["Дизайн", "Вы согласуете структуру и визуальное направление до разработки. Учитываем ваши отзывы."], ["Разработка", "Создаём решение, подключаем нужные инструменты и проверяем основные сценарии на разных экранах."], ["Запуск и развитие", "Запускаем проект и передаём необходимую информацию. Дальнейшую поддержку и улучшения согласуем отдельно."]],
    faq: "Ваши вопросы. Понятные ответы.",
    questions: [["Можете ли вы улучшить существующий сайт?", "Да. Мы проанализируем сайт и предложим редизайн или перестройку в зависимости от его состояния и ваших целей."], ["Работаете ли вы за пределами Великобритании?", "Да, работаем удалённо с бизнесами в Великобритании и других странах. Язык, рынок и формат общения согласуем в начале."], ["Сколько стоит проект?", "Пакеты выше содержат стартовые цены в долларах США. Объём, результаты, валюту и регулярные расходы подтверждаем письменным предложением до начала работ."], ["Сколько времени занимает разработка?", "Сроки зависят от объёма, контента и интеграций. Этапы согласуем после первого разговора и уточнения задачи."], ["Можно ли подключить AI к моим инструментам?", "Во многих случаях да. Сначала проверяем возможности интеграции и необходимые права доступа. Секретные ключи хранятся на сервере, а доступ ограничивается потребностями интеграции."]],
  },
};

export function StudioIntro({ lang }: { lang: Locale }) {
  const t = text[lang];
  return <section className="studio-intro">
    <a href="#work" className="studio-project-preview" aria-label={lang === "en" ? "Explore our work" : lang === "ua" ? "Переглянути роботи" : "Посмотреть работы"}>
      <div className="studio-preview-top"><span>AurevioPro / {lang === "en" ? "Selected work" : lang === "ua" ? "Наші роботи" : "Наши работы"}</span><span aria-hidden>↗</span></div>
      <div className="studio-preview-image"><Image src="/images/home/lifehelper-global.png" alt="LifeHelper Global" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-contain" /></div>
      <div className="studio-preview-bottom"><strong>LifeHelper Global</strong><span>01 / 04</span></div>
    </a>
    <div><p className="studio-eyebrow">{t.label}</p><h2>{t.intro}</h2><p className="studio-intro-detail">{t.detail}</p></div>
  </section>;
}

export function StudioSections({ lang }: { lang: Locale }) {
  const t = text[lang];
  return <>
    <section id="process" className="studio-process"><p className="studio-eyebrow">{lang === "en" ? "How we work" : lang === "ua" ? "Як ми працюємо" : "Как мы работаем"}</p><h2>{t.process}</h2><div className="studio-steps">{t.steps.map(([title, body], i) => <article key={title}><span className="studio-step-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section id="faq" className="studio-faq"><div><p className="studio-eyebrow">FAQ</p><h2>{t.faq}</h2></div><div>{t.questions.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>)}</div></section>
  </>;
}
