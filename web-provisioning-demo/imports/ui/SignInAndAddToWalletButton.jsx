import React from 'react';

const SignInAndAddToWalletButton = ({signInUrl}) =>(
    <div>
        <a className="pure-button" href={`${signInUrl}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Add_to_Google_Wallet_badge.svg"/>
        </a>
        <div>
        {/* {saveLinkUrl && `Save Link from server: ${saveLinkUrl}`} */}
        </div>
    </div>

);
export default SignInAndAddToWalletButton

