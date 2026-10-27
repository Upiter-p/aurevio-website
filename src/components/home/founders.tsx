import Image from "next/image";
import type { Locale } from "./translations";

const copy = {
  en: { eyebrow: "Meet the founders", title: "Real people. A shared vision.", intro: "AurevioPro brings together business experience and an interest in technology. We start with your goals, explain the options clearly and shape the right digital solution together.", role: "Co-founder", names: ["Yuriy Prodeus", "Roman Prodeus"], bios: ["Business experience, a practical perspective and a focus on understanding what each client needs.", "A fresh perspective and an interest in artificial intelligence and digital products."], closing: "From the first conversation to the next step, let’s make your ideas clearer — and bring them to life.", cta: "Tell us about your project" },
  ua: { eyebrow: "Знайомтеся із засновниками", title: "Реальні люди. Спільне бачення.", intro: "AurevioPro поєднує бізнес-досвід та інтерес до технологій. Починаємо з ваших цілей, зрозуміло пояснюємо можливості й разом визначаємо потрібне цифрове рішення.", role: "Співзасновник", names: ["Юрій Продеус", "Роман Продеус"], bios: ["Досвід у бізнесі, практичний підхід та увага до потреб кожного клієнта.", "Свіжий погляд та інтерес до штучного інтелекту й цифрових продуктів."], closing: "Від першої розмови до наступного кроку — допоможемо уточнити вашу ідею та втілити її в життя.", cta: "Розкажіть про ваш проєкт" },
  ru: { eyebrow: "Знакомьтесь с основателями", title: "Реальные люди. Общее видение.", intro: "AurevioPro объединяет опыт в бизнесе и интерес к технологиям. Начинаем с ваших целей, понятно объясняем возможности и вместе определяем нужное цифровое решение.", role: "Сооснователь", names: ["Юрий Продеус", "Роман Продеус"], bios: ["Опыт в бизнесе, практический подход и внимание к потребностям каждого клиента.", "Свежий взгляд и интерес к искусственному интеллекту и цифровым продуктам."], closing: "От первого разговора до следующего шага — поможем уточнить вашу идею и воплотить её в жизнь.", cta: "Расскажите о вашем проекте" },
};
export function Founders({lang}: {lang: Locale}) {
 const t = copy[lang];
 return <section id="founders" className="founders-section mt-12">
  <header className="founders-intro"><p className="founders-eyebrow">{t.eyebrow}</p><h2>{t.title}</h2><p>{t.intro}</p></header>
  <div className="founders-grid">{t.names.map((name,i)=><article className="founder-card" key={name}>
   <div className={`founder-portrait founder-portrait-${i}`}><Image src={i===0?"/images/home/yuriy-prodeus.jpeg":"/images/home/roman-prodeus.jpeg"} alt={name} fill sizes="(max-width: 640px) 92vw, 45vw" className="founder-photo" /></div>
   <div className="founder-copy"><p className="founders-eyebrow">{t.role}</p><h3>{name}</h3><p>{t.bios[i]}</p></div>
  </article>)}</div>
  <div className="founders-closing"><p>{t.closing}</p><a href="#contact">{t.cta} <span aria-hidden>→</span></a></div>
 </section>;
}
