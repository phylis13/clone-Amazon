import firebase from "firebase";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIRoNuYXJcNjx1S61X7ZfpuIFO6vdACMI",
  authDomain: "clone-3d829.firebaseapp.com",
  projectId: "clone-3d829",
  storageBucket: "clone-3d829.appspot.com",
  messagingSenderId: "987304033048",
  appId: "1:987304033048:web:851f647069427e93077c6d",
  measurementId: "G-RW8MRP7R6Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };