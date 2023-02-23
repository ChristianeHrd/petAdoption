import { useEffect, useState, useContext } from "react";
import { AuthPetContext } from './App.js';
import { Link } from 'react-router-dom';
// import PetDetails from "./PetDetails.js";


function Cats() {
    const [results, setResults] = useState([]);
    const accessToken = useContext(AuthPetContext);

    //  const [color, setColor] = useState('')
    // setColor(Math.floor(Math.random() * 16777215).toString(16));

    function getBgColor(gender) 
    {
        let bgColor;

        if (gender === 'Female') 
        {
            bgColor = '#fff0f3'
        }
        else
        {
              bgColor = '#87CEFA'
            //bgColor = '#E1EBEE'
            // bgColor = 'caf0f8'
        }
        return bgColor;
    }

    useEffect(() => {
        // if (accessToken === null) return;

        async function fetchPets() {
            const petResults = await fetch('https://api.petfinder.com/v2/animals?type=cat&limit=100', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            });
            const json_data = await petResults.json();
            console.log(json_data);
            setResults(json_data.animals);
            // setColor(Math.floor(Math.random() * 16777215).toString(16));
        }
        fetchPets()
    }, [accessToken])

    return (
        <>
            <div className="flex-container">
                {(results[0]) ?
                    results.filter(p => p.photos[0]).map(p => (
                        <div className="petCard">
                            <div className="petInfoCard" style={{ backgroundColor: getBgColor(p.gender) }}>
                                {/* <p>Hi I'm {p.name ? p.name : 'name not available'} </p> */}
                                {p.description}
                                {/* Age: {p.age ? p.age : 'age not available'} <br />
                                Gender: {p.gender} */}
                              

                                <p><Link to='/petdetails' state={{ details: p }}>Get Details</Link></p>
                            </div>

                            <div className="petPhotoCard">
                                <img className='petPhoto' alt={p.name} src={p.photos[0] ? p.photos[0].medium : 'photo not available'}></img>
                            </div>

                        </div>)) : null}
            </div>
        </>
    )
}

export default Cats