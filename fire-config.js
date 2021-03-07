import firebase from 'firebase'
require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJ_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
export default database