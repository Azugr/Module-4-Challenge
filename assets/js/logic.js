// Select the toggle button
const toggleButton = document.getElementById('toggle');

// Function to apply light or dark mode based on the current mode
function applyMode(mode) {
  if (mode === 'dark-mode') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    toggleButton.textContent = '☀️'; // Set the button to Sun when in dark mode
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙'; // Set the button to Moon when in light mode
  }
}

// Function to toggle between light and dark mode
function toggle() {
  // Determine the current mode
  const isDarkMode = document.body.classList.contains('dark-mode');
  const newMode = isDarkMode ? 'light-mode' : 'dark-mode';

  // Apply the new mode
  applyMode(newMode);

  // Store the user's mode preference in localStorage
  localStorage.setItem('mode', newMode);
}

// Function to initialize the mode based on localStorage
function initializeMode() {
  const storedMode = localStorage.getItem('mode') || 'light-mode'; // Default to light mode if not set
  applyMode(storedMode);
}

// Event listener to toggle light/dark mode when the button is clicked
toggleButton.addEventListener('click', toggle);

// Initialize the mode when the page loads
initializeMode();

// Function to save new blog data to localStorage
function storeLocalStorage(newPost) {
  const posts = readLocalStorage(); // Read the existing posts
  posts.push(newPost); // Add the new post
  localStorage.setItem('posts', JSON.stringify(posts)); // Save the updated posts to localStorage
}

// Function to read blog data from localStorage
function readLocalStorage() {
  return JSON.parse(localStorage.getItem('posts')) || []; // Return an empty array if no posts are found
}

// Function to redirect to a different page
function redirectPage(url) {
  location.assign(url); // Use location.assign to redirect to the given URL
}
