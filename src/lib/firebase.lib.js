import Firebase from 'firebase/app';



import 'firebase/firestore';
import 'firebase/auth';





let config = {
    apiKey: "AIzaSyCMP9Y5nKUApSGUx-0C5RdDTpHyJ-2UZpk",
    authDomain: "bookmark-a6822.firebaseapp.com",
    projectId: "bookmark-a6822",
    storageBucket: "bookmark-a6822.appspot.com",
    messagingSenderId: "73413027549",
    appId: "1:73413027549:web:77f8f007abcc95649cdd34"
};



const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore





//here is where i wanna call the seed file (only once)
//seedDatabases(firebase)



export { firebase, FieldValue }