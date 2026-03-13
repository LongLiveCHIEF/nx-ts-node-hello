import { hello } from './hello.js';

describe('hello', () => {
  it('should work', () => {
    expect(hello()).toEqual('hello');
  });
});
