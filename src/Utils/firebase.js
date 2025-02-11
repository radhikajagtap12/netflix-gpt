// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB57_dq1_MJ9HrD7YE1E0c7vY5wjYkSmaI",
	authDomain: "netflixgpt-cf3e2.firebaseapp.com",
	projectId: "netflixgpt-cf3e2",
	storageBucket: "netflixgpt-cf3e2.firebasestorage.app",
	messagingSenderId: "671538332138",
	appId: "1:671538332138:web:2f93f5dc6e171f626e7293",
	measurementId: "G-81PFV7FF17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
