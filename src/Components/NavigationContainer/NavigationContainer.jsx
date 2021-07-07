
import React, { useState, useEffect } from 'react';
import SideBar from "./../SideBarContainer/SideBar";
import './Nav.css';
function NavigationContainer() {
  const [showState, setShowState] = useState(false);

 
  useEffect(() => {
  
  },[]);
function  handleToggleShow (){
  let r = setShowState(!showState);
  
    return r;
   
}
  

  return (
    <div className="nav-container">
     NavigationContainer<br/>
    
    <button onClick={  handleToggleShow }>menu</button><br/>
    <SideBar show={showState} action={()=>{handleToggleShow()}}></SideBar>
               
    </div>
  );
}
export default NavigationContainer;