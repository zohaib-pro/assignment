import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7bM-H49rgi40iCkJzTJerIjtcDOaYE4k",
  authDomain: "assignment-c388a.firebaseapp.com",
  projectId: "assignment-c388a",
  storageBucket: "assignment-c388a.firebasestorage.app",
  messagingSenderId: "337717600441",
  appId: "1:337717600441:web:69df660401c17c0cfbfb68",
  measurementId: "G-N2P7D0ZDES"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
