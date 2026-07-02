import { productGalleryPaths } from '../../data/productImages';

export default {
  meta: {
    title: '雾森系统·人造雾·喷雾降尘设备 | 河北善道环境科技有限公司',
    description:
      '河北善道环境科技有限公司专注雾森系统、人造雾景观与精准微雾设备，提供工业除尘、喷雾降尘、加湿降温、雾化消毒及造雾工程设计施工一站式解决方案，服务华北及全国。',
    keywords:
      '雾森系统, 雾森设备, 雾森系统厂家, 雾森喷雾系统, 人造雾设备, 人工造雾设备厂家, 造雾系统, 造雾设备, 喷雾降尘系统设备, 雾炮机设备, 高压微雾系统, 微雾系统, 景观雾森系统, 加湿降温, 雾化消毒, 河北善道环境科技有限公司',
  },

  seo: {
    home: {
      title: '雾森系统·人造雾·喷雾降尘设备 | 河北善道环境科技有限公司',
      description:
        '河北善道环境科技有限公司提供雾森系统、人造雾景观、喷雾降尘与高压微雾设备 — 集研发、设备供应、造雾工程设计与施工于一体，覆盖工业除尘、加湿降温与雾化消毒。',
    },
    industry: {
      title: '行业资讯 | 河北善道环境科技有限公司',
      description: '河北善道环境科技有限公司发布的环保雾化与微雾工程领域最新趋势、政策动态与行业洞察。',
    },
    article: {
      title: '{title} | 河北善道环境科技有限公司',
      description: '{excerpt}',
    },
    projectCategory: {
      title: '{category} | 河北善道环境科技有限公司工程案例',
      description: '{description}',
    },
    project: {
      title: '{project} | {category} | 河北善道环境科技有限公司',
      description: '{description}',
    },
    privacy: {
      title: '隐私政策 | 河北善道环境科技有限公司',
      description: '河北善道环境科技有限公司如何收集、使用和保护您的个人信息。',
    },
    terms: {
      title: '服务条款 | 河北善道环境科技有限公司',
      description: '使用河北善道环境科技有限公司网站与服务的条款与条件。',
    },
    admin: {
      title: '管理后台 | 河北善道环境科技有限公司',
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
    back: '返回',
    brandLine1: '河北善道',
    brandLine2: '环境科技',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
  },

  hero: {
    badge: '环保雾化解决方案',
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
      { icon: 'mining', name: '矿山与重工业' },
      { icon: 'construction', name: '建筑工程' },
      { icon: 'chemical', name: '化工与纺织' },
      { icon: 'agriculture', name: '农业与温室' },
      { icon: 'municipal', name: '市政环卫' },
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
    description: '我们为客户安装项目所部署的设备组件 — 提供微雾加湿交钥匙工程服务。',
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
        a: '三者原理相近，均为高压微米级雾化。「雾森」多指景观造雾的整体系统，「高压微雾」侧重加湿降温设备，「喷雾降尘」侧重工业除尘。可根据用途选择相应配置。',
      },
      {
        q: '你们服务哪些地区？',
        a: '公司位于河北省石家庄市，服务华北并面向全国提供雾森系统与造雾工程的设计、供货与施工。',
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
    tagline: '专注雾森系统与环保雾化领域，提供工业除尘、喷雾降尘、人造雾景观及微雾工程一站式解决方案。',
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
    metaTitleTpl: '{region}雾森系统·喷雾降尘设备 | 河北善道环境科技有限公司',
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
          { t: '景观造雾', d: '为园林、公园与小区打造人造雾景观，兼顾降温与氛围营造。' },
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
        title: '工业喷雾降尘·微雾扬尘治理',
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
        title: '雾森系统·生态雾景观工程',
        description: '雾森系统与人造雾景观，适用于景区、园林、小区的景观美化、降温及独特氛围营造。',
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
            title: '食用菌栽培集装箱单元',
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
            title: '市政环卫除臭治理',
            shortDesc: '雾化技术，分解垃圾站异味分子。',
            fullDescription:
              '垃圾中转站采用高压加湿除臭设备，利用微米级雾化快速分解硫化氢、氨等恶臭分子，从源头净化空气。同时兼具抑尘降温功能，改善环卫人员作业环境。智能控制实现精准全天候除臭运行。',
          },
          41: {
            title: '畜牧养殖防疫消毒',
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
