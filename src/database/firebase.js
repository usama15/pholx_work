import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV1XuKli99wb_HOHvKYosTX1N7rFJHINQ",
  authDomain: "delcomart-a02a1.firebaseapp.com",
  databaseURL: "https://delcomart-a02a1-default-rtdb.firebaseio.com",
  projectId: "delcomart-a02a1",
  storageBucket: "delcomart-a02a1.appspot.com",
  messagingSenderId: "292134536046",
  appId: "1:292134536046:web:f8887a483f524a5630377f",
  measurementId: "G-XLCST5CL8B",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();