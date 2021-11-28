import {
  ADD_TO_CART,
  REMOVE_CART,
  RESET_CART,
} from '../constants/actions/actionsConstants';
import {IProduct} from '../components/ProductCard';

const initialState = {
  carts: [],
  totalCost: 0,
  tax: 0,
};

const calculateTotal = (cart: IProduct) => {
  let total = 0;
  cart.forEach(item => {
    const subtotal = Number(item.price) * Number(item.quantity);
    total += subtotal;
  });
  return total;
};

const calculateTax = (cart: IProduct) => {
  let tax = 0;
  cart.forEach(item => {
    const subtotal = Number(item.price) * Number(item.quantity);
    tax += subtotal * 0.15;
  });
  return tax;
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
        return {
          ...state,
          carts,
          totalCost: calculateTotal(carts),
          tax: calculateTax(carts),
        };
      }
      return {
        ...state,
        carts: [...carts, {...clickedItem, quantity: 1}],
        totalCost: calculateTotal(carts),
        tax: calculateTax(carts),
      };
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
      return {
        ...state,
        carts,
        totalCost: calculateTotal(carts),
        tax: calculateTax(carts),
      };
    }

    case RESET_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartsReducer;
