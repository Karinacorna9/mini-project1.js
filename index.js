fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersContainer = document.getElementById('users-container');

        users.forEach((user, index) => {
            const userContainer = document.createElement('div');
            userContainer.classList.add('user-container');

            const userInfo = document.createElement('p');
            userInfo.textContent = `ID: ${user.id}, Name: ${user.name}`;
            userContainer.appendChild(userInfo);

            const userDetailsButton = document.createElement('a');
            userDetailsButton.href = `user-details.html?userId=${user.id}`;
            userDetailsButton.textContent = 'Details';
            userDetailsButton.classList.add('user-details-button');
            userContainer.appendChild(userDetailsButton);

            usersContainer.appendChild(userContainer);
        });
    });