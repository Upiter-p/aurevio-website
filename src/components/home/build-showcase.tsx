"use client";
import {useEffect,useRef,useState} from "react";
import type {Locale} from "./translations";
const words={
 en:{tag:"From idea to experience",title:"Good digital experiences start here.",description:"Structure, design, detail. We turn your idea into a website or app that feels effortless to use.",play:"Play video",pause:"Pause video",motion:"Pause floating cards",resume:"Resume floating cards",badge:"Design in progress",second:"Ideas become experiences",credit:"Web design footage: BuildWith Angga / Pexels"},
 ua:{tag:"Від ідеї до результату",title:"Тут ідеї стають цифровим досвідом.",description:"Структура, дизайн, увага до деталей. Перетворюємо вашу ідею на сайт або додаток, яким зручно користуватися.",play:"Відтворити відео",pause:"Зупинити відео",motion:"Зупинити рух карток",resume:"Відновити рух карток",badge:"Дизайн у процесі",second:"Ідеї набувають форми",credit:"Відео вебдизайну: BuildWith Angga / Pexels"},
 ru:{tag:"От идеи к результату",title:"Здесь идеи становятся цифровым опытом.",description:"Структура, дизайн, внимание к деталям. Превращаем вашу идею в сайт или приложение, которым удобно пользоваться.",play:"Воспроизвести видео",pause:"Остановить видео",motion:"Остановить движение карточек",resume:"Возобновить движение карточек",badge:"Дизайн в процессе",second:"Идеи обретают форму",credit:"Видео веб-дизайна: BuildWith Angga / Pexels"}
};
export function BuildShowcase({lang}:{lang:Locale}){
 const t=words[lang]; const video=useRef<HTMLVideoElement>(null);const [playing,setPlaying]=useState(false);const [motionPaused,setMotionPaused]=useState(false);
 useEffect(()=>{const el=video.current;if(!el)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)");let manual=false;const markManual=(e:Event)=>{if(e.isTrusted)manual=true};el.addEventListener('pointerdown',markManual);const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)el.pause();else if(!reduced.matches&&!manual)void el.play().catch(()=>{});},{threshold:.3});observer.observe(el);const stop=()=>{if(reduced.matches)el.pause()};reduced.addEventListener('change',stop);return()=>{observer.disconnect();el.removeEventListener('pointerdown',markManual);reduced.removeEventListener('change',stop)}},[]);
 useEffect(()=>{const root=document.querySelector('.aurevio-original');root?.classList.toggle('motion-paused',motionPaused);return()=>root?.classList.remove('motion-paused')},[motionPaused]);
 return <section className="build-showcase mt-12" aria-label={t.title}>
  <header className="founders-intro"><p className="founders-eyebrow">{t.tag}</p><h2>{t.title}</h2><p>{t.description}</p></header>
  <div className="video-shell">
   <video ref={video} className="design-video" controls muted playsInline loop preload="metadata" poster="/images/home/video-poster.jpg" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} aria-label={t.title}><source src="/videos/web-design.mp4" type="video/mp4"/></video>
   <span className="video-badge" aria-hidden="true">✦ &nbsp; {t.badge}</span><span className="video-badge second" aria-hidden="true">↗ &nbsp; {t.second}</span>
  </div>
  <div className="video-actions"><button className="video-play" type="button" onClick={()=>{const el=video.current;if(el){if(el.paused)void el.play().catch(()=>{});else el.pause();}}}>{playing?'Ⅱ':'▶'} &nbsp; {playing?t.pause:t.play}</button><button className="motion-toggle" type="button" aria-pressed={motionPaused} onClick={()=>setMotionPaused(p=>!p)}>{motionPaused?t.resume:t.motion}</button></div>
  <p className="video-credit"><a href="https://www.pexels.com/video/man-working-on-web-design-1350205/" target="_blank" rel="noreferrer">{t.credit}</a></p>
 </section>
}
