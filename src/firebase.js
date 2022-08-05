import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPjJLHfPYiGDvThvESUCp8kyB5qFX8Ois",
  authDomain: "eshop-df516.firebaseapp.com",
  projectId: "eshop-df516",
  storageBucket: "eshop-df516.appspot.com",
  messagingSenderId: "531495192139",
  appId: "1:531495192139:web:9fae32f0e6a1263ee9efce",
  measurementId: "G-TTVE7JRM42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
