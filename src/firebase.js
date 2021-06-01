import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFgzZaiB8FExHZ1w4MTkW0iEuxEbX2Mwg",
    authDomain: "drive-clone-live-16c0f.firebaseapp.com",
    projectId: "drive-clone-live-16c0f",
    storageBucket: "drive-clone-live-16c0f.appspot.com",
    messagingSenderId: "844104179753",
    appId: "1:844104179753:web:66e860bcaffd94dca7fc38"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }