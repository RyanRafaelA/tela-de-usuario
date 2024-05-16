import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6IhYMK4iQP04wPnCx2OuWsR9JeJzPLGY",
  authDomain: "projeto-beyond-4185e.firebaseapp.com",
  projectId: "projeto-beyond-4185e",
  storageBucket: "projeto-beyond-4185e.appspot.com",
  messagingSenderId: "850073700312",
  appId: "1:850073700312:web:ccb6a67e979f953655d4ad",
  measurementId: "G-VC6SMRVJP4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);