import cartReducer from '../cartReducer';
import getProduct from '../__mocks__/product.mock';
import {
  ADD_TO_CART,
  REMOVE_CART,
  RESET_CART,
} from '../../constants/actions/actionsConstants';

const initialState = {
  carts: [],
  totalCost: 0,
  tax: 0,
};

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {type: 'ABC', payload: {}})).toEqual({
      carts: [],
      tax: 0,
      totalCost: 0,
    });
  });
  it('should return empty cart', () => {
    const carts = cartReducer(undefined, {type: 'ABC', payload: {}}).carts;
    expect(carts.length).toBe(0);
  });
  it('should add items to cart store', () => {
    cartReducer(initialState, {type: ADD_TO_CART, clickedItem: getProduct(1)});
    const carts = cartReducer(initialState, {
      type: ADD_TO_CART,
      clickedItem: getProduct(1),
    }).carts;
    expect(carts.length).toBe(1);
  });
  it('should add items in to existing item to cart store', () => {
    const carts = cartReducer(
      {...initialState, carts: [{...getProduct(1), quantity: 1}]},
      {
        type: ADD_TO_CART,
        clickedItem: getProduct(1),
      },
    ).carts;
    expect(carts[0].quantity).toBe(2);
  });
  it('should remove item from cart store', () => {
    expect(
      cartReducer(initialState, {
        type: REMOVE_CART,
        id: 1,
      }).carts.length,
    ).toBe(0);
  });
  it('should remove existing item from cart store', () => {
    const carts = cartReducer(
      {...initialState, carts: [{...getProduct(1), quantity: 2}]},
      {
        type: REMOVE_CART,
        id: 1,
      },
    ).carts;
    expect(carts[0].quantity).toBe(1);
  });
  it('should reset cart store', () => {
    const carts = cartReducer(undefined, {
      type: RESET_CART,
    }).carts;
    expect(carts.length).toBe(0);
  });
});
