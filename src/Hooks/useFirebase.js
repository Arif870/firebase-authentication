import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseInitialize from "../Firebase/FirebaseInitialize";

firebaseInitialize();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  // google sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  // facebook signin
  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  //Logout setup
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return { user, error, googleSignIn, facebookSignIn, logOut };
}
