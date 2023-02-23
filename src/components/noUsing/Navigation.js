import { Link } from 'react-router-dom'

function Navigation() 
{
    return (
        <div className="navbar">
            <Link className="navlink" to="/">Home</Link>
            {/* <Link className="navlink" to="/countries">Countries Info</Link> */}
            {/* <Link className="navlink" to="/countries/details">Country Details</Link> */}
            {/* <Link className="navlink" to="/countries/details/canada">Country Details Canada</Link> */}
            <Link className="navlink" to="/cats">Cats</Link>
            {/* <Link className="navlink" to="/pets">Dogs0</Link> */}
            <Link className="navlink" to="/dogs">Dogs</Link>

            {/* <Link className="navlink" to="/carousel">Carousel</Link> */}
            {/* <Link className="navlink" to="/petdetails">Pet Details</Link> */}
            {/* <Link className="navlink" to="/admin">Admin Dashboard</Link> */}
            <Link className="navlink" to="/about">About</Link>
        </div>
    )
}

export default Navigation