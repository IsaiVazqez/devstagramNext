import AuthButton from "../atoms/authBottom";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

import firebase from "firebase/app";

import { auth } from "../../../api/firabase";

const provider = new FacebookAuthProvider();

// Añadir permisos adicionales si es necesario
provider.addScope('user_birthday');

// Parámetros personalizados
provider.setCustomParameters({
  'display': 'popup'
});



const SocialLoginButtons = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
  
    const signInWithFacebook = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // La información del usuario que ha iniciado sesión
            const user = result.user;
      
            // Esto te proporciona un token de acceso de Facebook.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
      
            console.log("Usuario: ", user);
            console.log("Token de acceso: ", accessToken);
          })
          .catch((error) => {
            // Manejar errores aquí
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

