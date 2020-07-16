const api = require('./api');

module.exports = ({ id }) => api.getArtistById(id);
