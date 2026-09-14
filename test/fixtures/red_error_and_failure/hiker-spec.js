'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });

  it('has two digits', () => {
    const digits = null;
    expect(digits.length).toEqual(2);
  });
});
