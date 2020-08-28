const searchHandler = require('./search/handler');
const artistHandler = require('./artist/handler');

function* input (req, res) {
    yield {req, res, args: {}, output: {}};
}

module.exports = {
    searchHandler: (req, res) => searchHandler(input(req, res)),
    artistHandler: (req, res) => artistHandler(input(req, res)),
}
