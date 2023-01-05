import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSlKgal32UueHX3HEatzoCFCox_cN-5QY",
    authDomain: "tick-tock-world-20b4e.firebaseapp.com",
    projectId: "tick-tock-world-20b4e",
    storageBucket: "tick-tock-world-20b4e.appspot.com",
    messagingSenderId: "1047147591628",
    appId: "1:1047147591628:web:5df08d12a13cfb53134f69",
    measurementId: "G-M4SR03RWTZ"
  };

const app = initializeApp(firebaseConfig);
const DataBase = getFirestore(app);
export default DataBase;