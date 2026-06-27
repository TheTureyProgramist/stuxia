import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk", // Твій ключ
  authDomain: "stuxia-5b535.firebaseapp.com",
  projectId: "stuxia-5b535",
  storageBucket: "stuxia-5b535.firebasestorage.app",
  messagingSenderId: "801101038904",
  appId: "1:801101038904:web:70d01ab63f631b74acadcd"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація Firestore (наша база даних)
export const db = getFirestore(app);