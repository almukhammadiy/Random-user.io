// This site created by Mukhammad
const url = "https://randomuser.me/api/",
    image = document.querySelector('#avatar'),
    nameDisplay = document.querySelector('#fullname'),
    username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    city = document.querySelector('#city'),
    btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    fetch(url)
        .then(handleError)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
})

function handleError(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then((parsedData) => {
        return parsedData.results[0]
    })
}

function updateProfile(data) {
    const fullName = data.name.first + ' ' + data.name.last;
    nameDisplay.innerText = fullName;
    image.src = data.picture.medium
    username.innerText = data.login.username
    email.innerText = data.email
    city.innerText = data.location.city
}

function printError(error) {
    console.log("Error: " + error)
}