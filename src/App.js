import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import firebaseConfigration from "./Firebase/Firebase-initialize";
import { useState } from "react";

firebaseConfigration();

const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const auth = getAuth();
function App() {
  const [user, setuser] = useState({});

  let googleSigninHandler = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      let { displayName, email, photoURL } = result.user;

      let loggedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
      };

      setuser(loggedInUser);
    });
  };

  let githubSignInHandlar = () => {
    signInWithPopup(auth, GithubProvider).then(result => {
      const { displayName, photoURL, email } = result.user;
      let userLoggedIn = {
        name: displayName,
        photo: photoURL,
        email: email,
      };
      setuser(userLoggedIn);
    });
  };

  let signOutHandlar = () => {
    signOut(auth).then(() => {
      setuser({});
    });
  };

  return (
    <div className="App">
      {!user.name ? (
        <div>
          <button onClick={googleSigninHandler}>Google Sign in</button>
          <button onClick={githubSignInHandlar}>Github Sign in</button>
        </div>
      ) : (
        <button onClick={signOutHandlar}>SignOut</button>
      )}

      {user.name && (
        <div>
          <h1>Welcome {user.name}</h1>
          <p> Email: {user.email}</p>
          <img src={user.photo} alt="profile" />
        </div>
      )}
    </div>
  );
}

export default App;
