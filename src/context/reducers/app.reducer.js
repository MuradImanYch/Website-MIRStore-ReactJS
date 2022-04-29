import appActionTypes from "../actions/app.actions";
import {getContentFromArrayBasedOnKey} from '../../utils';

export default (state, action) => {
  // action.type, action.payload
  const { type, payload } = action;

  switch (type) {
    case appActionTypes.ADD_TO_CART:
      return addToCart(state, payload);

    default:
      return state;
  }
}

const addToCart = (state, { id, price, title, src, quantity }) => {
  const { cart, totalQty } = state;
  //let data = getContentFromArrayBasedOnKey(cart, 'id', id);
    // else {
    //   cart.push({ id: id, price: price, title, src,  quantity });
    // }
  if (cart.findIndex(product => product.id === id) !== -1) {
    const cartNew = cart.reduce((cartAcc, product) => {
        if (product.id === id) {
            cartAcc.push({
                ...product,
                quantity: product.quantity + 1
            }) 
        } else {
            cartAcc.push(product)
        }

        return cartAcc 
    }, []);

    return { ...state, cart: cartNew, totalQty: totalQty + quantity }
}
/*else {
  cart.push({ id: id, price: price, title, src,  quantity });
}*/
else 
  return {...state, cart: [...cart, {id: id, price: price, title, src,  quantity}], totalQty: totalQty + quantity };
};
