import { render } from '@testing-library/react';

import Block from './Block';

describe('Block', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Block />);
    expect(baseElement).toBeTruthy();
  });
});
