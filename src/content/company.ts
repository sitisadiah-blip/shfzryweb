export interface CompanyProfile {
  companyNameZh: string;
  companyNameEn: string;
  shortName: string;
  tagline: string;
  overview: string;
  taxStatus: string;
  establishedDate: string;
  registrationAuthority: string;
  companyType: string;
  businessTerm: string;
  region: string;
  registeredAddress: string;
}

export interface BrandAsset {
  logoLight: string;
  logoDark: string;
  alt: string;
  wordmark: string;
}

export interface ServiceGroup {
  title: string;
  summary: string;
  items: string[];
}

export interface ContactInfo {
  sectionLabel: string;
  title: string;
  description: string;
  contactPersonLabel: string;
  phoneLabel: string;
  emailLabel: string;
  regionLabel: string;
  addressLabel: string;
  contactPerson: string;
  phone: string;
  email: string;
  region: string;
  address: string;
}

export interface SiteMeta {
  siteName: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroFact {
  label: string;
  value: string;
}

export interface HeroContent {
  badge: string;
  sectionLabel: string;
  englishNameLabel: string;
  title: string;
  subtitle: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  heroImage: string;
  heroImageAlt: string;
  facts: HeroFact[];
}

export interface ShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ShowcaseSectionContent {
  sectionLabel: string;
  title: string;
  description: string;
  items: ShowcaseItem[];
}

export interface CompanyInfoItem {
  label: string;
  value: string;
}

export interface CompanyInfoSectionContent {
  sectionLabel: string;
  title: string;
  description: string;
  taxStatusLabel: string;
  taxStatusValue: string;
  items: CompanyInfoItem[];
}

export interface ServicesSectionContent {
  sectionLabel: string;
  title: string;
  description: string;
  expandLabel: string;
  collapseLabel: string;
  legalNote: string;
}

export interface AdvantageItem {
  title: string;
  highlight: string;
  description: string;
}

export interface AdvantagesSectionContent {
  sectionLabel: string;
  title: string;
  description: string;
  items: AdvantageItem[];
}

export interface FooterContent {
  copyright: string;
  compliance: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  scenario: string;
  customerType: string;
  image: string;
  description: string;
  tags: string[];
}

export interface RentalCaseGroup {
  title: string;
  description: string;
  items: CaseStudyItem[];
}

export interface RentalSectionContent {
  sectionLabel: string;
  title: string;
  description: string;
  shortTerm: RentalCaseGroup;
  longTerm: RentalCaseGroup;
  ctaLabel: string;
  ctaHref: string;
  legalNote: string;
}

export interface RentalVideo {
  title: string;
  description: string;
  src: string;
  poster: string;
  note: string;
}

export const siteMeta: SiteMeta = {
  siteName: "上海法智瑞云科技服务有限公司",
  title: "上海法智瑞云科技服务有限公司 | 具身智能与机器人解决方案",
  description:
    "上海法智瑞云科技服务有限公司，聚焦具身智能与机器人应用，提供从感知算法、边云协同到场景部署的一体化技术服务。",
  keywords: [
    "上海法智瑞云科技服务有限公司",
    "具身智能",
    "机器人租赁",
    "会展机器人",
    "企业接待机器人",
    "智能机器人",
  ],
  siteUrl: "https://shfzry.com",
  ogImage: "/og-cover.svg",
};

export const brandAsset: BrandAsset = {
  logoLight: "/brand/logo.svg",
  logoDark: "/brand/logo.svg",
  alt: "法智瑞云Logo",
  wordmark: "法智瑞云",
};

export const companyProfile: CompanyProfile = {
  companyNameZh: "上海法智瑞云科技服务有限公司",
  companyNameEn: "Shanghai Fazhiruiyun Technology Services Co., Ltd.",
  shortName: "法智瑞云",
  tagline: "聚焦具身智能，连接算法与真实世界执行",
  overview:
    "公司围绕具身智能核心链路，构建机器人感知、决策与执行能力，服务工业、商业与服务型场景的智能化升级。",
  taxStatus: "小规模纳税人",
  establishedDate: "2025-11-26",
  registrationAuthority: "嘉定区市场监督管理局",
  companyType: "有限责任公司（自然人独资）",
  businessTerm: "2025-11-26 至 无固定期限",
  region: "上海市嘉定区",
  registeredAddress: "上海市嘉定区新城路500号J",
};

export const navigationItems: NavigationItem[] = [
  { label: "公司简介", href: "#intro" },
  { label: "应用场景", href: "#showcase" },
  { label: "具身智能方案", href: "#services" },
  { label: "核心能力", href: "#advantages" },
  { label: "租赁案例", href: "/cases" },
  { label: "联系方式", href: "#contact" },
];

export const caseNavigationItems: NavigationItem[] = [
  { label: "返回首页", href: "/" },
  { label: "短租案例", href: "#short-term" },
  { label: "长租案例", href: "#long-term" },
  { label: "联系方式", href: "/#contact" },
];

export const heroContent: HeroContent = {
  badge: "Embodied Intelligence Studio",
  sectionLabel: "公司简介",
  englishNameLabel: "英文名称",
  title: "上海法智瑞云科技服务有限公司",
  subtitle:
    "专注具身智能系统设计与场景落地，打通“感知 - 决策 - 执行”全栈链路，帮助企业在真实业务环境中稳定部署机器人能力。",
  primaryActionLabel: "预约沟通",
  primaryActionHref: "#contact",
  secondaryActionLabel: "查看租赁案例",
  secondaryActionHref: "/cases",
  heroImage: "/home/showcase-robot-01.jpg",
  heroImageAlt: "机器人应用场景",
  facts: [
    { label: "核心方向", value: "具身智能系统与机器人应用" },
    { label: "技术栈", value: "感知算法 + 任务规划 + 控制执行" },
    { label: "交付模式", value: "工程化实施 + 场景联调 + 持续迭代" },
  ],
};

export const showcaseSectionContent: ShowcaseSectionContent = {
  sectionLabel: "应用场景",
  title: "让机器人在真实业务里创造价值",
  description:
    "围绕巡检、导览与运营支持，我们将算法能力映射到具体流程，确保项目可部署、可度量、可持续优化。",
  items: [
    {
      title: "机器人巡检",
      subtitle: "工业与园区",
      description: "在复杂环境中完成自动巡检、异常上报与任务闭环，提升运维效率。",
      image: "/home/showcase-robot-01.jpg",
    },
    {
      title: "机器人导览",
      subtitle: "商业与会展",
      description: "在展会、门店和园区场景提供接待导览与互动服务，增强现场体验。",
      image: "/home/showcase-robot-02.jpg",
    },
    {
      title: "运营支持",
      subtitle: "活动与服务",
      description: "结合任务编排能力，支持活动现场执行与服务流程标准化落地。",
      image: "/home/showcase-robot-03.jpg",
    },
  ],
};

export const companyInfoSectionContent: CompanyInfoSectionContent = {
  sectionLabel: "工商信息",
  title: "登记信息",
  description:
    "以下信息来自企业工商公开信息整理，用于官网展示。具体内容以主管机关公示为准。",
  taxStatusLabel: "纳税人资质",
  taxStatusValue: companyProfile.taxStatus,
  items: [
    { label: "核准日期", value: companyProfile.establishedDate },
    { label: "登记机关", value: companyProfile.registrationAuthority },
    { label: "企业类型", value: companyProfile.companyType },
    { label: "营业期限", value: companyProfile.businessTerm },
    { label: "所属地区", value: companyProfile.region },
    { label: "注册地址", value: companyProfile.registeredAddress },
  ],
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "具身智能基础能力建设",
    summary: "围绕机器人从感知到执行的核心链路，构建可迭代的基础能力。",
    items: [
      "多模态感知模块集成",
      "环境建模与状态估计",
      "任务规划与动作决策",
      "运动控制与执行策略",
      "机器人中间件对接",
      "端到端智能体流程设计",
    ],
  },
  {
    title: "机器人软件与算法工程",
    summary: "将模型能力与工程系统结合，保障稳定部署与持续优化。",
    items: [
      "机器人应用软件开发",
      "边缘计算推理优化",
      "云端训练与版本管理",
      "数据闭环与回流标注",
      "模型性能评测与压测",
      "系统监控与可观测性建设",
    ],
  },
  {
    title: "行业场景落地方案",
    summary: "针对具体业务流程进行具身智能改造，缩短从样机到量产的路径。",
    items: [
      "智能巡检与异常识别",
      "仓储分拣与搬运协同",
      "零售导览与交互服务",
      "展会与活动机器人应用",
      "商业空间智能接待",
      "定制化工作流编排",
    ],
  },
  {
    title: "机器人产品化与交付支持",
    summary: "覆盖产品定义、试点验证、部署运维与运营优化全周期。",
    items: [
      "需求梳理与场景评估",
      "PoC 验证与效果复盘",
      "项目实施与交付管理",
      "操作培训与 SOP 建设",
      "持续运维与迭代升级",
      "跨系统数据接口打通",
    ],
  },
  {
    title: "智能硬件与生态协同",
    summary: "整合软硬件生态伙伴，提升项目落地速度与稳定性。",
    items: [
      "智能机器人硬件选型",
      "传感器与执行器适配",
      "边缘网关与通信集成",
      "云边端数据通路设计",
      "多供应商设备联调",
      "规模化部署支持",
    ],
  },
];

export const servicesSectionContent: ServicesSectionContent = {
  sectionLabel: "具身智能方案",
  title: "核心业务方向",
  description:
    "我们围绕“感知 - 决策 - 执行 - 运营”全链路提供具身智能服务，帮助企业将 AI 能力落到真实生产和服务场景。",
  expandLabel: "展开全部方案",
  collapseLabel: "收起方案列表",
  legalNote:
    "页面展示为公司重点技术方向，具体合作内容将按项目需求与正式合同条款执行。",
};

export const advantagesSectionContent: AdvantagesSectionContent = {
  sectionLabel: "核心能力",
  title: "具身智能交付优势",
  description:
    "以工程化方法连接算法和真实世界执行，确保具身智能项目可验证、可上线、可持续迭代。",
  items: [
    {
      title: "全链路工程能力",
      highlight: "从模型到执行闭环",
      description:
        "统一规划感知、决策与控制模块，减少跨系统断点，提升机器人任务完成率与稳定性。",
    },
    {
      title: "场景化快速落地",
      highlight: "聚焦可量化结果",
      description:
        "围绕巡检、分拣、导览、接待等高频场景搭建标准化交付框架，缩短部署周期。",
    },
    {
      title: "数据驱动持续迭代",
      highlight: "上线后持续优化",
      description:
        "通过在线监控、数据回流和版本管理机制，持续优化模型效果与系统性能。",
    },
    {
      title: "软硬件生态协同",
      highlight: "跨平台兼容集成",
      description:
        "支持多品牌设备与平台联调，降低供应链耦合风险，保障规模化复制能力。",
    },
  ],
};

