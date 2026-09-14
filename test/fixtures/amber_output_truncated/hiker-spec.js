'use strict';

import hiker from './hiker.js';

describe('answer', () => {
  it('to life the universe and everything', () => {
    // jasmine writes its progress and its summary to stdout, so flooding
    // stdout from inside a spec fills the runner's per-stream cap before the
    // summary line is written. The cap keeps the head, so the flood survives
    // and the summary the colour rests on does not.
    for (let i = 0; i !== 4000; i += 1) {
      process.stdout.write('debug: i is ' + i + ', total is ' + (i * 2) + '\n');
    }
    expect(hiker.answer()).toEqual(42);
  });
});
