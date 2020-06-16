import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import M from 'materialize-css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onUserLogin,TokenAuth } from '../redux/actions/loginActions';
import LoginForm from './loginForm';
import Footer from './footer';
import Message from './requestFail';
import SideContainer from './sideContainer';
import SocialAuth from './socialAuth';

toast.configure();

export default ()=>{

    const loginStore = useSelector( store=> store.loginData );
    const dispatch = useDispatch();

    useEffect( ()=>{
        M.AutoInit();
        if(loginStore.error){
            toast.error( <Message />,{
                position: toast.POSITION.TOP_CENTER,
                toastId: 'loginFetchError',
            });
        }
        
        if(loginStore.userInfo.status === 200){
            const token = JSON.stringify(loginStore.userInfo.data.access_token);
            localStorage.setItem('token', token);
            window.location.assign('/dashboard');
        } 

        let token;
        const url  = window.location.search;
        const arr = url.split(""); 
        arr.splice(0,7); 
        
        if(arr.length){
            token = arr.join("")
        }

        if(localStorage.getItem("token")){
            token = localStorage.getItem("token");
        }
        

        if(token) return tokenAuthenticator(token)
    },[]);
    
    const tokenAuthenticator = (token) => { dispatch(TokenAuth(token)); }
    const onFormSubmit = data => { dispatch(onUserLogin(data));  }

    const loginsideContainerTitle = 'Welcome Back to BareFoot Nomad';
    const loginsideContainerSubtitle  = (
            <div>
                <p>
                     If you have not created an account please sign up to use our services
                </p>
                    <br />

                <h4
                    onClick={ ()=> window.location.assign('/signup') }
                >
                    sign up
                </h4>
            </div>
    );
    
    return (
        <div className='loginContainer'>
        <div className='main'>
            <SideContainer title={ loginsideContainerTitle } subtitle ={ loginsideContainerSubtitle  }/>
                
                <div className='formContainer'>

                    <h1> Sign in to BareFoot Nomad </h1>

                        <LoginForm 
                            onSubmit={ onFormSubmit } 
                            userInfo = { loginStore.userInfo } 
                            isLoading = {loginStore.loading}
                            testdata='loginForm' 
                        />
                            <br/>
                        <SocialAuth />
                    
                </div>
        </div>

        <Footer />


    </div>
    );
}
