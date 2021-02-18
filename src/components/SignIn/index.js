import { useState } from 'react'
import { auth, signInWithGoogle } from '../../firebase/utils'
import Button from '../Button'
import FormInput from '../FormInput'
import './styles.scss'

const SignIn = () => {
  const [authData, setAuthData] = useState({ email: '', password: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = authData

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setAuthData({ email: '', password: '' })
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setAuthData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={authData.email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={authData.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
