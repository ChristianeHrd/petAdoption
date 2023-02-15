import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    //TODO TODO TODO
    //TODO TODO TODO
    // Insert your Firebase configuration here
   
        apiKey: "AIzaSyB9axpGjJW_RcK_GUAnzF_-Ak75JQ2MS9g",
        authDomain: "nsccclass-a5851.firebaseapp.com",
        projectId: "nsccclass-a5851",
        storageBucket: "nsccclass-a5851.appspot.com",
        messagingSenderId: "136428073040",
        appId: "1:136428073040:web:1db0e24e62a0919f91a155"
      
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,app}