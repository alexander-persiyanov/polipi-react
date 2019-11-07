import React, {useState,useEffect} from "react"; 
import FieldComponent from './FieldComponent/FieldComponent';

import LoginStore from "../../stores/login.js"; 
import Dispatcher  from '../../stores/dispatcher.js';

import {Link} from "react-router-dom";

function LoginContainer(props) {
    const [login, setLogin] = useState(false);
   
    useEffect( () => {
        // console.log(LoginStore.data.isLogged);
        
        LoginStore.on('logged-loaded',setLoginState);
        Dispatcher.dispatch ({ 
            actionType: 'SET_LOGIN_SESSION' , 
           
        });

       
       
     },[]); 

     function setLoginState(state){
       
         setLogin(state);
         
        
     }

     function dispatchLogin(log,psw){
        Dispatcher.dispatch ({ 
            actionType: 'SET_LOGIN_DATA' , 
            data: {
                login:'hobbit',
                password:'Manuel73',
            },
        });
     }

    

   

  
    return (
        <div className="login-container">
            <div className="login-container">login-container</div>

           
            <FieldComponent type="text" name="username"/>
            <FieldComponent type="password" name="password"/>
            <button onClick={()=>{dispatchLogin()}}>accedi</button>
            <br/>
            {/* <button onClick={()=>alert("registrati")}>registrati</button> */}
            <Link to="/registration">registrazione</Link>
            <br/>
            {login? 'hello' : 'login'}
           
          
          
            
         
        </div>
    );
}

export default LoginContainer;