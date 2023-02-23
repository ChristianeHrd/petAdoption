import React from 'react'
import { Link } from 'react-router-dom'


function TopNav() {

  return (

    // <div className="topNav">
    <>
      {/* <Link to="/logout" className='authLink'> Logout </Link>:<Link to="/login" className='authLink'> Log In </Link> */}
      <Link to="/" className='authLink'> Home</Link>
      <Link className="authLink" to="/cats">Cats</Link>
      <Link className="authLink" to="/dogs">Dogs</Link>
    </>
  )
}

export default TopNav


