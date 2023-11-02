import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';

export const SignInWithGoogle = (props) => {
  const isLoading = useSubscribe('links');

  if(isLoading()) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleLogin 
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
          props.onSuccess(credentialResponse.credential);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
);
};
