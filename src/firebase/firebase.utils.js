import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAxoFRN4wgFYX2DRYlOFb5kaspX20RzlXw',
  authDomain: 'shopping-cart-eaf33.firebaseapp.com',
  databaseURL: 'https://shopping-cart-eaf33.firebaseio.com',
  projectId: 'shopping-cart-eaf33',
  storageBucket: 'shopping-cart-eaf33.appspot.com',
  messagingSenderId: '728160974517',
  appId: '1:728160974517:web:671102ad5e25166054b0fc',
  measurementId: 'G-ZWDQEDNDEQ'
};
//thisi swokng
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
