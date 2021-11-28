import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../../../store/configureStore';
import ThankYou from '..';

describe('Thankyou', () => {
  it('should render Thank you screen', () => {
    const navigate = jest.fn();
    const component = (
      <Provider store={store()}>
        <ThankYou navigation={{navigate: navigate}} />
      </Provider>
    );
    const {getAllByText} = render(component);
    expect(getAllByText('Keep Shopping').length).toBe(1);
  });

  it('should navigate to home page from Thank you screen', () => {
    const navigate = jest.fn();
    const component = (
      <Provider store={store()}>
        <ThankYou navigation={{replace: navigate}} />
      </Provider>
    );
    const {getByText} = render(component);
    fireEvent.press(getByText('Keep Shopping'));
    expect(navigate).toBeCalled();
  });
});
