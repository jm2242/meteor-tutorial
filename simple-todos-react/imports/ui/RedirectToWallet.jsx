import React, { useEffect } from 'react';


const parseIdToken = () => {
    const parsedHash = new URLSearchParams(location.hash.substring(1));
    return parsedHash.get("id_token");
}

const RedirectToWallet = () => {
    useEffect(() => {
        const idToken = parseIdToken()
        Meteor.call("generateSaveLink", idToken, (err, saveLinkUrl)=> {
            if (err) {
              console.log("Error: " + err);
            } else {
              console.log(saveLinkUrl);
              window.location = saveLinkUrl
            //   this.setState({ credential, saveLinkUrl });
            //   this.setState({ hasLoggedIn: true });
            }
            // this.setState({ isLoading: false });
          });
    })
    return (
        <div>Redirecting to you to Wallet...</div>
    )
}

export default RedirectToWallet