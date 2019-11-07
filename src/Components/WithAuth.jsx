import React from 'react';
import LoginStore from "./../stores/login.js";
function WithAuth(WrappedComponent, selectData) {
  
    return class extends React.Component {
      constructor(props) {
       
        super(props);
       
        this.state = {
          data: null
        };
      }
  
      componentDidMount() {
        console.log(this.props);
       
      }
  
      componentWillUnmount() {
       
      }
  
      
  
      render() {
      
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }
  export default WithAuth;