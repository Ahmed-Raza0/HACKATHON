// script.ts
// Get the toggle button and skills list element
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
// Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
// Initially hide the skills section (optional)
skillsList.style.display = 'none';
toggleButton.textContent = 'Show Skills';
