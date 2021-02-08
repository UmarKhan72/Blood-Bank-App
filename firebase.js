import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDD322pxSq1xhRPPUouiQmjummAqXX8KZM",
  authDomain: "hss-web.firebaseapp.com",
  projectId: "hss-web",
  storageBucket: "hss-web.appspot.com",
  messagingSenderId: "536900691288",
  appId: "1:536900691288:web:c7a7a19b5e7bbf20cc712d",
  measurementId: "G-5TG9QJBF40"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
