// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD43UDjk4E-6eBqvnmC_R9DQ8pnYfChiFk",
  authDomain: "lumiere-homestay.firebaseapp.com",
  databaseURL: "https://lumiere-homestay-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lumiere-homestay",
  storageBucket: "lumiere-homestay.appspot.com",
  messagingSenderId: "92429711194",
  appId: "1:92429711194:web:4c1d725a1bc9322f52a563",
  measurementId: "G-BZYY03H094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);