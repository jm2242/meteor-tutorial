import React from 'react';
import { Meteor } from 'meteor/meteor';
import SignInAndAddToWalletButton from './SignInAndAddToWalletButton';
import {

    useSearchParams,

  } from "react-router-dom"

const clientId = "337376404105-j62sn7l31p74ckrqr61a5cbo42l928jt.apps.googleusercontent.com";
const redirect_uri = "http://localhost:3000"

const CombinedButtonProvisioning = () => {

    const [queryParameters] = useSearchParams()


    //   onLoginSuccess = (credential) => {
    //     this.setState({ isLoading: true });
    //     Meteor.call("generateSaveLink", credential, (err, saveLinkUrl)=> {
    //       if (err) {
    //         console.log("Error: " + err);
    //       } else {
    //         console.log(saveLinkUrl);
    //         this.setState({ credential, saveLinkUrl });
    //         this.setState({ hasLoggedIn: true });
    //       }
    //       this.setState({ isLoading: false });
    //     });
    //   }
    const signInUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=openid%20email%20profile&nonce=enthusiastically_entrophic&response_type=id_token`
    console.log(queryParameters);
    const shouldRenderSignInButton = !Boolean(queryParameters.get("id_token"));
    return (
    <div>
        <h3>Sign in and Add to Wallet (not done yet)</h3>
        <SignInAndAddToWalletButton signInUrl={signInUrl}  />
        {/* {this.state.isLoading && <div>Loading...</div>} */}
        </div>
    )
}

export default CombinedButtonProvisioning