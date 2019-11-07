import React from "react";
import {
 
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function PrivateRoute({ children,loggedIn,Redirect, ...rest }) {
// alert(path);
    return (
      <Route
        {...rest}
        render={ 
          ({ location }) =>
          loggedIn ? (
            children
          ) : (
            <Redirect
              to={Redirect}
            />
          )
        }
       
      />
    );
  }
  export default PrivateRoute;