import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAy_dWdgHkFTJxRQVnVky_YxQbYQBhGy7k",
  authDomain: "slack-clone-70980.firebaseapp.com",
  projectId: "slack-clone-70980",
  storageBucket: "slack-clone-70980.appspot.com",
  messagingSenderId: "378888831846",
  appId: "1:378888831846:web:b54962e7a1ab5137af7ea7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

//initialize database
const db = firebaseApp.firestore()

//export db so that we can use it in other files
export default db