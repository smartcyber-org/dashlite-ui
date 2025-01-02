import { render } from '@testing-library/react';

import DashliteUi from './dashlite-ui';

describe('DashliteUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashliteUi />);
    expect(baseElement).toBeTruthy();
  });
});
