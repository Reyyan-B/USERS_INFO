const usersAPI = "https://jsonplaceholder.typicode.com/users";
const usersList = document.querySelector(".users_list");
const userBox = document.querySelector(".user_box");

async function getUsersNamesId() {
    const response = await fetch(usersAPI);
    const data = await response.json();

    data.forEach(user => {
        const name = document.createElement("h2");
        name.classList.add("user_name");
        name.textContent = user.name;

        const id = document.createElement("h3");
        id.classList.add("user_id");
        id.textContent = `ID: ${user.id}`;

        const userBox = document.createElement("div");
        userBox.classList.add("user_box");

        userBox.append(name, id);
        usersList.append(userBox);
    });
}

getUsersNamesId();


