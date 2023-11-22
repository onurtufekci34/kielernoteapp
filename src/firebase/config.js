
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'










const firebaseConfig = {
    apiKey: "AIzaSyB3oyykPrd61Ea6rZWuq8POx-FqKYKsge0",
    authDomain: "react-chatapp-30766.firebaseapp.com",
    projectId: "react-chatapp-30766",
    storageBucket: "react-chatapp-30766.appspot.com",
    messagingSenderId: "891314053253",
    appId: "1:891314053253:web:acaffffb2489c70d0089ec"
  };


const app = initializeApp(firebaseConfig)


const db = getFirestore(app)
const auth = getAuth(app)

export {db,auth}
