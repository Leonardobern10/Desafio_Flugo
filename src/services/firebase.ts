import {initializeApp, getApps, type FirebaseApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

/**
 * Configurações do Firebase obtidas de variáveis de ambiente.
 * @constant {object}
 */
const firebaseConfig = {
     apiKey: import.meta.env.VITE_API_KEY,
     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_APP_ID,
};

/**
 * Instância do app Firebase.
 * @type {FirebaseApp}
 */
let firebaseApp: FirebaseApp;

/**
 * Inicializa o app Firebase se ainda não estiver inicializado.
 * Caso contrário, reutiliza a instância já criada.
 */
if (!getApps().length) {
     firebaseApp = initializeApp(firebaseConfig);
     console.log('✅ Firebase inicializado com sucesso!');
} else {
     firebaseApp = getApps()[0];
     console.log('ℹ️ Firebase já estava inicializado.');
}

/**
 * Instância do Firestore exportada para uso em outras partes do app.
 */
export const db = getFirestore(firebaseApp);
