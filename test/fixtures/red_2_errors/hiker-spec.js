'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(hiker.answer()).toEqual(42);
  });

  it('has two digits', () => {
    expect(String(hiker.answer()).length).toEqual(2);
  });
});
