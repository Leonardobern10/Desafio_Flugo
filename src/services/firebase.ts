// src/services/firebase.ts
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Pegue essas infos do console Firebase (passo anterior)
const firebaseConfig = {
     apiKey: import.meta.env.API_KEY,
     authDomain: import.meta.env.AUTH_DOMAIN,
     projectId: import.meta.env.PROJECT_ID,
     storageBucket: import.meta.env.STORAGE_BUCKET,
     messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
     appId: import.meta.env.APP_ID,
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados Firestore
export const db = getFirestore(app);
