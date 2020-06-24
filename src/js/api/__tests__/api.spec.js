const api = require('../api');

const mockFetch = jest.fn();
jest.mock(
    'isomorphic-fetch',
    () => (...args) => mockFetch(...args));

describe('api', () => {
    beforeEach(() => {
        mockFetch.mockClear();
    });

    it('should send the correct params to the target api', () => {
        api.search('Michael');

        expect(mockFetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/search?q=Michael&type=track%2Cartist&limit=20&offset=0',
            {
                method: 'GET',
            }
        );
    });
});