export const contactInfo: ContactInfo = {
  sectionLabel: "联系方式",
  title: "欢迎洽谈具身智能项目合作",
  description:
    "如需开展具身智能方案评估、试点验证或规模化部署，可通过以下方式与我们联系。",
  contactPersonLabel: "联系人",
  phoneLabel: "联系电话",
  emailLabel: "联系邮箱",
  regionLabel: "办公地区",
  addressLabel: "办公地址",
  contactPerson: "刘女士",
  phone: "18638282007",
  email: "shfzry@163.com",
  region: "上海市嘉定区",
  address: "上海市嘉定区新城路500号J",
};

export const rentalCasesShortTerm: CaseStudyItem[] = [
  {
    id: "short-01",
    title: "新春会展互动短租",
    scenario: "会展活动 / 节庆互动",
    customerType: "短期租赁",
    image: "/cases/short-01.jpg",
    description:
      "在活动现场完成迎宾、互动和定点展示，帮助主办方快速提升现场关注度与打卡传播。",
    tags: ["1-3天快速部署", "活动导流", "现场互动"],
  },
  {
    id: "short-02",
    title: "酒店会务迎宾短租",
    scenario: "酒店会务 / 品牌发布",
    customerType: "短期租赁",
    image: "/cases/short-02.jpg",
    description:
      "针对会议与发布会场景提供机器人迎宾与导览能力，缩短活动准备周期并提升专业感。",
    tags: ["即租即用", "迎宾讲解", "低人力投入"],
  },
  {
    id: "short-03",
    title: "商演快闪机器人秀",
    scenario: "商场快闪 / 品牌活动",
    customerType: "短期租赁",
    image: "/cases/short-03.jpg",
    description:
      "结合节庆主题进行机器人动作展示与互动引导，增强活动记忆点与社交传播效果。",
    tags: ["快闪活动", "品牌曝光", "可定制脚本"],
  },
];

