document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#username');
    const profilePictureElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const profileLinkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/ogiansouza')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            profilePictureElement.src = json.avatar_url;
            repositoriosElement.innerText = json.public_repos;
            seguidoresElement.innerText = json.followers;
            seguindoElement.innerText = json.following;
            profileLinkElement.href = json.html_url;
        })
})