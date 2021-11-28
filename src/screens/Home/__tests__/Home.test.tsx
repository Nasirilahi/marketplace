import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../../../store/configureStore';
import Home from '..';

describe('Home', () => {
  it('should render Home screen', () => {
    const navigate = jest.fn();
    const initialState = {
      productsData: {
        products: [],
        filteredProducts: [],
        isLoading: false,
        error: null,
      },
    };
    const component = (
      <Provider store={store(initialState)}>
        <Home navigation={{navigate: navigate}} />
      </Provider>
    );
    const {getByTestId} = render(component);
    expect(getByTestId('homeView')).toBeDefined();
  });

  it('should render Home screen with Content', async () => {
    const navigate = jest.fn();
    const initialState = {
      productsData: {
        products: [
          {
            id: 1,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description:
              'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: "men's clothing",
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
              rate: 3.9,
              count: 120,
            },
          },
          {
            id: 2,
            title: 'Mens Casual Premium Slim Fit T-Shirts ',
            price: 22.3,
            description:
              'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
            category: "men's clothing",
            image:
              'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            rating: {
              rate: 4.1,
              count: 259,
            },
          },
        ],
        filteredProducts: [],
        isLoading: false,
        error: null,
      },
    };
    const component = (
      <Provider store={store(initialState)}>
        <Home navigation={{navigate: navigate}} />
      </Provider>
    );
    const {queryByText} = render(component);
    expect(queryByText('Search for any item')).toBe(null);
  });
});
