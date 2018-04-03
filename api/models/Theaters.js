module.exports = {

  indexes: [
    {
      attributes: {
        theater_id: 1,
      },
      options: {
        background: true,
      },
    }],

  attributes: {
    theater_name: { type: 'string' },
    theater_id: { type: 'integer' },
    theater_address: { type: 'array' },
    theater_city: { type: 'string' },
    theater_state: { type: 'string' },
    theater_zip: { type: 'string' },
    theater_phone: { type: 'string' },
    theater_attributes: { type: 'string' },
    theater_ticketing: { type: 'string' },
    theater_closed_reason: { type: 'integer' },
    theater_location: { type: 'string' },
    theater_market: { type: 'string' },
    theater_screens: { type: 'integer' },
    theater_seating: { type: 'string' },
    theater_adult: { type: 'string' },
    theater_child: { type: 'string' },
    theater_senior: { type: 'string' },
    theater_sound: { type: 'string' },
    theater_lat: { type: 'string' },
    theater_lon: { type: 'string' },
    theater_coordinates: { type: 'json' },
  },
};

