import AuthNav from "./Auth/AuthNav";

function Header() 
{
    return (
        <header>
            <div className="header">
                <img className='petLogo' alt="pet-logo" src="./petLogo2.jpg" ></img>
               <div className="siteTittle">Adopt a Friend</div>
                <AuthNav />
            </div>
        </header >
    )
}

export default Header;