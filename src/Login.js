import './Login.css'
import Button from '@material-ui/core/Button';
import { auth,provider } from './firebase';
import {login} from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
 const dispatch = useDispatch();
   const signIn=()=>{
     auth.signInWithPopup(provider)
     .then(({user}) =>{
         dispatch(
             login({
                 displayName: user.displayName,
                 email: user.email,
                 photoUrl: user.photoURL,
             })
         )
     })
     .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt=""/>
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>


            </div>
        </div>
    )
}

export default Login
