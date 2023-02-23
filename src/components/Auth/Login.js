import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div className='loginPage'>
        <div className="loginform">
        <h3>Login In</h3>
            <form className='formItems'>
                <span className='formLabel'>Email: </span><input type="text" ref={userRef}></input><br/>
                <span className='formLabel'>Password: </span><input type="password" ref={pwdRef}></input> <br/>
                <button onClick={onAttemptLogin}>Log In</button>
            </form>
        </div>
        </div>
    )
}


export default Login