import {combineReducers} from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  productsData: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
