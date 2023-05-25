import aboutme from './data/aboutme.json' assert { type: 'json' };
import projects from './data/projects.json' assert { type: 'json' };
import technologies from './data/technologies.json'  assert { type: 'json' };
import contacts from './data/contacts.json'  assert { type: 'json' };

function innerConstructor(id){
    let div = document.getElementById(id + "-section");
    return div;
}


function addAboutme(){
    let div = innerConstructor('aboutme');
    div.innerHTML += '<p class="aboutme text">' + aboutme["text"] + '</p>';
}


function addTechnologies(){
    let div = innerConstructor('technologies');
    div.innerHTML += '<div id="technology-lang"></div>';
    let divTechnologyLang = document.getElementById("technology-lang")
    for (let tech in technologies["languages"]){
        divTechnologyLang.innerHTML += '<a href="' + technologies["languages"][tech]["a"] + '" class="active"><img class="technology active"  src="images/technologies/languages/' + technologies["languages"][tech]["src"] + '"></a>'
    }
    div.innerHTML += '<div id="technology-framework"></div>';
    let divTechnologyFramework = document.getElementById("technology-framework")
    for (let tech in technologies["libraries"]){
        divTechnologyFramework.innerHTML += '<a href="' + technologies["libraries"][tech]["a"] + '" class="active"><img class="technology active"  src="images/technologies/frameworks/' + technologies["libraries"][tech]["src"] + '"></a>'
    }
}


function addProjects() {
    let div = innerConstructor('projects');
    for (let project in projects){
        div.innerHTML += '<div id="' + project + '" class="project-div"></div>';
        let projectDiv = document.getElementById(project)
        projectDiv.innerHTML += '<a href="' + projects[project]["a"] + '"><img class="project project-img active" src="images/projects/' + projects[project]["img"] +'"></a>';
        projectDiv.innerHTML += '<h4 class="project small-title">' + project + '</h4>';
        projectDiv.innerHTML += '<p class="project text">' + projects[project]["p"] + '</p>';
    }
}


function addContacts(){
    let div = innerConstructor('links')
    for (let link in contacts){
        div.innerHTML += '<a href="' + contacts[link] + '"><img src="images/contacts/' + link + '" title="' + link + '"></a>&nbsp;'
    }
}


function start(){
    addAboutme();
    addTechnologies();
    addProjects();
    addContacts();
}

start()