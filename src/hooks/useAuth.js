import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const authContext = createContext();

export function ProvideAuth({ children }) {
  let auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = (email, password, cb) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      cb();
    });
  };

  const signUp = (email, password, cb) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      cb();
    });
  };

  return {
    user,
    isAuthenticating,
    signIn,
    signUp,
  };
}
