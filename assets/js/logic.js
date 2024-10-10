// Function to toggle light/dark mode
const toggleModeButton = document.getElementById('toggleMode');

// Function to apply light or dark mode based on stored preference
function applyMode(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
}

// Function to toggle between light and dark mode
function toggleMode() {
  const currentMode = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  // Apply the new mode to the body
  applyMode(newMode);

  // Store the user's mode preference in local storage
  localStorage.setItem('mode', newMode);
}

// Add event listener to the toggle button
toggleModeButton.addEventListener('click', toggleMode);

// On page load, check localStorage for mode preference and apply it
const savedMode = localStorage.getItem('mode') || 'light'; // Default to light mode if not found
applyMode(savedMode);

// Function to read from localStorage and return the blog data
function readLocalStorage() {
  const storedPosts = localStorage.getItem('posts');
  return storedPosts ? JSON.parse(storedPosts) : []; // Return an empty array if no data exists
}

// Function to save new blog data to localStorage
function storeLocalStorage(newPost) {
  const posts = readLocalStorage(); // Read the existing posts
  posts.push(newPost); // Add the new post
  localStorage.setItem('posts', JSON.stringify(posts)); // Save the updated posts to localStorage
}

// Function to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url); // Use location.assign to redirect to the given URL
};
