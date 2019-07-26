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

  //Form Reset After Submission
  document.getElementById('form1').reset();


  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);

