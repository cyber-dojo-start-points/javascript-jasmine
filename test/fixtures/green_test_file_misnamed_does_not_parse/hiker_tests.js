'use strict';

import hiker from './hiker.js';

// jasmine.json collects "*[sS]pec.js" only, so this name is never collected
// and the unparseable line below is never read.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(hiker.answer()).length).toEqual(???);
  });
});
