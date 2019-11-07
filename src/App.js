import React,{ useState, useEffect }  from 'react';
import LoginContainer from './Components/LoginContainer/LoginContainer';
import HomeContainer from './Components/HomeContainer/HomeContainer';
import RegistrationContainer from './Components/RegistrationContainer/RegistrationContainer';
import LoginStore from "./stores/login.js";
import WithAuth from "./Components/WithAuth"; 

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
    }
  }
  

  componentDidMount(){
    LoginStore.on('logged-loaded',this.setLoginState.bind(this));
    
  }
  setLoginState(state){
  
    this.setState({loggedIn:localStorage.getItem('logged_loc_storage')})
  }

//   PrivateRoute(props) {
    
//     return (
//       <Route
      
       
//         render={({ location }) =>
//           this.state.loggedIn ? (
//             props.children
//           ) : (
//             <Redirect to={"/login"}/>
//           )
//         }
//       />
//     );
//   }
//  PrivateRouteLogin(props) {
    
//     return (
//       <Route
      
       
//         render={({ location }) =>
//           this.state.loggedIn ? (
//             <Redirect to={"/"}/>
         
//           ) : (
//             props.children
//           )
//         }
//       />
//     );
//   };
  
render() {
  return (
    <div className="App">
      <div>Status login:{this.state.loggedIn ?"true":"false"}</div><br/><br/>
      <Router>
      <Link to="/">home</Link>
        <br/>
      <Link to="/login">Login</Link>
      <br/>
      <button onClick={()=>{localStorage.clear()}}>Log out</button>
      <br/>
      <br/>
     
        <Switch>
       
        <Route path="/registration">
          <RegistrationContainer/>
        </Route>
       
       
        <Route path="/login">
        {this.state.loggedIn ? <Redirect to="/" /> :<LoginContainer />}
        </Route>
        <Route path="/">
              {this.state.loggedIn ? <HomeContainer/>  :<Redirect to="/login" /> }
        </Route>
      
          </Switch>
    </Router>
    <br/>
   


   

    </div>
  );
  }
}


export default  WithAuth(App,(obj,props)=>{return props});