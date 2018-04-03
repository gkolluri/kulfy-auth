module.exports = {

  indexes: [
    {
      attributes: {
        movie_id: 1,
      },
      options: {
        background: true,
      },
    }, {
      attributes: {
        title: 'text',
      },
      options: {
        background: true,
      },
    }],

  attributes: {

    title: { type: 'string' },
    language: { type: 'string' },
    movie_id: { type: 'integer' },
    photos: { type: 'array' },
    rating: { type: 'string' },
    advisory: { type: 'string' },
    genre: { type: 'string' },
    cast: { type: 'array' },
    director: { type: 'string' },
    release_date: { type: 'datetime' },
    running_time: { type: 'integer' },
    official_site: { type: 'string' },
    writer: { type: 'string' },
    synopsis: { type: 'string' },
    stars: { type: 'float' },
    shows: { type: 'array' },
    thumbnail_image: { type: 'string' },
    image: { type: 'array' },
    trailer_url: { type: 'string' },

  },
};

