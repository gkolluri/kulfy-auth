console.log('policies');

module.exports.policies = {
  GifsController: {
    getDashboard: 'cacheLayer',
    getTags: 'cacheLayer',
    getGifs: 'cacheLayer',
    getDashboardV2: 'cacheLayer',
    getTagsV2: 'cacheLayer',
    getGifsV2: 'cacheLayer',
  },
  CategoriesController: {
    getCategories: 'cacheLayer',
  },
};
