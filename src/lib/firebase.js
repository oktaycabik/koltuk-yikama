import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxpJ6gyaGvyacCPaDcidtq3Yj9PvLEFwU",
  authDomain: "ev-koltuk-yikama.firebaseapp.com",
  projectId: "ev-koltuk-yikama",
  storageBucket: "ev-koltuk-yikama.firebasestorage.app",
  messagingSenderId: "382333763230",
  appId: "1:382333763230:web:08e0641e3b54778535058f",
  measurementId: "G-P7Q5BRCFDF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 