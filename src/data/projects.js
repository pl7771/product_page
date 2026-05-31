// src/data/projects.js

// ✅ 1. Новая структура для главной страницы (Категории -> Проекты)
export const projectCategories = [
  {
    id: 'industrial',
    title: 'Industrial Solutions',
    description: 'Dust suppression & atmospheric control for heavy industry.',
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    projects: [
      {
        id: 1,
        title: 'Coal Plant Dust Control',
        shortDesc: 'High-pressure mist systems for coal preparation.',
        fullDescription: 'By deploying high-pressure atomization systems at key locations throughout the facility, micron-scale water mist is utilized to efficiently adsorb suspended particles, thereby significantly reducing PM2.5 concentrations and preventing dust dispersion. Concurrently, within enclosed spaces, dry ash undergoes precisely metered water injection and forced mixing to accurately regulate moisture content, thereby completely eliminating secondary dust generation during the discharge and transport processes.',
        cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
        images: [
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1565514020176-db7936a7d6b7?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 10,
        title: 'Steel Mill Fog Suppression',
        shortDesc: 'Advanced fog cannons for steel production lines.',
        fullDescription: 'Our fog cannon technology provides long-range dust suppression for open-pit steel mills, ensuring worker safety and environmental compliance. The system uses intelligent wind sensors to adjust spray direction and intensity in real-time, maximizing efficiency while minimizing water usage.',
        cover: 'https://images.unsplash.com/photo-1565514020176-db7936a7d6b7?auto=format&fit=crop&q=80&w=800',
        images: [
          'https://images.unsplash.com/photo-1565514020176-db7936a7d6b7?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1518709414768-a88986a45ca8?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1535136894957-b229f13c9753?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 11,
        title: 'Cement Factory Air Quality',
        shortDesc: 'Mist rings for cement kilns.',
        fullDescription: 'Specialized mist ring systems installed around cement kilns to capture dust at the source before it enters the atmosphere. This solution has reduced particulate emissions by 85% in major cement plants across Asia, meeting strict new environmental regulations.',
        cover: 'https://images.unsplash.com/photo-1590247657962-d92636360e49?auto=format&fit=crop&q=80&w=800',
        images: [
          'https://images.unsplash.com/photo-1590247657962-d92636360e49?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 'cinema',
    title: 'Cinema & FX',
    description: 'Atmospheric effects for blockbuster movie scenes.',
    cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    projects: [
      {
        id: 2,
        title: 'CinemaFX Studio',
        shortDesc: 'Fog and haze generation for film production.',
        fullDescription: 'Our technology provides precise control over atmospheric density and duration, allowing directors to create immersive environments for cinematic storytelling. Used in major productions for realistic fog, smoke, and haze effects that respond dynamically to lighting changes.',
        cover: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
        images: [
           'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 20,
        title: 'Horror Movie Atmosphere',
        shortDesc: 'Low-lying fog for suspense scenes.',
        fullDescription: 'Custom-designed low-lying fog generators used in horror film productions to create eerie, ground-hugging mist that enhances suspense without obscuring actor visibility. The fluid formula is non-toxic and safe for prolonged indoor use.',
        cover: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800',
        images: [
           'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 'marine',
    title: 'Marine Science',
    description: 'Submersible emitters for oceanic studies.',
    cover: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    projects: [
       {
        id: 3,
        title: 'DeepSea Research',
        shortDesc: 'Underwater atmospheric simulation.',
        fullDescription: 'Specialized equipment designed to withstand extreme pressures while releasing controlled bubbles for marine biology research. Helps in studying gas exchange and underwater visibility conditions for submersible vehicles.',
        cover: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
        images: [
           'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1583212234807-0192857dfcb1?auto=format&fit=crop&q=80&w=800'
        ]
      },
      {
        id: 30,
        title: 'Coral Reef Restoration',
        shortDesc: 'Bubble curtains for reef protection.',
        fullDescription: 'Innovative bubble curtain systems deployed around coral reefs to protect them from sediment runoff and temperature fluctuations. The air barriers help maintain optimal water conditions for coral growth and marine life preservation.',
        cover: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=800',
        images: [
           'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ]
  },
  {
    id: 'science',
    title: 'Scientific Research',
    description: 'Precision climate chambers for labs.',
    cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    projects: [
      {
        id: 40,
        title: 'Lab Climate Control',
        shortDesc: 'Humidity regulation for sensitive experiments.',
        fullDescription: 'Ultra-precise humidity and temperature control systems for scientific laboratories conducting sensitive material research. Maintains stability within ±0.5% RH, crucial for nanotechnology and pharmaceutical development.',
        cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
        images: [
           'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
           'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
        ]
      }
    ] 
  }
];

// ✅ 2. Плоский список для обратной совместимости (для ProjectsGallery.jsx)
// Собираем все проекты из всех категорий в один массив
export const projects = projectCategories.flatMap(cat => cat.projects);