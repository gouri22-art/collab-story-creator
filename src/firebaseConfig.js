// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKy6HRZ4bGh1ymSc9jBujElWqmFdSP720",
  authDomain: "collab-story-creator.firebaseapp.com",
  projectId: "collab-story-creator",
  storageBucket:"collab-story-creator.appspot.com",
  messagingSenderId: "251601919574",
  appId: "1:251601919574:web:b31fa7df09a78649b225f7",
  measurementId: "G-PTYTPF85CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;