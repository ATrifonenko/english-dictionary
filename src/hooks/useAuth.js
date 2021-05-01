import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(false);

  const signIn = (login, password) => {
    console.log(login, password);
  };

  const signUp = (login, password) => {
    console.log(login, password);
  };

  return {
    user,
    signIn,
    signUp,
  };
}
