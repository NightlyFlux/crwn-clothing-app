import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/actions'
import Button from '../Button'
import './styles.scss'

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item
  const dispatch = useDispatch()

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button
        inverted
        onClick={() => {
          dispatch(addItem(item))
        }}>
        ADD TO CART
      </Button>
    </div>
  )
}
export default CollectionItem
