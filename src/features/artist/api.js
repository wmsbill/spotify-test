const fetch = require('isomorphic-fetch');

const BASE_API = 'https://api.spotify.com/v1';

module.exports =  {
    getArtistById (id) {
        const url = `${BASE_API}/artists/${id}`;

        return fetch(url , {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.token}`,
            }
        })
            .then(response => response.json());
    },

    getArtistTopTracks (id) {
        const url = `${BASE_API}/artists/${id}/top-tracks?country=from_token`;

        return fetch(url , {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.token}`,
            }
        })
            .then(response => response.json());
    },

    getRelatedArtists (id) {
        const url = `${BASE_API}/artists/${id}/related-artists`;

        return fetch(url , {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.token}`,
            }
        })
            .then(response => response.json());
    }

    ///related-artists
};
