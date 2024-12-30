import Heroes from './heroes.riot';
import { describe, expect, test } from 'vitest';
import { component } from 'riot';
import { HEROES } from '@services/mock-heroes';

describe('Heroes Unit Test', () => {
  const mountMessages = component(Heroes);
  test('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountMessages(div, {
      heroes: HEROES,
    });
    expect(component.$('h2').innerHTML).to.be.equal('My Heroes');
    expect(component.$('ul').children.length).to.be.equal(HEROES.length);
  });
});
