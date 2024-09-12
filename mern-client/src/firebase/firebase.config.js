// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyApiomVQFDMwVla3H8YqNE7-u6V4oGgnHM",
  authDomain: "mern-book-inventory-95ef3.firebaseapp.com",
  projectId: "mern-book-inventory-95ef3",
  storageBucket: "mern-book-inventory-95ef3.appspot.com",
  messagingSenderId: "958016313811",
  appId: "1:958016313811:web:0b1ea7362588f80d8ef726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
export { auth };