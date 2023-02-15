import AuthNav from "./Auth/AuthNav";


function Header()
{
    return(
        <header>
            <div className="header">
            Adopt a Friend
            <AuthNav/>
            </div>
        </header>
    )
}


export default Header;