document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const errorElement = document.getElementById('error');

    if (!form) {
        console.error("Form element with ID 'blogForm' is missing from the DOM");
        return;
    }
    if (!errorElement) {
        console.error("Error message element with ID 'error' is missing from the DOM");
        return;
    }

    form.addEventListener('submit', (event) => {
        console.log("hello")
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const username = document.getElementById('username')?.value.trim();
        const title = document.getElementById('title')?.value.trim();
        const content = document.getElementById('content')?.value.trim();

        // Validate inputs
        if (!username || !title || !content) {
            console.log("test")
            errorElement.textContent = 'Please complete the form.';
            errorElement.style.display = 'block';
            return;
        }

        // If all fields are filled, hide the error message
        errorElement.style.display = 'none';

        // Store the post in localStorage
        const blogPost = { username, title, content };
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(blogPost);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to blog page
        window.location.href = '/blog.html';
    });
});
