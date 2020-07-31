const api = require('./api');

module.exports = ({ id }) => Promise.allSettled([
        api.getArtistById(id),
        api.getArtistTopTracks(id),
        api.getRelatedArtists(id)
    ])
    .then(([artist, topTracks, relatedArtist]) => ({
        artist: artist.value,
        topTracks: topTracks.value,
        relatedArtist: relatedArtist.value,
    }));
