// Non-translatable service-area config: region order + related project categories.
// Region copy lives in src/i18n/translations/{en,zh}.js → serviceAreas.regions.
export const serviceAreaRegions = [
  { id: 'huabei', categories: ['industrial', 'ecology'] },
  { id: 'henan', categories: ['marine', 'science', 'industrial'] },
  { id: 'metros', categories: ['ecology', 'marine'] },
  { id: 'shandong', categories: ['industrial', 'science', 'ecology'] },
];

export const serviceAreaIds = serviceAreaRegions.map((r) => r.id);
