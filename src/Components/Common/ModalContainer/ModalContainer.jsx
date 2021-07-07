import React, {useState,useEffect} from "react"; 
import "./modalContainer.css";
import "./diagramPercentage.css";
import pointResultStore from "./../../../stores/point_result";


function ModalContainer(props) {
    const [state, setState] = useState(props.modalState);

  
    

    useEffect( () => {
        setState(props.modalState);
       
       
        
     },[]); 

     useEffect( () => {
        setState(props.modalState);
       
        
     },[props.modalState]); 

     

    return (
        <div id="modal-wrapper" className={props.modalState?"show":""}>
        <div id="modal-container">
            <div className="modal-content">
                <button className="close" onClick={props.actionCloseModal}>X</button>
                ModalContainer<br/>
              
                <br/>
                result: {pointResultStore.data.result} <br/>
                percents: {pointResultStore.data.percentage}%
                <div className="diagram" style={{  
                    backgroundImage: "url(" + "http://localhost:3000/images/diagram_percentage/"+Math.floor(pointResultStore.data.percentage / 10)+".png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}><br/>
                      
                    {/* <img src="images/diagram_percentage/0.png" alt="" /> */}
                    <div className="point-container">
                        <div className="point">
                           
                            {pointResultStore.data.result} 
                        </div>
                    
                    </div>
                </div>
               
            </div>

           
          
        </div>
          <div className="overflow"></div>
        </div>
    );
}

export default ModalContainer;