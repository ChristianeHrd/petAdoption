
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
    const [countriesJSON, setCountriesJSON] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(result => result.json())
            .then(json => setCountriesJSON(json))
    });

    return (
        <main>
           
            <Outlet />  {/* need <Outlet/> to display sublinks  */}
            {countriesJSON.sort().map(x => <div><Link>{x.name.common}</Link></div>)}
        </main>
    )
}


export default Countries;