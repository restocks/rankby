/* eslint-disable no-undef */
/* eslint-disable max-len */
const assert = require('assert');
const rankby = require('../lib/');

const simple = [{ score: 1 }, { score: 2 }, { score: 4 }, { score: 5 }];
const ties = [{ score: 1 }, { score: 2 }, { score: 5 }, { score: 5 }];

describe('rankby', () => {
  it('orders a simple array of objects', (done) => {
    const ranked = rankby(simple, 'score');
    assert.deepEqual(ranked, [{ score: 5, rank: 1 }, { score: 4, rank: 2 }, { score: 2, rank: 3 }, { score: 1, rank: 4 }]);
    done();
  });

  it('handles ties correctly', (done) => {
    const ranked = rankby(ties, 'score');
    assert.deepEqual(ranked, [{ score: 5, rank: 1 }, { score: 5, rank: 1 }, { score: 2, rank: 3 }, { score: 1, rank: 4 }]);
    done();
  });
});
