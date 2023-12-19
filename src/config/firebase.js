// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh1ZmxsHM4ZOBbIhOMILBw-LEfnBRERuU",
  authDomain: "vite-contact-6fe51.firebaseapp.com",
  projectId: "vite-contact-6fe51",
  storageBucket: "vite-contact-6fe51.appspot.com",
  messagingSenderId: "824119546778",
  appId: "1:824119546778:web:3937c737ed7d38e60ba023",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/*

 */