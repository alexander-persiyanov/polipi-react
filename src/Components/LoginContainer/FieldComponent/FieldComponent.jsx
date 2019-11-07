import React, {useState,useEffect} from "react"; 





function FieldComponent(props) {
    const [data, setData] = useState(undefined);
   
    useEffect( () => {
       
       
     }); 

    return (
        <div className="field-container">
            <input type={props.type} name={props.name}/>
          
          
         
        </div>
    );
}

export default FieldComponent;