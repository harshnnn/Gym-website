import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyTgXkO-4qvLttJK4Kv0u8mW2GJ18C00s",
    authDomain: "gym-website-6f642.firebaseapp.com",
    projectId: "gym-website-6f642",
    storageBucket: "gym-website-6f642.appspot.com",
    messagingSenderId: "709733459997",
    appId: "1:709733459997:web:739be3e36813fad7517ef4"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {firestore, auth} ;