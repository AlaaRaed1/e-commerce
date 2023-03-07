function getTotal() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const total = cart === undefined ? 0 : cart.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  return total;
}

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
  total: getTotal(),
};

export function addToCart(product) {
  return {
    type: "CART/ADD",
    payload: { product, count: 1 },
  };
}
export function removeFromCart(productToRemove) {
  return {
    type: "CART/REMOVE",
    payload: productToRemove,
  };
}

export function clearCart(cart) {
  return {
    type: "CART/CLEAR",
    payload: cart,
  };
}

export function setQuantity(product, quantity) {
  return {
    type: "CART/SET",
    payload: { product, quantity },
  };
}
function Reducer(state = initialState, action) {
  switch (action.type) {
    case "CART/ADD":
      const inCart = state.cart.find(
        (item) =>
          action.payload.product.title === item.title &&
          action.payload.product.price === item.price
      );
      if (inCart !== undefined) {
        return state;
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...state.cart,
            { ...action.payload.product, quantity: action.payload.count },
          ])
        );
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.product, quantity: 1 }],
          total: state.total + action.payload.count,
        };
      }

    case "CART/REMOVE":
      const newCart = state.cart.filter(
        (product) => product !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart, total: getTotal() };

    case "CART/CLEAR":
      localStorage.setItem("cart", JSON.stringify(action.payload));
      const emptyCart = [];
      return {
        ...state,
        cart: emptyCart,
        total: state.total - state.total,
      };

    case "CART/SET":
      let itemInCart = state.cart.find(
        (item) => action.payload.product.title === item.title
      );
      const updatedItemInCart = {
        ...itemInCart,
        quantity: action.payload.quantity,
      };
      if (itemInCart) {
        const newCart = state.cart.filter((item) => item !== itemInCart);
        const updatedCart = [...newCart, updatedItemInCart];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart,
          total: getTotal(),
        };
      } else {
        const itemAddedToCart = (action.payload.product = {
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
        const newCart = [...state.cart, itemAddedToCart];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, cart: newCart, total: getTotal() };
      }

    default:
      return state;
  }
}

export default Reducer;
