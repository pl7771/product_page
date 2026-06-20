import { projectCategoriesStructure } from '../data/projectsStructure';

export function getLocalizedProjectCategories(dict) {
  const texts = dict.projects;

  return projectCategoriesStructure.map((cat) => {
    const catText = texts.categories[cat.id];
    return {
      ...cat,
      title: catText.title,
      description: catText.description,
      projects: cat.projects.map((project) => ({
        ...project,
        ...catText.projects[project.id],
      })),
    };
  });
}

export function getLocalizedProducts(dict) {
  return dict.products.list.map((item) => ({
    ...item,
    cover: item.gallery[0],
  }));
}
