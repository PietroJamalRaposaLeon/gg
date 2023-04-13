import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBvcBtVbv2Mm5491PJ7tAtvIzDLvYKq8qs",
    authDomain: "projeto-d4086.firebaseapp.com",
    projectId: "projeto-d4086",
    storageBucket: "projeto-d4086.appspot.com",
    messagingSenderId: "77700403712",
    appId: "1:77700403712:web:a6655d821a43b02a9d3ee5"
  }
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
