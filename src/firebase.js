/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyATcwSxgsvLf_6MoVh0TdialNGF_iruEF0',
  authDomain: 'react-notes-b3c5d.firebaseapp.com',
  projectId: 'react-notes-b3c5d',
  storageBucket: 'react-notes-b3c5d.appspot.com',
  messagingSenderId: '459027284556',
  appId: '1:459027284556:web:35cf959b65f0b66938aae9',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollections = collection(db, "notes")