import { foo, fooAndBar } from './foo';

describe('foo', () => {
  it('should work', () => {
    expect(foo()).toEqual('foo');
  });
});

describe('foo and bar', () => {
  it('should work', () => {
    expect(fooAndBar()).toEqual('foo-bar');
  });
});
