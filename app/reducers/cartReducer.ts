import {ADD_TO_CART, REMOVE_CART} from '../constants/actions/actionsConstants';

const initialState = {
  carts: [],
};

const cartsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {clickedItem} = action;
      let {carts} = state;
      const isItemInCart = state.carts.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        carts = carts.map(item =>
          item.id === clickedItem.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
        return {...state, carts};
      }
      return {...state, carts: [...carts, {...clickedItem, quantity: 1}]};
    }

    case REMOVE_CART: {
      const {id} = action;
      let {carts} = state;
      carts = carts.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, {...item, quantity: item.quantity - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]);
      return {...state, carts};
    }

    default:
      return state;
  }
};

export default cartsReducer;
