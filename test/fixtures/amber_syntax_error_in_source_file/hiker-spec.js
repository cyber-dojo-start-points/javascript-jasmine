'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });
});
