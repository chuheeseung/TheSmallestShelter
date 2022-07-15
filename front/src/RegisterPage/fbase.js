import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnH2FlyOiYvd_zKf1Tn1YMGT4kKzOxCSk",
  authDomain: "the-smallest-shelter.firebaseapp.com",
  projectId: "the-smallest-shelter",
  storageBucket: "the-smallest-shelter.appspot.com",
  messagingSenderId: "988850425697",
  appId: "1:988850425697:web:315b337bdb57632ca53f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storageService = getStorage();