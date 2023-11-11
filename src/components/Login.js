import React from 'react';
import "../css/login.css";
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { signin } from '../features/counter/useSlice';

function Login() {
    const dispatch=useDispatch();
    const login = ()=> {
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(signin({
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email
            }))
        }).catch(error=>{
            alert(error)
        })
    };
  return (
    <div className='loginwrapper'>
        <div className='login'>
            <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="loading..." />
        </div>
        <button className='gmail_login' onClick={login}>Login with Gmail</button>
        
    </div>
  )
}

export default Login