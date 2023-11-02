import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import AddToWallet from './AddToWallet.jsx';
import { SignInWithGoogle } from './SignInWithGoogle.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { useState } from 'react';

const clientId = "337376404105-j62sn7l31p74ckrqr61a5cbo42l928jt.apps.googleusercontent.com";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hasLoggedIn: false, credential: "", saveLinkUrl: ""};
  }

  onLoginSuccess = (credential) => {
    Meteor.call("generateSaveLink", credential, (err, saveLinkUrl)=> {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log(saveLinkUrl);
        this.setState({ credential, saveLinkUrl });
        this.setState({ hasLoggedIn: true });
      }
    });
  }

  render() {
  return <div>
      <h1>Hotel Mares</h1>
      <h2>Web Provisioning Demo</h2>

      <h3>Sign in to Add to Wallet</h3>
      <GoogleOAuthProvider clientId={clientId}>
            <SignInWithGoogle onSuccess={this.onLoginSuccess}  />
          </GoogleOAuthProvider>

      {this.state.hasLoggedIn && <AddToWallet saveLinkUrl={this.state.saveLinkUrl || ""} />}
      

      {/* <Hello/> */}
      {/* <Info/> */}
    </div>
  }
}
