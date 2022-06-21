import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA_D1sN9a3eQtH_OGP1ze7V0c3RUg2iQEQ',
  authDomain: 'cryptobase-87882.firebaseapp.com',
  projectId: 'cryptobase-87882',
  storageBucket: 'cryptobase-87882.appspot.com',
  messagingSenderId: '74205722126',
  appId: '1:74205722126:web:2bb7e46c8889fd71d5ee5f'
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app