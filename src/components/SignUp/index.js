import { useState } from 'react'
import FormInput from '../../components/FormInput'
import { auth, createUserProfileDocument } from '../../firebase/utils'
import Button from '../Button'
import './styles.scss'

const SignUp = () => {
  const [authData, setAuthData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = authData

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setAuthData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={authData.displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={authData.confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
