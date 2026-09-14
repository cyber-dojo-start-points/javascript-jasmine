'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });

  it('is six times seven', () => {
    expect(hiker.answer()).toEqual(6 * 7);
  });
});
