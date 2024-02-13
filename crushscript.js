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


const db = firebase.firestore();
const auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function () {
    // Populate crush options dynamically based on the opposite gende
    populateCrushOptions();

    // Handle crush form submission
    document.getElementById('crushForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your logic to handle crush form submission
    });
    console.log("HI hi");

    // Handle setup crush form submission pranjay
    document.getElementById('setupCrushForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Add your logic to handle setting up a new crush and saving to the database
    });
});

function populateCrushOptions() {
    // Add your logic to fetch opposite gender crushes from the database and populate the options
}
