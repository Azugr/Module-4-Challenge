// Select the form element
const form = document.getElementById('blogForm');
const errorElement = document.getElementById('error'); // Select the error message element

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form inputs
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate the form data - Check if all fields are filled
    if (!username || !title || !content) {
        // Display an error message if any fields are missing
        errorElement.textContent = 'Please complete all fields!';
        errorElement.style.display = 'block'; // Show the error message
        return; // Stop the function from running further if validation fails
    }

    // If validation passes, hide the error message
    errorElement.style.display = 'none';

    // Create an object for the blog post
    const blogPost = {
        username,
        title,
        content
    };

    // Get existing blog posts from localStorage or initialize an empty array
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Add the new blog post to the array
    posts.push(blogPost);

    // Store the updated array back in localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to the blog page
    redirectPage(); // Assuming this function exists in logic.js
}

// Add an event listener to the form on submit
form.addEventListener('submit', handleFormSubmit);
