import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyDGqR5x7Kqc1nS2mVmIrS6ldRHRlRjaxHI",
    authDomain: "miniblog-8ab3f.firebaseapp.com",
    projectId: "miniblog-8ab3f",
    storageBucket: "miniblog-8ab3f.appspot.com",
    messagingSenderId: "816690512609",
    appId: "1:816690512609:web:7ffbe0c08772576c6b2da0"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
export { db };