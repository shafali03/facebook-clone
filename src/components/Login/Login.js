import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../Reducer/Reducer'
import { useStateValue } from '../Context/StateProvider'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    // sing in with google
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://res.cloudinary.com/shafali/image/upload/v1600440761/1200px-Facebook_Logo__2019_2_nxz8wo.png" alt="" />
        <img src="https://res.cloudinary.com/shafali/image/upload/v1600441119/Facebook-Logo.wine_1_snxrbd.png" alt="" />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
