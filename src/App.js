import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import { AuthProvider } from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import Header from './components/Header'
import Home from './components/Home'
import Cats from './components/Cats'
import Dogs from './components/Dogs'
import PetDetails from './components/PetDetails'
import Footer from './components/Footer'
import UnderConstruction from './components/UnderConstruction'
import ScrollToTop from './components/ScrollToTop'

// body: "grant_type=client_credentials&client_id=7mJAtEk3jGnD2imRkPG8ebaeREOSZgPHh4ZolCPX6TyzucQfFe&client_secret=5sYdCKxlBJQWPbH6TGmkSb0yGp66sqgbco2pwTns" ,
const petFinderKey = '7mJAtEk3jGnD2imRkPG8ebaeREOSZgPHh4ZolCPX6TyzucQfFe';
const petFinderSecret = '5sYdCKxlBJQWPbH6TGmkSb0yGp66sqgbco2pwTns';
const host = 'api.petfinder.com';
const grantType = 'client_credentials';
export const AuthPetContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    async function fetchAccessToken() {
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
      setAccessToken(accessToken);
    };

    fetchAccessToken();

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthPetContext.Provider value={accessToken}>
          <AuthProvider>
            <Header />
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cats" element={<Cats />} />
              <Route path="/dogs" element={<Dogs />} />
              <Route path='/petdetails' element={<PetDetails />} />
              <Route path="/underconstruction" element={<UnderConstruction />} />
              <Route path="/admin" element={<ProtectedRoutes />}>
                <Route path="" element={<Admin />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </AuthPetContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
