// script.ts

// Capture the form and resume content container
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;

// Listen for form submission
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Capture form input values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

  // Validate that all required fields are filled
  if (!name || !email || !phone || !education || !workExperience || skills.length === 0) {
    alert('Please fill in all fields.');
    return;
  }

  // Generate the dynamic resume content
  resumeContent.innerHTML = `
    <h3>${name}</h3>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h4>Education</h4>
    <p>${education}</p>
    <h4>Work Experience</h4>
    <p>${workExperience}</p>
    <h4>Skills</h4>
    <ul>
      ${skills.map((skill) => `<li>${skill.trim()}</li>`).join('')}
    </ul>
  `;
});
