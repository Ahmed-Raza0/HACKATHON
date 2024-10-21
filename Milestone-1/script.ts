// Get the toggle button and skills list element
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

// Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', () => {
  if (skillsList.style.display === 'none' || skillsList.style.display === '') {
    skillsList.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    skillsList.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});

// Initially hide the skills section
skillsList.style.display = 'none';
toggleButton.textContent = 'Show Skills';
