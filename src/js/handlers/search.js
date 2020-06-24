const api = require('../api/api');

module.exports = ({ query }) => api.search(query);
