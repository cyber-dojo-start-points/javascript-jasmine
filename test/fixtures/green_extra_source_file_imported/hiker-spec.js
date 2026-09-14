'use strict';

import hiker from './hiker.js';
import checksum from './checksum.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });

  it('has a two character checksum', () => {
    expect(checksum(String(hiker.answer()))).toEqual(2);
  });
});
