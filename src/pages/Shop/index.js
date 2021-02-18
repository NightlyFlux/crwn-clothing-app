import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useRouteMatch } from 'react-router-dom'
// import CollectionsOverview from '../../components/CollectionsOverview'
import Spinner from '../../components/Spinner'
import { fetchCollections } from '../../redux/shop/actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/selectors'
// import Collection from '../Collection'

const CollectionsOverview = lazy(() =>
  import('../../components/CollectionsOverview')
)
const Collection = lazy(() => import('../Collection'))

const Shop = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded)

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={isCollectionsLoaded ? CollectionsOverview : Spinner}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={isCollectionsLoaded ? Collection : Spinner}
        />
      </Suspense>
    </div>
  )
}

export default Shop
