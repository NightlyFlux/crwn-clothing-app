import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  selectCart,
  ({ cartItems }) => cartItems
)

export const selectCartHidden = createSelector(
  selectCart,
  ({ hidden }) => hidden
)

export const selectCartItemsCount = createSelector(
  selectCart,
  ({ cartItems }) =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(selectCart, ({ cartItems }) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
)
