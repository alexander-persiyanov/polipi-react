import React, {useState,useEffect} from "react"; 
import SlideBar from "./../SlideBarComponent/SlideBar";



function HomeContainer(props) {
    const [data, setData] = useState(undefined);
   
    useEffect( () => {
    
       
     },[]); 

    return (
        <div className="home-container">
        <SlideBar>
            
        </SlideBar>
           Home!!!
         
        </div>
    );
}

export default HomeContainer;