import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import { auth } from '../../firebase/utils'
import { selectCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'
import CartDropdown from '../CartDropdown'
import CartIcon from '../CartIcon'
import { SHeader, SLogo, SOptions, SOption } from './styled'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  return (
    <SHeader>
      <SLogo to='/'>
        <Logo />
      </SLogo>
      <SOptions>
        <SOption to='/shop'>SHOP</SOption>
        <SOption to='/contact'>CONTACT</SOption>
        {currentUser ? (
          <SOption
            as='div'
            onClick={() => {
              auth.signOut()
            }}>
            SIGN OUT
          </SOption>
        ) : (
          <SOption to='/signin'>SIGN IN</SOption>
        )}
        <CartIcon />
      </SOptions>
      {hidden || <CartDropdown />}
    </SHeader>
  )
}

export default Header
