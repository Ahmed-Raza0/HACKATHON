// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Get the form and resume output elements
    var form = document.getElementById('resume-form');
    var resumeName = document.getElementById('resume-name');
    var resumeEmail = document.getElementById('resume-email');
    var resumeEducation = document.getElementById('resume-education');
    var resumeWork = document.getElementById('resume-work');
    var resumeSkills = document.getElementById('resume-skills');
    // Default values
    var defaultName = 'Ahmed Raza';
    var defaultEmail = 'Ahmed@example.com';
    var defaultEducation = 'Bachelor of Science in Computer Science';
    var defaultWorkExperience = 'Freelance developer 1+ years';
    var defaultSkills = 'HTML, CSS,TAILWIND, JAVASCRIPT, TYPESCRIPT, REACT, NEXT.JS';
    // Function to initialize resume with default values
    var initializeResume = function () {
        resumeName.textContent = "Name: ".concat(defaultName);
        resumeEmail.textContent = "Email: ".concat(defaultEmail);
        resumeEducation.textContent = "Education: ".concat(defaultEducation);
        resumeWork.textContent = "Work Experience: ".concat(defaultWorkExperience);
        resumeSkills.textContent = "Skills: ".concat(defaultSkills);
        document.getElementById('name').value = defaultName;
        document.getElementById('email').value = defaultEmail;
        document.getElementById('education').value = defaultEducation;
        document.getElementById('work-experience').value = defaultWorkExperience;
        document.getElementById('skills').value = defaultSkills;
    };
    // Update resume with form values
    var updateResume = function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value;
        resumeName.textContent = "Name: ".concat(name);
        resumeEmail.textContent = "Email: ".concat(email);
        resumeEducation.textContent = "Education: ".concat(education);
        resumeWork.textContent = "Work Experience: ".concat(workExperience);
        resumeSkills.textContent = "Skills: ".concat(skills);
    };
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        updateResume();
    });
    // Make resume sections editable
    var makeEditable = function (element) {
        element.addEventListener('blur', function () {
            var _a;
            var content = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.replace(/^.*?: /, '')) || '';
            var fieldId = element.id.replace('resume-', '');
            var inputElement = document.getElementById(fieldId);
            if (inputElement) {
                inputElement.value = content;
            }
        });
    };
    // Initialize resume with default values
    initializeResume();
    // Attach editable functionality
    makeEditable(resumeName);
    makeEditable(resumeEmail);
    makeEditable(resumeEducation);
    makeEditable(resumeWork);
    makeEditable(resumeSkills);
});
