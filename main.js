document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repos = document.getElementById('repos');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/gctoledo')
    .then(function(answer) {
        return answer.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerHTML = json.name;
        username.innerHTML = json.login;
        repos.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        link.href = json.html_url;
    })
})