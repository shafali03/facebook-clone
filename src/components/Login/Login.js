import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

function Login() {
  const signIn = () => {

  }


  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://res.cloudinary.com/shafali/image/upload/v1600440761/1200px-Facebook_Logo__2019_2_nxz8wo.png" alt="" />
        <img src="https://res.cloudinary.com/shafali/image/upload/v1600441119/Facebook-Logo.wine_1_snxrbd.png" alt="" />
      </div>
      <Button type='submit' onClick>
        Sign In
      </Button>
    </div>
  )
}

export default Login
