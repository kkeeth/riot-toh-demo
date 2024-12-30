import Dashboard from './dashboard.riot';
import { describe, expect, test } from 'vitest';
import { component } from 'riot';

describe('Dashboard Unit Test', () => {
  const mountMessages = component(Dashboard);
  test('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountMessages(div);
    expect(component.$('h2').innerHTML).to.be.equal('Top Heroes');
  });
});
