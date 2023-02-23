import { useEffect, useState, useContext } from "react";
import { AuthPetContext } from './App.js';

function Pets() {
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

    return (
        <>
            {/* <h2>Pets</h2> */}
            {/* <p>{results}</p> */}
            {/* <h2>Breed: {results[1].breeds.primary}</h2> */}
            {/* <img alt='dogphoto' src={results[1].photos[0].medium}></img> */}
            {/* <img src={results[1].photos[0]}></img> */}

            <div className="flex-container">
                {(results[0]) ?
                    results.filter(p => p.photos[0]).map(p => (
                        <div>
                            <h4>Name: {p.name ? p.name : 'name not available'} </h4>
                            <h4>Age: {p.age ? p.age : 'age not available'} </h4>
                            <img className='petPhoto' alt={p.name} src={p.photos[0] ? p.photos[0].full : 'photo not available'}></img>
                            {/* <Link to="/catdetails" element={<About details={p}/>}>Get Details</Link> */}
                        </div>)) : null}
            </div>
        </>
    )
}

export default Pets