// Select the main element and the back button element
const mainElement = document.querySelector('main');
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
    const message = document.createElement('p');
    message.textContent = 'No blog posts yet...';
    mainElement.appendChild(message);
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

// Call the `renderBlogList` function to display the posts
renderBlogList();

// Redirect to the home page when the back button is clicked
backButton.addEventListener('click', () => {
    redirectPage(); // This function is in logic.js and redirects to the home page
});
