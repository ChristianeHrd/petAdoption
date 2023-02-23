import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer class="page-footer" className="site-footer">
                    <div class="container ">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 >About</h5>
                                <p >We're all about getting homeless pets into homes.
                                    We help over 15,000 animal shelters, humane societies, SPCAs, pet rescue groups, and pet adoption agencies advertise their homeless pets to millions of adopters a month, all for free.</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 >Adopt or Get Involved</h5>
                                <ul>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">Donate</Link></a></li>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">Blog</Link></a></li>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">About Pet Adoption</Link></a></li>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">All About Dogs & Puppies</Link></a></li>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">All About Cats & Kittens</Link></a></li>
                                    <li><a class="grey-text " href="#!"><Link to="/underConstruction">Animal Shelters & Rescues</Link></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2023 Made with ❤ in Halifax
                        </div>
                    </div>
                </footer>
            </>
        )

    }
}

export default Footer
