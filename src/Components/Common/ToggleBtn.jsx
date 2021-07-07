import React, {useState,useEffect} from "react"; 

function ToggleBtn(props) {
    const [toggleState, setToggleState] = useState(null);
    const [text, setText] = useState("Text");
   
    useEffect( () => {
    
       
     },[]); 

    return (
        <button>{text}</button>
    );
}

export default ToggleBtn;