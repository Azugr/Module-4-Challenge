// Select the main element and the back button element
const mainElement = document.querySelector('main');
const footerElement = document.querySelector('footer');

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

    // Get the message container and make it visible if it hasn't already been displayed
    const messageContainer = document.getElementById('no-posts-message-container');
    if (messageContainer) {
        messageContainer.style.display = 'block';
    }
}

// Function to render the list of blog posts
function renderBlogList() {
    // Get the posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (!Array.isArray(posts)) {
        console.error('Invalid posts data in localStorage');
        return; // Exit the function if the data is invalid
    }
    
    if (posts.length === 0) {
        // If there are no posts, show a message
        noPostsMessage();
    } else {
        // Hide the 'no-posts-message-container' if there are posts
        const messageContainer = document.getElementById('no-posts-message-container');
        if (messageContainer) {
            messageContainer.style.display = 'none';
        }

        // Loop through the posts and create a post element for each one
        posts.forEach(post => createPostElement(post));
    }
}

// Define the redirect URL globally
const redirectURL = 'http://localhost:5500/index.html';

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back');
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            console.log('Back button clicked');
            // Use the globally defined redirectURL
            window.location.href = redirectURL;
        });
    } else {
        console.error('Back button not found!');
    }

    if (typeof renderBlogList === 'function') {
        renderBlogList(); 
    } else {
        console.error('renderBlogList function is not defined!');
    }
});
