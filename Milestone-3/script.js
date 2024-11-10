var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission and page reload
    // Capture the input elements
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var educationInput = document.getElementById("education");
    var workExperienceInput = document.getElementById("work-experience");
    var skillsInput = document.getElementById("skills");
    // Collect input values and ensure they are strings (skills will be split into an array)
    var resumeData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        education: educationInput.value.trim(),
        workExperience: workExperienceInput.value.trim(),
        skills: skillsInput.value.split(",").map(function (skill) { return skill.trim(); })
    };
    // Generate the resume content based on the form data
    var resumeContent = "\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n    <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n    <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n\n    <h3>Education</h3>\n    <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n\n    <h3>Work Experience</h3>\n    <p><strong>Work Experience:</strong></p>\n    <p>").concat(resumeData.workExperience, "</p>\n\n    <h3>Skills</h3>\n    <ul>\n      ").concat(resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n    </ul>\n  ");
    // Display the resume content in the 'resume-content' div
    var resumeContentDiv = document.getElementById("resume-content");
    if (resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
    }
    // Show the resume output section
    var resumeOutput = document.getElementById("resume-output");
    if (resumeOutput) {
        resumeOutput.style.display = "block";
    }
});
