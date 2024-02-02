import { bar } from '@juparog/release-it-bar';

export function foo(): string {
  return 'foo';
}

export function fooAndBar(): string {
  return 'foo' + '-' + bar();
}
