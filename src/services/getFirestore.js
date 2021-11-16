import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAB5BuJJZ8sHkpqEIV6gwXo4ljg7BuRKSE",
    authDomain: "controldegastos-88cb8.firebaseapp.com",
    projectId: "controldegastos-88cb8",
    storageBucket: "controldegastos-88cb8.appspot.com",
    messagingSenderId: "721428286794",
    appId: "1:721428286794:web:45dcb28a5f5e35cac605b3"
};

const app = firebase.initializeApp( firebaseConfig );

export function getFirestore() {
    return firebase.firestore( app )
};