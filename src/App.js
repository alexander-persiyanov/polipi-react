import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React,{ useState, useEffect }  from 'react';
import LoginContainer from './Components/LoginContainer/LoginContainer';
import HomeContainer from './Components/HomeContainer/HomeContainer';
import RegistrationContainer from './Components/RegistrationContainer/RegistrationContainer';
import LoginStore from "./stores/login.js";
import Dispatcher  from './stores/dispatcher.js';
import WithAuth from "./Components/WithAuth"; 
import NavigationContainer from "./Components/NavigationContainer/NavigationContainer";
import ModalContainer from './Components/Common/ModalContainer/ModalContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './App.css';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn:localStorage.getItem('logged_loc_storage'),
      result: null,
      modalState:false,
    }
  }
  

  componentDidMount(){
    LoginStore.on('logged-loaded',this.setLoginState.bind(this));
    LoginStore.on('delete-login',(loginState)=>{this.deleteLoginState(loginState)});
    
  }
  setLoginState(state){
  
    this.setState({loggedIn:localStorage.getItem('logged_loc_storage')})
  }
  deleteLoginState(state){
   
    this.setState({loggedIn:state})
  }
 logout(){
  
    Dispatcher.dispatch ({ 
        actionType: 'DELETE_LOGIN_DATA' , 
      
    });
   
  }

//callback per aprire e chiudere modale
handlerModal(){
  this.setState({modalState:!this.state.modalState});
 
  
}

handleRisultato = (result) =>{ 


  // this.setState({result:result});

  this.handlerModal()
}

render() {
  return (
    <div className="App">
   
      <ModalContainer modalState={this.state.modalState}   actionCloseModal={()=>{this.handlerModal()}}/>

      {/* <div>Status login:{this.state.loggedIn ?"true":"false"}</div><br/><br/> */}
      
      <div className="router-navigation">
        <Router>
        {this.state.loggedIn ?  <NavigationContainer></NavigationContainer>:''}
       
        {this.state.loggedIn ?  <Link to="/logout" onClick={()=>{this.logout()}}>logout</Link>:''}
        {/* <Link to="/">home</Link> */}
          
        {/* <Link to="/login">Login</Link> */}
        {/* <br/>
        <button onClick={()=>{localStorage.clear()}}>Log out</button>
        <br/>
        <br/> */}
      
          <Switch>
        
          <Route path="/registration">
            <RegistrationContainer/>
          </Route>
        
        
          <Route path="/login">
          {this.state.loggedIn ? <Redirect to="/" /> :<LoginContainer />}
          </Route>
          <Route path="/">
            {this.state.loggedIn ? <HomeContainer actionModal={this.handleRisultato}/>  :<Redirect to="/login" /> }
          </Route>
         
            </Switch>
      </Router>
     </div>
    <br/>
   


   

    </div>
  );
  }
}


export default  WithAuth(App,(obj,props)=>{return props});