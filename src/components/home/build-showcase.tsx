"use client";
import {useEffect,useRef} from "react";
import type {Locale} from "./translations";
const words={
 en:{tag:"From idea to experience",title:"Good digital experiences start here.",description:"Structure, design, detail. We turn your idea into a website or app that feels effortless to use.",badge:"Design in progress",second:"Ideas become experiences"},
 ua:{tag:"Від ідеї до результату",title:"Тут ідеї стають цифровим досвідом.",description:"Структура, дизайн, увага до деталей. Перетворюємо вашу ідею на сайт або додаток, яким зручно користуватися.",badge:"Дизайн у процесі",second:"Ідеї набувають форми"},
 ru:{tag:"От идеи к результату",title:"Здесь идеи становятся цифровым опытом.",description:"Структура, дизайн, внимание к деталям. Превращаем вашу идею в сайт или приложение, которым удобно пользоваться.",badge:"Дизайн в процессе",second:"Идеи обретают форму"}
};
export function BuildShowcase({lang}:{lang:Locale}){
 const t=words[lang]; const video=useRef<HTMLVideoElement>(null);
 useEffect(()=>{
  const el=video.current;if(!el)return;
  el.muted=true;
  const start=()=>{if(document.visibilityState==='visible')void el.play().catch(()=>{});};
  start();
  document.addEventListener('visibilitychange',start);
  document.addEventListener('touchstart',start,{passive:true});
  document.addEventListener('pointerdown',start,{passive:true});
  return()=>{document.removeEventListener('visibilitychange',start);document.removeEventListener('touchstart',start);document.removeEventListener('pointerdown',start);};
 },[]);
 return <section className="build-showcase mt-12" aria-label={t.title}>
  <header className="founders-intro"><p className="founders-eyebrow">{t.tag}</p><h2>{t.title}</h2><p>{t.description}</p></header>
  <div className="video-shell">
   <video ref={video} className="design-video" autoPlay muted playsInline loop disablePictureInPicture preload="metadata" poster="/images/home/design-process-poster.jpg" aria-label={t.title}><source src="/videos/design-process.mp4" type="video/mp4"/></video>
   <span className="video-badge" aria-hidden="true">✦ &nbsp; {t.badge}</span><span className="video-badge second" aria-hidden="true">↗ &nbsp; {t.second}</span>
  </div>
 </section>
}
