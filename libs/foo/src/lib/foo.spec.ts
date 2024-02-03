import { foo, fooAndBar, fooAndBaz } from './foo';

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

describe('foo and baz', () => {
  it('should work', () => {
    expect(fooAndBaz()).toEqual('foo-baz');
  });
});
