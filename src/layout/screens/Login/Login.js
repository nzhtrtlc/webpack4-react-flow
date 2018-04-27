import React from 'react'
import { fakeAuth } from 'Helper/fakeAuth'


class Login extends React.Component {

   componentDidMount(){
      console.log('Mount oldu');
   }

   state = {
      redirectToReferer: false
   }

   login = () => {
      fakeAuth.authenticate(() => {
         this.setState({
            redirectToReferer: true
         })
      });
   }


   render() {
      const { redirectToReferer } = this.state;
      return(
         <div>
            <p>You must log in to view this page</p>
            <button onClick={this.login}>Login</button>
         </div>
      )
   }
}

export default Login