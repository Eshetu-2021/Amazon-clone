// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC1W5k6oeRnpdXv8ocPjoqP2_QMHnltWaQ",
  authDomain: "my-946f2.firebaseapp.com",
  projectId: "my-946f2",
  storageBucket: "my-946f2.appspot.com",
  messagingSenderId: "444489893912",
  appId: "1:444489893912:web:28d51bd08997723d6c5b6d",
  measurementId: "G-6PBHMC0VMN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
