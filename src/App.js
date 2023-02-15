import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import { AuthProvider } from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import Pets from './Pets'
import Cats from './Cats'
import { createContext, useEffect, useState } from 'react'
import PetDetails from './PetDetails'
// import { SignInMethod } from 'firebase/auth'

// body: "grant_type=client_credentials&client_id=7mJAtEk3jGnD2imRkPG8ebaeREOSZgPHh4ZolCPX6TyzucQfFe&client_secret=5sYdCKxlBJQWPbH6TGmkSb0yGp66sqgbco2pwTns" ,
const petFinderKey = '7mJAtEk3jGnD2imRkPG8ebaeREOSZgPHh4ZolCPX6TyzucQfFe';
const petFinderSecret = '5sYdCKxlBJQWPbH6TGmkSb0yGp66sqgbco2pwTns';
const host = 'api.petfinder.com';
const grantType = 'client_credentials';
export const AuthPetContext = createContext(null);

function App() 
{
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {

    async function fetchAccessToken() 
    {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', petFinderKey);
      params.append('client_secret', petFinderSecret);

      const response = await fetch('https://api.petfinder.com/v2/oauth2/token',
        {
          method: 'POST',
          body: params,
        });

      const json_data = await response.json();
      const accessToken = json_data.access_token;
      // console.log('access-token? ' + accessToken)
      setAccessToken(accessToken);
    };

    fetchAccessToken();

  }, []);

  return (
    <div className="App">
      {/* <p>{accessToken}</p> */}
      <BrowserRouter>
        <AuthPetContext.Provider value={accessToken}>
          <AuthProvider>
            <Header />
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cats" element={<Cats />} />
              <Route path='/petdetails' element={<PetDetails />}></Route>
              <Route path="/pets" element={<Pets />} />
              <Route path="/countries" element={<Countries />}>
                <Route path="details/:countryname" element={<CountryDetails />} />
              </Route>

              <Route path="/admin" element={<ProtectedRoutes />}>
                <Route path="" element={<Admin />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>

          </AuthProvider>
        </AuthPetContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
