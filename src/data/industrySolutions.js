// Non-translatable industry-solutions config: vertical order + related project categories.
// Copy lives in src/i18n/translations/{en,zh}.js → solutions.items.
export const industrySolutions = [
  { id: 'textile', categories: ['industrial'] },
  { id: 'nonwoven', categories: ['industrial'] },
  { id: 'painting', categories: ['industrial'] },
  { id: 'grinding', categories: ['industrial'] },
  { id: 'tobacco', categories: ['marine'] },
  { id: 'paper', categories: ['industrial'] },
  { id: 'cement', categories: ['industrial'] },
  { id: 'stone', categories: ['industrial'] },
];

export const industrySolutionIds = industrySolutions.map((s) => s.id);
