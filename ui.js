class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" class="img-fluid mb-2">
                <a href="${user.html_url
                }" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge bg-warning">Public Repos : ${user.Public_repos}</span>
                <span class="badge bg-info">Public Gists : ${user.Public_gists}</span>
                <span class="badge bg-light">Followers : ${user.followers}</span>
                <span class="badge bg-dark">Following : ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company : ${user.company}</li>
                    <li class="list-group-item">Websit/Blog : ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Member Since : ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>    `
    }

    showRepos(repos) {
        let output = '';
    
        repos.forEach(function(repo) {
          output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge bg-secondary">Stars: ${repo.stargazers_count}</span>
                <span class="badge bg-primary">Watchers: ${repo.watchers_count}</span>
                <span class="badge bg-success">Forks: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
          `;
        });
    
        // Output repos
        document.getElementById('repos').innerHTML = output;
      }
    //Show Profile :
    showAlert(message,className){
        //Clear any remaining alert:
        this.clearAlert();
        //create div :
        const div = document.createElement('div');
        //add classes :
        div.className = className;
        //add text:
        div.appendChild(document.createTextNode(message));
        //get parent 
        const container = document.querySelector(".searchContainer")
        //get search
        const search = document.querySelector('.search')
        //Insert alert :
        container.insertBefore(div,search)

        //Timeout after 3 sec :
        setTimeout(()=>{
            this.clearAlert();
        },3000)

    }

    //Clear Alert message :
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Clear Profile:
    clearProfile(){
        this.profile.innerHTML = "";
    }
}