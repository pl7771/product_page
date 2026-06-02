// src/data/projects.js

// ✅ 1. Новая структура для главной страницы (Категории -> Проекты)
export const projectCategories = [
  {
    id: 'industrial',
    title: 'Industrial Micro-Mist Dust Suppression',
    // ✅ Исправлено: Теперь описывает промышленное применение
    description: 'High-pressure misting solutions for dust control in mining, construction, and heavy industry.',
    cover: '/data/concrete-batching-plant/4.jpeg',
    projects: [
      {
        id: 1,
        title: 'Concrete Batching Plant Dust Control',
        shortDesc: 'High-pressure mist systems for dust suppression and ash conditioning.',
        fullDescription: 'By deploying high-pressure atomization systems at key locations throughout the facility, micron-scale water mist is utilized to efficiently adsorb suspended particles, thereby significantly reducing PM2.5 concentrations and preventing dust dispersion. Concurrently, within enclosed spaces, dry ash undergoes precisely metered water injection and forced mixing to accurately regulate moisture content, thereby completely eliminating secondary dust generation during the discharge and transport processes.',
        cover: '/data/concrete-batching-plant/3.jpeg',
        images: [
          '/data/concrete-batching-plant/1.jpeg',
          '/data/concrete-batching-plant/2.jpeg',
          '/data/concrete-batching-plant/3.jpeg',
          '/data/concrete-batching-plant/4.jpeg',
          '/data/concrete-batching-plant/5.jpeg',
          '/data/concrete-batching-plant/6.jpeg',
          '/data/concrete-batching-plant/7.jpeg', 
          '/data/concrete-batching-plant/8.jpeg',
          '/data/concrete-batching-plant/9.jpeg',
          '/data/concrete-batching-plant/10.jpeg'
        ]
      },
      {
        id: 10,
        title: 'Coal Preparation Plant Dust Control',
        shortDesc: 'Intelligent spraying for PM2.5 reduction in coal processing.',
        fullDescription: 'The high-pressure humidification and atomization system for coal preparation plants significantly reduces PM2.5 and PM10 concentrations within operational zones. While ensuring highly efficient dust suppression, it simultaneously eliminates material wastage and secondary pollution. By deeply integrating intelligent control modules, the system enables unmanned, precision spraying operations—thereby providing robust support for enterprises seeking to establish a modern, clean production environment that is both eco-friendly and energy-efficient.',
        cover: '/data/coal-preparation-plant/1.jpeg',
        images: [
          '/data/coal-dust-control/1.jpeg',
          '/data/coal-dust-control/2.jpeg',
          '/data/coal-dust-control/3.jpeg',
          '/data/coal-dust-control/4.jpeg',
          '/data/coal-dust-control/5.jpeg',
          '/data/coal-dust-control/6.jpeg',
          '/data/coal-dust-control/7.jpeg'
        ]
      },
      {
        id: 11,
        title: 'Smart Hoarding Sprinkler System',
        shortDesc: 'Automated sprinklers for construction site cooling and dust control.',
        fullDescription: 'Intelligent spraying systems not only improve air quality at construction sites and in surrounding areas but also provide cooling relief for work surfaces during hot seasons. Supporting flexible scheduled start-and-stop modes, this system significantly reduces manual operation and maintenance costs, as well as administrative burdens, while simultaneously ensuring highly effective dust suppression and a comfortable working environment.',
        cover: '/data/sprinkler-system/3.jpeg',
        images: [
          '/data/sprinkler-system/1.jpeg',
          '/data/sprinkler-system/2.jpeg',
          '/data/sprinkler-system/3.jpeg',
          '/data/sprinkler-system/4.jpeg',
          '/data/sprinkler-system/5.jpeg',
          '/data/sprinkler-system/6.jpeg'
        ]
      }
    ]
  },
  {
    id: 'ecology',
    title: 'Ecological Mistscape Aesthetics Engineering',
    // ✅ Исправлено: Теперь описывает ландшафтный дизайн и туман
    description: 'Artificial fog systems for landscape aesthetics, cooling, and creating unique atmospheric effects.',
    cover: '/data/eco-atomizer/2.jpg',
    projects: [
      {
        id: 2,
        title: 'CinemaFX Studio',
        shortDesc: 'Micron-level fog systems for landscape aesthetics and cooling.',
        fullDescription: 'Utilizing micron-level atomization technology, artificial fog landscape systems create a dreamlike, ethereal atmosphere while simultaneously delivering a multitude of benefits—including cooling, humidification, air purification, and the release of negative oxygen ions. Integrated with fully automated intelligent controls to ensure precise misting, these systems significantly enhance the artistic aesthetic of garden landscapes, crafting outdoor leisure spaces that are cool, comfortable, healthy, and ecologically sound.',
        cover: '/data/eco-atomizer/1.jpg',
        images: [
           '/data/eco-atomizer/1.jpg',
           '/data/eco-atomizer/2.jpg',
           '/data/eco-atomizer/3.jpg',
            '/data/eco-atomizer/4.jpg',
            '/data/eco-atomizer/5.jpg',
            '/data/eco-atomizer/6.jpg',
            '/data/eco-atomizer/7.jpg',
            '/data/eco-atomizer/8.jpg',
            '/data/eco-atomizer/9.jpg',
            '/data/eco-atomizer/10.jpg',
            '/data/eco-atomizer/11.jpg'
        ]
      }
    ]
  },
  {
    id: 'marine',
    title: 'Smart Agriculture Greenhouse Support',
    // ✅ Исправлено: Теперь описывает сельское хозяйство и климат-контроль
    description: 'Precision humidification and climate control solutions for modern greenhouses and cultivation.',
    cover: '/data/greenery/2.jpeg',
    projects: [
       {
        id: 3,
        title: 'Containerized Unit for Edible Mushroom Cultivation',
        shortDesc: 'Ultrasonic cold mist for optimal mushroom growth humidity.',
        fullDescription: 'In enclosed mushroom cultivation greenhouses, ultrasonic humidifiers generate an ultra-fine "cold mist" consisting of 1–5 micron droplets, precisely maintaining the internal humidity within the optimal growth range of 85%–95%. This effectively prevents dehydration and wilting of the mushrooms, shortens the growth cycle, and significantly boosts yields. Furthermore, it eliminates the issues of rot and blemishes often caused by water accumulation associated with traditional sprinkler systems, ensuring that the mushrooms remain plump and rounded in appearance—thereby attaining a premium commercial grade—and creating a perfect microclimate for their growth.',
        cover: '/data/mushroom-cultivation/1.jpeg',
        images: [
           '/data/mushroom-cultivation/1.jpeg',
           '/data/mushroom-cultivation/2.jpeg',
           '/data/mushroom-cultivation/3.jpeg',
            '/data/mushroom-cultivation/4.jpeg',
            '/data/mushroom-cultivation/5.jpeg',
            '/data/mushroom-cultivation/6.jpeg'
        ]
      },
      {
        id: 30,
        title: 'Greenhouse Seedling Nursery',
        shortDesc: 'Humidification systems to reduce heat stress in seedlings.',
        fullDescription: 'The application of high-pressure humidification systems in agricultural nurseries rapidly elevates humidity and lowers temperature through micron-level atomization. This effectively minimizes moisture transpiration in seedlings and alleviates heat stress, thereby significantly boosting both seedling survival rates and quality. Integrated with fully automated intelligent controls, the system enables precise irrigation and humidification; while substantially conserving water resources, it also reduces manual labor and operational costs. Consequently, it stands as an ideal solution for supporting precision cultivation in modern agriculture, facilitating both cost reduction and efficiency enhancement.',
        cover: '/data/greenery/2.jpeg',
        images: [
           '/data/greenery/2.jpeg',
           '/data/greenery/3.jpeg',
           '/data/greenery/4.jpeg',
            '/data/greenery/5.jpeg',
            '/data/greenery/6.jpeg'
        ]
      }
    ]
  },
  {
    id: 'science',
    title: 'Spatial Atomization Disinfection System',
    // ✅ Исправлено: Теперь описывает санитарную обработку и дезодорацию
    description: 'Advanced atomization technologies for odor neutralization, disinfection, and environmental hygiene.',
    cover: '/data/odor-control/3.jpeg',
    projects: [
      {
        id: 40,
        title: 'Municipal Sanitation Odor Control',
        shortDesc: 'Atomization tech for decomposing odors in waste stations.',
        fullDescription: 'Waste transfer stations utilize high-pressure humidification and deodorization equipment, which employs micron-level atomization to rapidly decompose malodorous molecules—such as hydrogen sulfide and ammonia—thereby efficiently purifying the air at the source. While significantly mitigating odor-related nuisances for the public, this system also serves the dual functions of dust suppression and cooling, effectively improving the working environment for sanitation personnel. Integrated with fully automated intelligent controls, the system achieves precise, round-the-clock deodorization, making it an ideal solution for municipal sanitation departments seeking to reduce costs, enhance efficiency, and foster a green, fresh urban environment.',
        cover: '/data/odor-control/3.jpeg',
        images: [
           '/data/odor-control/3.jpeg',
           '/data/odor-control/4.jpeg',
           '/data/odor-control/5.jpeg',
            '/data/odor-control/1.jpeg',
            '/data/odor-control/2.jpeg'
        ]
      },
      {
        id: 41,
        title: 'Livestock Epidemic Prevention',
        shortDesc: 'Cooling and disinfection systems for livestock housing.',
        fullDescription: 'Leveraging the principle of highly efficient evaporative cooling, this system significantly lowers the temperature and humidity within livestock housing, effectively mitigating heat stress in animals and thereby substantially boosting survival rates and productivity. Furthermore, the equipment features comprehensive, "dead-angle-free" disinfection capabilities, establishing a robust health barrier for the livestock. This integrated solution—combining intelligent temperature control with environmental disinfection—represents an ideal choice for modern animal husbandry operations seeking to reduce costs, enhance efficiency, and realize sustainable, eco-friendly farming practices.',
        cover: '/data/epidemic-prevention/1.jpeg',
        images: [
           '/data/epidemic-prevention/1.jpeg',
            '/data/epidemic-prevention/4.jpeg',
            '/data/epidemic-prevention/5.jpeg'
        ]
      }
    ] 
  }
];


export const projects = projectCategories.flatMap(cat => cat.projects);