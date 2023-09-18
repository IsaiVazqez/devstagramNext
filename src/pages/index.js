import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../api/firabase';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Si el usuario está autenticado, quédate en la página de inicio
        // Aquí puedes usar 'user'
      } else {
        // Si el usuario no está autenticado, redirige a la página de inicio de sesión
        router.push('/login');
      }
    });

    // Cancela la suscripción al salir
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Página de inicio</h1>
      {user && (
        <div>
          <h2>Bienvenido, {user.displayName}</h2>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default Index