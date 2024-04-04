document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName'); 

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    } 

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `<h1>Certificate of Achievement</h1>`;
    certificateContent.innerHTML += `<p>This is to certify that</p>`;
    certificateContent.innerHTML += `<h2>${studentName}</h2>`;
    certificateContent.innerHTML += `<p>has almost completed the</p>`;
    certificateContent.innerHTML +=  `<h3>${courseName} Course.</h3>`;
    certificateContent.innerHTML += `<p>with legendary perseverance and world-class bad-assery for never giving up 🏆`;
    certificateContent.innerHTML += `<br>`;
    certificateContent.innerHTML += `<img src="./logo.png" height="150px" width="400px" alt="Logo"/>`;
    certificateContent.innerHTML += `<p>${personalMessage}</p>`;
  
    //  Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if(courseNameInput) courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});