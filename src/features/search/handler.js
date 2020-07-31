const api = require('./api');

module.exports = ({ query }) => api.search(query);
