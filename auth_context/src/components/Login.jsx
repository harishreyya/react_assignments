import {useContext} from "react"
import {  CreateAuthContext } from "../context/AuthContext";


export const Login = () => {
    const { auth, setAuth, token, setToken } = useContext(CreateAuthContext)
    const CheckLogin = () => {
        setAuth(auth === false ? true : false)
        if (auth === false) {
            setToken(12345)
        } else {
            setToken(null)
        }
        
    } 
    return (
        <div>
            < button onClick={() => { CheckLogin(); }}> {auth ? 'Logout' : 'Login'}</button >
            <p>Token:{token === 12345 ? '12345' :null}</p>
        </div>
      
    )
 }
 