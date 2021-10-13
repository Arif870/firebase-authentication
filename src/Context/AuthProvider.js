import React from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = React.createContext();

export default function AuthProvider(props) {
  const allContext = useFirebase();

  return (
    <AuthContext.Provider value={allContext}>
      {props.children}
    </AuthContext.Provider>
  );
}
