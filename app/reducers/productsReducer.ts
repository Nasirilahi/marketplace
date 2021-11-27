import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE,
  SEARCH_PRODUCT_LIST,
} from '../constants/actions/actionsConstants';

const initialState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return {...state, isLoading: true};

    case PRODUCTS_LIST_SUCCESS:
      const {products} = action;
      return {
        ...state,
        products,
        isLoading: false,
        error: null,
      };

    case PRODUCTS_LIST_FAILURE:
      return {...state, products: [], isLoading: false, error: action.err};
    case SEARCH_PRODUCT_LIST: {
      let {filteredProducts} = state;
      filteredProducts = state.products.filter(productItem => {
        return productItem.title
          .toLowerCase()
          .includes(action.searchKey.toLowerCase());
      });
      return {...state, filteredProducts};
    }
    default:
      return state;
  }
};

export default usersReducer;
