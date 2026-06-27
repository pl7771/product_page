export const ARTICLE_CATEGORIES = [
  { id: 'regulation', en: 'Regulation', zh: '政策' },
  { id: 'technology', en: 'Technology', zh: '技术' },
  { id: 'market', en: 'Market', zh: '市场' },
  { id: 'applications', en: 'Applications', zh: '应用' },
  { id: 'dust-control', en: 'Dust Control', zh: '抑尘' },
  { id: 'humidification', en: 'Humidification', zh: '加湿' },
  { id: 'cooling', en: 'Cooling', zh: '降温' },
  { id: 'disinfection', en: 'Disinfection', zh: '消毒' },
  { id: 'case-study', en: 'Case Study', zh: '案例' },
  { id: 'guide', en: 'Guide', zh: '指南' },
  { id: 'environmental', en: 'Environmental', zh: '环保' },
  { id: 'maintenance', en: 'Maintenance', zh: '运维' },
];

export const getArticleCategoryId = (enCategory, zhCategory) => {
  const match = ARTICLE_CATEGORIES.find((c) => c.en === enCategory || c.zh === zhCategory);
  return match?.id ?? null;
};

export const getCategoryLabel = (categoryId, lang) => {
  const category = ARTICLE_CATEGORIES.find((c) => c.id === categoryId);
  if (!category) return '';
  return lang === 'zh' ? category.zh : category.en;
};
