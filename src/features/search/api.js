const queryString = require('querystring');
const fetch = require('isomorphic-fetch');
const searchResultHelper = require('./response');

const BASE_API = 'https://api.spotify.com/v1';

module.exports =  {
    search ({query, offset, limit}) {
        const params = queryString.encode({
            q: query,
            type: 'track,artist',
            limit: limit,
            offset: offset,
        });
        const url = `${BASE_API}/search?${params}`;

        return fetch(url , {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.token}`,
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`
                    );
                }

                return response;
            })
            .then(response => response.json())
            .then(json => searchResultHelper.fromJSON(json))
            .catch(console.info);
    }
};
