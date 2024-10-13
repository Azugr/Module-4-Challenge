// Select the main element and the back button element
const mainElement = document.querySelector('main');
const footerElement = document.querySelector('footer');
const backButton = document.getElementById('back');

// Function to create a blog post element and append it to the DOM
function createPostElement(post) {
    // Create the elements for the blog post
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const blockquote = document.createElement('blockquote');
    const author = document.createElement('p');

    // Set the content of the blog post
    h2.textContent = post.title;
    blockquote.textContent = post.content;
    author.textContent = `Posted by: ${post.username}`;

    // Append the elements to the article
    article.appendChild(h2);
    article.appendChild(blockquote);
    article.appendChild(author);

    // Append the article to the main element
    mainElement.appendChild(article);
}

// Function to handle the case where there are no blog posts
function noPostsMessage() {
    // Check if the message already exists
    const existingMessage = document.getElementById('no-posts-message');
    if (!existingMessage) {
        const message = document.createElement('p');
        message.textContent = 'No blog posts yet...';
        message.id = 'no-posts-message';  // Add an ID to target with CSS

        // Append the message to the no-posts-message-container instead
        const messageContainer = document.getElementById('no-posts-message-container');
        messageContainer.appendChild(message);
    }
}

// Function to render the list of blog posts
function renderBlogList() {
    // Get the posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        // If there are no posts, show a message
        noPostsMessage();
    } else {
        // Loop through the posts and create a post element for each one
        posts.forEach(post => createPostElement(post));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Call the `renderBlogList` function to display the posts (if applicable)
    renderBlogList(); 

    const toggleButton = document.getElementById('toggle'); // Ensure the ID matches

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Correct method
        
        // Change the button text based on the mode
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️ '; // Update icon/text
        } else {
            toggleButton.textContent = '🌙 '; // Update icon/text
        }
    });
    
    // Redirect to the home page when the back button is clicked
    backButton.addEventListener('click', () => {
        redirectPage(); // This function should be defined to handle the redirection
    });
});


