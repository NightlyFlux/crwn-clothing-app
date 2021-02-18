import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/actions'
import { selectCartItems } from '../../redux/cart/selectors'
import Button from '../Button'
import CartItem from '../CartItem'
import './styles.scss'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
      </Button>
    </div>
  )
}

export default Cart
