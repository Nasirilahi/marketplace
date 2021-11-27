import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  productsData: productsReducer,
});

export default rootReducer;
