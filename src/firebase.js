import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyDKS0JDyn-ZFBhYUmSVZqzUdQdTja559KU',
	authDomain: 'coder-app-ivan-polanis-13205.firebaseapp.com',
	projectId: 'coder-app-ivan-polanis-13205',
	storageBucket: 'coder-app-ivan-polanis-13205.appspot.com',
	messagingSenderId: '596406082901',
	appId: '1:596406082901:web:214be48f043229c1c863dc',
	measurementId: 'G-0JNXRJKE0C',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
