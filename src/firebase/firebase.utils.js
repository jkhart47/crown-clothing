import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDjtMaroEPtED-VZ6EFKD3MHvmulbZucO8",
  authDomain: "crown-db-deb42.firebaseapp.com",
  databaseURL: "https://crown-db-deb42.firebaseio.com",
  projectId: "crown-db-deb42",
  storageBucket: "crown-db-deb42.appspot.com",
  messagingSenderId: "485633220883",
  appId: "1:485633220883:web:a1ebbda9a9e6fe7eac7ae6",
  measurementId: "G-PMXSEB77W6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;