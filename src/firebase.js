import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvMcyQ1ephMpaGEzHiyxeRTfkJB4HGU0o',
  authDomain: 'english-dictionary-4b11a.firebaseapp.com',
  projectId: 'english-dictionary-4b11a',
  storageBucket: 'english-dictionary-4b11a.appspot.com',
  messagingSenderId: '854498897773',
  appId: '1:854498897773:web:4d41c813001d65ae493464',
  measurementId: 'G-2951H4Z64S',
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
