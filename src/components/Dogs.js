import { useEffect, useState, useContext } from "react";
import { AuthPetContext } from '../App.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from "react-router-dom";

function Dogs() {
    const [results, setResults] = useState([]);
    const accessToken = useContext(AuthPetContext);

    useEffect(() => {

        async function fetchPets() {
            const petResults = await fetch('https://api.petfinder.com/v2/animals?type=dog&limit=100', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            });
            const json_data = await petResults.json();
            console.log(json_data);
            setResults(json_data.animals);
        }
        fetchPets()
    }, [accessToken])

    const pawPrint = {
        margin: '0 5px 0 5px' 
    }

    return (
        <>

            <div className="flex-container">
                {(results[0]) ?
                    results.filter(p => p.photos[0]).map(p => (
                        <div>
                            {/* <h4>Name: {p.name ? p.name : 'name not available'} </h4> */}
                            {/* <h4>Age: {p.age ? p.age : 'age not available'} </h4> */}
                            {/* <img className='petPhoto' alt={p.name} src={p.photos[0] ? p.photos[0].full : 'photo not available'}></img> */}
                            {
                                <div class="card" >
                                    <div class="card-image" >
                                        <img className='petPhoto' src={p.photos[0].full} />
                                        {/* <span class="card-title">Card Title</span> */}
                                    </div>
                                    <div class="card-content" >
                                        <p className="petInfo"> {p.breeds.primary ? p.breeds.primary : null} <br/>
                                        <span style={pawPrint}> 🐾 </span> {p.gender}
                                        <span style={pawPrint}> 🐾 </span> {p.age}
                                        <span style={pawPrint}> 🐾 </span> {p.size}</p>
                                    </div>
                                    <div class="card-action blue-grey darken-1" >
                                        {/* <a href="#">This is a link</a> */}
                                        <p className="meetFont"><Link to='/petdetails' state={{ details: p }}> Meet {p.name}</Link></p>
                                    </div>
                                </div>

                            }
                        </div>)) : null}
            </div>
        </>
    )
}

export default Dogs


