import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// database initialization
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAdJch4_2X6_pBK0gC9_F6-cImfnoxMzjM",
  authDomain: "instagram-clone-2ccd9.firebaseapp.com",
  projectId: "instagram-clone-2ccd9",
  storageBucket: "instagram-clone-2ccd9.appspot.com",
  messagingSenderId: "709539689091",
  appId: "1:709539689091:web:6388ed4fc857343b2ae1b6",
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file (only ONCE)
// seedDatabase(firebase);

// console.log(firebase, FieldValue);

export { firebase, FieldValue };
