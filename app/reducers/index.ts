import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  productsData: productsReducer,
  cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
