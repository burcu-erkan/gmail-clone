import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnD4eEN0q-gDpwR1EOQXujMXwKEHG63Cw",
    authDomain: "clone-a82cd.firebaseapp.com",
    projectId: "clone-a82cd",
    storageBucket: "clone-a82cd.appspot.com",
    messagingSenderId: "292183366072",
    appId: "1:292183366072:web:c5fefd2dc872bbb567d74d",
    measurementId: "G-W04D1F4BRZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};