export const rentalCasesLongTerm: CaseStudyItem[] = [
  {
    id: "long-01",
    title: "直播场景常驻租赁",
    scenario: "直播间 / 电商运营",
    customerType: "长期租赁",
    image: "/cases/long-01.jpg",
    description:
      "在固定场地长期部署机器人，承担展示、互动和品牌记忆点塑造，提升运营稳定性。",
    tags: ["月度租赁", "驻场服务", "运维支持"],
  },
  {
    id: "long-02",
    title: "门店导览常态化部署",
    scenario: "门店接待 / 空间导览",
    customerType: "长期租赁",
    image: "/cases/long-02.jpg",
    description:
      "为线下门店提供常态化机器人导览与引导服务，配合日常运营形成稳定转化触点。",
    tags: ["长期运营", "服务标准化", "品牌形象提升"],
  },
  {
    id: "long-03",
    title: "园区接待长期合作",
    scenario: "园区大厅 / 企业接待",
    customerType: "长期租赁",
    image: "/cases/long-03.jpg",
    description:
      "在园区与企业前台场景承担访客接待和基础咨询任务，持续优化现场服务体验。",
    tags: ["长期合作", "接待咨询", "可持续迭代"],
  },
];

export const rentalSectionContent: RentalSectionContent = {
  sectionLabel: "机器人租赁案例",
  title: "短租与长租双模式，覆盖多行业现场需求",
  description:
    "围绕活动执行和企业常驻两类核心需求，我们提供可快速交付的机器人租赁服务与运维支持。",
  shortTerm: {
    title: "短租案例",
    description: "适用于会展、商演、发布会、快闪活动等短周期项目。",
    items: rentalCasesShortTerm,
  },
  longTerm: {
    title: "长租案例",
    description: "适用于门店、园区、企业接待等长期运营场景。",
    items: rentalCasesLongTerm,
  },
  ctaLabel: "立即咨询租赁方案",
  ctaHref: "/#contact",
  legalNote:
    "当前案例图片为阶段性展示素材（含拍摄水印），后续将替换为官方无水印版本。",
};

export const rentalVideo: RentalVideo = {
  title: "机器人租赁现场视频",
  description:
    "展示机器人在活动场景中的执行状态与互动表现，便于快速评估租赁落地效果。",
  src: "/cases/rental-demo.mp4",
  poster: "/cases/short-03.jpg",
  note: "建议在 Wi-Fi 环境下播放；若首屏加载较慢可稍后重试。",
};

export const footerContent: FooterContent = {
  copyright: `© ${new Date().getFullYear()} 上海法智瑞云科技服务有限公司 版权所有`,
  compliance: "本网站信息仅用于企业展示，不构成对外承诺，最终内容以正式合同为准。",
};
