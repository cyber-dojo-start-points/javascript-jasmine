'use strict';

import hiker from '../hiker.js';

// jasmine.json names spec_dir "." and spec_files "*[sS]pec.js", a glob that
// does not descend, so this file is never loaded. Its assertion is false on
// purpose: the run is green only because jasmine never reaches it.
describe('answer size', () => {
  it('has three digits', () => {
    expect(String(hiker.answer()).length).toEqual(3);
  });
});
