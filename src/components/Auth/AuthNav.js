import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from '../TopNav'
import { useAuth } from './AuthProvider'
import UserInfo from './UserInfo'

function AuthNav() {
  const loginInfo = useAuth()

  return (

    <div className="authnav">
      <TopNav/>
      {(loginInfo.currentUser) ? <Link to="/logout" className='authLink'> Logout </Link> : <Link to="/login" className='authLink'> Log In </Link>}
      {(loginInfo.currentUser) ? null : <Link to="/signup" className='authLink'> Sign Up </Link>}
      <UserInfo />
    </div>
  )
}

export default AuthNav


