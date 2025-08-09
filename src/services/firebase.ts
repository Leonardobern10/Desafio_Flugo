// src/services/firebase.ts
import {initializeApp, getApps, type FirebaseApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Pegue essas infos do console Firebase (passo anterior)
const firebaseConfig = {
     apiKey: import.meta.env.VITE_API_KEY,
     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_APP_ID,
};

let firebaseApp: FirebaseApp;

if (!getApps().length) {
     firebaseApp = initializeApp(firebaseConfig);
     console.log('✅ Firebase inicializado com sucesso!');
} else {
     firebaseApp = getApps()[0];
     console.log('ℹ️ Firebase já estava inicializado.');
}

// Exporta o Firestore
export const db = getFirestore(firebaseApp);
