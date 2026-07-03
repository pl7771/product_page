import { productGalleryPaths } from '../../data/productImages';

export default {
  meta: {
    title: 'Hebei Shandao Environmental Technology | Precision Micro-Mist Systems',
    description:
      'Hebei Shandao Environmental Technology — source manufacturer of mist (fog) systems and industrial humidification and dust-suppression equipment: R&D, production, engineering design, installation, and repair across China.',
    keywords:
      'Hebei Shandao Environmental Technology, Hebei Shandao, micro-mist, mist system, artificial fog, fog landscape, dust suppression, spray dust suppression, high-pressure atomization, fog cannon, humidification, cooling mist, industrial misting, 河北善道环境科技有限公司, 雾森系统, precision micro-mist systems',
  },

  seo: {
    home: {
      title: 'Hebei Shandao Environmental Technology | Precision Micro-Mist Systems',
      description:
        'Source manufacturer of mist systems, artificial-fog landscaping, and spray dust-suppression equipment — R&D, production, engineering, installation, and repair by Hebei Shandao for scenic areas, communities, and industrial workshops.',
    },
    industry: {
      title: 'Industry Information | Hebei Shandao',
      description:
        'Latest trends, regulations, and insights in eco-friendly atomization and micro-mist engineering from Hebei Shandao Environmental Technology.',
    },
    article: {
      title: '{title} | Hebei Shandao',
      description: '{excerpt}',
    },
    projectCategory: {
      title: '{category} Projects | Hebei Shandao',
      description: '{description}',
    },
    project: {
      title: '{project} | {category} | Hebei Shandao',
      description: '{description}',
    },
    privacy: {
      title: 'Privacy Policy | Hebei Shandao',
      description: 'How Hebei Shandao Environmental Technology collects, uses, and protects your personal information.',
    },
    terms: {
      title: 'Terms of Service | Hebei Shandao',
      description: 'Terms and conditions for using the Hebei Shandao Environmental Technology website and services.',
    },
    admin: {
      title: 'Admin | Hebei Shandao',
      description: 'Private administration area.',
    },
  },

  common: {
    close: 'Close',
    backToTop: 'Back to top',
  },

  nav: {
    products: 'Product Gallery',
    technology: 'Projects',
    industry: 'Industry Information',
    contact: 'Contacts',
    serviceAreas: 'Service Areas',
    solutions: 'Solutions',
    back: 'Back',
    brandLine1: 'Hebei Shandao',
    brandLine2: 'Environmental Tech',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    badge: 'Mist Systems · Eco-Friendly Atomization',
    titleLine1: 'Precision',
    titleHighlight: 'Micro-Mist',
    titleLine2: 'Systems',
    subtitle:
      'One-stop solutions for humidification, dust suppression, and cooling — from R&D and equipment supply to engineering design and installation.',
    ctaPrimary: 'View Equipment',
    ctaSecondary: 'Contact Us',
    applicationsLabel: 'What we do',
    applications: [
      { icon: 'dust', label: 'Dust Suppression' },
      { icon: 'humidify', label: 'Humidification' },
      { icon: 'cooling', label: 'Cooling' },
      { icon: 'disinfect', label: 'Disinfection' },
    ],
    stat1Value: '90%+',
    stat1Label: 'Dust Reduction',
    stat2Value: '24/7',
    stat2Label: 'Smart Control',
    stat3Value: '1000+',
    stat3Label: 'Installations',
  },

  projectsSection: {
    eyebrow: 'Projects',
    title: 'Our Expertise',
    subtitle: 'Explore our solutions across key industries. Click a category to view projects.',
    viewProjects: 'View Projects',
  },

  industries: {
    label: 'Trusted across industries',
    list: [
      { icon: 'mining', name: 'Mining & Heavy Industry', to: '/solutions/stone' },
      { icon: 'construction', name: 'Construction', to: '/solutions/cement' },
      { icon: 'chemical', name: 'Chemicals & Textiles', to: '/solutions/textile' },
      { icon: 'agriculture', name: 'Agriculture & Greenhouses', to: '/projects/marine' },
      { icon: 'municipal', name: 'Municipal Sanitation', to: '/projects/science' },
    ],
  },

  industry: {
    title: 'Industry Information',
    subtitle: 'Latest trends, regulations, and insights in eco-friendly atomization and micro-mist engineering.',
    readMore: 'Read more',
    backToList: 'Back',
    notFound: 'Article not found.',
    contactCta: 'Need help applying this to your project? Talk to our engineering team.',
    filter: {
      searchPlaceholder: 'Search articles…',
      allCategories: 'All',
      noResults: 'No articles match your search.',
    },
    articles: [],
  },

  products: {
    eyebrow: 'Products',
    title: 'Product Gallery',
    titleHighlight: '',
    description:
      'Mist-system, fog-making, and high-pressure micro-mist equipment we deploy on installation projects — factory-direct supply with turnkey humidification, cooling, dust suppression, installation, and repair.',
    requestOffer: 'Request a Quote',
    contact: 'Contact',
    photosSoon: 'Photos coming soon',
    specsTitle: 'Ultrasonic Humidifier',
    specsSubtitle: 'Model Specifications',
    list: [
      {
        id: 101,
        name: 'Ultrasonic Humidifier',
        subtitle: 'Ultrasonic Cold Mist System',
        description:
          'Generates ultra-fine 1–5 micron cold mist for precise humidity control in greenhouses, laboratories, and enclosed industrial spaces.',
        category: 'Humidification',
        gallery: productGalleryPaths.ultrasonic,
        specs: ['Models: C400 – C2400', '1–5 μm droplet size', 'Low energy consumption', 'Silent operation'],
      },
      {
        id: 102,
        name: 'High Pressure Micro Mist Humidifier',
        subtitle: 'Industrial Atomization System',
        description:
          'High-pressure micron-level atomization for dust suppression, cooling, and large-scale humidification in demanding industrial environments.',
        category: 'Atomization',
        gallery: productGalleryPaths.highPressure,
        specs: ['High-pressure pump system', 'Adjustable flow rate', 'Corrosion-resistant nozzles', 'Automated control ready'],
      },
      {
        id: 103,
        name: 'Accessories & Components',
        subtitle: 'System Parts & Spares',
        description:
          'Nozzles, fittings, pumps, and control modules — precision components for integration with micro-mist systems.',
        category: 'Accessories',
        gallery: productGalleryPaths.accessories,
        specs: ['OEM-compatible parts', 'Quick-swap nozzle heads', 'Stainless steel options', 'Full system kits available'],
      },
    ],
    specTable: {
      model: 'Model',
      dimensions: 'Dimensions (mm)',
      transformerPower: 'Transformer (W)',
      platePower: 'Plate Power (W)',
      plates: 'Plates',
      outlets: 'Mist Outlets',
      fans: 'Fans',
      area: 'Coverage (m²)',
      control: 'Control',
      controlValue: 'Manual / Timer / Humidity',
    },
  },

  trust: {
    eyebrow: 'About Us',
    title: '',
    description:
      'Our company is deeply rooted in the field of eco-friendly atomization, serving as a comprehensive service provider that integrates R&D, sales, and the design and construction of micro-mist engineering projects. We specialize in offering clients one-stop solutions for localized environmental improvement—specifically focusing on humidification, dust suppression, and cooling. Our business footprint spans a wide array of industries: from environmental control in paper manufacturing, printing, chemicals, textiles, and synthetic fibers, to electronics manufacturing workshops; from odor control and treatment at landfills and waste transfer stations, to epidemic prevention and disinfection in the livestock and poultry farming sectors. Furthermore, our services extend to creating artificial mist landscapes for real estate developments and scenic areas, as well as providing precision humidification for specialized settings such as agricultural greenhouses and edible mushroom cultivation facilities.\n\nThe company consistently upholds a management philosophy centered on "Integrity, Innovation, Service, and Gratitude." This philosophy serves as the cornerstone for fostering team growth and responding precisely to our clients\' needs. We actively recruit high-caliber professional talent and strictly adhere to the operational principles of "Customer First, Service Foremost," maintaining rigorous quality control through our exceptional service standards and sophisticated technical expertise. By providing professional consultation and customized solutions to clients across diverse industries, we have earned the profound recognition and trust of a broad base of customers and partners alike.',
    hpBlock: '',
    features: [],
    testimonialsEyebrow: 'Project Outcomes',
    testimonialsTitle: '',
    testimonialsSubtitle: 'Feedback from installation and deployment engagements',
    testimonials: [
      {
        quote:
          'The high-pressure mist system at our concrete batching plant significantly reduced airborne dust. Installation was professional and the automated controls have run reliably since commissioning.',
        author: 'Operations Manager',
        role: 'Concrete Batching Plant — Dust Suppression',
        image: '/data/concrete-batching-plant/4.jpeg',
        metric: '90%+ dust reduction',
      },
      {
        quote:
          'The landscape misting installation transformed the outdoor space — cooling, humidity, and visual effect all in one. The team handled design and deployment without disrupting daily operations.',
        author: 'Landscape Development Director',
        role: 'Ecological Mistscape Project',
        image: '/data/eco-atomizer/2.jpg',
        metric: 'Cooling + humidity in one',
      },
      {
        quote:
          'Odor control at our waste transfer station improved noticeably after the atomization system went live. Scheduled operation reduced manual workload on our team.',
        author: 'Facility Supervisor',
        role: 'Municipal Sanitation — Odor Control',
        image: '/data/odor-control/3.jpeg',
        metric: '24/7 automated odor control',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Mist System — Frequently Asked Questions',
    subtitle: 'Common questions about micro-mist systems, atomization equipment, and misting projects.',
    items: [
      {
        q: 'What is a micro-mist (fog) system?',
        a: 'A micro-mist system — also called artificial fog or atomization system — pressurizes water and forces it through micron nozzles to create an ultra-fine, fog-like mist used for landscape fog effects, cooling, humidification, and spray dust suppression. Hebei Shandao supplies the equipment and handles engineering design and installation.',
      },
      {
        q: 'How much does a mist system cost?',
        a: 'Cost depends on the misting area, number of nozzles, pump capacity, pipework, and control method — it is usually estimated per square meter or per project. Share your site details for a tailored design and quote.',
      },
      {
        q: 'How does a micro-mist system work?',
        a: 'A high-pressure pump raises water to several megapascals; precision nozzles break it into 1–10 micron droplets that evaporate quickly, absorbing heat to cool and humidify the air while binding airborne particles for dust suppression.',
      },
      {
        q: 'Where are mist systems used?',
        a: 'Common uses include landscape fog and cooling in scenic areas, gardens, residential compounds, and parks; industrial dust suppression and yard spray; cooling and disinfection in livestock farming; and precise humidification for greenhouses and mushroom cultivation.',
      },
      {
        q: 'What is the difference between mist, high-pressure micro-mist, and spray dust-suppression systems?',
        a: 'All three rely on high-pressure micron atomization. "Mist/fog" usually refers to landscape fog systems, "high-pressure micro-mist" to humidification and cooling equipment, and "spray dust suppression" to industrial dust control. The same technology is also marketed as fog-spray systems, fog machines, or artificial-mist equipment. The configuration is chosen by application.',
      },
      {
        q: 'Which areas do you serve?',
        a: 'Based in Shijiazhuang, Hebei Province, we serve North China and deliver mist-system design, supply, and installation nationwide.',
      },
      {
        q: 'How do I choose a mist-system brand? Are you a manufacturer?',
        a: 'We are a source manufacturer in Shijiazhuang: equipment is developed and produced in-house, and we handle engineering and installation ourselves. When comparing brands, look at delivered projects, build materials, control systems, and after-sales capability rather than price alone. Reference cases and factory visits are welcome.',
      },
      {
        q: 'How do I get a mist-system quotation?',
        a: 'Tell us the application (landscape, workshop, or storage yard), the coverage area or number of spray points, and the on-site water and power conditions — we will prepare a configuration plan and quotation, usually within 1–2 business days.',
      },
      {
        q: 'Do you provide installation and after-sales repair?',
        a: 'Yes. We handle system design, installation, commissioning, and operator training. On-site repair is available in and around Shijiazhuang; for projects elsewhere we provide remote guidance and spare-parts supply, with pumps, nozzles, and other consumables kept in stock.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact Us',
    subtitle: 'Scan to connect or send us a direct message.',
    wechatTitle: 'WeChat',
    wechatDesc: 'Scan or copy ID to add',
    wechatCopy: 'Copy WeChat ID',
    wechatCopied: 'WeChat ID copied!',
    whatsappTitle: 'WhatsApp',
    whatsappDesc: 'Fastest response',
    whatsappOpen: 'Open Chat',
    phoneTitle: 'Phone',
    phoneDesc: 'Call us directly',
    phoneCall: 'Call Now',
    emailTitle: 'Email',
    emailDesc: 'For detailed inquiries',
    emailSend: 'Send Email',
    formTitle: 'Send a Quick Inquiry',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    message: 'How can we help you?',
    submit: 'Submit Request',
    sent: 'Opening your email app — hit send to reach us.',
    phones: ['+86 166 3110 8208', '+86 166 3110 8228'],
    whatsapp: '+86 166 3110 5554',
    emailAddress: 'hbshandao@outlook.com',
    address: {
      full: 'No. 60 Botanical Garden Street, Xinhua District, Shijiazhuang, Hebei Province (50 m east of the Botanical Garden south gate)',
      street: 'No. 60 Botanical Garden Street, Xinhua District (50 m east of the Botanical Garden south gate)',
      locality: 'Shijiazhuang',
      region: 'Hebei',
    },
  },

  footer: {
    companyName: 'Hebei Shandao Environmental Technology Co., Ltd.',
    tagline:
      'Source manufacturer of mist systems and industrial humidification & dust-suppression equipment — design, installation, and maintenance of micro-mist engineering projects.',
    contactTitle: 'Contact Us',
    address: 'No. 60 Botanical Garden Street, Xinhua District, Shijiazhuang, Hebei Province',
    linksTitle: 'Quick Links',
    followTitle: 'Follow Us',
    copyright: 'Hebei Shandao Environmental Technology Co., Ltd.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },

  projectPage: {
    notFound: 'Category not found',
    noProjects: 'No projects in this category yet.',
    projectsCount: 'Projects',
    caseStudy: 'Case Study',
    getInTouch: 'Get in touch',
    projectDetails: 'Project Details',
    viewGallery: 'View Full Gallery',
    projectNotFound: 'Project not found',
  },

  serviceAreas: {
    eyebrow: 'Service Areas',
    title: 'Mist System Service Areas',
    subtitle:
      'Headquartered in Shijiazhuang, Hebei, Hebei Shandao delivers micro-mist systems, artificial-fog landscaping, and spray dust suppression — design, supply, and installation across North China and nationwide.',
    indexHint: 'Choose a region to see typical local applications and service notes.',
    viewRegion: 'View details',
    applicationsLabel: 'Typical local applications',
    coverageLabel: 'Service notes',
    relatedLabel: 'Related case studies',
    citiesLabel: 'Cities covered',
    contactCta: 'Need a local project plan or quote? Talk to our engineering team.',
    notFound: 'Region not found.',
    metaTitleTpl: '{region} Mist System & Spray Dust Suppression | Hebei Shandao',
    metaDescTpl:
      '{region} micro-mist systems, artificial-fog landscaping, and spray dust suppression — equipment supply, design, and installation by Hebei Shandao. Coverage: {cities}.',
    regions: {
      huabei: {
        name: 'North China · Hebei',
        cities: 'Shijiazhuang, Beijing, Tianjin, Tangshan, Baoding',
        h1: 'North China Mist Systems & Spray Dust Suppression',
        intro:
          'Headquartered in Shijiazhuang, we respond quickly across the Beijing–Tianjin–Hebei area. North China concentrates heavy industry — steel, mining, batching plants, and coal preparation drive strong dust-control demand, while dry winters call for workshop humidification.',
        points: [
          { t: 'Industrial spray dust suppression', d: 'High-pressure spray and fog cannons for steel, mining, concrete batching, and coal plants to cut PM2.5 and PM10.' },
          { t: 'Workshop humidification', d: 'Micro-mist humidification for textile, printing, and electronics workshops during dry seasons.' },
          { t: 'Landscape fog', d: 'Artificial fog for gardens, parks, communities, and greening projects, with cooling and ambiance.' },
          { t: 'Local service', d: 'A nearby team for fast survey, installation, and maintenance.' },
        ],
        coverage: 'Equipment supply, engineering design, and installation across Shijiazhuang and the Beijing–Tianjin–Hebei region.',
      },
      henan: {
        name: 'Henan',
        cities: 'Zhengzhou, Kaifeng, Luohe, Sanmenxia, Pingdingshan',
        h1: 'Henan Mist Systems, Fog Equipment & Misting Projects',
        intro:
          'Serving Zhengzhou, Kaifeng, Luohe, Sanmenxia, and Pingdingshan. Henan has a strong agricultural base — greenhouse humidification and livestock cooling/disinfection are in demand — while urban construction drives site and yard dust control.',
        points: [
          { t: 'Greenhouse & mushroom humidification', d: 'Ultrasonic and high-pressure mist hold suitable humidity for greenhouses and mushroom cultivation.' },
          { t: 'Site & yard dust control', d: 'Spray dust suppression and hoarding sprinklers for construction sites and aggregate yards.' },
          { t: 'Livestock cooling & disinfection', d: 'Evaporative cooling and atomized disinfection for animal housing to ease heat stress.' },
          { t: 'Landscape artificial fog', d: 'Mist landscapes and cooling for scenic areas, gardens, and residential compounds.' },
        ],
        coverage: 'Equipment supply, design, and installation across major Henan cities.',
      },
      metros: {
        name: 'Key Cities',
        cities: 'Chengdu, Wuhan, Xi’an, Chongqing',
        h1: 'Chengdu · Wuhan · Xi’an · Chongqing Mist & Landscape Fog',
        intro:
          'Serving key cities including Chengdu, Wuhan, Xi’an, and Chongqing. Hot, humid summers in Chengdu, Wuhan, and Chongqing drive outdoor cooling demand, while Xi’an’s tourism and landscape projects make artificial fog widely applicable.',
        points: [
          { t: 'Scenic & garden fog', d: 'Mist landscapes for scenic areas and gardens, with cooling and negative ions.' },
          { t: 'Outdoor commercial cooling', d: 'Spray cooling for restaurant terraces and commercial streets.' },
          { t: 'Residential fog features', d: 'Water features and mist landscaping for residential compounds.' },
          { t: 'Indoor venue humidification', d: 'Precise humidification for exhibition halls, greenhouses, and similar spaces.' },
        ],
        coverage: 'Project-based design, supply, and installation coordination across key cities in Southwest, Central, and Northwest China.',
      },
      shandong: {
        name: 'Shandong',
        cities: 'Jinan, Qingdao',
        h1: 'Shandong Mist Systems · Spray Dust Suppression & Disinfection',
        intro:
          'Serving Jinan, Qingdao, and coastal areas. Shandong’s industry, ports, food processing, and large-scale livestock farming concentrate demand for yard dust control, odor/disinfection, and livestock cooling.',
        points: [
          { t: 'Port & yard dust control', d: 'High-pressure spray and fog cannons for bulk yards and material transfer.' },
          { t: 'Odor control & disinfection', d: 'Spray odor neutralization and disinfection for waste transfer, wastewater, and food-processing sites.' },
          { t: 'Livestock cooling & disinfection', d: 'Cooling and biosecurity disinfection for large-scale farming.' },
          { t: 'Coastal landscape fog', d: 'Artificial fog landscapes for scenic and commercial spaces.' },
        ],
        coverage: 'Equipment supply, design, and installation across Jinan, Qingdao, and coastal Shandong.',
      },
    },
  },

  solutions: {
    eyebrow: 'Solutions',
    title: 'Industrial Humidification & Dust-Suppression Solutions',
    subtitle:
      'Micro-mist humidification, spray dust suppression, and atomization systems tailored to specific industries — designed, supplied, installed, and serviced by the source manufacturer.',
    indexHint: 'Choose an industry to see typical conditions and system notes.',
    viewSolution: 'View solution',
    applicationsLabel: 'Typical conditions & approach',
    coverageLabel: 'Service notes',
    relatedLabel: 'Related case studies',
    scenariosLabel: 'Typical facilities',
    contactCta: 'Need a plan or quote for your plant? Talk to our engineering team.',
    notFound: 'Solution not found.',
    metaDescTpl: '{intro}',
    items: {
      textile: {
        name: 'Textile & Spinning Mills',
        h1: 'Textile Mill Humidification · Spinning Workshop Micro-Mist',
        metaTitle: 'Textile Mill Humidifiers & Spinning Workshop Mist | Hebei Shandao',
        scenarios: 'Spinning, weaving, and synthetic-fiber workshops; garment and fabric production',
        intro:
          'Textile and spinning workshops are highly sensitive to relative humidity: dry air causes yarn breaks, fly waste, and static cling, hurting quality and output. High-pressure micro-mist raises workshop humidity quickly and evenly while also binding airborne fibers.',
        points: [
          { t: 'Constant humidity', d: 'Zone-based targets (typically 55–75% RH) with sensor-linked automatic operation and separate day/night settings.' },
          { t: 'Anti-static humidification', d: 'Stable humidity suppresses static build-up, reducing fly adhesion and yarn breaks — the standard anti-static humidification approach for textile floors.' },
          { t: 'Dust and lint control', d: 'Micro-mist binds airborne lint and dust, improving air quality on the floor.' },
          { t: 'Custom nozzle layout', d: 'As the manufacturer, we lay out nozzles to match floor area and machinery, keeping water and energy use in check.' },
        ],
        coverage: 'Design, supply, installation, and repair of humidification and dust-control systems for textile, spinning, weaving, and synthetic-fiber workshops.',
      },
      nonwoven: {
        name: 'Non-Woven Fabric Plants',
        h1: 'Non-Woven Workshop Humidity Control',
        metaTitle: 'Non-Woven Workshop Humidity Control | Hebei Shandao',
        scenarios: 'Non-woven production lines, melt-blown and spunbond workshops',
        intro:
          'Non-woven production demands tight humidity and static control: dry conditions cause fiber fly, charged rolls, and unstable grammage. Micro-mist humidification stabilizes workshop humidity without wetting the material.',
        points: [
          { t: 'Stable output', d: 'Steady humidity supports uniform grammage and flat winding, reducing breaks and rejects.' },
          { t: 'Static control', d: 'Keeps workshop humidity inside the process window to match anti-static requirements.' },
          { t: 'Dry fog, no dripping', d: 'Micron droplets flash-evaporate without condensing on equipment or rolls.' },
          { t: 'Per-line zoning', d: 'Independent control per production line balances effect and energy use.' },
        ],
        coverage: 'Design, supply, installation, and repair of humidity-control systems for non-woven and melt-blown workshops.',
      },
      painting: {
        name: 'Paint & Coating Shops',
        h1: 'Auto Paint Booth Humidification · Coating Workshop Micro-Mist',
        metaTitle: 'Paint Booth & Coating Workshop Humidification | Hebei Shandao',
        scenarios: 'Automotive paint booths; furniture and machinery coating lines',
        intro:
          'Painting and coating processes have strict humidity, cleanliness, and static requirements: dry air leads to orange peel, pinholes, and static dust attraction. Micro-mist humidification removes static and suppresses paint mist and dust, helping stabilize coating quality.',
        points: [
          { t: 'Static elimination', d: 'Humidification against static in spray painting reduces rework caused by dust attracted to the finish.' },
          { t: 'Overspray suppression', d: 'Water mist captures suspended paint mist and dust, improving workshop air.' },
          { t: 'Process humidity', d: 'Humidity bands set to the coating process, maintained automatically.' },
          { t: 'Safe configuration', d: 'Equipment selection and pipe routing follow the safety requirements of the paint-booth environment.' },
        ],
        coverage: 'Design, supply, installation, and repair of humidification and dust-control systems for paint booths and coating workshops.',
      },
      grinding: {
        name: 'Grinding & Polishing Shops',
        h1: 'Grinding Workshop Dust Suppression & Humidification',
        metaTitle: 'Grinding Workshop Dust Suppression | Hebei Shandao',
        scenarios: 'Metal grinding and polishing; woodworking sanding shops',
        intro:
          'Grinding and polishing generate high concentrations of fine dust that spreads easily in dry air, creating occupational-health and safety risks. Spray dust suppression captures airborne dust with micron droplets while raised humidity prevents re-entrainment.',
        points: [
          { t: 'Airborne dust capture', d: 'Micron droplets bind dust particles and settle them, lowering PM levels on the floor.' },
          { t: 'Workstation focus', d: 'Directed spray at grinding stations controls dust at the source.' },
          { t: 'Humidity holding', d: 'Suitable humidity keeps settled dust from lifting off floors and equipment.' },
          { t: 'Linked operation', d: 'Runs on schedules or linked to ventilation and production hours.' },
        ],
        coverage: 'Design, supply, installation, and repair of spray dust-suppression and humidification systems for grinding and polishing shops.',
      },
      tobacco: {
        name: 'Tobacco Workshops',
        h1: 'Tobacco Workshop Humidification',
        metaTitle: 'Tobacco Workshop Humidification | Hebei Shandao',
        scenarios: 'Primary processing, leaf storage, and packing workshops',
        intro:
          'Tobacco leaf and cut tobacco are humidity-sensitive: dry conditions raise breakage rates and weight loss and destabilize quality. Workshop micro-mist holds the process humidity band, cutting breakage and losses.',
        points: [
          { t: 'Process humidity', d: 'Separate setpoints for primary processing, leaf storage, and packing, held automatically.' },
          { t: 'Fine dry fog', d: 'Micron droplets vaporize quickly without wetting leaf or machinery.' },
          { t: 'Per-section zoning', d: 'Independent control per section matches differing process needs.' },
          { t: 'Reliable materials', d: 'Stainless-steel wetted parts available for easy cleaning and maintenance.' },
        ],
        coverage: 'Design, supply, installation, and repair of humidification systems for tobacco processing, storage, and packing workshops.',
      },
      paper: {
        name: 'Paper & Printing Plants',
        h1: 'Paper Mill Humidification · Print Shop Humidity Control',
        metaTitle: 'Paper Mill & Print Shop Humidification | Hebei Shandao',
        scenarios: 'Paper mills, printing workshops, and paper storage',
        intro:
          'Paper moisture content follows ambient humidity: dry air causes shrinkage, curl, static, and misregistration. Micro-mist humidification stabilizes workshop humidity, improving paper handling and print quality.',
        points: [
          { t: 'Constant humidity', d: 'Stable relative humidity reduces paper deformation and web breaks.' },
          { t: 'Anti-static', d: 'Suppresses static on paper and machines, reducing jams and cling.' },
          { t: 'Dry fog, no dripping', d: 'Droplets disperse instantly without condensing on paper or equipment.' },
          { t: 'Storage humidity', d: 'Holds warehouse humidity to cut storage losses.' },
        ],
        coverage: 'Design, supply, installation, and repair of humidification systems for paper mills, print shops, and paper storage.',
      },
      cement: {
        name: 'Cement & Building Materials',
        h1: 'Cement Plant Fog Dust Suppression · Building-Materials Dust Control',
        metaTitle: 'Cement Plant Dust Suppression Equipment | Hebei Shandao',
        scenarios: 'Cement plants, batching plants, building-materials lines, loading points',
        intro:
          'Cement and building-materials production has many dispersed dust sources: crushing, milling, conveying, and loading all emit dust. Water-mist dust-suppression equipment sprays at the key nodes to keep dust from escaping and helps sites meet emission requirements.',
        points: [
          { t: 'Node treatment', d: 'Directed spray at loading points and belt-transfer points — the main emission nodes.' },
          { t: 'Water-mist capture', d: 'Micron droplets bind suspended particles, lowering PM2.5 and PM10.' },
          { t: 'Smart interlock', d: 'Starts and stops with production activity, no dedicated operator needed.' },
          { t: 'Easy maintenance', d: 'Quick-change nozzles and filters with responsive repair service.' },
        ],
        coverage: 'Design, supply, installation, and repair of spray dust-suppression systems for cement plants, batching plants, and building-materials producers.',
      },
      stone: {
        name: 'Stone Crushing & Aggregate Yards',
        h1: 'Crusher Workshop Dust Control · Aggregate Yard Wind-Dust Suppression',
        metaTitle: 'Stone Plant Dust Control & Aggregate Yard Suppression | Hebei Shandao',
        scenarios: 'Crushing workshops, screening lines, conveyors, open storage yards',
        intro:
          'Stone crushing and aggregate storage are priority dust sources: crushing and screening produce dense dust, and open yards lift dust in wind. Systematic spray suppression covers crushing, conveying, and storage — a complete dust-pollution solution for stone plants.',
        points: [
          { t: 'Crusher-point spray', d: 'Directed spray at crusher inlets and outlets suppresses dust at the source.' },
          { t: 'Conveyor suppression', d: 'Spray at belt-transfer points cuts dust from falling material.' },
          { t: 'Yard wind-dust control', d: 'High-pressure micro-mist combined with sprinklers and scheduling controls wind-lifted dust in open yards.' },
          { t: 'Whole-site plans', d: 'Site-plan-based overall dust-control proposals and quotes, with phased delivery supported.' },
        ],
        coverage: 'Design, supply, installation, and repair of spray dust-suppression systems for stone plants, sand-and-gravel yards, and material storage.',
      },
    },
  },

  productModal: {
    title: 'Contact About',
    subtitle: 'Choose your preferred contact method',
    whatsapp: 'WhatsApp',
    chatNow: 'Chat Now',
    wechat: 'WeChat',
    orEmail: 'Or email us directly',
    interestMsg: "Hello! I'm interested in",
  },

  gallery: {
    open: 'Open gallery',
    close: 'Close gallery',
    prev: 'Previous image',
    next: 'Next image',
    swipeHint: 'Swipe to browse photos',
    keyboardHint: 'Use arrow keys to navigate',
    goTo: 'Go to image',
  },

  projects: {
    categories: {
      industrial: {
        title: 'Industrial Micro-Mist Dust Suppression',
        description: 'High-pressure micro-mist, spray dust suppression, and fog-cannon solutions for mining, construction, and heavy industry.',
        projects: {
          1: {
            title: 'Concrete Batching Plant Dust Control',
            shortDesc: 'High-pressure mist systems for dust suppression and ash conditioning.',
            fullDescription:
              'By deploying high-pressure atomization systems at key locations throughout the facility, micron-scale water mist efficiently adsorbs suspended particles, significantly reducing PM2.5 concentrations and preventing dust dispersion. Within enclosed spaces, dry ash undergoes precisely metered water injection and forced mixing to regulate moisture content, eliminating secondary dust during discharge and transport.',
          },
          10: {
            title: 'Coal Preparation Plant Dust Control',
            shortDesc: 'Intelligent spraying for PM2.5 reduction in coal processing.',
            fullDescription:
              'The high-pressure humidification and atomization system for coal preparation plants significantly reduces PM2.5 and PM10 concentrations within operational zones. Integrated intelligent control modules enable unmanned, precision spraying operations — supporting a modern, clean production environment that is eco-friendly and energy-efficient.',
          },
          11: {
            title: 'Smart Hoarding Sprinkler System',
            shortDesc: 'Automated sprinklers for construction site cooling and dust control.',
            fullDescription:
              'Intelligent spraying systems improve air quality at construction sites and provide cooling relief during hot seasons. Flexible scheduled operation significantly reduces manual operation and maintenance costs while ensuring effective dust suppression and a comfortable working environment.',
          },
        },
      },
      ecology: {
        title: 'Ecological Mistscape Aesthetics Engineering',
        description: 'Mist systems and artificial fog landscapes for scenic areas, gardens, communities, and greening projects — aesthetics, cooling, and atmosphere.',
        projects: {
          2: {
            title: 'Landscape Mistscape Project',
            shortDesc: 'Micron-level fog systems for landscape aesthetics and cooling.',
            fullDescription:
              'Utilizing micron-level atomization technology, artificial fog landscape systems create an ethereal atmosphere while delivering cooling, humidification, air purification, and negative oxygen ions. Fully automated intelligent controls ensure precise misting, enhancing garden landscapes and crafting cool, comfortable outdoor leisure spaces.',
          },
        },
      },
      marine: {
        title: 'Smart Agriculture Greenhouse Support',
        description: 'Precision humidification and climate control for modern greenhouses and cultivation.',
        projects: {
          3: {
            title: 'Edible Mushroom Cultivation Unit',
            shortDesc: 'Ultrasonic cold mist for optimal mushroom growth humidity.',
            fullDescription:
              'In enclosed mushroom cultivation greenhouses, ultrasonic humidifiers generate ultra-fine 1–5 micron cold mist, maintaining humidity within the optimal 85%–95% range. This prevents dehydration, shortens the growth cycle, boosts yields, and eliminates water accumulation issues associated with conventional sprinklers.',
          },
          30: {
            title: 'Greenhouse Seedling Nursery',
            shortDesc: 'Humidification systems to reduce heat stress in seedlings.',
            fullDescription:
              'High-pressure humidification in agricultural nurseries rapidly elevates humidity and lowers temperature through micron-level atomization, minimizing moisture transpiration and heat stress in seedlings. Fully automated intelligent controls enable precise humidification while conserving water and reducing labor costs.',
          },
        },
      },
      science: {
        title: 'Spatial Atomization Disinfection System',
        description: 'Advanced atomization for odor neutralization, disinfection, and environmental hygiene.',
        projects: {
          40: {
            title: 'Municipal Sanitation Odor Control',
            shortDesc: 'Atomization tech for decomposing odors in waste stations.',
            fullDescription:
              'Waste transfer stations utilize high-pressure humidification and deodorization equipment with micron-level atomization to rapidly decompose malodorous molecules such as hydrogen sulfide and ammonia. Integrated intelligent controls achieve precise, round-the-clock deodorization while also providing dust suppression and cooling.',
          },
          41: {
            title: 'Livestock Epidemic Prevention',
            shortDesc: 'Cooling and disinfection systems for livestock housing.',
            fullDescription:
              'Leveraging highly efficient evaporative cooling, this system significantly lowers temperature and humidity within livestock housing, mitigating heat stress and boosting survival rates and productivity. Comprehensive disinfection capabilities establish a robust health barrier for modern animal husbandry operations.',
          },
        },
      },
    },
  },

  admin: {
    login: {
      title: 'Admin',
      subtitle: 'Industry articles',
      password: 'Password',
      showPassword: 'Show password',
      hidePassword: 'Hide password',
      signIn: 'Sign in',
      signingIn: 'Signing in…',
    },
    errors: {
      notConfigured: 'Admin password is not configured on the server (ADMIN_PASSWORD).',
      invalid: 'Invalid password.',
      network: 'Could not reach the server. Make sure the API is running.',
    },
    articles: {
      title: 'Articles',
      subtitle: 'Custom industry articles (saved on the server)',
      newArticle: 'New article',
      logout: 'Logout',
      empty: 'No articles yet.',
      footerBefore: 'Published and visible articles appear on',
      footerAfter: '. Hidden and archived articles are not shown on the public site.',
      untitled: 'Untitled',
      thisArticle: 'this article',
      lastUpdated: 'Last updated',
      noFilterResults: 'No articles match the current filters.',
      filters: {
        title: 'Search & filters',
        searchPlaceholder: 'Search by title, text, or category…',
        category: 'Category',
        status: 'Status',
        dateFrom: 'Date from',
        dateTo: 'Date to',
        sortBy: 'Sort by',
        allCategories: 'All categories',
        allStatuses: 'All statuses',
        sortDateDesc: 'Date (newest first)',
        sortDateAsc: 'Date (oldest first)',
        sortCategoryAsc: 'Category (A–Z)',
        sortCategoryDesc: 'Category (Z–A)',
        sortStatusAsc: 'Status (draft → archived)',
        sortStatusDesc: 'Status (archived → draft)',
        reset: 'Reset filters',
        active: 'Active',
      },
    },
    status: {
      archived: 'archived',
      hidden: 'hidden',
      published: 'published',
      draft: 'draft',
    },
    actions: {
      preview: 'Preview',
      edit: 'Edit',
      delete: 'Delete',
      hide: 'Hide',
      unhide: 'Unhide',
      restore: 'Restore',
      deletePermanently: 'Delete permanently',
      back: 'Back',
      saveDraft: 'Save draft',
      publish: 'Publish',
      publishChanges: 'Publish changes',
      unpublish: 'Unpublish',
      close: 'Close',
      ok: 'OK',
      cancel: 'Cancel',
      retry: 'Retry',
      addFromDevice: 'Add from device',
      removeImage: 'Remove image',
    },
    archive: {
      title: 'Archive',
    },
    dialog: {
      archiveTitle: 'Move to archive?',
      archiveMessage:
        '"{title}" will be removed from the public site and moved to the archive. You can restore it later.',
      permanentTitle: 'Delete permanently?',
      permanentMessage: '"{title}" will be removed forever. This cannot be undone.',
      moveToArchive: 'Move to archive',
      deletePermanently: 'Delete permanently',
      draftSavedTitle: 'Saved to drafts',
      draftSavedMessage:
        'Your article has been saved as a draft. You can keep editing or return to the articles list.',
      incompletePublishTitle: 'Cannot publish',
      incompletePublishMessage:
        'Not all fields are filled in. Complete every required field in English and 中文 before publishing.',
      publishedDeleteTitle: 'Article is published',
      publishedDeleteMessage:
        'This article is currently published. To remove it from the public site, use Unpublish first.',
    },
    edit: {
      notFound: 'Article not found.',
      publishHint:
        'Publish is available when date, category, title, excerpt, and body are filled in both English and 中文. Image is optional.',
      publishError: 'Fill in all required fields in English and 中文 before publishing.',
      publishTitle: 'Publish article',
      publishChangesTitle: 'Save and publish your changes',
      publishDisabledTitle: 'Fill required fields in EN and 中文 to publish',
      imageErrorType: 'Please choose an image file.',
      imageErrorSize: 'Image must be under 20 MB.',
      imageErrorOptimize: 'Could not process this image. Try another file or a smaller photo.',
      imageOptimizing: 'Optimizing image…',
      date: 'Date',
      category: 'Category',
      selectCategory: 'Select category…',
      categoryLegacy: 'Current value not in list: {value}. Pick a category above to update.',
      title: 'Title',
      coverImage: 'Cover image (optional)',
      imageUrlPlaceholder: 'Or paste image URL (e.g. /data/concrete-batching-plant/4.jpeg)',
      imageFromDevice: 'Image loaded from device. Remove it to enter a URL instead.',
      excerpt: 'Excerpt (short summary)',
      body: 'Body (paragraphs separated by blank line)',
    },
    preview: {
      badge: 'Preview',
      noBody: 'No body text yet.',
    },
    visibility: {
      hideTitle: 'Hide from public site',
      showTitle: 'Show on public site',
    },
    contentLang: {
      en: 'English',
      zh: '中文',
    },
  },
};
