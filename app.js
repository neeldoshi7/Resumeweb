//<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"></script>

////<!-- TODO: Add SDKs for Firebase products that you want to use
  //   https://firebase.google.com/docs/web/setup#config-web-app -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDvbgxeLUQJucdc0Cr84tLvkLTsqWKOyCE",
    authDomain: "resume-f3cde.firebaseapp.com",
    databaseURL: "https://resume-f3cde.firebaseio.com",
    projectId: "resume-f3cde",
    storageBucket: "",
    messagingSenderId: "865526251588",
    appId: "1:865526251588:web:5ee6dcb40660d296"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



 //listen for submit event//
document.getElementById('form1').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {

	
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#fname').value;
  let sname = document.querySelector('#sname').value;
  
 //Show Alert Message
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission
  document.getElementById('form1').reset();

}
