import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-config";

let firebaseConfigration = () => {
  initializeApp(firebaseConfig);
};

export default firebaseConfigration;
