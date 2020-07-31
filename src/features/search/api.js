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
                Authorization: `Bearer ${process.env.token}`,
            }
        })
            .then(response => response.json())
            .then(json => searchResultHelper.fromJSON(json));
    }
};
