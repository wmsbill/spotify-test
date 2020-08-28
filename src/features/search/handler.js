const {
    buildArgs,
    callWithArgs,
    pipe,
    render
} = require('../operators');
const api = require('./api');

const PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 50;

const getNextPage = limit => ({
    limit: parseInt(limit, 10) + PAGE_SIZE,
    offset: 0,
});

const getArgs = req => {
    const {query, offset, limit} = req.query;

    return {
        query,
        offset: offset || '0',
        limit: limit || '20',
    };
}

const hasNextPage = limit => limit <= MAX_PAGE_SIZE;

const buildResponse = args => {
    const {offset, limit} = getNextPage(args.limit);
    return {
        nextPage: {
            limit,
            offset,
            query: args.query,
            hasNextPage: hasNextPage(limit)
        }
    };
};

module.exports = input => pipe(
    input,
    buildArgs(getArgs),
    callWithArgs(api.search),
    callWithArgs(buildResponse),
    render('search/view')
);
