import { baz } from '@juparog/baz';
import { bar } from '@juparog/release-it-bar';

export function foo(): string {
  return 'foo';
}

export function fooAndBar(): string {
  return 'foo' + '-' + bar();
}

export function fooAndBaz(): string {
  return 'foo' + '-' + baz();
}
