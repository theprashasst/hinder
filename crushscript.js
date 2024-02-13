// Initialize Firebase (replace with your own Firebase configuration)


const firebaseConfig = {
    apiKey: "AIzaSyARP2p48tmeZQWiPJv_Ho5ldOJVfC2BKAA",
    authDomain: "hinder-7102d.firebaseapp.com",
    databaseURL: "https://hinder-7102d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hinder-7102d",
    storageBucket: "hinder-7102d.appspot.com",
    messagingSenderId: "219761938962",
    appId: "1:219761938962:web:a331f962d7d5359bddfecb",
    measurementId: "G-KNR89KP1RJ"
  };

firebase.initializeApp(firebaseConfig);
var crushersFormDB = firebase.database().ref("crushForm");

const el = document.getElementById("crushForm");
if (el) {
  el.addEventListener('submit', submitCrushForm);
}

// document.getElementById("crushForm").addEventListener('submit', submitCrushForm);

function submitCrushForm(e) {
    e.preventDefault();

    var crushName = document.getElementById("crushInput").value;

    saveCrushForm(crushName);
    alert('Saved');

    document.getElementById('crushForm').reset();
}

function saveCrushForm(crushName) {
    // Use a unique identifier for each crush (you can replace this with your own logic)
    var crushId = generateUniqueCrushId();

    var crushRef = crushersFormDB.child(crushId);

    crushRef.set({
        crushName: crushName
    }, (error) => {
        if (error) {
            console.error("Error saving crush data:", error);
        } else {
            console.log("Crush data saved successfully.");
        }
    });
}

function generateUniqueCrushId() {
    // Add your logic to generate a unique identifier for each crush (e.g., using timestamps, random strings, etc.)
    // For simplicity, let's use the current timestamp as a unique identifier
    return new Date().getTime().toString();
}