function calculateAge() {
  var birthdate = document.getElementById('birthdate').value
  if (birthdate) {
    var today = new Date()
    var birthDate = new Date(birthdate)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    document.getElementById('result').textContent = 'Your age is: ' + age
  } else {
    document.getElementById('result').textContent =
      'Please enter your birthdate.'
  }
}

document
  .getElementById('birthdate')
  .addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault() // Prevent the default action of the Enter key
      calculateAge() // Call the function to calculate and display the age
    }
  })
