
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

      //refrence for firebase

      var contactFormDB=firebase.database().ref("contactForm");


    // Listen for the form submission
    document.getElementById("contactForm").addEventListener('submit',submitForm);

      function submitForm(e){
        alert('Saved');
        e.preventDefault();


        var fullName=getElementVal('FullName');
        var enrollmentNumber = getElementVal('EnrollmentNumber');
        var branch = getElementVal('Branch');
        var year = getElementVal('Year');
        var gender = getElementVal('Gender');
        var instagram = getElementVal('Instagram');
        var password = getElementVal('Password');

        console.log("fuck");
         
        saveLoginForm(fullName,enrollmentNumber,branch,year,gender,instagram,password);

        document.getElementById('contactForm').reset();


      }

      const saveLoginForm=(fullName,enrollmentNumber,branch,year,gender,instagram,password) =>{
        // var newContactForm=contactFormDB.push();
        var enrollmentRef = contactFormDB.child(enrollmentNumber);

        enrollmentRef.set({
            fullName:fullName,
            enrollmentNumber:enrollmentNumber,
            branch:branch,
            year:year,
            gender:gender,
            instagram:instagram,
            password:password,
        },(error) => {
          if (error) {
              console.error("Error saving data:", error);
          } else {
              console.log("Data saved successfully.");
          }})
      }

      const getElementVal=(id) =>{
        return document.getElementById(id).value;
      }

    //  function (event) {
    //     event.preventDefault(); // Prevent the default form submission

    //     // Fetch the form values
    //     const fullName = document.getElementById('FullName').value;
    //     const enrollmentNumber = document.getElementById('EnrollmentNumber').value;
    //     const branch = document.getElementById('Branch').value;
    //     const year = document.getElementById('Year').value;
    //     const gender = document.getElementById('Gender').value;
    //     const instagram = document.getElementById('Instagram').value;
    //     const password = document.getElementById('Password').value;

    //     // Log the values (you can replace this with your logic to send data to the server)
    //     console.log('Full Name:', fullName);
    //     console.log('Enrollment Number:', enrollmentNumber);
    //     console.log('Branch:', branch);
    //     console.log('Year:', year);
    //     console.log('Gender:', gender);
    //     console.log('Instagram Username:', instagram);
    //     console.log('Password:', password);

    //     // Add your logic here to send data to the server or perform other actions
    //     // For example, you can use fetch to send the data to a server endpoint
    //     /*
    //     fetch('/your-server-endpoint', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             fullName,
    //             enrollmentNumber,
    //             branch,
    //             year,
    //             gender,
    //             instagram,
    //             password,
    //         }),
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log('Server response:', data))
    //     .catch(error => console.error('Error:', error));
    //     */
    // });
