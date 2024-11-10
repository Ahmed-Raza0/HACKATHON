// Define the type for the form data structure
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  workExperience: string;
  skills: string[];
}

document.getElementById("resume-form")?.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission and page reload

  // Capture the input elements
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const educationInput = document.getElementById("education") as HTMLInputElement;
  const workExperienceInput = document.getElementById("work-experience") as HTMLTextAreaElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;

  // Collect input values and ensure they are strings (skills will be split into an array)
  const resumeData: ResumeData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    education: educationInput.value.trim(),
    workExperience: workExperienceInput.value.trim(),
    skills: skillsInput.value.split(",").map(skill => skill.trim())
  };

  // Generate the resume content based on the form data
  const resumeContent: string = `
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${resumeData.name}</p>
    <p><strong>Email:</strong> ${resumeData.email}</p>
    <p><strong>Phone:</strong> ${resumeData.phone}</p>

    <h3>Education</h3>
    <p><strong>Education:</strong> ${resumeData.education}</p>

    <h3>Work Experience</h3>
    <p><strong>Work Experience:</strong></p>
    <p>${resumeData.workExperience}</p>

    <h3>Skills</h3>
    <ul>
      ${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  `;

  // Display the resume content in the 'resume-content' div
  const resumeContentDiv = document.getElementById("resume-content");
  if (resumeContentDiv) {
    resumeContentDiv.innerHTML = resumeContent;
  }

  // Show the resume output section
  const resumeOutput = document.getElementById("resume-output");
  if (resumeOutput) {
    resumeOutput.style.display = "block";
  }
});
