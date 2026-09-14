'use strict';

import hiker from './hiker.js';

describe('answer size', () => {
  it('has two digits', () => {
    expect(String(hiker.answer()).length).toEqual(2);
  });

  it('has three digits', () => {
    expect(String(hiker.answer()).length).toEqual(3);
  });
});
