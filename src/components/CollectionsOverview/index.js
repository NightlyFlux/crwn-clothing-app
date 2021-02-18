import { useSelector } from 'react-redux'
import CollectionPreview from '../CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/selectors'
import './styles.scss'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview)
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview
