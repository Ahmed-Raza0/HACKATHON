// script.ts

document.addEventListener('DOMContentLoaded', () => {
    // Get the form and resume output elements
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeName = document.getElementById('resume-name') as HTMLDivElement;
    const resumeEmail = document.getElementById('resume-email') as HTMLDivElement;
    const resumeEducation = document.getElementById('resume-education') as HTMLDivElement;
    const resumeWork = document.getElementById('resume-work') as HTMLDivElement;
    const resumeSkills = document.getElementById('resume-skills') as HTMLDivElement;
  
    // Default values
    const defaultName = 'Ahmed RAza';
    const defaultEmail = 'Ahmed@example.com';
    const defaultEducation = 'Bachelor of Science in Computer Science';
    const defaultWorkExperience = 'Freelance developer 1+ years';
    const defaultSkills = 'HTML, CSS,TAILWIND, JAVASCRIPT, TYPESCRIPT, REACT, NEXT.JS';
  
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
  
    // Update resume with form values
    const updateResume = () => {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
  
      resumeName.textContent = `Name: ${name}`;
      resumeEmail.textContent = `Email: ${email}`;
      resumeEducation.textContent = `Education: ${education}`;
      resumeWork.textContent = `Work Experience: ${workExperience}`;
      resumeSkills.textContent = `Skills: ${skills}`;
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
  
    // Attach editable functionality
    makeEditable(resumeName);
    makeEditable(resumeEmail);
    makeEditable(resumeEducation);
    makeEditable(resumeWork);
    makeEditable(resumeSkills);
  });
  