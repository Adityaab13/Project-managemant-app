import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBh2o4CrT6dTmGLCi_94gjAtYPNok9D0po",
  authDomain: "the-dojo-e2844.firebaseapp.com",
  projectId: "the-dojo-e2844",
  storageBucket: "the-dojo-e2844.appspot.com",
  messagingSenderId: "954251703317",
  appId: "1:954251703317:web:541767f99b3760b0ec4a1c"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }