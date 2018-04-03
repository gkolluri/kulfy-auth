module.exports = {

  attributes: {
    keyword: { type: 'string', required: true },
    title: { type: 'string' },
    active: { type: 'boolean', defaultsTo: false, required: true },
  },
};

