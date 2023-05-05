// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsO1JQra66CaO36Rkgy3TGqV00bacvTo",
  authDomain: "facebook-demo-authentication.firebaseapp.com",
  projectId: "facebook-demo-authentication",
  storageBucket: "facebook-demo-authentication.appspot.com",
  messagingSenderId: "628724937175",
  appId: "1:628724937175:web:0462bf6bc25c08f4eedb92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
