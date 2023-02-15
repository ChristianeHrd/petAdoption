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
        <h3>Login</h3>
            <form className='formItems'>
                <span className='formLabel'>Email: <input type="text" ref={userRef}></input></span><br/>
                <span className='formLabel'>Password: <input type="password" ref={pwdRef}></input> </span><br/>
                <button onClick={onAttemptLogin}>Login</button>
            </form>
        </div>
        </div>
    )
}


export default Login