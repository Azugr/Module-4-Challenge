// Wait for the DOM content to load before selecting elements and initializing features
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button
    const toggleButton = document.getElementById('toggle');

    // Ensure the toggle button exists before adding an event listener
    if (toggleButton) {
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

        // Add event listener to toggle light/dark mode when the button is clicked
        toggleButton.addEventListener('click', toggle);

        // Initialize the mode when the page loads
        initializeMode();
    } else {
        console.error("Toggle button with ID 'toggle' not found in the DOM.");
    }

    // Function to render blog posts from localStorage
    function renderBlogList() {
        const posts = readLocalStorage(); // Read the existing posts from localStorage
        const postsContainer = document.getElementById('posts-container'); // Get the container to display the posts
        const noPostsMessage = document.getElementById('no-posts-message-container'); // Get the "no posts" message element

        // Ensure the elements exist
        if (!postsContainer || !noPostsMessage) {
            console.error("One or more required elements ('posts-container', 'no-posts-message-container') are missing from the DOM.");
            return;
        }

        // Clear the previous content before rendering
        postsContainer.innerHTML = '';

        if (posts.length === 0) {
            // If there are no posts, display the "No blog posts yet..." message
            noPostsMessage.style.display = 'block';
        } else {
            // Hide the "No blog posts yet..." message
            noPostsMessage.style.display = 'none';

            // Loop through the posts and create elements to display them
            posts.forEach(post => {
                const postCard = document.createElement('article');
                postCard.classList.add('post-card');

                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;

                const postContent = document.createElement('p');
                postContent.textContent = post.content;

                const postAuthor = document.createElement('p');
                postAuthor.classList.add('posted-by');
                postAuthor.textContent = `Posted by: ${post.username}`;

                postCard.appendChild(postTitle);
                postCard.appendChild(postContent);
                postCard.appendChild(postAuthor);

                postsContainer.appendChild(postCard);
            });
        }
    }

    // Call the renderBlogList function to initialize blog post rendering
    renderBlogList();

    // Function to read blog data from localStorage
    function readLocalStorage() {
        return JSON.parse(localStorage.getItem('posts')) || []; // Return an empty array if no posts are found
    }
});
