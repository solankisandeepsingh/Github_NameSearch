//intialised:
const github = new Github;

//Intiealised :
const ui = new UI;

//Search Input :
const searchUser = document.getElementById("searchUser");

//Search Input Event listner :
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== 0) {
        github.getUser(userText)
        .then(data => {
            // console.log(data)
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert("User Not Found", 'alert alert-danger')
            }
            else{
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else{
        //Clear Profile:
        ui.clearProfile();
    }
})
