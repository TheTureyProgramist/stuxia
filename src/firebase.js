import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",
  authDomain: "stuxia-5b535.firebaseapp.com",
  projectId: "stuxia-5b535",
  storageBucket: "stuxia-5b535.firebasestorage.app",
  messagingSenderId: "801101038904",
  appId: "1:801101038904:web:70d01ab63f631b74acadcd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signInAnonymously, signOut };

/**
 * Підписка на стан техробіт із Firestore.
 * Документ: config/global  →  поле isMaintenanceMode (boolean)
 *                            →  поле maintenanceEndTime  (string ISO / null)
 *                            →  поле maintenanceMessage  (string / null)
 *
 * @param {(data: {isMaintenanceMode: boolean, endTime: string|null, message: string|null}) => void} callback
 * @returns {() => void} unsubscribe
 */
export function subscribeToMaintenance(callback) {
  const ref = doc(db, "config", "global");
  return onSnapshot(
    ref,
    (snap) => {
      if (!snap.exists()) {
        callback({ isMaintenanceMode: false, endTime: null, message: null });
        return;
      }
      const data = snap.data();
      callback({
        isMaintenanceMode: !!data.isMaintenanceMode,
        endTime: data.maintenanceEndTime ?? null,
        message: data.maintenanceMessage ?? null,
      });
    },
    () => {
      // При помилці доступу — не блокуємо сайт
      callback({ isMaintenanceMode: false, endTime: null, message: null });
    },
  );
}
