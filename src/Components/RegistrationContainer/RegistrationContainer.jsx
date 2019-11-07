import React, { useState, useEffect } from 'react';
import LoginStore from "../../stores/login.js"; 
function RegistrationContainer() {
  const [count, setCount] = useState(0);

 
  useEffect(() => {
   alert("registration");
  },[]);

  return (
    <div>
     RegistrationContainer
     <br/>
     {LoginStore.data.isLogged ? "true" : "false"}
    </div>
  );
}
export default RegistrationContainer;