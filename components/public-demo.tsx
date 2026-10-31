"use client";

import { ArrowDownRight, ArrowUpRight, FileCode2, Play } from "lucide-react";
import { ROOF_DEMO, type Language } from "@/lib/portfolio";

export function PublicDemo({language}:{language:Language}) {
  const t=(zh:string,en:string)=>language==="zh"?zh:en;
  return <section className="section-width roof-section" id="roof-demo" aria-labelledby="roof-demo-title">
    <figure className="roof-film">
      <div className="roof-video-wrap"><video id="roof-video" src={ROOF_DEMO.video} poster={ROOF_DEMO.poster} controls playsInline preload="metadata" aria-label={t("ROOF 项目万圣节真机 Demo","ROOF project Halloween hardware demo")}/></div>
      <figcaption><span><Play size={11}/>{t("项目万圣节 Demo · 真机恢复","Halloween project demo · Hardware recovery")}</span><span>00:30 · 1280 × 720</span></figcaption>
    </figure>
    <div className="roof-copy">
      <p className="eyebrow">ROOF / HALLOWEEN DEMO</p>
      <h2 id="roof-demo-title">{t("不止会起身，","Beyond standing up.")}<br/>{t("还要找到起身的空间。","Finding room to recover.")}</h2>
      <p className="roof-description">{t("我们的项目万圣节 Demo：在真实桌下约束中调整身体、创造空间，再恢复站立。让受约束恢复，从训练目标变成看得见的行动。","Our project’s Halloween demo: adjusting the body, creating space, and recovering standing under a real table. Bringing constrained recovery from a training objective into physical action.")}</p>
      <p className="roof-paper-title">{ROOF_DEMO.paperTitle}</p>
      <div className="roof-project-links"><span className="small-badge">{t("团队研究成果 · 真机展示","Team research · Hardware demonstration")}</span><a className="text-link" href={ROOF_DEMO.projectUrl} target="_blank" rel="noreferrer">{t("ROOF 项目主页","ROOF project website")}<ArrowUpRight size={15}/></a><a className="text-link" href={ROOF_DEMO.paperUrl} target="_blank" rel="noreferrer"><FileCode2 size={15}/>{t("阅读最终论文","Read the final manuscript")}<ArrowUpRight size={13}/></a></div>
      <a className="text-link" href="#projects">{t("继续了解方法与实验","Explore methods and experiments")}<ArrowDownRight size={16}/></a>
    </div>
  </section>;
}
