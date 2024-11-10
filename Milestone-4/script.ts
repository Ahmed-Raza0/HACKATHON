document.addEventListener('DOMContentLoaded', () => {
  // Get the form and resume output elements
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeName = document.getElementById('resume-name') as HTMLDivElement;
  const resumeEmail = document.getElementById('resume-email') as HTMLDivElement;
  const resumeEducation = document.getElementById('resume-education') as HTMLDivElement;
  const resumeWork = document.getElementById('resume-work') as HTMLDivElement;
  const resumeSkills = document.getElementById('resume-skills') as HTMLDivElement;
  const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

  // Default values (optional for initial state)
  const defaultName = 'Ahmed Raza';
  const defaultEmail = 'Ahmed@example.com';
  const defaultEducation = 'Bachelor of Science in Computer Science';
  const defaultWorkExperience = 'Freelance developer 1+ years';
  const defaultSkills = 'HTML, CSS, TAILWIND, JAVASCRIPT, TYPESCRIPT, REACT, NEXT.JS';

  // Function to initialize resume with default values
  const initializeResume = () => {
    resumeName.textContent = `Name: ${defaultName}`;
    resumeEmail.textContent = `Email: ${defaultEmail}`;
    resumeEducation.textContent = `Education: ${defaultEducation}`;
    resumeWork.textContent = `Work Experience: ${defaultWorkExperience}`;
    resumeSkills.textContent = `Skills: ${defaultSkills}`;
    
    (document.getElementById('name') as HTMLInputElement).value = defaultName;
    (document.getElementById('email') as HTMLInputElement).value = defaultEmail;
    (document.getElementById('education') as HTMLInputElement).value = defaultEducation;
    (document.getElementById('work-experience') as HTMLTextAreaElement).value = defaultWorkExperience;
    (document.getElementById('skills') as HTMLInputElement).value = defaultSkills;
  };

  // Function to update resume with form values
  const updateResume = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;

    // Set the text of the resume sections with the input values
    resumeName.textContent = `Name: ${name}`;
    resumeEmail.textContent = `Email: ${email}`;
    resumeEducation.textContent = `Education: ${education}`;
    resumeWork.textContent = `Work Experience: ${workExperience}`;
    skills: skillsInput.value.split(",").map(skill => skill.trim())
    
    // Show the generated resume section
    resumeOutput.style.display = 'block';
  };

  // Handle form submission
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    updateResume();
  });

  // Make resume sections editable
  const makeEditable = (element: HTMLDivElement) => {
    element.addEventListener('blur', () => {
      const content = element.textContent?.replace(/^.*?: /, '') || '';
      const fieldId = element.id.replace('resume-', '');
      const inputElement = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement;
      if (inputElement) {
        inputElement.value = content;
      }
    });
  };

  // Initialize resume with default values
  initializeResume();

  // Attach editable functionality to resume fields
  makeEditable(resumeName);
  makeEditable(resumeEmail);
  makeEditable(resumeEducation);
  makeEditable(resumeWork);
  makeEditable(resumeSkills);
});
