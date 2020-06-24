const searchResultHelper = require('../searchResponse');
const fakeResponse = require('./fixture');

describe('SearchResultHelper', () => {
    it('should return proper data from json Response', () => {
        expect(searchResultHelper.fromJSON(fakeResponse)).toMatchObject({
            artists: expect.any(Array),
            tracks: expect.any(Array),
        });
    });
});
