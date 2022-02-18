import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAiO9f4XFsXTOY6S8-m6fXW9ya-eaF69Rs',
  authDomain: 'facebook-clone-dc227.firebaseapp.com',
  projectId: 'facebook-clone-dc227',
  storageBucket: 'facebook-clone-dc227.appspot.com',
  messagingSenderId: '999704355484',
  appId: '1:999704355484:web:202f87c1f2255b72260359',
  measurementId: 'G-8PGCQQ7LFF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
