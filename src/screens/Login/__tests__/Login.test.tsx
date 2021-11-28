import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Login from '..';

const flushMicrotasksQueue = () =>
  new Promise(resolve => setImmediate(resolve));

describe('Login', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('renders default elements', () => {
    const navigate = jest.fn();
    const {getAllByText, getByPlaceholderText} = render(
      <Login navigation={{navigate: navigate}} />,
    );
    expect(getAllByText('LOGIN').length).toBe(1);
    getByPlaceholderText('Enter User Name');
    getByPlaceholderText('Enter Password');
  });
  // it('shows invalid input messages', async() => {
  //   const navigate = jest.fn();
  //   const {getByTestId, getByText} = render(<Login navigation={{navigate: navigate}}  />);

  //   fireEvent.press(getByText('LOGIN'));
  //   expect(await getByText('User').length).toBe(1);
  //   getByText('Password is required');
  // });
  // it('handles valid input submission', async () => {
  //   fetch.mockResponseOnce(JSON.stringify({token: 'sdfxsdfsd'}));
  //   const pushMock = jest.fn();

  //   const navigate = jest.fn();
  //   const {getByTestId, getByText} = render(
  //     <Login navigation={{navigate: navigate}} />,
  //   );
  //   fireEvent.changeText(getByTestId('usernameInput'), 'example');
  //   fireEvent.changeText(getByTestId('passwordInput'), 'asdf');
  //   fireEvent.press(getByText('LOGIN'));

  //   expect(fetch.mock.calls).toMatchSnapshot();
  //   await act(flushMicrotasksQueue);
  //   expect(pushMock).toBeCalled();
  // });
});
