import HeroDetail from './hero-detail.riot';
import { describe, expect, test } from 'vitest';
import { component } from 'riot';
import { HEROES } from '@services/mock-heroes';

describe('HeroDetail Unit Test', () => {
  const mountMessages = component(HeroDetail);
  test('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountMessages(div, {
      id: HEROES[0].id,
    });
    expect(component.$('h2').innerHTML).to.be.equal(
      `${HEROES[0].name.toUpperCase()} Details`,
    );
    expect(component.$('#hero-id').innerHTML).to.be.equal(
      `id: ${HEROES[0].id}`,
    );
  });
});
