import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtPvGpn9w9TPfd-V1KfIJiMDR9M3Wx-is",
  authDomain: "whatsappclone-6b446.firebaseapp.com",
  projectId: "whatsappclone-6b446",
  storageBucket: "whatsappclone-6b446.appspot.com",
  messagingSenderId: "374963015160",
  appId: "1:374963015160:web:1643eaeac639470c621a0d",
  measurementId: "G-Z126DQQ9R8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;