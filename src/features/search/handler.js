const api = require('./api');

const PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 50;

const getNextPage = ({limit}) => ({
    limit: Math.min(
        parseInt(limit || '20', 10) + PAGE_SIZE,
        MAX_PAGE_SIZE
    ),
    offset: 0,
});

const normalizeParams = ({query, offset, limit}) => ({
    query,
    offset: offset || '0',
    limit: limit || '20',
});

const hasNextPage = limit => limit < MAX_PAGE_SIZE;

module.exports = ({query}) => {
    const normalizedParams = normalizeParams(query);

    return api.search(normalizedParams).then(
        response => {
            const {offset, limit} = getNextPage(normalizedParams);

            return {
                ...response,
                nextPage: {
                    limit,
                    offset,
                    query: query.query,
                    hasNextPage: hasNextPage(normalizedParams.limit)
                }
            }
        }
    );
}
