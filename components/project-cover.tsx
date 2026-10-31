"use client";

import { ArrowRight, Bot, Cpu, GitBranch } from "lucide-react";
import type { Language } from "@/lib/portfolio";

export function ProjectCover({project,language}:{project:string;language:Language}) {
  const t=(zh:string,en:string)=>language==="zh"?zh:en;
  if(project==="roof")return <div className="editorial-cover cover-roof" role="img" aria-label={t("ROOF 论文项目封面：几何脱困、稳定支撑与站立恢复","ROOF research cover: clearance, support and recovery")}>
    <span className="cover-index">01 / RESEARCH</span><div className="roof-cover-copy"><span className="cover-word">ROOF<span>↗</span></span><p>MAKE ROOM.<br/>RISE AGAIN.</p><span className="cover-subtitle">{t("持续约束下的人形机器人恢复","HUMANOID RECOVERY UNDER CONSTRAINTS")}</span></div>
    <div className="cover-room"><span className="room-ceiling"/><div className="room-body"><Bot size={76} strokeWidth={1}/><span className="body-trace trace-1"/><span className="body-trace trace-2"/></div><span className="room-floor"/><ArrowRight className="room-exit" size={35} strokeWidth={1.2}/><span className="room-label">SPACE TO RECOVER</span></div>
    <div className="cover-foot"><span>SMP + PPO</span><span>SIMULATION & HARDWARE</span></div>
  </div>;
  if(project==="amp")return <div className="editorial-cover cover-amp" role="img" aria-label={t("AMP 项目封面：运动先验与物理交互","AMP cover: motion priors and physical interaction")}>
    <span className="cover-index">02 / MOTION PRIOR</span><span className="cover-word">AMP<span>↗</span></span><p className="cover-deck">HUMAN MOTION.<br/>LEARNED CONTROL.</p><svg className="motion-ribbons" viewBox="0 0 520 240" aria-hidden="true">{Array.from({length:11},(_,i)=><path key={i} d={`M-40 ${180+i*8} C 80 ${15+i*6}, 140 ${245-i*3}, 250 ${92+i*5} S 430 ${15+i*7}, 560 ${80+i*9}`} fill="none" stroke="currentColor" strokeWidth={i===5?3:1} opacity={i===5?.8:.19+i*.035}/>)}</svg><div className="cover-foot"><span>29 DOF / G1</span><span>PHYSICS → POLICY → HARDWARE</span></div>
  </div>;
  if(project==="host")return <div className="editorial-cover cover-host" role="img" aria-label={t("HoST 项目封面：四组价值估计更新同一策略","HoST cover: four value groups, one policy")}>
    <span className="cover-index">03 / MULTI-OBJECTIVE</span><span className="cover-word">HoST<span>↗</span></span><p className="cover-deck">FOUR CRITICS.<br/>ONE POLICY.</p><div className="critic-cover-diagram"><div>{['TASK','REGU','STYLE','TARGET'].map((label,i)=><span key={label}><i>0{i+1}</i>{label}</span>)}</div><GitBranch size={41} strokeWidth={1}/><span className="actor-cover"><Cpu size={23} strokeWidth={1.2}/>PPO</span></div><div className="cover-foot"><span>23 → 29 DOF</span><span>COORDINATE / ADAPT / RECOVER</span></div>
  </div>;
  return null;
}
