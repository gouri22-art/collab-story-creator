import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKy6HRZ4bGh1ymSc9jBujElWqmFdSP720",
  authDomain: "collab-story-creator.firebaseapp.com",
  projectId: "collab-story-creator",
  storageBucket: "collab-story-creator.appspot.com",
  messagingSenderId: "251601919574",
  appId: "1:251601919574:web:b31fa7df09a78649b225f7",
  measurementId: "G-PTYTPF85CR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // ✅ Ensure `auth` is exported
export default app;
