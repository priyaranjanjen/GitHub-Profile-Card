let input = document.querySelector("#search"); // Target the input field by its ID

input.addEventListener("keydown", async function(event) { 
    if (event.key === "Enter") { // Check if Enter key is pressed
        event.preventDefault();
        let username = input.value;

        try {
            const rawData = await fetch(`https://api.github.com/users/${username}`);
            const finalData = await rawData.json();
            createUserCard(finalData);
        } catch (error) {
            alert("Failed to retrieve data");
        }
    }
});

function createUserCard(userData) {
    const card = document.querySelector(".card");

    card.innerHTML = `
        <div id="avtar">
            <img src="${userData.avatar_url}" alt="Avatar">
        </div>
        <div id="details">
            <h2 id="name">${userData.name}</h2>
            <p id="bio">${userData.bio}</p>
            <div id="span-elem">
                <span id ="followers">Followers: ${userData.followers}</span>
                <span id ="following">Following: ${userData.following}</span>
                <span id ="repo">Repo: ${userData.public_repos}</span>
                <span id ="twitter">Twitter: ${userData.twitter_username}</span>
                <span id ="location">Location: ${userData.location}</span>
            </div>
        </div>
    `;
}
