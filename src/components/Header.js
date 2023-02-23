import AuthNav from "./Auth/AuthNav";
import TopNav from "./TopNav";

function Header() {
    return (
        <header>
            <div className="header">
                <img className='petLogo' src="/petLogo2.jpg" ></img>
               <div className="siteTittle">Adopt a Friend</div>
               
                <AuthNav />
            </div>
        </header >
    )
}

export default Header;