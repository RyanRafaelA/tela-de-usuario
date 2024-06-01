import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAoDiYJlYI2amjW0IUUXh2LScWiko1_9Pg",
  authDomain: "projetobeyond-7015e.firebaseapp.com",
  projectId: "projetobeyond-7015e",
  storageBucket: "projetobeyond-7015e.appspot.com",
  messagingSenderId: "1005142714511",
  appId: "1:1005142714511:web:f93709fbaf585788b268fa"
};

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()