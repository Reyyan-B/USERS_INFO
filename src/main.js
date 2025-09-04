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
        userBox.dataset.id = user.id; 

        userBox.append(name, id);
        usersList.append(userBox);
    });
}

getUsersNamesId();

usersList.addEventListener("click", async (e) => {
    const box = e.target.closest(".user_box");
    if (box) {
        const userId = box.dataset.id;
        console.log(userId);
        const response = await fetch(`${usersAPI}/${userId}`);
        const user = await response.json();

        document.querySelector("#popup-1 .id").textContent = `ID: ${user.id}`;
        document.querySelector("#popup-1 .name").textContent = `Name: ${user.name}`;
        document.querySelector("#popup-1 .username").textContent = `Username: ${user.username}`;
        document.querySelector("#popup-1 .email").textContent = `Email: ${user.email}`;
        const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
        document.querySelector("#popup-1 .address-text").textContent = `Address: ${fullAddress}`;
        currentAddress = fullAddress;

        // Show popup
        document.getElementById("popup-1").classList.add("active");
    }
});

document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("popup-1").classList.remove("active");
});

document.getElementById("map-icon").addEventListener("click", () =>{
    if (currentAddress) {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentAddress)}`;
        window.open(url,"_blank");
    }
});


