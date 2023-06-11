const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdglHhsZtFkJzzKBPH7e0SnhU4Ya6xkt8",
    authDomain: "mini-project-a1967.firebaseapp.com",
    projectId: "mini-project-a1967",
    storageBucket: "mini-project-a1967.appspot.com",
    messagingSenderId: "803066731103",
    appId: "1:803066731103:web:e17cf3aee1aba4146d59ea",
    measurementId: "G-RZQ6BRDESP"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
function signUpStaff ()  {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
     
            window.open("staff2.html",'_self');
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
function signInStaff() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {

            window.open("staff2.html", '_self');

        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}

