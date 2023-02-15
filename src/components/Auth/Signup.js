import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div className="loginform">
            <h3>Sign Up</h3>
            <form>
                <input type="text" ref={userRef}></input><br/>
                <input type="text" ref={pwdRef}></input><br/>
                <button onClick={onAttemptSignup}>Signup</button>
            </form>
        </div>
    )
}


export default Signup