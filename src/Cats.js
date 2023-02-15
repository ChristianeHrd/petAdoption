import { useEffect, useState, useContext } from "react";
import { AuthPetContext } from './App.js';
import {Link} from 'react-router-dom';
import About from './components/About';
import PetDetails from "./PetDetails.js";

function Cats() {
    const [results, setResults] = useState([]);
    const accessToken = useContext(AuthPetContext);

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
        }
        fetchPets()
    }, [accessToken])

    return (
        <>
            {/* <h2>Pets</h2> */}
            {/* <p>{results}</p> */}
            {/* <h2>Breed: {results[1].breeds.primary}</h2> */}
            {/* <img alt='dogphoto' src={results[1].photos[0].medium}></img> */}
            {/* <img src={results[1].photos[0]}></img> */}
            
            {/* <h2>Hi I am {results[0].name}</h2>
            <h2>Status: {results[0].status}</h2>
            <h2>Gender: {results[0].gender}</h2>
            <h2>Type: {results[0].species}</h2>
            <h2>Age: {results[0].age}</h2> */}

             <div className="flex-container">
                {(results[0]) ? 
                results.filter(p => p.photos[0]).map(p =>(
                    <div>
                        <h4>Name: {p.name ? p.name : 'name not available'} </h4>
                        <h4>Age: {p.age ? p.age : 'age not available'} </h4>
                        <img className='petPhoto' alt={p.name} src={p.photos[0] ? p.photos[0].full : 'photo not available'}></img>
                        {/* <Link to="/petdetails" element={<About details={p}/>}>Get Details</Link> */}
                        <Link to="/petdetails" element={<PetDetails details={p}/>}>Get Details</Link>

                    </div>)) : null}
            </div>
        </> 
    )
}

export default Cats