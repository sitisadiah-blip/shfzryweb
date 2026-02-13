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
  phoneLabel: string;
  emailLabel: string;
  regionLabel: string;
  addressLabel: string;
  hoursLabel: string;
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
  title: "上海法智瑞云科技服务有限公司 | 技术与企业服务",
  description:
    "上海法智瑞云科技服务有限公司，专注技术服务、软件开发、信息系统集成及企业咨询服务，为企业提供数字化与合规化的一体化支持。",
  keywords: [
    "上海法智瑞云科技服务有限公司",
    "技术服务",
    "软件开发",
    "企业咨询",
    "信息系统集成",
    "数据服务",
  ],
  siteUrl: "https://shfzry.com",
  ogImage: "/og-cover.svg",
};

export const companyProfile: CompanyProfile = {
  companyNameZh: "上海法智瑞云科技服务有限公司",
  companyNameEn: "Shanghai Fazhiruiyun Technology Services Co., Ltd.",
  shortName: "法智瑞云",
  tagline: "技术驱动服务，合规赋能增长",
  overview:
    "公司聚焦技术服务、数字化建设与企业运营咨询，围绕研发、数据、品牌与管理场景，为客户提供可落地、可持续的综合服务方案。",
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
  { label: "业务范围", href: "#services" },
  { label: "优势", href: "#advantages" },
  { label: "联系方式", href: "#contact" },
];

export const heroContent: HeroContent = {
  badge: "企业展示官网",
  sectionLabel: "公司简介",
  englishNameLabel: "英文名称",
  title: "上海法智瑞云科技服务有限公司",
  subtitle:
    "以技术与咨询服务为核心，构建覆盖研发、运营与管理场景的一站式企业服务能力。",
  primaryActionLabel: "联系我们",
  primaryActionHref: "#contact",
  secondaryActionLabel: "查看业务范围",
  secondaryActionHref: "#services",
  facts: [
    { label: "企业性质", value: "有限责任公司（自然人独资）" },
    { label: "所属地区", value: "上海市嘉定区" },
    { label: "纳税资质", value: "小规模纳税人" },
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
    title: "技术研发与系统建设",
    summary: "围绕企业数字化建设，提供从研发到系统集成的持续服务。",
    items: [
      "技术服务",
      "技术开发",
      "技术咨询",
      "技术交流",
      "技术转让",
      "技术推广",
      "软件开发",
      "网络技术服务",
      "网络与信息安全软件开发",
      "信息系统集成服务",
    ],
  },
  {
    title: "数据与智能应用",
    summary: "通过数据治理与智能硬件应用提升组织效率与业务洞察。",
    items: [
      "数据处理和存储支持服务",
      "大数据服务",
      "工业互联网数据服务",
      "互联网数据服务",
      "智能机器人销售",
      "服务消费机器人销售",
      "人工智能硬件销售",
    ],
  },
  {
    title: "品牌传播与创意执行",
    summary: "提供从品牌策划到视觉传播的完整创意支持。",
    items: [
      "广告设计、代理",
      "广告制作",
      "广告发布",
      "企业形象策划",
      "市场营销策划",
      "图文设计制作",
      "平面设计",
      "摄像及视频制作服务",
      "摄影扩印服务",
    ],
  },
  {
    title: "企业运营与管理咨询",
    summary: "面向企业管理、咨询和项目管理场景提供专业服务。",
    items: [
      "企业管理",
      "公共事业管理服务",
      "工程管理服务",
      "信息咨询服务（不含许可类信息咨询服务）",
      "企业管理咨询",
      "社会经济咨询服务",
      "财务咨询",
      "税务服务",
      "法律咨询（不含依法须律师事务所执业许可的业务）",
    ],
  },
  {
    title: "商务支持与活动服务",
    summary: "覆盖会议会展、活动组织及综合商务支持服务。",
    items: [
      "组织文化艺术交流活动",
      "会议及展览服务",
      "婚庆礼仪服务",
      "包装服务",
      "市场调查（不含涉外调查）",
      "健康咨询服务（不含诊疗服务）",
      "医院管理",
      "城市绿化管理",
    ],
  },
  {
    title: "产品销售与渠道拓展",
    summary: "依托线上线下渠道提供多品类产品与知识产权相关服务。",
    items: [
      "计算机软硬件及辅助设备零售",
      "消防器材销售",
      "建筑装饰材料销售",
      "金属材料销售",
      "日用品销售",
      "互联网销售（除销售需要许可的商品）",
      "知识产权服务（专利代理服务除外）",
      "商标代理",
      "版权代理",
    ],
  },
];

export const servicesSectionContent: ServicesSectionContent = {
  sectionLabel: "业务范围",
  title: "主营业务",
  description:
    "经营范围涵盖技术、数据、品牌、咨询与商务支持等多个方向。下方为结构化展示，便于快速浏览。",
  expandLabel: "展开全部业务",
  collapseLabel: "收起业务列表",
  legalNote:
    "除依法须经批准的项目外，凭营业执照依法自主开展经营活动。具体经营项目以主管部门核准内容为准。",
};

export const advantagesSectionContent: AdvantagesSectionContent = {
  sectionLabel: "优势",
  title: "服务优势",
  description:
    "通过技术能力、咨询经验与跨领域协同，为客户提供可执行的业务解决方案。",
  items: [
    {
      title: "技术与业务协同",
      highlight: "研发 + 管理双视角",
      description:
        "在技术实现之外，兼顾企业运营逻辑，减少系统与业务脱节带来的实施成本。",
    },
    {
      title: "多场景服务组合",
      highlight: "覆盖研发到传播",
      description:
        "可在技术、品牌、咨询、活动等环节提供协同服务，缩短跨供应商沟通链路。",
    },
    {
      title: "数据驱动优化",
      highlight: "重视可观测指标",
      description:
        "通过数据处理与分析能力，帮助团队持续复盘并优化经营与运营动作。",
    },
    {
      title: "合规与专业意识",
      highlight: "遵循公开登记范围",
      description:
        "服务范围和交付过程围绕合规边界展开，兼顾业务效率与风险控制。",
    },
  ],
};

export const contactInfo: ContactInfo = {
  sectionLabel: "联系方式",
  title: "欢迎业务咨询与合作沟通",
  description:
    "如需了解具体服务内容、合作方式或项目评估，可通过以下方式直接联系。",
  phoneLabel: "联系电话",
  emailLabel: "联系邮箱",
  regionLabel: "办公地区",
  addressLabel: "办公地址",
  hoursLabel: "服务时间",
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
