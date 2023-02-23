import React from 'react'
import { Link } from 'react-router-dom'


function TopNav() {

  return (

    // <div className="topNav">
    <>
      {/* <Link to="/logout" className='authLink'> Logout </Link>:<Link to="/login" className='authLink'> Log In </Link> */}
      <Link to="/" className='authLink'> Home</Link>
      {/* <div class='col-1'><Link to="/aboutpetadoption" className='authLink'> About Pet Adoption</Link></div> */}
      <Link to="/help" className='authLink'> Donate</Link>
      {/* <div class='col-1'><Link to="/bloc" className='authLink'> Blog</Link></div> */}

      {/* <Link className="authLink" to="/">Home</Link> */}

      <Link className="authLink" to="/cats">Cats</Link>

      <Link className="authLink" to="/dogs">Dogs</Link>

      <Link className="authLink" to="/about">About</Link>

    </>
  )
}

export default TopNav


