import { productGalleryPaths } from '../../data/productImages';

export default {
  meta: {
    title: 'Precision Micro-Mist Systems',
  },

  nav: {
    products: 'Product Gallery',
    technology: 'Projects',
    industry: 'Industry Information',
    contact: 'Contacts',
    back: 'Back',
    brandLine1: 'Hebei Shandao',
    brandLine2: 'Environmental Tech',
  },

  hero: {
    badge: 'Eco-Friendly Atomization Solutions',
    titleLine1: 'Precision',
    titleHighlight: 'Micro-Mist',
    titleLine2: 'Systems',
    subtitle:
      'One-stop solutions for humidification, dust suppression, and cooling — from R&D and equipment supply to engineering design and installation.',
    ctaPrimary: 'View Equipment',
    ctaSecondary: 'Contact Us',
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

  industry: {
    title: 'Industry Information',
    subtitle: 'Latest trends, regulations, and insights in eco-friendly atomization and micro-mist engineering.',
    readMore: 'Read more',
    backToList: 'Back',
    notFound: 'Article not found.',
    contactCta: 'Need help applying this to your site? Talk to our engineering team.',
    articles: [
      {
        id: 1,
        date: '2026-03-15',
        category: 'Regulation',
        image: '/data/concrete-batching-plant/4.jpeg',
        title: 'Stricter Dust Emission Standards for Industrial Sites',
        excerpt:
          'New environmental guidelines are pushing concrete batching plants and mining operations to adopt high-pressure mist suppression systems as a primary dust control measure.',
        body:
          'Regional environmental authorities are tightening particulate matter limits for open industrial yards, material transfer points, and aggregate handling areas. Facilities that previously relied on occasional water spraying are now expected to maintain continuous, measurable dust control.\n\nHigh-pressure micro-mist systems have become the preferred approach because they suppress respirable dust without over-wetting product or creating runoff. Typical installations combine zone-based nozzle layouts, pressure monitoring, and automated activation tied to production activity or air-quality sensors.\n\nFor plant operators, the practical takeaway is to plan mist infrastructure early in site layout — pump location, water quality, and electrical capacity all affect long-term performance. Retrofits are possible, but integrated design during expansion or renovation delivers better coverage and lower operating cost.',
      },
      {
        id: 2,
        date: '2026-02-08',
        category: 'Technology',
        image: '/data/eco-atomizer/3.jpeg',
        title: 'Ultrasonic vs. High-Pressure Atomization: Choosing the Right System',
        excerpt:
          'A practical comparison of ultrasonic humidifiers and high-pressure micro-mist systems for greenhouse, workshop, and outdoor cooling applications.',
        body:
          'Ultrasonic humidifiers excel in enclosed spaces that require precise relative humidity — greenhouses, laboratories, mushroom cultivation, and clean production areas. They produce fine cold mist quietly and with relatively low energy use per unit of humidification.\n\nHigh-pressure micro-mist systems are better suited to larger volumes, outdoor or semi-open environments, dust suppression, and evaporative cooling where air exchange is high. They deliver smaller droplets at scale and can cover wide areas through engineered nozzle spacing and pump capacity.\n\nThe right choice depends on space size, target outcome (humidity vs. cooling vs. dust), water quality, and control requirements. In many industrial projects, both technologies appear in the same facility — ultrasonic units for process zones and high-pressure mist for yard or loading areas.',
      },
      {
        id: 3,
        date: '2026-01-20',
        category: 'Market',
        image: '/data/epidemic-prevention/2.webp',
        title: 'Growing Demand for Smart Mist Control in Livestock Farming',
        excerpt:
          'Automated disinfection and cooling mist systems are becoming standard in modern poultry and livestock facilities across North China.',
        body:
          'Modern livestock facilities are investing in automated mist systems for three overlapping reasons: temperature stress reduction in summer, humidity management in dry seasons, and scheduled disinfection cycles in high-density housing.\n\nDemand is strongest where ventilation alone cannot stabilize microclimate conditions. Programmable controllers allow different mist schedules for day and night, integration with temperature sensors, and reduced labor compared with manual spraying.\n\nFarm operators typically evaluate total cost of ownership — water consumption, pump maintenance, and nozzle wear — rather than equipment price alone. Systems designed with accessible filtration and quick-change nozzles tend to see faster adoption because downtime directly affects animal welfare and production continuity.',
      },
    ],
  },

  products: {
    eyebrow: 'Products',
    title: 'Product Gallery',
    titleHighlight: '',
    description:
      'Components we deploy on installation projects — turnkey misting and humidification services for industrial clients.',
    requestOffer: 'Request Commercial Offer',
    contact: 'Contact',
    requestQuote: 'Request Quote',
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
      },
      {
        quote:
          'The landscape misting installation transformed the outdoor space — cooling, humidity, and visual effect all in one. The team handled design and deployment without disrupting daily operations.',
        author: 'Landscape Development Director',
        role: 'Ecological Mistscape Project',
        image: '/data/eco-atomizer/2.jpg',
      },
      {
        quote:
          'Odor control at our waste transfer station improved noticeably after the atomization system went live. Scheduled operation reduced manual workload on our team.',
        author: 'Facility Supervisor',
        role: 'Municipal Sanitation — Odor Control',
        image: '/data/odor-control/3.jpeg',
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
    sending: 'Sending...',
    sent: 'Message sent successfully!',
    phones: ['+86 166 3110 8208', '+86 166 31108228'],
    whatsapp: '+86 166 3110 5554',
    emailAddress: 'hbsd@outlook.com',
  },

  footer: {
    companyName: 'Hebei Shandao Environmental Technology Co., Ltd.',
    tagline:
      'Precision atomization systems for industrial dust suppression, environmental control, and micro-mist engineering projects.',
    contactTitle: 'Contact Us',
    address: 'Hebei Province, China',
    linksTitle: 'Quick Links',
    followTitle: 'Follow Us',
    copyright: 'Hebei Shandao Environmental Technology Co., Ltd. All rights reserved.',
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
        description: 'High-pressure misting solutions for dust control in mining, construction, and heavy industry.',
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
        description: 'Artificial fog systems for landscape aesthetics, cooling, and unique atmospheric effects.',
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
};
