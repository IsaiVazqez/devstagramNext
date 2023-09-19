import { useEffect, useState, } from 'react';
import {auth} from '../api/firabase';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router'


const Index = () => {
  const [user, setUser] = useState(null);
  const router = useRouter()

  useEffect(() => {

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      router.push('/login');
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
  };

  return (
    user ? (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Bienvenido, {user.displayName}</h1>
        <img className="rounded-full h-24 w-24 mb-4" src={user.photoURL} alt={`${user.displayName}'s profile picture`} />
        <button 
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">Redirigiendo al inicio de sesión...</h1>
      </div>
    )
  );
};

export default Index