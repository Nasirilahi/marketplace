import React from 'react';
import {render, cleanup, wait} from '@testing-library/react-native';
import Categories from '..';

describe('Categories', () => {
  let originFetch;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  afterEach(cleanup);
  it('should render Categories screen', async () => {
    const fakeResponse = {title: 'example text'};
    const mRes = {json: jest.fn().mockResolvedValueOnce(fakeResponse)};
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const {getByTestId} = render(<Categories />);
    const view = await wait(() => getByTestId('categoryView'));
    expect(view).toBeDefined();
  });
});
