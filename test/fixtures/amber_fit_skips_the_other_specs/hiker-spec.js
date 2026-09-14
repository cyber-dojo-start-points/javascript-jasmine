'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  fit('is a number', () => {
    expect(typeof hiker.answer()).toEqual('number');
  });

  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });
});
