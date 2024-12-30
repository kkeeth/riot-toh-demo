import NotFound from './not-found.riot';
import { describe, expect, test } from 'vitest';
import { component } from 'riot';

describe('NotFound Unit Test', () => {
  const mountNotFound = component(NotFound);
  test('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountNotFound(div);
    expect(component.$('h1').innerHTML).to.be.equal('Page not found');
  });
});
