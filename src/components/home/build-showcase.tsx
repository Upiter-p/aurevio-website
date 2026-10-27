"use client";
import Image from "next/image";
import {useEffect,useRef,useState} from "react";
import type {Locale} from "./translations";
const words={
 en:{tag:"From idea to experience",title:"Watch an idea take shape.",description:"An animated illustration of the process — from a page structure to examples of our website and app work.",steps:["Structure","Design","Website","Mobile app"],notes:["Start with a clear structure and a simple customer journey.","Bring the layout to life with imagery, typography and colour.","Connect the pages into a coherent website experience.","Adapt the experience to a product people can use on their phones."],play:"Play demonstration",pause:"Pause demonstration",sample:"Process illustration · project examples"},
 ua:{tag:"Від ідеї до результату",title:"Дивіться, як ідея набуває форми.",description:"Анімована ілюстрація процесу — від структури сторінки до прикладів наших сайтів і додатків.",steps:["Структура","Дизайн","Сайт","Додаток"],notes:["Починаємо зі зрозумілої структури та простого шляху клієнта.","Додаємо зображення, типографіку та кольори.","Поєднуємо сторінки в цілісний сайт.","Адаптуємо досвід до продукту, яким зручно користуватися на телефоні."],play:"Увімкнути демонстрацію",pause:"Зупинити демонстрацію",sample:"Ілюстрація процесу · приклади проєктів"},
 ru:{tag:"От идеи к результату",title:"Смотрите, как идея обретает форму.",description:"Анимированная иллюстрация процесса — от структуры страницы до примеров наших сайтов и приложений.",steps:["Структура","Дизайн","Сайт","Приложение"],notes:["Начинаем с понятной структуры и простого пути клиента.","Добавляем изображения, типографику и цвета.","Соединяем страницы в целостный сайт.","Адаптируем опыт к продукту, которым удобно пользоваться на телефоне."],play:"Включить демонстрацию",pause:"Остановить демонстрацию",sample:"Иллюстрация процесса · примеры проектов"}
};
export function BuildShowcase({lang}:{lang:Locale}){
 const t=words[lang]; const [step,setStep]=useState(0);const [playing,setPlaying]=useState(false);const [visible,setVisible]=useState(false);const root=useRef<HTMLElement>(null);
 useEffect(()=>{const query=matchMedia("(prefers-reduced-motion: reduce)");setPlaying(!query.matches);const change=()=>{if(query.matches)setPlaying(false)};query.addEventListener("change",change);const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting),{threshold:.15});if(root.current)observer.observe(root.current);return()=>{query.removeEventListener("change",change);observer.disconnect()}},[]);
 useEffect(()=>{if(!playing||!visible)return;const id=setInterval(()=>{if(document.visibilityState==='visible')setStep(s=>(s+1)%4)},4200);return()=>clearInterval(id)},[playing,visible]);
 return <section ref={root} className="build-showcase mt-12" aria-label={t.title}>
  <header className="founders-intro"><p className="founders-eyebrow">{t.tag}</p><h2>{t.title}</h2><p>{t.description}</p></header>
  <div className="build-stage"><div className="build-window-bar"><span aria-hidden>● ● ●</span><span>AurevioPro / {t.steps[step]}</span><button type="button" onClick={()=>setPlaying(v=>!v)} aria-label={playing?t.pause:t.play}>{playing?"Ⅱ":"▶"}</button></div>
   <div className="build-scene" key={step}>
    {step===0?<div className="build-wireframe" aria-label={t.steps[0]}><div className="wire-nav"/><div className="wire-columns"><div><div className="wire-heading"/><div className="wire-line"/><div className="wire-line short"/><div className="wire-button"/></div><div className="wire-image">＋</div></div><div className="wire-cards"><i/><i/><i/></div></div>:<div className={`build-project build-project-${step}`}><Image src={step===3?"/images/home/lifehelper-global.png":step===2?"/images/home/case-qwave.png":"/images/home/case-rospro.png"} alt={step===3?"LifeHelper Global":step===2?"QWave":"RosPro Interiors"} fill sizes="(max-width: 768px) 92vw, 1100px" className="object-contain" /></div>}
   </div>
  </div>
  <div className="build-controls">{t.steps.map((label,i)=><button type="button" key={label} aria-pressed={step===i} onClick={()=>{setStep(i);setPlaying(false)}}><span>0{i+1}</span>{label}</button>)}</div>
  <p className="build-note">{t.notes[step]}</p><p className="build-caption">{t.sample}</p>
 </section>
}
