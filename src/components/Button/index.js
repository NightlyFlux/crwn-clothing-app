import './styles.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`button ${isGoogleSignIn ? 'google-sign-in' : ''} ${
      inverted ? 'inverted' : ''
    }`}
    {...otherProps}>
    {children}
  </button>
)

export default Button
