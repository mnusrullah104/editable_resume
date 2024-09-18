// Toggle Dark/Light Mode
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Form Handling
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;

resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const education1 = (document.getElementById('education1') as HTMLInputElement).value;
    const eduDate1 = (document.getElementById('eduDate1') as HTMLInputElement).value;
    const education2 = (document.getElementById('education2') as HTMLInputElement).value;
    const eduDate2 = (document.getElementById('eduDate2') as HTMLInputElement).value;
    const job1 = (document.getElementById('job1') as HTMLInputElement).value;
    const jobDate1 = (document.getElementById('jobDate1') as HTMLInputElement).value;
    const jobDescription1 = (document.getElementById('jobDescription1') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Update the resume dynamically
    document.getElementById('displayName')!.textContent = name;
    document.getElementById('displayEmail')!.textContent = email;
    document.getElementById('displayEmail')!.setAttribute('href', `mailto:${email}`);
    document.getElementById('displayPhone')!.textContent = phone;
    document.getElementById('displayLocation')!.textContent = location;
    document.getElementById('displayEdu1')!.textContent = education1;
    document.getElementById('displayEduDate1')!.textContent = eduDate1;
    document.getElementById('displayEdu2')!.textContent = education2;
    document.getElementById('displayEduDate2')!.textContent = eduDate2;
    document.getElementById('displayJob1')!.textContent = job1;
    document.getElementById('displayJobDate1')!.textContent = jobDate1;
    document.getElementById('displayJobDescription1')!.textContent = jobDescription1;

    const skillsList = document.getElementById('displaySkills')!;
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});

// Editable Sections
const editableSections = document.querySelectorAll('.editable');

editableSections.forEach(section => {
    section.addEventListener('click', function () {
        this.classList.toggle('editing');
        const input = this.querySelector('input');
        const textarea = this.querySelector('textarea');
        if (input) input.focus();
        if (textarea) textarea.focus();
    });
});

// Save changes from editable sections
const editableInputs = document.querySelectorAll('.editable input, .editable textarea');

editableInputs.forEach(input => {
    input.addEventListener('blur', function () {
        const parent = this.parentElement as HTMLElement;
        const p = parent.querySelector('p') as HTMLElement;

        if (p) {
            p.textContent = (this as HTMLInputElement | HTMLTextAreaElement).value;
        }
        parent.classList.remove('editing');
    });
});
