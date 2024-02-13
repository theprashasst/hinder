
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
      var crushersFormDB=firebase.database().ref("crushForm");

  

      


    // Listen for the form submission
    document.getElementById("contactForm").addEventListener('submit',submitForm);

      async function submitForm(e){
        
        e.preventDefault();


        var fullName=getElementVal('FullName');
        var enrollmentNumber = getElementVal('EnrollmentNumber');
        var branch = getElementVal('Branch');
        var year = getElementVal('Year');
        var gender = getElementVal('Gender');
        var instagram = getElementVal('Instagram');
        var password = getElementVal('Password');

        try{
          
          saveCrushForm(enrollmentNumber);
          
          await saveLoginForm(fullName,enrollmentNumber,branch,year,gender,instagram,password);
          
          

          
          document.getElementById('contactForm').reset();
          
        
        }catch (error) {
          console.error("Error during form submission:", error);
          alert('Error during form submission. Please try again.');
      }
     


      }
    
      const saveLoginForm=(fullName,enrollmentNumber,branch,year,gender,instagram,password) =>{
        // var newContactForm=contactFormDB.push();
        return new Promise((resolve, reject) => {
          console.log('Trying to save to contactForm:', fullName);
        var enrollmentRef = contactFormDB.child(enrollmentNumber);
          
        enrollmentRef.once('value', (snapshot) => {
          console.log('Snapshot:', snapshot.val());
      
          if (snapshot.exists()) {
              // Enrollment number already exists, handle accordingly
              alert("Enrollment number already exists. Please choose a different one.");
          } else {
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
                alert('Saved');
                console.log("trying to navigate to crushfetcher");
                window.location.replace(`crushfetcher.html?gender=${gender}`);
                
                
            }})
        }
          }
        )
        }
        )
      }

      const saveCrushForm=(enrollmentNumber)=>{
        return new Promise((resolve, reject) => {
        console.log('Trying to save to crushForm:', enrollmentNumber);

        var enrollmentRef = crushersFormDB.child(enrollmentNumber);

        enrollmentRef.once('value', (snapshot) => {
          console.log('Snapshot:', snapshot.val());
      
          if (snapshot.exists()) {
              // Enrollment number already exists, handle accordingly
              alert("Enrollment number already exists. Please choose a different one.");
          } else {
            enrollmentRef.set({
              enrollmentNumber:enrollmentNumber,
            },(error) => {
              if (error) {
                  console.error("Error saving data:", error);
              } else {
                  console.log("Data saved successfully.");
                  
              }})
            }
          })
        })
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
