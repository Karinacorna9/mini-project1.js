const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

if (!postId) {
    console.error('Post ID not provided.');
} else {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetailsContainer = document.getElementById('post-details-container');

            const postInfo = document.createElement('div');
            postInfo.classList.add('post-info');

            const title = document.createElement('h2');
            title.textContent = post.title;

            const body = document.createElement('p');
            body.textContent = post.body;

            postInfo.appendChild(title);
            postInfo.appendChild(body);
            postDetailsContainer.appendChild(postInfo);
        });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            const commentsContainer = document.getElementById('post-comments-container');

            comments.forEach(comment => {
                const commentContainer = document.createElement('div');
                commentContainer.classList.add('comment-container');

                const commentInfo = document.createElement('div');
                commentInfo.classList.add('comment-info');

                const name = document.createElement('h3');
                name.textContent = comment.name;

                const email = document.createElement('p');
                email.textContent = comment.email;

                const body = document.createElement('p');
                body.textContent = comment.body;

                commentInfo.appendChild(name);
                commentInfo.appendChild(email);
                commentInfo.appendChild(body);

                commentContainer.appendChild(commentInfo);
                commentsContainer.appendChild(commentContainer);
            });
        });
}