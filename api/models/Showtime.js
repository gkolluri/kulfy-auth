module.exports = {
  indexes: [
    {
      attributes: {
        movie_id: 1,
        theater_id: 1,
        show_date: 1,
      },
      options: {
        background: true,
      },
    }, {
      attributes: {
        movie_name: 'text',
      },
      options: {
        background: true,
      },
    }],

  attributes: {
    movie_name: { type: 'string' },
    movie_id: { type: 'integer' },
    theater_id: { type: 'integer' },
    show_date: { type: 'array' },

  },
};

