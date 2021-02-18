import { memo } from 'react'
import './styles.scss'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='Item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default memo(CartItem)
