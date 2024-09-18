// Toggle Dark/Light Mode
var toggleButton = document.getElementById('toggleButton');
var body = document.body;
toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
// Form Handling
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var education1 = document.getElementById('education1').value;
    var eduDate1 = document.getElementById('eduDate1').value;
    var education2 = document.getElementById('education2').value;
    var eduDate2 = document.getElementById('eduDate2').value;
    var job1 = document.getElementById('job1').value;
    var jobDate1 = document.getElementById('jobDate1').value;
    var jobDescription1 = document.getElementById('jobDescription1').value;
    var skills = document.getElementById('skills').value.split(',');
    // Update the resume dynamically
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayEmail').setAttribute('href', "mailto:".concat(email));
    document.getElementById('displayPhone').textContent = phone;
    document.getElementById('displayLocation').textContent = location;
    document.getElementById('displayEdu1').textContent = education1;
    document.getElementById('displayEduDate1').textContent = eduDate1;
    document.getElementById('displayEdu2').textContent = education2;
    document.getElementById('displayEduDate2').textContent = eduDate2;
    document.getElementById('displayJob1').textContent = job1;
    document.getElementById('displayJobDate1').textContent = jobDate1;
    document.getElementById('displayJobDescription1').textContent = jobDescription1;
    var skillsList = document.getElementById('displaySkills');
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
// Editable Sections
var editableSections = document.querySelectorAll('.editable');
editableSections.forEach(function (section) {
    section.addEventListener('click', function () {
        this.classList.toggle('editing');
        var input = this.querySelector('input');
        var textarea = this.querySelector('textarea');
        if (input)
            input.focus();
        if (textarea)
            textarea.focus();
    });
});
// Save changes from editable sections
var editableInputs = document.querySelectorAll('.editable input, .editable textarea');
editableInputs.forEach(function (input) {
    input.addEventListener('blur', function () {
        var parent = this.parentElement;
        var p = parent.querySelector('p');
        if (p) {
            p.textContent = this.value;
        }
        parent.classList.remove('editing');
    });
});
