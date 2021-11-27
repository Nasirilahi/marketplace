import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE,
} from '../constants/actions/actionsConstants';

const initialState = {
  products: [],
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

    default:
      return state;
  }
};

export default usersReducer;
