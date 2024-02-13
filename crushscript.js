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
const db = firebase.database();

const el = document.getElementById("crushForm");
if (el) {
    el.addEventListener('submit', submitCrushForm);
}



function submitCrushForm(e) {
    e.preventDefault();

    var crushName = document.getElementById("crushInput").value;

    saveCrushForm(crushName);
    alert('Saved');

    document.getElementById('crushForm').reset();
}

var selectElement = document.getElementById("suggestionsDropdown");
var crushersFormDB = db.ref("crushForm");

function saveCrushForm(crushName) {
    
    var crushId = generateUniqueCrushId();

    var crushRef = ref(crushersFormDB, crushId);

    set(crushRef, {
        crushName: crushName
    }, (error) => {
        if (error) {
            console.error("Error saving crush data:", error);
        } else {
            console.log("Crush data saved successfully.");
        }
    });
}

function populateDropdown() {
    var dbRef = firebase.database().ref("contactForm");

    // Use ref() to get a database reference
    dbRef.get().then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            Object.entries(data).forEach(([enrollmentNumber, childSnapshot]) => {
                var fullName = childSnapshot.fullName;
                console.log("fullname is", fullName);
                var optionElement = document.createElement('option');
                optionElement.value = enrollmentNumber;
                optionElement.textContent = fullName;
                selectElement.appendChild(optionElement);
            });
        }
    }).catch((error) => {
        console.error("Error getting data:", error);
        alert("Error getting data:", error.message);
    });
}

window.addEventListener('load', () => {
    populateDropdown();
});



    function generateUniqueCrushId() {
        return new Date().getTime().toString();
    }