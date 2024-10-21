// Get the toggle button and skills list element
var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
// Function to toggle the visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
// Initially hide the skills section
skillsList.style.display = 'none';
toggleButton.textContent = 'Show Skills';
// Get the navigation toggle button and nav list
var navToggle = document.getElementById('nav-toggle');
var navList = document.getElementById('nav-list');
// Function to toggle the navigation menu for mobile
navToggle.addEventListener('click', function () {
    navList.classList.toggle('nav-active');
    // Toggle display for mobile
    if (navList.classList.contains('nav-active')) {
        navList.style.display = 'flex'; // Show the nav items
    }
    else {
        navList.style.display = 'none'; // Hide them
    }
});
