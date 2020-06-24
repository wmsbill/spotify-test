const queryString = require('querystring');
const fetch = require('isomorphic-fetch');
const searchResultHelper = require('../data/searchResponse.js');

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
                Authorization: 'Bearer BQCEOr7dN7GZsgHBRJRBeljhv6OZe1kypQKQH84BF8p2wXV014ryI-ZUbDBICiTA8foon5WswW7vDKxmhZMKUmV0fQ96HdWH9nUEKZQ7c4wmSA2DhGmOr3cweDI15Y7c4bt5yp4O984dBJSUQd1C4GFdhOZWAG2Yq4o',
            }
        })
            .then(response => response.json())
            .then(json => searchResultHelper.fromJSON(json));
    }
};
