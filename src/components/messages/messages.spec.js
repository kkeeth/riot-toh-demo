import Messages from './messages.riot';
import { describe, expect, test } from 'vitest';
import { component } from 'riot';

describe('Messages Unit Test', () => {
  const mountMessages = component(Messages);
  test('The component is properly rendered', () => {
    const div = document.createElement('div');
    const component = mountMessages(div);
    expect(component.$('h2').innerHTML).to.be.equal('Messages');
    expect(component.$('button').innerHTML).to.be.equal('Clear messages');
  });
});
