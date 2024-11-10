 // Fetching necessary elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const gradYearInput = document.getElementById('grad-year') as HTMLInputElement;
const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

// Resume output fields
const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumeDegree = document.getElementById('resume-degree') as HTMLElement;
const resumeSchool = document.getElementById('resume-school') as HTMLElement;
const resumeGradYear = document.getElementById('resume-grad-year') as HTMLElement;
const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement;
const resumeSkills = document.getElementById('resume-skills') as HTMLElement;

// Buttons
const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
const shareResumeButton = document.getElementById('share-resume') as HTMLButtonElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Generate Resume functionality
generateResumeButton.addEventListener('click', () => {
    // Fill resume with input data
    resumeName.textContent = nameInput.value || 'Not provided';
    resumeEmail.textContent = emailInput.value || 'Not provided';
    resumeDegree.textContent = degreeInput.value || 'Not provided';
    resumeSchool.textContent = schoolInput.value || 'Not provided';
    resumeGradYear.textContent = gradYearInput.value || 'Not provided';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
    resumeSkills.textContent = skillsInput.value || 'Not provided';

    // Show the resume
    document.getElementById('resume')!.style.display = 'block';
});

// Generate unique URL
shareResumeButton.addEventListener('click', () => {
    const baseUrl = window.location.origin;
    const resumeId = btoa(`${nameInput.value}-${emailInput.value}`);
    const shareableUrl = `${baseUrl}?resumeId=${resumeId}`;

    alert(`Your unique resume URL: ${shareableUrl}`);
    navigator.clipboard.writeText(shareableUrl);  // Copy the URL to clipboard
});

// Download Resume as PDF
downloadPdfButton.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Fill PDF content
    doc.text(`Name: ${resumeName.textContent}`, 10, 10);
    doc.text(`Email: ${resumeEmail.textContent}`, 10, 20);
    doc.text(`Degree: ${resumeDegree.textContent}`, 10, 30);
    doc.text(`School: ${resumeSchool.textContent}`, 10, 40);
    doc.text(`Graduation Year: ${resumeGradYear.textContent}`, 10, 50);
    doc.text(`Work Experience: ${resumeWorkExperience.textContent}`, 10, 60);
    doc.text(`Skills: ${resumeSkills.textContent}`, 10, 70);

    // Save as PDF
    doc.save('resume.pdf');
});

// Load resume from URL if present
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('resumeId');

    if (resumeId) {
        const decodedId = atob(resumeId);
        const [name, email] = decodedId.split('-');

        // Populate the fields with decoded data
        nameInput.value = name;
        emailInput.value = email;

         
        alert(`Loaded resume for ${name} (${email})`);
        
             }
};
