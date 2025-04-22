const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.innerHTML = savedTheme === 'dark-mode' 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode', !isDarkMode);

  // Update button icon
  themeToggle.innerHTML = isDarkMode 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';

  // Save theme to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});