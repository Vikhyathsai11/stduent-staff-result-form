const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBi7h7ADxjP6BK-PRTBCb6Rt4JxEJyvYRk",
  authDomain: "script-stujs.firebaseapp.com",
  projectId: "script-stujs",
  storageBucket: "script-stujs.appspot.com",
  messagingSenderId: "446063210051",
  appId: "1:446063210051:web:9c73cf136bcca2e780aef6",
  measurementId: "G-DPGX7446RY"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
function signUpStudent ()  {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
     
            window.open("index.html",'_self');
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
function signInStudent() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {

            window.open("student2.html", '_self');

        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

