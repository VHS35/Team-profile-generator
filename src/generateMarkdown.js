function generateManager(manager) {
    return `
    <div class ="card">
        <div class ="container">
            <img src ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <h4> ${manager.getRole()} </h4>
            <h3> ${manager.getName()} </h3>
        </div>    
            <p> ID# ${manager.getID()} </p>
            <p>Email: <a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()} </a></p>
            <p> Office #${manager.officeNumber()} </p>
        </div>
    </div>
    `
}

function generateEngineer(engineer) {
    return `
    <div class ="card">
        <div class ="container">
            <img src ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <h4> ${engineer.getRole()} </h4>
            <h3> ${engineer.getName()} </h3>
        </div>    
            <p> ID# ${engineer.getID()} </p>
            <p>Email: <a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()} </a></p>
            <p> Office #${engineer.gitHub()} </p>
        </div>
    </div>
    `
}

function generateIntern(intern) {
    return `
    <div class ="card">
        <div class ="container">
            <img src ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <h4> ${intern.getRole()} </h4>
            <h3> ${intern.getName()} </h3>
        </div>    
            <p> ID# ${intern.getID()} </p>
            <p>Email: <a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()} </a></p>
            <p> Office #${intern.school()} </p>
        </div>
    </div>
    `
}