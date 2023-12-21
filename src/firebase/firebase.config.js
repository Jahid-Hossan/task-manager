// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB05vpaJIO9UYgG4Gfkc8ayl9o5Fy8GvYU",
    authDomain: "task-manager-82059.firebaseapp.com",
    projectId: "task-manager-82059",
    storageBucket: "task-manager-82059.appspot.com",
    messagingSenderId: "588953289747",
    appId: "1:588953289747:web:4ddeebfd5151835d9e2be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;