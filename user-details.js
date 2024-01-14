const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

if (!userId) {
    console.error('User ID not provided.');
} else {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetailsContainer = document.getElementById('user-details-container');

            const userInfo = document.createElement('div');
            userInfo.classList.add('user-info');

            const name = document.createElement('h2');
            name.textContent = user.name;

            const email = document.createElement('p');
            email.textContent = `Email: ${user.email}`;
            userInfo.appendChild(name);
            userInfo.appendChild(email);
            userDetailsContainer.appendChild(userInfo);
        });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const userPostsContainer = document.getElementById('user-posts-container');

            posts.forEach(post => {
                const postContainer = document.createElement('div');
                postContainer.classList.add('post-container');

                const postInfo = document.createElement('p');
                postInfo.textContent = `ID: ${post.id}, Title: ${post.title}`;
                postContainer.appendChild(postInfo);

                const postDetailsButton = document.createElement('a');
                postDetailsButton.href = `post-details.html?postId=${post.id}`;
                postDetailsButton.textContent = 'Details';
                postDetailsButton.classList.add('post-details-button');
                postContainer.appendChild(postDetailsButton);

                userPostsContainer.appendChild(postContainer);
            });
        });
}