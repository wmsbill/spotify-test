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
                Authorization: 'Bearer BQDUTAc_uMklf3xzp9Ifb9xvvBOa63wJk1SysvGGtt9KN4tLAICidqh0oWRXo7mzlxpzIT9tBuw6t0EFsbORMbWfdQ_2hoWjhGPTbyEXUfhrEhDLy1gU1Wsz_I8iDVNjKOM1kz9ECimCTGSmH83afnjbu1AKD8WXcpk',
            }
        })
            .then(response => response.json())
            .then(json => searchResultHelper.fromJSON(json));
    }
};
