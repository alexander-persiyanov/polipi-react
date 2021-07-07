import React, {useState,useEffect, useRef} from "react"; 
import Coverflow from 'react-coverflow';
import Dispatcher  from '../../stores/dispatcher.js';
import PointResultStore from "../../stores/point_result.js"; 
import { StyleRoot } from 'radium';



function HomeContainer(props) {
    const [chToggle, setChToggle] = useState(false);
    
    const refContainer1 = useRef();
    const refContainer2 = useRef();
    const pointslist1 = [3,3,1,2,0];
    const pointslist2 = [4,2,1,1];
    

    useEffect( () => {
       
        
     },[]); 

     window.test = function(){
        console.log(refContainer1);
     }
     window.test2 = function(){
        console.log(refContainer2);
    }

    const getSumPoints = ()=>{
        let point1 = pointslist1[refContainer1.current.state.current];
        let point2 = pointslist2[refContainer2.current.state.current];
        let result = point1 +point2;
        let chPoint = null;
        if(chToggle){
            chPoint = 1;
            result = result +chPoint;
        }
        //callback che passato dal home 
        // props.actionModal(result);
        props.actionModal();

        Dispatcher.dispatch ({ 
            actionType: 'SET_RESULT_POINT' , 
            data:{
                point1:pointslist1[refContainer1.current.state.current],
                point2:pointslist2[refContainer2.current.state.current],
                chPoint:chPoint,
                result:result,
            },
           
        });
        
       
       

    }

    function  addPoint(){
        let r =  setChToggle(!chToggle);
        
       
         
    }
    

    return (
        <div className="home-container">
         
            <div style={{margin: 10+'px',}}>
            Home CONTENT!!!
            </div>

            <StyleRoot>
                <Coverflow
               ref={refContainer1}
                displayQuantityOfSide={2}
                navigation
                infiniteScroll
                enableHeading={false}
                enableScroll = {false}
                clickable={false}
                
                media={{
                    '@media (max-width: 900px)': {
                    width: '100%',
                    height: '300px'
                    },
                    '@media (min-width: 900px)': {
                    width: '100%',
                    height: '300px'
                    }
                }}
                >
                <img src='images/slide1_allergia.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
                <img src='images/slide1_asa_asma.png' alt='Album two' data-action="http://passer.cc"/>
                <img src='images/slide1_asa_sensibile.png' alt='Album three' data-action="https://doce.cc/"/>
                <img src='images/slide1_asma.png' alt='Album four' data-action="http://tw.yahoo.com"/>
                <img src='images/slide1_clinica_negativa.png' alt='Album four' data-action="http://tw.yahoo.com"/>
               
                </Coverflow>
            </StyleRoot>

            <StyleRoot  >
                <Coverflow
                ref={refContainer2}
                displayQuantityOfSide={2}
                navigation
                infiniteScroll
                enableHeading={false}
                enableScroll = {false}
                clickable={false}
                
                media={{
                    '@media (max-width: 900px)': {
                    width: '100%',
                    height: '300px'
                    },
                    '@media (min-width: 900px)': {
                    width: '100%',
                    height: '300px'
                    }
                }}
                >
               
                <img src='images/slide2_eosinofili_mastociti.png' alt='Album four' data-action="http://tw.yahoo.com"/ >
              
                <img src='images/slide2_eosinofili.png' alt='Album four' data-action="http://tw.yahoo.com"/>
                <img src='images/slide2_mastociti.png' alt='Album four' data-action="http://tw.yahoo.com"/>
                <img src='images/slide2_neutrofili.png' alt='Album four' data-action="http://tw.yahoo.com"/>
                
                </Coverflow>
            </StyleRoot>
                <br/><br/>
                <label >aggiunge 1 punto</label>
              
                <input type="checkbox" defaultChecked = {chToggle} onClick={addPoint}/>
                <br/><br/>

                <button onClick={getSumPoints}>Resultato</button>
               

          
         
        </div>
    );
}

export default HomeContainer;