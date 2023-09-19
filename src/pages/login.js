import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../api/firabase";
import AuthForm from './components/organisms/AuthForm';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  },);

  return (
    <>
      <AuthForm />
    </>
  );
};

export default Login;
