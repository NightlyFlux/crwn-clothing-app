import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Spinner from './components/Spinner'
import { auth, createUserProfileDocument } from './firebase/utils'
import { setCurrentUser } from './redux/user/actions'
import { selectCurrentUser } from './redux/user/selectors'

const Home = lazy(() => import('./pages/Home'))
const Shop = lazy(() => import('./pages/Shop'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Auth = lazy(() => import('./pages/Auth'))

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }))
        })
      }
      dispatch(setCurrentUser(userAuth))
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [dispatch])

  return (
    <>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() => (currentUser ? <Redirect to='/' /> : <Auth />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

export default App
