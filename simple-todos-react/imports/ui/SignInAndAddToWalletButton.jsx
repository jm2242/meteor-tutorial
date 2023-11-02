import React from 'react';

const SignInAndAddToWalletButton = ({signInUrl}) =>(
    <div>
        <a className="pure-button" href={`${signInUrl}`}>
        <img src="https://drive.google.com/uc?export=view&id=1Ca1V_cZcYX32BSYUD6RLkYDVSxNVCBlh"/>
        </a>
        <div>
        {/* {saveLinkUrl && `Save Link from server: ${saveLinkUrl}`} */}
        </div>
    </div>

);
export default SignInAndAddToWalletButton

