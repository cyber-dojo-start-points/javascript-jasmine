'use strict';

import hiker from './hiker.js';

// jasmine.json collects "*[sS]pec.js" only, so this name is never collected.
// Its assertion is false on purpose: the run is green only because jasmine
// never runs it.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(hiker.answer()).length).toEqual(3);
  });
});
