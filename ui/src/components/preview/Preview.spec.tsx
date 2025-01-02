import { render } from '@testing-library/react';

import Preview from './Preview';

describe('Preview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Preview />);
    expect(baseElement).toBeTruthy();
  });
});
