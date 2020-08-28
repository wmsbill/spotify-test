const {buildArgs, callWithArgs, mapOutput, pipe, render, debug} = require('../operators');
const api = require('./api');

const apiCall = ({id}) => Promise.allSettled([
    api.getArtistById(id),
    api.getArtistTopTracks(id),
    api.getRelatedArtists(id)
]).then(([artist, topTracks, relatedArtist]) => ({
    artist: artist.value,
    topTracks: topTracks.value.tracks,
    relatedArtist: relatedArtist.value.artists,
}));

const getArtistId = ({params}) => ({
    id: params.id,
});

const capResponse = ({topTracks, relatedArtist}) => ({
    topTracks: topTracks.slice(0, 10),
    relatedArtist: relatedArtist.slice(0, 10)
})

module.exports = input => pipe(
    input,
    buildArgs(getArtistId),
    callWithArgs(apiCall),
    debug,
    mapOutput(capResponse),
    render('artist/view'),
);

