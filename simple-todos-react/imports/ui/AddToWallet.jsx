import React from 'react';

const AddToWallet = ({saveLinkUrl}) =>(
    <div>
        <h3>You've Signed in to Google, now you can Add to Wallet</h3>
        <a href={`${saveLinkUrl}`}>
        <img src="https://drive.google.com/uc?export=view&id=1mLDgrgMKN_-ac_E6cZfoRtA5m3cyHXzy"/>
        </a>
        <div>
        {saveLinkUrl && `Save Link from server: ${saveLinkUrl}`}
        </div>
    </div>

);

export default AddToWallet