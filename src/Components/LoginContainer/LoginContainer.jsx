import React, {useState,useEffect,useRef} from "react"; 
import FieldComponent from './FieldComponent/FieldComponent';

import LoginStore from "../../stores/login.js"; 
import Dispatcher  from '../../stores/dispatcher.js';

import {Link} from "react-router-dom";

function LoginContainer(props) {
    const [login, setLogin] = useState(false);
    const [loginFieldValue, setLoginFieldValue] = useState(LoginStore.data.fieldLoginValue);
    const [error, setError] = useState(null);
    const refLoginField = useRef();
    useEffect( () => {
        // console.log(LoginStore.data.isLogged);
       
        
        LoginStore.on('logged-loaded',setLoginState);
        LoginStore.on('delete-login',()=>{clearLoginFieldValue()});
        Dispatcher.dispatch ({ 
            actionType: 'SET_LOGIN_SESSION' , 
           
        });

       
       
     },[]); 

     function setLoginState(state){
       
         setLogin(state);
         
        
     }
     function clearLoginFieldValue(){
         setLoginFieldValue("");
     }

     function dispatchLogin(log,psw){
        Dispatcher.dispatch ({ 
            actionType: 'SET_LOGIN_DATA' , 
            data: {
                // login:'hobbit',
                login:loginFieldValue,
                password:'Manuel73',
            },
        });
     }
     function dispatchFieldLoginValue(loginValue){
        Dispatcher.dispatch ({ 
            actionType: 'SET_LOGIN_FIELD_VALUE' , 
            data: {
                value:loginValue,
                
            },
        });
     }

    

   

  
    return (
        <div className="login-container">
            <div className="login-container">login-container</div>

           
            {/* <FieldComponent type="text" name="username"/> */}
            <div className="field-container">
                <input 
                    ref={refLoginField}
                    type="text"
                    name="login" 
                    value={ LoginStore.data.fieldLoginValue.length>0 ? LoginStore.data.fieldLoginValue:""}
                    onChange={(e)=>{
                    
                        setLoginFieldValue(e.target.value);
                        dispatchFieldLoginValue(e.target.value);
                      
                    }}
                />
            </div>
            {/* <button onClick={()=>{console.log(refLoginField.current.value)}}>dfd</button> */}

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