import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FileCode2, GitFork as Github, X } from "lucide-react";
import { CONTACT, projects, ROOF_DEMO, type Language } from "../lib/portfolio";

type Project = typeof projects[number];
const tabs = ["overview", "method", "evaluation"] as const;
type Tab = typeof tabs[number];

export function ProjectExplorer({ project, language, onProjectChange, onClose }: {
  project: Project;
  language: Language;
  onProjectChange: (project: Project) => void;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Tab>("overview");
  const tabButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const t = (zh: string, en: string) => language === "zh" ? zh : en;
  const index = projects.findIndex(item => item.id === project.id);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, current: number) {
    const next = event.key === "ArrowRight" ? (current + 1) % tabs.length
      : event.key === "ArrowLeft" ? (current + tabs.length - 1) % tabs.length
      : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    setTab(tabs[next]);
    tabButtons.current[next]?.focus();
  }

  return <div className="project-dialog-inner">
    <div className="project-explorer-toolbar">
      <div className="project-pagination">
        <button className="icon-button" onClick={() => onProjectChange(projects[(index + projects.length - 1) % projects.length])} aria-label={t("上一个项目", "Previous project")}><ChevronLeft size={18}/></button>
        <span aria-live="polite">0{index + 1}<i>/</i>0{projects.length}</span>
        <button className="icon-button" onClick={() => onProjectChange(projects[(index + 1) % projects.length])} aria-label={t("下一个项目", "Next project")}><ChevronRight size={18}/></button>
      </div>
      <span className="explorer-caption">{t("项目探索", "PROJECT EXPLORER")}</span>
      <button className="icon-button explorer-close" onClick={onClose} aria-label={t("关闭项目详情", "Close project")} autoFocus><X size={21}/></button>
    </div>
    <div className="detail-media"><video key={project.id} src={project.video} poster={project.poster} controls playsInline preload="metadata" aria-label={project.id === "roof" ? t("ROOF 万圣节真机 Demo", "ROOF Halloween hardware demo") : t(`${project.name} 仿真回放`, `${project.name} simulation rollout`)}/></div>
    <div className="detail-copy">
      <p className="eyebrow">{t(project.label, project.labelEn)}</p>
      <h2 id="project-dialog-title" aria-live="polite">{project.name}</h2>
      <p className="detail-goal">{t(project.goal, project.goalEn)}</p>
      <div className="detail-tabs" role="tablist" aria-label={t("项目详情分类", "Project detail sections")}>
        {tabs.map((item, tabIndex) => <button key={item} ref={element => {tabButtons.current[tabIndex] = element;}} role="tab" id={`detail-tab-${item}`} aria-selected={tab === item} aria-controls="project-detail-panel" tabIndex={tab === item ? 0 : -1} onClick={() => setTab(item)} onKeyDown={event => onTabKeyDown(event, tabIndex)}>{item === "overview" ? t("项目概览", "Overview") : item === "method" ? t("方法与实现", "Method") : t("结果与评测", "Evaluation")}</button>)}
      </div>
      <div className="project-detail-panel" id="project-detail-panel" role="tabpanel" aria-labelledby={`detail-tab-${tab}`} tabIndex={0}>
        {tab === "overview" && <div className="detail-overview">
          <h3>{t(project.subtitle, project.subtitleEn)}</h3>
          <p>{t(project.description, project.descriptionEn)}</p>
          <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <button className="detail-inline-action" onClick={() => {setTab("method");tabButtons.current[1]?.focus();}}>{t("了解实现思路", "Explore the method")}<ArrowUpRight size={16}/></button>
        </div>}
        {tab === "method" && <div className="detail-method"><h3>{t("方法与实现", "Method & implementation")}</h3><ol>{(language === "zh" ? project.work : project.workEn).map((item, itemIndex) => <li key={item}><span>0{itemIndex + 1}</span>{item}</li>)}</ol></div>}
        {tab === "evaluation" && <div className="detail-evaluation">
          <div className="detail-result"><strong>{project.result}</strong><span>{t(project.resultLabel, project.resultLabelEn)}</span></div>
          {project.metrics.length > 0 && <div className="paper-result-grid">{project.metrics.map(metric => <div key={metric.value}><strong>{metric.value}</strong><span>{t(metric.label, metric.labelEn)}</span></div>)}</div>}
          <p className="detail-note">{t(project.note, project.noteEn)}</p>
          {project.detailImage && <figure className="paper-detail-figure"><img src={project.detailImage} alt={t("论文图1：桌下与设备箱约束中的两次真机恢复过程", "Paper Figure 1: hardware recovery under a table and equipment case")}/><figcaption>{t("最终论文图 1 · 两次连续真机恢复试验", "Final manuscript, Figure 1 · Two continuous hardware recoveries")}</figcaption></figure>}
        </div>}
      </div>
      <div className="detail-actions">
        {project.id === "roof" && <a className="button button-dark" href={ROOF_DEMO.projectUrl} target="_blank" rel="noreferrer">{t("ROOF 项目主页", "ROOF project website")}<ArrowUpRight size={16}/></a>}
        {project.paperUrl && <a className="text-link" href={project.paperUrl} target="_blank" rel="noreferrer"><FileCode2 size={17}/>{t("阅读最终论文", "Read the final manuscript")}<ArrowUpRight size={14}/></a>}
        {project.id === "amp" && <a className="text-link" href={CONTACT.repository} target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ExternalLink size={14}/></a>}
      </div>
    </div>
  </div>;
}
