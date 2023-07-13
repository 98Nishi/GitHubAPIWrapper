

const userNameInput = document.getElementById('userName');
const showDetails = document.getElementById('showDetails');
const profileInfoDiv = document.getElementById('profileInfo');
const reposInfoDiv = document.getElementById('repoInfo');

// using async and await
showDetails.addEventListener('click', async () => {
    const userName = userNameInput.value;

    //request the data from server: fetch api
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    showProfile(data);
    showReposInfo(userName);
})

function showProfile(data) {
  
    profileInfoDiv.innerHTML = `<div class="card">
        <div class="card-img">
            <img src=${data.avatar_url} alt=${data.name}>
        </div>
        <div class="card-body">
            <div class="card-title">${data.name}</div>
            <div class="card-subHeading">${data.login}</div>
            <div class="card-text">
                <p>${data.bio}</p>
                <p>${data.followers} followers ${data.following} following

                <button>
                        <a href=${data.html_url}>
                         Checkout Profile
                        </a>
                </button>
            </div>
        </div>
    </div>`
}


async function showReposInfo(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`)
    const projects = await res.json();
    
    for (let i = 0; i < projects.length; i++) {
        reposInfoDiv.innerHTML += `<div class="card">
                <div class="card-body">
                    <div class="card-title">${projects[i].name}</div>
                    <div class="card-subHeading">${projects[i].language}</div>
                    <div class="card-text">
                        <button>
                            <a href=${projects[i].html_url}>
                                Check Repository
                            </a>
                        </button>
                    </div>
                </div>
            </div>`
    }
}















