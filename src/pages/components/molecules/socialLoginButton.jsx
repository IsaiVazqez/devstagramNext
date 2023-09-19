import AuthButton from "../atoms/authBottom";
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

import firebase from "firebase/app";

import { auth } from "../../../api/firabase";


const SocialLoginButtons = () => {
    const signInWithGoogle = () => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
    
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log('Usuario autenticado:', user);
        })
        .catch((error) => {
          console.error('Ocurrió un error durante la autenticación', error);
        });
    };
  
    const signInWithFacebook = () => {

      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      provider.addScope('email');
      provider.addScope('user_birthday');
      
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;      
            console.log("Usuario: ", user);
            console.log("Token de acceso: ", accessToken);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Código de error: ", errorCode);
            console.log("Mensaje de error: ", errorMessage);
          });
      };
  
    const signInWithTwitter = () => {
      const provider = new firebase.auth.TwitterAuthProvider();
      auth.signInWithPopup(provider);
    };
  
    return (
        <div>

        <div className="flex items-center justify-center">
          <AuthButton platform="Google" onClick={signInWithGoogle} bgColor="bg-red-500" hoverColor="hover:bg-red-600" />
          <AuthButton platform="Facebook" onClick={signInWithFacebook} bgColor="bg-blue-500" hoverColor="hover:bg-blue-600" />
          <AuthButton platform="Twitter" onClick={signInWithTwitter} bgColor="bg-blue-400" hoverColor="hover:bg-blue-500" />
        </div>
        </div>
      );
  };
  
  export default SocialLoginButtons;

