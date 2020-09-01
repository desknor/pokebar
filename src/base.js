import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

// this is default export

export default base;