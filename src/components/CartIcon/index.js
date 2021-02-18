import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/selectors'
import './styles.scss'

const CartIcon = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector(selectCartItemsCount)
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon
