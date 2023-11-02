import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import AddToWallet from './AddToWallet.jsx';
import { SignInWithGoogle } from './SignInWithGoogle.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "337376404105-j62sn7l31p74ckrqr61a5cbo42l928jt.apps.googleusercontent.com";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hasLoggedIn: false, credential: ""};
  }

  render() {
  return <div>
      <h1>Hotel Mares</h1>
      <h2>Web Provisioning Demo</h2>

      <h3>Sign in to Add to Wallet</h3>
      <GoogleOAuthProvider clientId={clientId}>
            <SignInWithGoogle onSuccess={(credential) => this.setState({ hasLoggedIn: true, credential }) }  />
          </GoogleOAuthProvider>

      {this.state.hasLoggedIn && <AddToWallet />}
      

      {/* <Hello/> */}
      {/* <Info/> */}
    </div>
  }
}
