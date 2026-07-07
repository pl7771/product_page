// Non-translatable project data: ids, images, covers
export const projectCategoriesStructure = [
  {
    id: 'industrial',
    cover: '/data/concrete-batching-plant/4.jpeg',
    projects: [
      {
        id: 1,
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
          '/data/concrete-batching-plant/10.jpeg',
        ],
      },
      {
        id: 10,
        cover: '/data/coal-dust-control/1.jpeg',
        images: [
          '/data/coal-dust-control/1.jpeg',
          '/data/coal-dust-control/2.jpeg',
          '/data/coal-dust-control/3.jpeg',
          '/data/coal-dust-control/4.jpeg',
          '/data/coal-dust-control/5.jpeg',
          '/data/coal-dust-control/7.jpeg',
        ],
      },
      {
        id: 11,
        cover: '/data/sprinkler-system/3.jpeg',
        images: [
          '/data/sprinkler-system/1.jpeg',
          '/data/sprinkler-system/2.jpeg',
          '/data/sprinkler-system/3.jpeg',
          '/data/sprinkler-system/4.jpeg',
          '/data/sprinkler-system/5.jpeg',
          '/data/sprinkler-system/6.jpeg',
        ],
      },
    ],
  },
  {
    id: 'ecology',
    cover: '/data/eco-atomizer/1.jpg',
    projects: [
      {
        id: 2,
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
          '/data/eco-atomizer/11.jpg',
        ],
      },
    ],
  },
  {
    id: 'marine',
    cover: '/data/greenery/2.jpeg',
    projects: [
      {
        id: 3,
        cover: '/data/mushroom-cultivation/1.jpeg',
        images: [
          '/data/mushroom-cultivation/1.jpeg',
          '/data/mushroom-cultivation/2.jpeg',
          '/data/mushroom-cultivation/3.jpeg',
          '/data/mushroom-cultivation/4.jpeg',
          '/data/mushroom-cultivation/5.jpeg',
          '/data/mushroom-cultivation/6.jpeg',
          '/data/mushroom-cultivation/7.jpeg',
        ],
      },
      {
        id: 30,
        cover: '/data/greenery/2.jpeg',
        images: [
          '/data/greenery/2.jpeg',
          '/data/greenery/3.jpeg',
          '/data/greenery/4.jpeg',
          '/data/greenery/5.jpeg',
          '/data/greenery/6.jpeg',
        ],
      },
    ],
  },
  {
    id: 'science',
    cover: '/data/odor-control/3.jpeg',
    projects: [
      {
        id: 40,
        cover: '/data/odor-control/3.jpeg',
        images: [
          '/data/odor-control/3.jpeg',
          '/data/odor-control/4.jpeg',
          '/data/odor-control/5.jpeg',
          '/data/odor-control/1.jpeg',
          '/data/odor-control/2.jpeg',
        ],
      },
      {
        id: 41,
        cover: '/data/epidemic-prevention/1.jpeg',
        images: [
          '/data/epidemic-prevention/1.jpeg',
          '/data/epidemic-prevention/4.jpeg',
          '/data/epidemic-prevention/5.jpeg',
          '/data/epidemic-prevention/6.jpeg',
          '/data/epidemic-prevention/7.jpeg',
          '/data/epidemic-prevention/8.jpeg',
          '/data/epidemic-prevention/9.jpeg',
        ],
      },
    ],
  },
];

export const projects = projectCategoriesStructure.flatMap((cat) => cat.projects);
