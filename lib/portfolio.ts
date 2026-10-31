export type Language = "zh" | "en";
export const CONTACT = {
  "email": "ray1sg0d0712@gmail.com",
  "github": "https://github.com/Ray111111111111",
  "repository": "https://github.com/Ray111111111111/G1Recovery_AMP"
};
export const ROOF_DEMO = {
  "projectUrl": "https://lu-yidan.github.io/ROOF/",
  "video": "./media/roof-public-demo.mp4",
  "poster": "./media/roof-public-demo.jpg",
  "title": "ROOF · 项目万圣节 Demo",
  "titleEn": "ROOF · Halloween project demo",
  "paperTitle": "Learning Humanoid Recovery Under Overhead Constraints",
  "paperUrl": "./paper/roof-paper.pdf"
};
export const experiences = [
  {
    "id": "hku",
    "kind": "research",
    "company": "HKU ArcLab",
    "companyEn": "HKU ArcLab",
    "title": "人形机器人脱困与恢复研究",
    "titleEn": "Humanoid recovery research",
    "date": "2026.08 — 至今",
    "dateEn": "Aug 2026 — Present",
    "status": "硕士研究课题",
    "statusEn": "Master’s research",
    "text": "围绕持续外部约束下的人形机器人恢复，开展几何奖励设计、运动先验适配、训练诊断与仿真/真机验证。研究成果形成最终论文，相关工作在投 IEEE RA-L。",
    "textEn": "Geometric reward design, motion-prior adaptation, training diagnostics, and sim-to-real evaluation for humanoid recovery under persistent constraints. The work is documented in the final manuscript, submitted to IEEE RA-L.",
    "tags": [
      "SMP / AMP",
      "PPO",
      "Sim-to-Real"
    ]
  },
  {
    "id": "chaowei",
    "kind": "internship",
    "company": "超维动力",
    "companyEn": "超维动力",
    "title": "强化学习运动控制算法实习",
    "titleEn": "RL motion-control internship",
    "date": "2026.11 · 即将入职",
    "dateEn": "Nov 2026 · Upcoming",
    "status": "即将开启",
    "statusEn": "Upcoming",
    "text": "拟参与人形机器人全身运动控制、强化学习与动作模仿，支持运动数据处理、策略训练及部署测试。",
    "textEn": "Planned work on humanoid whole-body control, reinforcement learning, motion imitation, motion-data processing, policy training, and deployment tests.",
    "tags": [
      "Whole-body control",
      "Motion imitation",
      "RL"
    ]
  },
  {
    "id": "xiaomi",
    "kind": "internship",
    "company": "小米移动软件有限公司",
    "companyEn": "Xiaomi",
    "title": "后端开发实习",
    "titleEn": "Backend engineering intern",
    "date": "2025.04 — 2025.08",
    "dateEn": "Apr — Aug 2025",
    "status": "软件工程",
    "statusEn": "Software engineering",
    "text": "参与智能汽车 Virtual ECU 搭建与测试，用 Python 开发 AUTOSAR ARXML 自动解析工具，结构化处理 6 类配置文件和 100+ 个节点/接口信息。",
    "textEn": "Supported Virtual ECU setup and testing. Built a Python AUTOSAR ARXML parser covering six configuration types and 100+ nodes and interfaces.",
    "tags": [
      "Python",
      "AUTOSAR / ARXML",
      "Virtual ECU"
    ]
  },
  {
    "id": "dahua",
    "kind": "internship",
    "company": "浙江大华股份有限公司",
    "companyEn": "Dahua Technology",
    "title": "结构工程师实习",
    "titleEn": "Mechanical engineering intern",
    "date": "2025.02 — 2025.04",
    "dateEn": "Feb — Apr 2025",
    "status": "机械工程",
    "statusEn": "Mechanical engineering",
    "text": "使用 Creo 完成 100+ 个连接器与结构零部件建模及工程图整理，开展尺寸链、公差与 5 类关键尺寸参数校核。",
    "textEn": "Created Creo models and drawings for 100+ connectors and structural parts, and checked dimensional chains, tolerances, and five categories of critical dimensions.",
    "tags": [
      "Creo",
      "CAD",
      "Tolerance analysis"
    ]
  }
];
export const projects = [
  {
    "id": "roof",
    "category": "rl",
    "name": "ROOF",
    "subtitle": "先创造空间，再恢复站立。",
    "subtitleEn": "Create space. Recover standing.",
    "label": "论文研究 · 受约束恢复",
    "labelEn": "Research · Recovery under constraints",
    "description": "以接触支持的几何反馈、运动先验与执行成本，学习一个仅依赖本体感知的人形机器人恢复策略。",
    "descriptionEn": "A single proprioceptive recovery policy combining contact-supported geometric feedback, a motion prior, and execution costs.",
    "status": "仿真与真机验证",
    "statusEn": "Simulation & hardware",
    "tags": [
      "SMP + PPO",
      "Geometric guidance",
      "Sim-to-Real"
    ],
    "video": "./media/roof-public-demo.mp4",
    "poster": "./media/roof-public-demo.jpg",
    "goal": "头顶障碍占据起身空间时，直接抬高身体可能加剧卡滞。研究目标是在保持起身动机的同时，通过低位调整和接触交互创造可恢复空间。",
    "goalEn": "An overhead obstacle can turn upward motion into further obstruction. The goal is to create room through low-posture adjustments and contact while retaining the incentive to stand.",
    "work": [
      "构建覆盖深度、水平净空与根部分离等几何反馈，主进展项结合低姿态和手部支撑；不指定逃离方向或动作轨迹。",
      "结合冻结的 SMP 运动先验、脚部运动成本与关节停滞成本，通过三阶段课程训练单一 PPO actor。",
      "部署时仅使用 93 维本体观测，输出 29 维关节目标；在家具和多物体场景检验从单板训练到真实约束的迁移。"
    ],
    "workEn": [
      "Designed coverage-depth, clearance and root-separation feedback; the main progress term is gated by low posture and hand support without prescribing a path.",
      "Combined a frozen SMP motion prior, foot-motion and joint-stall costs with a three-stage curriculum for one PPO actor.",
      "Deployed with 93-D proprioception and 29-D joint targets, testing transfer from single-board training to furniture and multi-object scenes."
    ],
    "result": "95 / 150",
    "resultLabel": "七类真实障碍中的恢复成功",
    "resultLabelEn": "Successful recoveries across seven hardware obstacle scenes",
    "note": "最终论文：导向板 88.5%、随机自由板 98.6%；去几何奖励后导向板降至 18.9%。真机障碍场景 95/150（63.3%），另有平地对照 20/20。成功要求 20 秒内站起并连续保持 3 秒。万圣节 demo 是团队项目展示，定量成绩依据论文独立评测。",
    "noteEn": "Final paper: 88.5% on guided plates and 98.6% on randomized free plates; removing geometric guidance reduces guided success to 18.9%. Hardware obstacle success is 95/150 (63.3%), plus a separate 20/20 flat-ground control. Success requires standing within 20 seconds and holding for 3 seconds. The Halloween demo presents the team project; quantitative results come from the paper evaluation.",
    "paperUrl": "./paper/roof-paper.pdf",
    "detailImage": "./paper/roof-hardware.png",
    "metrics": [
      {
        "value": "88.5%",
        "label": "导向板 · 仿真",
        "labelEn": "Guided plate · simulation"
      },
      {
        "value": "98.6%",
        "label": "随机自由板 · 仿真",
        "labelEn": "Randomized free plate · simulation"
      },
      {
        "value": "95/150",
        "label": "七类障碍 · 真机",
        "labelEn": "Seven obstacle scenes · hardware"
      }
    ]
  },
  {
    "id": "amp",
    "category": "rl",
    "name": "G1 Recovery",
    "subtitle": "在约束中，重新站起来。",
    "subtitleEn": "Finding a way to stand again.",
    "label": "AMP · 迁移与真机验证",
    "labelEn": "AMP · Simulation to reality",
    "description": "让 29 自由度 G1 在压板约束下改变支撑、移出覆盖，再恢复站立。",
    "descriptionEn": "Teaching a 29-DoF G1 to change support, escape overhead constraints, and recover standing.",
    "status": "已完成真机测试",
    "statusEn": "Hardware tested",
    "tags": [
      "PPO",
      "AMP",
      "MuJoCo / MJLab"
    ],
    "video": "./media/amp-recovery.mp4",
    "poster": "./media/amp-cover.jpg",
    "goal": "直接追求身体高度容易导致顶板与卡滞。目标是在保留运动先验的同时，让策略探索低位调整与有效脱困。",
    "goalEn": "A pure height objective can produce pushing and jamming. The goal is to retain a motion prior while enabling low-posture adjustments and escape.",
    "work": [
      "完成 IsaacLab → MuJoCo / MJLab 迁移，对齐 29 轴观测、动作与执行接口。",
      "建立八动作恢复基线，接入几何进展反馈，平衡任务与风格奖励。",
      "通过观测与控制接口对齐、实机反馈调参，完成 Sim-to-Real 与真机测试。"
    ],
    "workEn": [
      "Migrated from IsaacLab to MuJoCo / MJLab and aligned the 29-joint observation, action, and control interfaces.",
      "Established an eight-motion recovery baseline and integrated geometric progress rewards with task/style balancing.",
      "Completed sim-to-real transfer and hardware tests through interface alignment and hardware-informed tuning."
    ],
    "result": "96.48%",
    "resultLabel": "2,048 初态仿真站立率",
    "resultLabelEn": "Standing rate over 2,048 simulated starts",
    "note": "单个 checkpoint、单次评测：20 秒内进入站姿并保持 3 秒。几何脱困另行统计；该百分比为仿真结果。",
    "noteEn": "One checkpoint and evaluation run: enter standing within 20 seconds and hold for 3 seconds. Geometric escape is evaluated separately. This percentage is from simulation.",
    "paperUrl": "",
    "detailImage": "",
    "metrics": []
  },
  {
    "id": "host",
    "category": "rl",
    "name": "HoST Adaptation",
    "subtitle": "先改变接触，再恢复自由。",
    "subtitleEn": "Change contact. Recover freedom.",
    "label": "HoST · 多目标策略适配",
    "labelEn": "HoST · Multi-objective adaptation",
    "description": "从 23 到 29 自由度，复用多 critic 结构，协调板下脱困与离板后的起身。",
    "descriptionEn": "Adapting 23 to 29 DoF and reusing multiple critics to coordinate escape and subsequent standing.",
    "status": "阶段性仿真成果",
    "statusEn": "Simulation results",
    "tags": [
      "Multi-critic PPO",
      "Reward design",
      "29 DoF"
    ],
    "video": "./media/host-recovery.mp4",
    "poster": "./media/host-cover.jpg",
    "goal": "让起身目标与脱困目标在同一个策略中协调，减少持续约束下蜷腿、硬顶与停滞。",
    "goalEn": "Coordinate standing and escape in a single policy, reducing leg folding, pushing, and stalling under persistent constraints.",
    "work": [
      "完成 23 → 29 DoF 与 mjlab 适配，处理腰腕执行器约束。",
      "复用第四个 target critic 承接脱困目标，在分组优势归一化后进行阶段加权。",
      "结合腿姿、躯干位移与离板门控，分场景评估成功与失败。"
    ],
    "workEn": [
      "Adapted 23 to 29 DoF in mjlab and addressed waist/wrist actuator constraints.",
      "Reused the fourth target critic for escape and applied stage-dependent weights after per-group advantage normalization.",
      "Combined leg posture, torso progress, and clearance gates, evaluating outcomes by scenario."
    ],
    "result": "87.98% / 98.01%",
    "resultLabel": "上下板 / 自由板仿真起身率",
    "resultLabelEn": "Guided-board / free-board simulated standing rate",
    "note": "为受困适配后的评测；观测与评测协议不同于原 HoST 的直接迁移对照，不与 AMP 百分比直接排名。",
    "noteEn": "Results after constrained-task adaptation. Observations and evaluation differ from original HoST transfer baselines and AMP; percentages are not a direct ranking.",
    "paperUrl": "",
    "detailImage": "",
    "metrics": []
  }
];
