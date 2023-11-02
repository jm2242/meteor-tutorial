import React from 'react';
import { Meteor } from 'meteor/meteor';
import AddToWallet from './AddToWallet.jsx';
import { SignInWithGoogle } from './SignInWithGoogle.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "337376404105-j62sn7l31p74ckrqr61a5cbo42l928jt.apps.googleusercontent.com";

export default class SeparateButtonProvisioning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasLoggedIn: false, credential: "", saveLinkUrl: "", isLoading: false};
      }
    
      onLoginSuccess = (credential) => {
        this.setState({ isLoading: true });
        Meteor.call("generateSaveLink", credential, (err, saveLinkUrl)=> {
          if (err) {
            console.log("Error: " + err);
          } else {
            console.log(saveLinkUrl);
            this.setState({ credential, saveLinkUrl });
            this.setState({ hasLoggedIn: true });
          }
          this.setState({ isLoading: false });
        });
      }
    
      render() {
      return <div>
          {!this.state.hasLoggedIn && (
              <div><h3>Sign in to Add to Wallet</h3>
                <GoogleOAuthProvider clientId={clientId}>
                  <SignInWithGoogle onSuccess={this.onLoginSuccess}  />
                </GoogleOAuthProvider>
              </div>
            )
          }
    
          {this.state.hasLoggedIn && <AddToWallet saveLinkUrl={this.state.saveLinkUrl || ""} />}
          {this.state.isLoading && <div>Loading...</div>}
        </div>
      }
}