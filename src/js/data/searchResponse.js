module.exports = {
    fromJSON(response) {
        return {
            artists: response.artists.items,
            tracks: response.tracks.items,
        }
    }
}
