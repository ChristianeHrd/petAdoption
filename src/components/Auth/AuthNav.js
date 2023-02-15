import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from './AuthProvider'
import UserInfo from './UserInfo'

function AuthNav() {
    const loginInfo = useAuth()
  
  return (

    <div className="authnav">
        {(loginInfo.currentUser)?<Link to="/logout" className='authLink'> Logout </Link>:<Link to="/login" className='authLink'> Login </Link>}
        {(loginInfo.currentUser)?null:<Link to="/signup" className='authLink'> Sign Up for Free </Link>}
        <UserInfo/>
      
    </div>
  )
}

export default AuthNav


