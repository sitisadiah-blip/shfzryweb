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
  hoursLabel: string;
  contactPerson: string;
  phone: string;
  email: string;
  region: string;
  address: string;
  officeHours: string;
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
  facts: HeroFact[];
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

export const siteMeta: SiteMeta = {
  siteName: "上海法智瑞云科技服务有限公司",
  title: "上海法智瑞云科技服务有限公司 | 具身智能与机器人解决方案",
  description:
    "上海法智瑞云科技服务有限公司，聚焦具身智能与机器人应用，提供从感知算法、边云协同到场景部署的一体化技术服务。",
  keywords: [
    "上海法智瑞云科技服务有限公司",
    "具身智能",
    "机器人应用",
    "智能机器人",
    "边云协同",
    "多模态感知",
    "工业智能化",
  ],
  siteUrl: "https://shfzry.com",
  ogImage: "/og-cover.svg",
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
  registeredAddress: "上海市嘉定区（以工商登记信息为准）",
};

export const navigationItems: NavigationItem[] = [
  { label: "公司简介", href: "#intro" },
  { label: "工商信息", href: "#company-info" },
  { label: "具身智能方案", href: "#services" },
  { label: "核心能力", href: "#advantages" },
  { label: "联系方式", href: "#contact" },
];

export const heroContent: HeroContent = {
  badge: "具身智能企业官网",
  sectionLabel: "公司简介",
  englishNameLabel: "英文名称",
  title: "上海法智瑞云科技服务有限公司",
  subtitle:
    "以具身智能为核心，打造覆盖机器人感知、任务规划、执行控制与场景落地的一体化能力。",
  primaryActionLabel: "联系我们",
  primaryActionHref: "#contact",
  secondaryActionLabel: "查看具身智能方案",
  secondaryActionHref: "#services",
  facts: [
    { label: "核心方向", value: "具身智能系统与机器人应用" },
    { label: "交付模式", value: "算法 + 平台 + 场景集成" },
    { label: "服务区域", value: "以上海为核心，面向全国合作" },
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
  hoursLabel: "服务时间",
  contactPerson: "刘晓燕",
  phone: "18638282007",
  email: "shfzry@163.com",
  region: "上海市嘉定区",
  address: "上海市嘉定区（上线前补充详细门牌）",
  officeHours: "周一至周五 09:00 - 18:00",
};

export const footerContent: FooterContent = {
  copyright: `© ${new Date().getFullYear()} 上海法智瑞云科技服务有限公司 版权所有`,
  compliance: "本网站信息仅用于企业展示，不构成对外承诺，最终内容以正式文件为准。",
};
