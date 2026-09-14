'use strict';

import hiker from './hiker.js';

// The loop sits at module scope, outside any spec, so jasmine's per-spec
// timeout never applies and the hang cannot degrade into an ordinary failure.
while (hiker.answer() === 42) {
}

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });
});
