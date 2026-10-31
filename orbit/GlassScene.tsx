import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import LiquidGlass from "liquid-glass-react";
import { ArrowUpRight, Bot, CirclePause, Gamepad2, Headphones, Music2 } from "lucide-react";

export function GlassScene({ calm, english, onToggleCalm }: { calm:boolean; english:boolean; onToggleCalm:()=>void }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const t=(zh:string,en:string)=>english?en:zh;
  useEffect(()=>setMounted(true),[]);
  const items=[
    {icon:Bot,label:t("研究","Research"),title:"Robot learning",description:t("让策略走出仿真，走进物理世界。","Taking learned policies from simulation into the physical world."),metric:"HKU ArcLab",detail:t("机械工程硕士在读","Mechanical Engineering master’s student"),target:"#research",color:"blue"},
    {icon:Headphones,label:t("音乐","Music"),title:t("我的私人磁带库","My personal mixtape"),description:t("五位喜欢的歌手，几种不一样的旋律。","Five favorite artists. A few different kinds of melody."),metric:t("5 张磁带","5 personal tapes"),detail:"Trent Dabbs · Coldplay · Mandopop",target:"#mixtape",color:"pink"},
    {icon:Gamepad2,label:t("游戏","Games"),title:t("再来一局？","One more game?"),description:t("在竞技、探索、策略与慢生活之间切换。","Switching between competition, exploration, strategy and a slower life."),metric:"2000+ h",detail:t("CS2 累计游玩时间","Personal CS2 playtime"),target:"#games",color:"mint"},
  ];
  const item=items[active];
  const content=<div className={`glass-profile-content theme-${item.color}`}><div className="glass-profile-top"><span className="profile-app-icon"><item.icon size={26} strokeWidth={1.6}/></span><span>{t("我的个人空间","A LITTLE ABOUT ME")}<small>{t("研究之外，也有热爱。","Research, music, and the everyday.")}</small></span></div><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:calm?0:.16}}><h2>{item.title}</h2><p>{item.description}</p><div className="glass-profile-metric"><strong>{item.metric}</strong><span>{item.detail}</span></div><a className="glass-profile-link" href={item.target}>{t("继续探索","Take a closer look")}<ArrowUpRight size={15}/></a></motion.div></AnimatePresence></div>;
  return <div className={`glass-scene ${calm?"glass-calm":""}`} ref={container}>
    <div className="glass-orbs" aria-hidden="true"><i/><i/><i/></div>
    <div className="glass-ring" aria-hidden="true"/>
    <motion.div className="floating-glass music-float" animate={calm?{y:0}:{y:[0,-8,0]}} transition={{duration:6,repeat:calm?0:Infinity,ease:"easeInOut"}}><Music2 size={21}/><div>{t("音乐，也是日常。","Music, every day.")}<small>FIVE FAVORITE ARTISTS</small></div></motion.div>
    <div className="liquid-card-host">{mounted?<LiquidGlass className="liquid-profile" displacementScale={48} blurAmount={.08} saturation={135} aberrationIntensity={.8} elasticity={calm?0:.12} cornerRadius={30} padding="26px" mouseContainer={container} style={{position:"absolute",top:"50%",left:"50%"}}>{content}</LiquidGlass>:<div className="glass-profile-fallback">{content}</div>}</div>
    <motion.div className="floating-glass game-float" animate={calm?{y:0}:{y:[0,7,0]}} transition={{duration:7,repeat:calm?0:Infinity,ease:"easeInOut"}}><span className="game-float-icon"><Gamepad2 size={23}/></span><div><strong>2000+</strong><small>{t("小时 · CS2","HOURS · CS2")}</small></div></motion.div>
    <div className="glass-scene-controls"><div className="glass-segments" role="group" aria-label={t("切换兴趣卡片","Choose an interest")}>{items.map((entry,index)=><button key={entry.target} onClick={()=>setActive(index)} aria-pressed={active===index}><entry.icon size={14}/>{entry.label}</button>)}</div><button className="glass-calm-control" onClick={onToggleCalm} aria-pressed={calm} aria-label={t("低动态","Calm")} title={t("切换低动态模式","Toggle reduced motion")}><CirclePause size={17}/></button></div>
    <p className="glass-scene-hint">{t("轻触切换，发现生活的不同切面。","A small switch. A different side of life.")}</p>
  </div>;
}
