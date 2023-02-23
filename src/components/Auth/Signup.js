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
        <div className='loginPage'>
        <div className="loginform">
            <h3>Sign Up</h3>
            <form className='formItems'>
            <span className='formLabel'>Email: </span><input type="text" ref={userRef}></input><br/>
            <span className='formLabel'>Password:</span><input type="text" ref={pwdRef}></input> <br/>
                <button onClick={onAttemptSignup}>Sign Up</button>
            </form>
        </div>
        </div>
    )
}


export default Signup