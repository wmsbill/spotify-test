const queryString = require('querystring');
const fetch = require('isomorphic-fetch');
const searchResultHelper = require('./response');

const BASE_API = 'https://api.spotify.com/v1';

module.exports =  {
    search (query) {
        const params = queryString.encode({
            q: query,
            type: 'track,artist',
            limit: '20',
            offset: '0',
        });
        const url = `${BASE_API}/search?${params}`;

        return fetch(url , {
            method: 'GET',
            headers: {
                Authorization: 'Bearer BQB3T79gpHNOT4kJhag3i4p21lN9OId6Tcrgj7oz34qNAz8Xx2Am4ErVHVq5FMiSnl9eXvtkSCzOcYIDaX8T72vAgm4aibBmYQQO4GdIwxOyZRSxKrNpXQ_9zXA8iEfy8fv4dtvO4QWM7Uy2NAAQvKOxIDLpV0SW3yY',
            }
        })
            .then(response => response.json())
            .then(json => searchResultHelper.fromJSON(json));
    }
};
