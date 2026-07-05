import { productGalleryPaths } from '../../data/productImages';

export default {
  meta: {
    title: '雾森系统·人造雾·喷雾降尘设备 | 河北善道环境科技有限公司',
    description:
      '河北善道环境科技有限公司 — 雾森系统与工业加湿降尘设备源头厂家，集研发、生产、造雾工程设计施工与安装维修于一体，覆盖喷雾降尘、加湿降温、人造雾景观与雾化消毒，服务华北及全国。',
    keywords:
      '雾森系统, 雾森设备, 雾森系统厂家, 雾森喷雾系统, 人造雾设备, 人工造雾设备厂家, 造雾系统, 造雾设备, 喷雾降尘系统设备, 雾炮机设备, 高压微雾系统, 微雾系统, 景观雾森系统, 加湿降温, 雾化消毒, 河北善道环境科技有限公司',
  },

  seo: {
    home: {
      title: '雾森系统·人造雾·喷雾降尘设备 | 河北善道环境科技有限公司',
      description:
        '雾森系统、人造雾景观与喷雾降尘设备源头厂家 — 河北善道集研发、生产、造雾工程设计施工与安装维修于一体，服务景区、社区、园林及各类工业车间。',
    },
    industry: {
      title: '行业资讯-雾森与微雾工程动态-善道环境',
      description: '河北善道环境科技有限公司发布的环保雾化与微雾工程领域最新趋势、政策动态与行业洞察。',
    },
    article: {
      title: '{title}-善道环境',
      description: '{excerpt}',
    },
    projectCategory: {
      title: '{category}-工程案例-善道环境',
      description: '{description}',
    },
    project: {
      title: '{project}-{category}-善道环境',
      description: '{description}',
    },
    privacy: {
      title: '隐私政策-善道环境',
      description: '河北善道环境科技有限公司如何收集、使用和保护您的个人信息。',
    },
    terms: {
      title: '服务条款-善道环境',
      description: '使用河北善道环境科技有限公司网站与服务的条款与条件。',
    },
    admin: {
      title: '管理后台-善道环境',
      description: '内部管理区域。',
    },
  },

  common: {
    close: '关闭',
    backToTop: '返回顶部',
  },

  nav: {
    products: '产品图库',
    technology: '工程案例',
    industry: '行业资讯',
    contact: '联系我们',
    serviceAreas: '服务区域',
    solutions: '行业方案',
    back: '返回',
    brandLine1: '河北善道',
    brandLine2: '环境科技',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },

  hero: {
    badge: '雾森系统 · 环保雾化解决方案',
    titleLine1: '精准',
    titleHighlight: '微雾',
    titleLine2: '系统',
    subtitle:
      '专注于局部空间环境改善，提供加湿、除尘、降温一站式解决方案 — 集研发、销售与微雾工程项目设计施工于一体。',
    ctaPrimary: '查看设备',
    ctaSecondary: '联系我们',
    applicationsLabel: '我们的业务',
    applications: [
      { icon: 'dust', label: '工业除尘' },
      { icon: 'humidify', label: '精准加湿' },
      { icon: 'cooling', label: '喷雾降温' },
      { icon: 'disinfect', label: '雾化消毒' },
    ],
    stat1Value: '90%+',
    stat1Label: '除尘效率',
    stat2Value: '24/7',
    stat2Label: '智能控制',
    stat3Value: '1000+',
    stat3Label: '工程案例',
  },

  projectsSection: {
    eyebrow: '工程案例',
    title: '核心业务',
    subtitle: '涵盖多个行业的微雾工程解决方案，点击分类查看具体项目。',
    viewProjects: '查看项目',
  },

  industries: {
    label: '广泛服务于各行业',
    list: [
      { icon: 'mining', name: '矿山与重工业', to: '/solutions/stone' },
      { icon: 'construction', name: '建筑工程', to: '/solutions/cement' },
      { icon: 'chemical', name: '化工与纺织', to: '/solutions/textile' },
      { icon: 'agriculture', name: '农业与温室', to: '/projects/marine' },
      { icon: 'municipal', name: '市政环卫', to: '/projects/science' },
    ],
  },

  industry: {
    title: '行业资讯',
    subtitle: '环保雾化与微雾工程领域的最新趋势、政策动态与行业洞察。',
    readMore: '阅读更多',
    backToList: '返回',
    notFound: '未找到该文章。',
    contactCta: '需要将以上内容应用到您的项目？欢迎联系我们的工程团队。',
    filter: {
      searchPlaceholder: '搜索文章…',
      allCategories: '全部',
      noResults: '没有符合条件的文章。',
    },
    articles: [],
  },

  products: {
    eyebrow: '产品',
    title: '产品图库',
    titleHighlight: '',
    description: '我们为客户安装项目部署的雾森系统、造雾与高压微雾设备组件 — 源头厂家直供，提供喷雾加湿、降温、除尘及安装维修交钥匙服务。',
    requestOffer: '获取报价',
    contact: '联系',
    photosSoon: '图片即将上线',
    specsTitle: '超声波加湿机',
    specsSubtitle: '型号规格参数',
    list: [
      {
        id: 101,
        name: '超声波加湿机',
        subtitle: '超声波冷雾系统',
        description:
          '产生 1–5 微米超细冷雾，适用于温室、实验室及封闭工业空间的精准湿度控制。',
        category: '加湿',
        gallery: productGalleryPaths.ultrasonic,
        specs: ['型号：C400 – C2400', '雾滴粒径 1–5 μm', '低能耗运行', '静音设计'],
      },
      {
        id: 102,
        name: '高压微雾加湿机',
        subtitle: '工业雾化系统',
        description:
          '高压微米级雾化，适用于除尘、降温及大规模加湿，满足严苛工业环境需求。',
        category: '雾化',
        gallery: productGalleryPaths.highPressure,
        specs: ['高压泵组系统', '可调流量', '耐腐蚀喷嘴', '支持自动化控制'],
      },
      {
        id: 103,
        name: '配件与组件',
        subtitle: '系统零部件',
        description: '喷嘴、接头、水泵及控制模块 — 与微雾系统配套使用的精密组件。',
        category: '配件',
        gallery: productGalleryPaths.accessories,
        specs: ['兼容 OEM 配件', '快换喷嘴头', '不锈钢选项', '全套系统组件'],
      },
    ],
    specTable: {
      model: '型号',
      dimensions: '规格（mm）',
      transformerPower: '变压器功率（W）',
      platePower: '雾化板功率（W）',
      plates: '雾化板（个数）',
      outlets: '出雾筒（个数）',
      fans: '风扇（个数）',
      area: '适用面积（㎡）',
      control: '控制方式',
      controlValue: '手动控制/时间控制/湿度控制',
    },
  },

  trust: {
    eyebrow: '关于我们',
    title: '',
    description:
      '本公司深耕于环保雾化领域，是一家集研发、销售与微雾工程项目设计施工于一体的综合服务商。我们专注于为客户提供局部空间环境改善，以及加湿、除尘、降温的一站式解决方案。业务版图广泛覆盖多个行业：从造纸、印刷、化工、纺织化纤到电子制造车间的环境调控；从垃圾场、中转站的除臭治理，到畜牧养殖业的防疫消毒；同时延伸至地产景区的人造雾景观打造，以及农业大棚、食用菌培育等精密加湿场景。\n\n公司始终秉持"诚信、创新、服务、感恩"的管理理念，以此为基石推动团队成长并精准响应客户需求。我们广纳高素质专业人才，坚守"客户至上、服务至上"的经营原则，以卓越的服务品质与精湛的技术实力严把质量关。凭借为各行业客户提供的专业咨询与定制化解决方案，我们赢得了广大客户与合作伙伴的高度认可与信赖。',
    hpBlock: '',
    features: [],
    testimonialsEyebrow: '项目成果',
    testimonialsTitle: '',
    testimonialsSubtitle: '来自工程安装与部署客户的反馈',
    testimonials: [
      {
        quote:
          '混凝土搅拌站的高压微雾系统显著降低了扬尘。安装专业，自动化控制系统自投运以来运行稳定可靠。',
        author: '运营经理',
        role: '混凝土搅拌站 — 扬尘治理项目',
        image: '/data/concrete-batching-plant/4.jpeg',
        metric: '扬尘降低 90%+',
      },
      {
        quote:
          '景观雾化工程让户外空间焕然一新 — 降温、加湿与视觉效果兼具。团队在设计施工过程中未影响日常运营。',
        author: '景观开发负责人',
        role: '生态雾景观项目',
        image: '/data/eco-atomizer/2.jpg',
        metric: '降温加湿一体化',
      },
      {
        quote:
          '垃圾中转站雾化除臭系统投运后，异味明显改善。定时运行模式减轻了团队的日常操作负担。',
        author: '设施主管',
        role: '市政环卫 — 除臭治理',
        image: '/data/odor-control/3.jpeg',
        metric: '24/7 自动除臭',
      },
    ],
  },

  faq: {
    eyebrow: '常见问题',
    title: '雾森系统常见问题',
    subtitle: '关于雾森系统、造雾设备与喷雾工程的常见疑问解答。',
    items: [
      {
        q: '什么是雾森系统？',
        a: '雾森系统（又称人造雾、造雾系统）通过高压主机将水加压后经微米级喷嘴雾化，形成接近自然雾的细密水雾，可用于景观造雾、降温、加湿与喷雾降尘。河北善道提供雾森系统的设备供应与工程设计施工。',
      },
      {
        q: '雾森系统的造价是多少？',
        a: '雾森系统的造价与喷雾面积、喷嘴数量、主机功率、管路布置及控制方式有关，通常按每平方米或按项目方案核算。具体报价需结合现场情况，欢迎提供场地信息获取定制方案与报价。',
      },
      {
        q: '雾森系统的工作原理是什么？',
        a: '系统通过高压泵将水加压至数兆帕，经精密喷嘴形成 1–10 微米级水雾；水雾在空气中迅速蒸发吸热，从而实现降温、加湿，并吸附悬浮颗粒达到喷雾降尘效果。',
      },
      {
        q: '雾森系统适用于哪些场景？',
        a: '常见于景区、园林、小区与公园的景观造雾与降温，也用于工业除尘、堆场喷雾降尘、畜牧养殖降温消毒，以及农业大棚、食用菌的精准加湿。',
      },
      {
        q: '雾森系统与高压微雾、喷雾系统有什么区别？',
        a: '三者原理相近，均为高压微米级雾化。「雾森」多指景观造雾的整体系统，「高压微雾」侧重加湿降温设备，「喷雾降尘」侧重工业除尘。市场上亦称雾喷系统、造雾机或人工雾设备，本质同类，可根据用途选择相应配置。',
      },
      {
        q: '你们服务哪些地区？',
        a: '公司位于河北省石家庄市，服务华北并面向全国提供雾森系统与造雾工程的设计、供货与施工。',
      },
      {
        q: '雾森系统品牌怎么选？你们是厂家吗？',
        a: '我们是位于石家庄的源头厂家，设备自研自产并承接工程设计施工。选择雾森系统品牌时，建议重点考察实际工程案例、设备用材、控制系统与售后能力，而非只比较价格。欢迎索取案例资料或到厂考察。',
      },
      {
        q: '如何获取雾森系统报价单？',
        a: '告知使用场景（景观、车间或料场）、覆盖面积或喷雾点位数量以及现场水电条件，我们即可出具配置方案与报价单，一般 1–2 个工作日内反馈。',
      },
      {
        q: '是否提供安装与售后维修？',
        a: '提供。我们承担系统设计、安装调试与操作培训；石家庄及周边支持上门维修，全国项目提供远程指导与配件供应，主机、喷嘴等易损件长期备货。',
      },
    ],
  },

  contact: {
    eyebrow: '联系',
    title: '联系方式',
    subtitle: '扫码联系或直接留言咨询。',
    wechatTitle: '微信',
    wechatDesc: '扫码或复制 ID 添加',
    wechatCopy: '复制微信号',
    wechatCopied: '微信号已复制！',
    whatsappTitle: 'WhatsApp',
    whatsappDesc: '国际客户快速响应',
    whatsappOpen: '打开聊天',
    phoneTitle: '电话',
    phoneDesc: '欢迎来电咨询',
    phoneCall: '立即拨打',
    emailTitle: '邮箱',
    emailDesc: '国际客户邮件咨询',
    emailSend: '发送邮件',
    formTitle: '快速咨询',
    firstName: '名',
    lastName: '姓',
    email: '邮箱',
    message: '请描述您的需求',
    submit: '提交咨询',
    sent: '正在打开您的邮箱应用，请点击发送以完成咨询。',
    phones: ['+86 166 3110 8208', '+86 166 3110 8228'],
    whatsapp: '+8616631105554',
    emailAddress: 'hbshandao@outlook.com',
    address: {
      full: '河北省石家庄市新华区植物园街60号植物园南门东50米',
      street: '新华区植物园街60号（植物园南门东50米）',
      locality: '石家庄市',
      region: '河北省',
    },
  },

  footer: {
    companyName: '河北善道环境科技有限公司',
    tagline: '雾森系统与工业加湿降尘设备源头厂家 — 提供喷雾降尘、人造雾景观及微雾工程设计施工与安装维修一站式服务。',
    contactTitle: '联系我们',
    address: '河北省石家庄市新华区植物园街60号',
    linksTitle: '快速链接',
    followTitle: '关注我们',
    copyright: '河北善道环境科技有限公司',
    privacy: '隐私政策',
    terms: '服务条款',
  },

  projectPage: {
    notFound: '未找到该分类',
    noProjects: '该分类暂无项目。',
    projectsCount: '个项目',
    caseStudy: '案例',
    getInTouch: '联系我们',
    projectDetails: '项目详情',
    viewGallery: '查看完整图库',
    projectNotFound: '未找到该项目',
  },

  serviceAreas: {
    eyebrow: '服务区域',
    title: '雾森系统服务区域',
    subtitle:
      '河北善道总部位于石家庄，面向华北及全国提供雾森系统、人造雾景观与喷雾降尘工程的设计、供货与施工。',
    indexHint: '选择区域了解当地常见应用与服务说明。',
    viewRegion: '查看详情',
    applicationsLabel: '当地常见应用',
    coverageLabel: '服务说明',
    relatedLabel: '相关工程案例',
    citiesLabel: '覆盖城市',
    contactCta: '需要当地项目方案或报价？欢迎联系我们的工程团队。',
    notFound: '未找到该区域。',
    metaTitleTpl: '{region}雾森系统·喷雾降尘设备-善道环境',
    metaDescTpl: '{region}雾森系统、人造雾景观与喷雾降尘工程 — 河北善道提供设备供货、设计与施工。覆盖：{cities}。',
    regions: {
      huabei: {
        name: '华北 · 河北',
        cities: '石家庄、北京、天津、唐山、保定等',
        h1: '华北雾森系统与喷雾降尘工程',
        intro:
          '公司总部位于河北石家庄，对京津冀及周边地区可快速响应、就近服务。华北重工业集中，钢铁、矿山、搅拌站与选煤厂的扬尘治理需求突出；冬季空气干燥，车间加湿同样常见。',
        points: [
          { t: '工业喷雾降尘', d: '为钢铁、矿山、混凝土搅拌站、选煤厂提供高压喷雾与雾炮降尘，降低 PM2.5、PM10。' },
          { t: '车间加湿', d: '干燥季节为纺织、印刷、电子车间提供微雾加湿，稳定相对湿度。' },
          { t: '景观造雾', d: '为园林、公园、社区与绿化工程打造人造雾景观，兼顾降温与氛围营造。' },
          { t: '就近服务', d: '本地团队可快速到场勘察、安装与维护。' },
        ],
        coverage: '设备供货、工程设计与施工，覆盖石家庄及京津冀周边。',
      },
      henan: {
        name: '河南',
        cities: '郑州、开封、漯河、三门峡、平顶山等',
        h1: '河南雾森系统·造雾设备与喷雾工程',
        intro:
          '面向郑州、开封、漯河、三门峡、平顶山等地。河南农业基础雄厚，温室加湿与畜牧降温消毒需求大；同时城镇建设带来工地与堆场的扬尘治理需求。',
        points: [
          { t: '温室与食用菌加湿', d: '超声波与高压微雾维持大棚、食用菌培育的适宜湿度。' },
          { t: '工地与堆场降尘', d: '建筑工地、骨料堆场的喷雾降尘与围挡喷淋。' },
          { t: '畜牧降温消毒', d: '养殖圈舍的蒸发降温与雾化消毒，缓解热应激。' },
          { t: '景观人造雾', d: '景区、园林与小区的雾森景观与降温。' },
        ],
        coverage: '设备供货、设计与施工，服务河南全省主要城市。',
      },
      metros: {
        name: '重点城市',
        cities: '成都、武汉、西安、重庆',
        h1: '成都·武汉·西安·重庆 雾森系统与景观造雾',
        intro:
          '面向成都、武汉、西安、重庆等重点城市。成都、武汉、重庆夏季湿热，户外降温需求明显；西安文旅与景观项目集中，人造雾景观应用广泛。',
        points: [
          { t: '景区与园林造雾', d: '为景区、园林营造雾森景观，配合降温与负氧离子。' },
          { t: '户外商业降温', d: '餐饮外摆、商业街区的喷雾降温。' },
          { t: '小区雾景', d: '住宅小区水景与雾森景观设计。' },
          { t: '室内场馆加湿', d: '展馆、温室等场所的精准加湿。' },
        ],
        coverage: '按项目提供设计、供货与施工对接，覆盖西南、华中与西北重点城市。',
      },
      shandong: {
        name: '山东',
        cities: '济南、青岛等',
        h1: '山东雾森系统·喷雾降尘与雾化消毒',
        intro:
          '面向济南、青岛及沿海地区。山东工业、港口、食品加工及规模化养殖发达，堆场降尘、除臭消毒与畜牧降温需求集中。',
        points: [
          { t: '港口与堆场降尘', d: '散货堆场、物料转运的高压喷雾与雾炮降尘。' },
          { t: '除臭与雾化消毒', d: '垃圾中转、污水及食品加工场所的喷雾除臭与消毒。' },
          { t: '畜牧降温消毒', d: '规模化养殖的降温与防疫消毒。' },
          { t: '沿海景观造雾', d: '景区与商业空间的人造雾景观。' },
        ],
        coverage: '设备供货、设计与施工，服务济南、青岛及山东沿海。',
      },
    },
  },

  solutions: {
    eyebrow: '行业方案',
    title: '工业加湿降尘行业解决方案',
    subtitle:
      '针对不同行业车间与厂区的微雾加湿、喷雾降尘与雾化系统方案 — 源头厂家提供设计、供货、安装与维修。',
    indexHint: '选择行业查看典型工况与方案说明。',
    viewSolution: '查看方案',
    applicationsLabel: '典型工况与方案',
    coverageLabel: '服务说明',
    relatedLabel: '相关工程案例',
    scenariosLabel: '适用场景',
    contactCta: '需要针对贵厂工况的方案或报价？欢迎联系工程团队。',
    notFound: '未找到该行业方案。',
    metaDescTpl: '{intro}',
    items: {
      textile: {
        name: '纺织与纺纱车间',
        h1: '纺织厂加湿系统·纺纱车间微雾加湿',
        metaTitle: '纺织厂加湿器_纺纱车间微雾加湿-善道环境',
        scenarios: '纺纱、织造、化纤车间，服装与面料生产',
        intro:
          '纺织与纺纱车间对相对湿度十分敏感：湿度不足导致断纱、飞花增多与静电吸附，直接影响质量与产能。高压微雾加湿系统将水雾化为微米级颗粒，快速均匀提升车间湿度，同时兼具降尘作用。',
        points: [
          { t: '恒湿控制', d: '按区域设定目标湿度（常见 55%–75%RH），与温湿度传感器联动自动启停，昼夜工况可分别设置。' },
          { t: '防静电加湿', d: '稳定的湿度可抑制静电产生，减少飞花吸附与断纱，是纺织车间常用的防静电加湿设备方案。' },
          { t: '降尘净化', d: '微雾吸附车间飞絮与粉尘，改善空气质量与作业环境。' },
          { t: '定制布点', d: '源头厂家按车间面积与设备布局定制喷嘴点位，用水与能耗可控。' },
        ],
        coverage: '纺织、纺纱、织造与化纤车间加湿降尘系统的设计、供货、安装与维修。',
      },
      nonwoven: {
        name: '无纺布车间',
        h1: '无纺布车间湿度控制系统',
        metaTitle: '无纺布车间湿度控制_微雾加湿-善道环境',
        scenarios: '无纺布生产线、熔喷与纺粘车间',
        intro:
          '无纺布生产对湿度与静电控制要求较高：环境过干会引起纤维飘散、卷材带电与克重不稳。微雾加湿在不打湿物料的前提下稳定车间湿度，帮助产线稳定运行。',
        points: [
          { t: '恒湿稳产', d: '湿度稳定有助于克重均匀与成卷平整，减少断料与废品。' },
          { t: '静电治理', d: '将车间湿度维持在工艺区间，配合产线防静电要求。' },
          { t: '干雾不滴水', d: '微米级雾粒即喷即散，不在设备与卷材表面结露。' },
          { t: '分区控制', d: '按产线分区独立控制，兼顾效果与节能。' },
        ],
        coverage: '无纺布及熔喷车间湿度控制系统的方案设计、供货、安装与维修。',
      },
      painting: {
        name: '喷漆与涂装车间',
        h1: '汽车喷漆房加湿·涂装车间微雾加湿',
        metaTitle: '汽车喷漆房加湿_涂装车间微雾加湿-善道环境',
        scenarios: '汽车喷漆房、家具与机械涂装线',
        intro:
          '喷漆与涂装工艺对湿度、洁净度与静电控制要求严格：湿度不足易导致漆面橘皮、针孔与静电吸尘。微雾加湿系统通过消除静电、抑制漆雾粉尘，帮助稳定涂装质量。',
        points: [
          { t: '消除静电', d: '消除静电喷漆加湿，减少漆面吸附灰尘造成的返工。' },
          { t: '漆雾抑制', d: '水雾捕捉悬浮漆雾与粉尘，改善车间空气环境。' },
          { t: '工艺恒湿', d: '按涂装工艺设定湿度区间，自动恒湿运行。' },
          { t: '安全选型', d: '按喷漆房现场安全要求进行设备选型与管路布置。' },
        ],
        coverage: '喷漆房与涂装车间加湿降尘系统的设计、供货、安装与维修。',
      },
      grinding: {
        name: '打磨车间',
        h1: '打磨车间降尘加湿系统',
        metaTitle: '打磨车间降尘加湿_喷雾降尘-善道环境',
        scenarios: '金属打磨、抛光与木工砂光车间',
        intro:
          '打磨抛光工序粉尘浓度高、颗粒细，干燥环境下极易扩散，带来职业健康与安全隐患。喷雾降尘系统以微米水雾捕捉悬浮粉尘，同时提升湿度、抑制二次扬尘。',
        points: [
          { t: '悬浮尘捕捉', d: '微米雾粒与粉尘颗粒结合沉降，降低车间 PM 浓度。' },
          { t: '工位强化', d: '打磨工位定向喷雾，源头控制扬尘。' },
          { t: '湿度抑尘', d: '维持适宜湿度，减少地面与设备表面二次起尘。' },
          { t: '联动控制', d: '可与排风、生产时段联动，定时自动运行。' },
        ],
        coverage: '打磨、抛光车间喷雾降尘与加湿系统的设计、供货、安装与维修。',
      },
      tobacco: {
        name: '烟草车间',
        h1: '烟草车间加湿系统',
        metaTitle: '烟草车间加湿_微雾恒湿-善道环境',
        scenarios: '制丝、储叶与卷包车间',
        intro:
          '烟叶与烟丝对湿度敏感：环境过干造成造碎率上升、重量损耗与品质波动。车间微雾加湿维持工艺湿度区间，降低造碎与损耗。',
        points: [
          { t: '工艺恒湿', d: '按制丝、储叶、卷包不同工段设定湿度，自动恒湿。' },
          { t: '干雾细腻', d: '微米级雾粒快速汽化，不打湿烟叶与设备。' },
          { t: '分区管理', d: '各工段独立控制，适配不同工艺要求。' },
          { t: '材质可靠', d: '接触部件可选不锈钢材质，便于清洁维护。' },
        ],
        coverage: '烟草制丝、储叶及卷包车间加湿系统的设计、供货、安装与维修。',
      },
      paper: {
        name: '造纸与印刷车间',
        h1: '造纸厂加湿·印刷车间湿度控制',
        metaTitle: '造纸厂加湿_印刷车间加湿-善道环境',
        scenarios: '造纸车间、印刷车间与纸品仓储',
        intro:
          '纸张含水率随环境湿度变化，环境过干会引起纸张收缩、卷曲、静电与套印不准。微雾加湿稳定车间湿度，改善纸张适性与印刷质量。',
        points: [
          { t: '恒湿控制', d: '稳定车间相对湿度，减少纸张变形与断纸。' },
          { t: '防静电', d: '抑制纸张与设备静电，减少吸附与卡纸。' },
          { t: '干雾不滴水', d: '雾粒即喷即散，不在纸面与设备结露。' },
          { t: '仓储保湿', d: '纸品仓库湿度维持，减少存储损耗。' },
        ],
        coverage: '造纸、印刷车间及纸品仓储加湿系统的设计、供货、安装与维修。',
      },
      cement: {
        name: '水泥与建材厂',
        h1: '水泥厂雾化降尘·建材行业除尘方案',
        metaTitle: '水泥厂雾化降尘设备_建材除尘-善道环境',
        scenarios: '水泥厂、搅拌站、建材生产线与装卸料点',
        intro:
          '水泥与建材生产的粉尘点多面广：破碎、粉磨、输送、装卸各环节均有扬尘。水雾降尘设备在关键节点定向喷雾，抑制粉尘外逸，助力厂区达标排放。',
        points: [
          { t: '节点治理', d: '装卸料口、皮带转运点等关键节点定向喷雾降尘。' },
          { t: '水雾降尘', d: '微米雾粒吸附悬浮颗粒，降低 PM2.5、PM10 浓度。' },
          { t: '智能联动', d: '与生产工况联动自动启停，无需专人值守。' },
          { t: '维护便捷', d: '喷嘴、过滤等易损件快换设计，维修响应及时。' },
        ],
        coverage: '水泥厂、搅拌站及建材企业喷雾降尘系统的设计、供货、安装与维修。',
      },
      stone: {
        name: '石料厂与砂石料场',
        h1: '石料厂破碎车间降尘·砂石料场防风抑尘',
        metaTitle: '石料厂降尘_砂石料场防风抑尘-善道环境',
        scenarios: '破碎车间、筛分线、输送带与露天料场',
        intro:
          '石料破碎与砂石堆存是扬尘治理重点：破碎筛分粉尘浓度高，露天料场受风力影响易起尘。系统化喷雾抑尘覆盖破碎、输送与堆场全流程，形成完整的石料厂粉尘污染解决方案。',
        points: [
          { t: '破碎点喷雾', d: '破碎机进出料口定向喷雾，源头抑制扬尘。' },
          { t: '输送带抑尘', d: '石料厂输送带转运点喷雾，减少物料跌落起尘。' },
          { t: '料场防风抑尘', d: '露天料场高压微雾与喷淋结合，配合定时策略抑制风起尘。' },
          { t: '整体方案', d: '按厂区平面出具整体降尘方案与报价，支持分期实施。' },
        ],
        coverage: '石料厂、砂石料场喷雾抑尘系统的设计、供货、安装与维修。',
      },
    },
  },

  productModal: {
    title: '咨询产品',
    subtitle: '请选择联系方式',
    whatsapp: 'WhatsApp',
    chatNow: '立即咨询',
    wechat: '微信',
    orEmail: '或直接发送邮件',
    interestMsg: '您好，我对以下产品感兴趣：',
  },

  gallery: {
    open: '打开图库',
    close: '关闭图库',
    prev: '上一张',
    next: '下一张',
    swipeHint: '左右滑动浏览图片',
    keyboardHint: '可用方向键切换',
    goTo: '跳转到第',
  },

  projects: {
    categories: {
      industrial: {
        title: '工业微雾抑尘工程',
        description: '适用于矿山、建筑及重工业的高压微雾、喷雾降尘与雾炮除尘解决方案。',
        projects: {
          1: {
            title: '混凝土搅拌站扬尘治理',
            shortDesc: '高压微雾系统，用于扬尘抑制及飞灰调湿。',
            fullDescription:
              '在设施关键位置部署高压雾化系统，利用微米级水雾高效吸附悬浮颗粒，显著降低 PM2.5 浓度，防止粉尘扩散。在封闭空间内，对干灰进行精准计量加水及强制混合，调节含水率，彻底消除卸料及运输过程中的二次扬尘。',
          },
          10: {
            title: '选煤厂粉尘治理',
            shortDesc: '智能喷雾，降低选煤作业区 PM2.5。',
            fullDescription:
              '选煤厂高压加湿雾化系统可显著降低作业区 PM2.5 和 PM10 浓度。在高效抑尘的同时避免物料浪费和二次污染。深度集成智能控制模块，实现无人值守精准喷雾，助力企业建设现代化、清洁型生产环境。',
          },
          11: {
            title: '智能围挡喷淋系统',
            shortDesc: '建筑工地自动喷淋，降温除尘。',
            fullDescription:
              '智能喷淋系统不仅改善施工现场及周边空气质量，还在高温季节为作业面提供降温。支持灵活的定时启停模式，显著降低人工运维成本，同时确保高效抑尘和舒适的工作环境。',
          },
        },
      },
      ecology: {
        title: '生态雾森美学工程',
        description: '雾森系统与人造雾景观，适用于景区、园林、社区与绿化工程的景观美化、降温及独特氛围营造。',
        projects: {
          2: {
            title: '生态雾景观项目',
            shortDesc: '微米级雾效系统，景观美化与降温。',
            fullDescription:
              '采用微米级雾化技术，人造雾景观系统营造梦幻氛围，同时实现降温、加湿、空气净化及释放负氧离子。配合全自动智能控制，精准喷雾，显著提升园林景观艺术效果，打造清凉舒适的户外休闲空间。',
          },
        },
      },
      marine: {
        title: '智慧农业温室配套',
        description: '现代温室及种植环境的超声波加湿、微雾降温与气候控制方案。',
        projects: {
          3: {
            title: '食用菌智慧方舱',
            shortDesc: '超声波冷雾，维持食用菌生长最佳湿度。',
            fullDescription:
              '在封闭式食用菌栽培温室中，超声波加湿机产生 1–5 微米超细"冷雾"，精准维持 85%–95% 的最佳湿度，防止脱水萎蔫，缩短生长周期，提高产量，并避免传统喷淋造成积水导致的腐烂和瑕疵。',
          },
          30: {
            title: '温室育苗基地',
            shortDesc: '加湿系统，降低幼苗热应激。',
            fullDescription:
              '农业育苗基地应用高压加湿系统，通过微米级雾化快速提升湿度、降低温度，有效减少幼苗水分蒸腾和热应激，显著提高成活率和品质。配合全自动智能控制，实现精准灌溉加湿，节约水资源，降低人工成本。',
          },
        },
      },
      science: {
        title: '空间雾化消毒系统',
        description: '雾化消毒与喷雾除臭技术，用于垃圾中转站除臭、畜牧防疫消毒及环境卫生。',
        projects: {
          40: {
            title: '市政环卫除臭工程',
            shortDesc: '雾化技术，分解垃圾站异味分子。',
            fullDescription:
              '垃圾中转站采用高压加湿除臭设备，利用微米级雾化快速分解硫化氢、氨等恶臭分子，从源头净化空气。同时兼具抑尘降温功能，改善环卫人员作业环境。智能控制实现精准全天候除臭运行。',
          },
          41: {
            title: '畜牧业防疫工程',
            shortDesc: '畜禽舍降温与消毒系统。',
            fullDescription:
              '利用高效蒸发降温原理，显著降低畜禽舍内温湿度，缓解热应激，提高存活率和产能。设备具备全面无死角消毒功能，为畜禽健康建立防护屏障，是现代化养殖降本增效的理想选择。',
          },
        },
      },
    },
  },

  admin: {
    login: {
      title: '管理后台',
      subtitle: '行业资讯文章',
      password: '密码',
      showPassword: '显示密码',
      hidePassword: '隐藏密码',
      signIn: '登录',
      signingIn: '登录中…',
    },
    errors: {
      notConfigured: '服务器未配置管理密码（ADMIN_PASSWORD）。',
      invalid: '密码错误。',
      network: '无法连接服务器，请确认 API 已启动。',
    },
    articles: {
      title: '文章管理',
      subtitle: '自定义行业资讯（保存在服务器）',
      newArticle: '新建文章',
      logout: '退出登录',
      empty: '暂无文章。',
      footerBefore: '已发布且可见的文章会显示在',
      footerAfter: '。隐藏和归档的文章不会在公开页面显示。',
      untitled: '无标题',
      thisArticle: '此文章',
      lastUpdated: '最后更新',
      noFilterResults: '没有符合筛选条件的文章。',
      filters: {
        title: '搜索与筛选',
        searchPlaceholder: '按标题、正文或分类搜索…',
        category: '分类',
        status: '状态',
        dateFrom: '起始日期',
        dateTo: '结束日期',
        sortBy: '排序',
        allCategories: '全部分类',
        allStatuses: '全部状态',
        sortDateDesc: '日期（新→旧）',
        sortDateAsc: '日期（旧→新）',
        sortCategoryAsc: '分类（A–Z）',
        sortCategoryDesc: '分类（Z–A）',
        sortStatusAsc: '状态（草稿→归档）',
        sortStatusDesc: '状态（归档→草稿）',
        reset: '重置筛选',
        active: '已启用',
      },
    },
    status: {
      archived: '已归档',
      hidden: '已隐藏',
      published: '已发布',
      draft: '草稿',
    },
    actions: {
      preview: '预览',
      edit: '编辑',
      delete: '删除',
      hide: '隐藏',
      unhide: '显示',
      restore: '恢复',
      deletePermanently: '永久删除',
      back: '返回',
      saveDraft: '保存草稿',
      publish: '发布',
      publishChanges: '发布更改',
      unpublish: '取消发布',
      close: '关闭',
      ok: '确定',
      cancel: '取消',
      retry: '重试',
      addFromDevice: '从设备添加',
      removeImage: '移除图片',
    },
    archive: {
      title: '归档',
    },
    dialog: {
      archiveTitle: '移至归档？',
      archiveMessage: '「{title}」将从公开网站移除并移至归档。之后可以恢复。',
      permanentTitle: '永久删除？',
      permanentMessage: '「{title}」将被永久删除，此操作无法撤销。',
      moveToArchive: '移至归档',
      deletePermanently: '永久删除',
      draftSavedTitle: '已保存为草稿',
      draftSavedMessage: '文章已保存为草稿。您可以继续编辑或返回文章列表。',
      incompletePublishTitle: '无法发布',
      incompletePublishMessage: '并非所有字段都已填写。发布前请填写中英文的所有必填字段。',
      publishedDeleteTitle: '文章已发布',
      publishedDeleteMessage: '该文章当前已发布。若要从公开网站移除，请先点击「取消发布」。',
    },
    edit: {
      notFound: '未找到该文章。',
      publishHint: '当中英文的日期、分类、标题、摘要和正文均填写完成后即可发布。图片为可选项。',
      publishError: '发布前请填写中英文的所有必填字段。',
      publishTitle: '发布文章',
      publishChangesTitle: '保存并发布更改',
      publishDisabledTitle: '请填写中英文必填字段后再发布',
      imageErrorType: '请选择图片文件。',
      imageErrorSize: '图片大小不能超过 20 MB。',
      imageErrorOptimize: '无法处理该图片，请换一张或选择较小的照片。',
      imageOptimizing: '正在优化图片…',
      date: '日期',
      category: '分类',
      selectCategory: '选择分类…',
      categoryLegacy: '当前值不在列表中：{value}。请从上方选择分类。',
      title: '标题',
      coverImage: '封面图片（可选）',
      imageUrlPlaceholder: '或粘贴图片 URL（如 /data/concrete-batching-plant/4.jpeg）',
      imageFromDevice: '已从设备加载图片。移除后可输入 URL。',
      excerpt: '摘要',
      body: '正文（段落之间空一行）',
    },
    preview: {
      badge: '预览',
      noBody: '暂无正文。',
    },
    visibility: {
      hideTitle: '在公开网站隐藏',
      showTitle: '在公开网站显示',
    },
    contentLang: {
      en: 'English',
      zh: '中文',
    },
  },
};
