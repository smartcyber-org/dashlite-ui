import { render } from '@testing-library/react';

import OutlinedInput from './OutlinedInput';

describe('OutlinedInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OutlinedInput />);
    expect(baseElement).toBeTruthy();
  });
});
