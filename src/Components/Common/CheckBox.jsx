import React, {useState,useEffect} from "react"; 




function CheckBox(props) {
    const [chState, setChState] = useState(false);

  
    

    useEffect( () => {
        
        
     },[]); 

     

    return (
        <input type="checkbox" defaultChecked = {chState ? "checked" :""} onClick={()=>{setChState(!chState)}}/>
    );
}

export default CheckBox;