import React, { useState, useEffect } from 'react';

import {
  Router,
  Link,
 
} from "react-router-dom";

import LoginStore from "../../stores/login.js"; 
import Dispatcher  from '../../stores/dispatcher.js';

import './sidebar.css';
function SideBar(props) {
  const [show, setShow] = useState(false);

 
  useEffect(() => {
  
  setShow(props.show);
  

  },[]);

  useEffect(() => {
  
    setShow(props.show);
    
  
    },[props.show]);

  function logout(){
   
   
    Dispatcher.dispatch ({ 
        actionType: 'DELETE_LOGIN_DATA' , 
      
    });
   
  }

  return (
   <div id="sidebar" className={show?"show":""}>
    
       <div className="sidebar-menu">  
       <button onClick={props.action}>X</button>
      <br/>
       <Link to="/" onClick={props.action}>Home</Link><br/>
       <Link to="/registration" onClick={props.action}>Registrazione</Link><br/>
       <Link to="/logout" onClick={logout}>logout</Link>
     
       </div>
      
     
       <div className="sidebar-overflow" onClick={props.action} ></div>
  
    </div>
  );
}
export default SideBar;