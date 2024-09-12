// script.ts
// Capture the form and resume content container
var resumeForm = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
// Listen for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Capture form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Validate that all required fields are filled
    if (!name || !email || !phone || !education || !workExperience || skills.length === 0) {
        alert('Please fill in all fields.');
        return;
    }
    // Generate the dynamic resume content
    resumeContent.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <h4>Education</h4>\n    <p>").concat(education, "</p>\n    <h4>Work Experience</h4>\n    <p>").concat(workExperience, "</p>\n    <h4>Skills</h4>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n    </ul>\n  ");
});
