const searchHandler = require('./search/handler');
const artistHandler = require('./artist/handler');

const pulse = (req, res) => function* () {
    yield {req, res};
}

module.exports = {
    searchHandler,
    artistHandler,
}
