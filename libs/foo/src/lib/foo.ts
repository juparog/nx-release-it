import { bar } from '@juparog/release-it-bar';

export function foo(): string {
  return 'foo' + '-' + bar();
}
