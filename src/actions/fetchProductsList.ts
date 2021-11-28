import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAILURE,
} from '../constants';
import {API_URL} from '../constants';

export const getProductsList = () => {
  return (dispatch: any) => {
    dispatch(productsListRequest());
    try {
      fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data => dispatch(productsListSuccess(data)));
    } catch (err) {
      return dispatch(productsListFailure(err));
    }
  };
};

const productsListRequest = () => ({type: PRODUCTS_LIST_REQUEST});

const productsListSuccess = (products: any) => ({
  type: PRODUCTS_LIST_SUCCESS,
  products,
});

const productsListFailure = (err: any) => ({type: PRODUCTS_LIST_FAILURE, err});
