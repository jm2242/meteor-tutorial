import React from 'react';
import { Meteor } from 'meteor/meteor';
import SignInAndAddToWalletButton from './SignInAndAddToWalletButton';

const clientId = "337376404105-j62sn7l31p74ckrqr61a5cbo42l928jt.apps.googleusercontent.com";
const redirect_uri = `${location.protocol}//${location.host}/addtowallet`

const parseIdToken = () => {
    const parsedHash = new URLSearchParams(location.hash.substring(1));
    return parsedHash.get("id_token");
}

const CombinedButtonProvisioning = () => {

    const signInUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=openid%20email%20profile&nonce=enthusiastically_entrophic&response_type=id_token`
    return (
    <div>
        <h3>Sign in and Add to Wallet</h3>
        <SignInAndAddToWalletButton signInUrl={signInUrl}  />
        {/* {this.state.isLoading && <div>Loading...</div>} */}
        </div>
    )
}

export default CombinedButtonProvisioning