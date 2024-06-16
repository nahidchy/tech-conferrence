
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQ_91X9uGqPcC5mWbit59mld7MKhjtJpc",
  authDomain: "tecon-conference.firebaseapp.com",
  projectId: "tecon-conference",
  storageBucket: "tecon-conference.appspot.com",
  messagingSenderId: "747304113306",
  appId: "1:747304113306:web:dff0b6ac747c16d5ab3b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;