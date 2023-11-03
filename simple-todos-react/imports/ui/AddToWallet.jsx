import React from 'react';
import styled from 'styled-components'
import SaveToGooglePayButton from '@google-pay/save-button-react';


const AddToWallet = ({saveLinkUrl}) =>(
    <AddToWalletSection>
        <h3>You've Signed in to Google, now you can Add to Wallet</h3>
        <a href={`${saveLinkUrl}`}>
        <img src="https://drive.google.com/uc?export=view&id=1mLDgrgMKN_-ac_E6cZfoRtA5m3cyHXzy"/>
        </a>
        <div>
        {saveLinkUrl && `Save Link from server: ${saveLinkUrl}`}
        </div>
    </AddToWalletSection>
    
    // This component currently only works for Valuables:
    // <div>
    //     {saveLinkUrl && <SaveToGooglePayButton jwt={saveLinkUrl} />}

    // </div>

);

const AddToWalletSection = styled.div`
    word-wrap: break-word;
`

export default AddToWallet