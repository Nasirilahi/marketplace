import productsReducer from '../productsReducer';
import getProductsList, {
  filteredMockProducts,
} from '../__mocks__/productsList.mock';
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE,
  SEARCH_PRODUCT_LIST,
} from '../../constants/actions/actionsConstants';

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

describe('Products-list Reducer', () => {
  it('should render empty list', () => {
    expect(productsReducer(undefined, {type: 'ABC', payload: {}})).toEqual({
      products: [],
      filteredProducts: [],
      isLoading: false,
      error: null,
    });
  });
  it('should request  with loading state empty list', () => {
    expect(
      productsReducer(initialState, {type: PRODUCTS_LIST_REQUEST}),
    ).toEqual({
      products: [],
      filteredProducts: [],
      isLoading: true,
      error: null,
    });
  });
  it('should render products list', () => {
    expect(
      productsReducer(initialState, {
        type: PRODUCTS_LIST_SUCCESS,
        products: getProductsList,
      }),
    ).toEqual({
      products: getProductsList,
      filteredProducts: [],
      isLoading: false,
      error: null,
    });
  });
  it('should render error view', () => {
    expect(
      productsReducer(initialState, {
        type: PRODUCTS_LIST_FAILURE,
        err: 'err',
      }),
    ).toEqual({
      products: [],
      filteredProducts: [],
      isLoading: false,
      error: 'err',
    });
  });
  it('should filter search list', () => {
    expect(
      productsReducer(
        {...initialState, products: getProductsList},
        {
          type: SEARCH_PRODUCT_LIST,
          searchKey: 'slim',
        },
      ),
    ).toEqual({
      products: getProductsList,
      filteredProducts: filteredMockProducts,
      isLoading: false,
      error: null,
    });
  });
});
