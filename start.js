import aboutme from './data/aboutme.json' assert { type: 'json' };
import projects from './data/projects.json' assert { type: 'json' };
import current from './data/current.json' assert { type: 'json' };
import technologies from './data/technologies.json'  assert { type: 'json' };
import contacts from './data/contacts.json'  assert { type: 'json' };

function innerConstructor(id){
    let div = document.getElementById(id + "-section");
    return div;
}


function addAboutme(){
    let div = innerConstructor('aboutme');
    div.innerHTML += `<p class="aboutme text">${aboutme["text"]}</p>`;
}


function addTechnologies(){
    let div = innerConstructor('technologies');
    div.innerHTML += '<div id="technology-lang"></div>';
    let divTechnologyLang = document.getElementById("technology-lang");
    for (let tech in technologies["languages"]){
        divTechnologyLang.innerHTML += `<a href="${technologies["languages"][tech]["a"]}" class="active"><img class="technology-card active"  src="images/technologies/languages/${technologies["languages"][tech]["src"]}"></a>`;
    }
    div.innerHTML += '<div id="technology-framework"></div>';
    let divTechnologyFramework = document.getElementById("technology-framework");
    for (let tech in technologies["libraries"]){
        divTechnologyFramework.innerHTML += `<a href="${technologies["libraries"][tech]["a"]}" class="active"><img class="technology-card active"  src="images/technologies/frameworks/${technologies["libraries"][tech]["src"]}"></a>`;
    }
}


function addProjects() {
    let div = innerConstructor('projects');
    if (window.matchMedia('only screen and (max-width: 480px)').matches) {
        for (let project in projects){
            let enabled = projects[project]["enabled"] === "True" ? "": projects[project]["enabled"] === "False" ? " disabled": " private";
            div.innerHTML += `<div id="${project}" class="project-card active${enabled}"></div>`;
            let projectDiv = document.getElementById(project)
            projectDiv.innerHTML += `<a href="${projects[project]["a"]}"><img class="project project-img" src="images/projects/${projects[project]["img"]}"></a>`;
            projectDiv.innerHTML += `<h3 class="project small-title">${project}</h3>`;
            projectDiv.innerHTML += `<p class="project text">${projects[project]["p"]}</p>`;    
        }
    }
    else {
        for (let project in projects){
            let enabled = projects[project]["enabled"] === "True" ? "": projects[project]["enabled"] === "False" ? " disabled": " private";
            div.innerHTML += `<div id="${project}" class="project-card active${enabled}"></div>`;
            let projectDiv = document.getElementById(project)
            projectDiv.innerHTML += `<a href="${projects[project]["a"]}">`; 

            projectDiv.innerHTML += `<div id="${project}-front" class="project-card-front" style="background-image: url('images/projects/${projects[project]["img"]}')">`;
            projectDiv.innerHTML += `<h3 class="project small-title text-decorator">${project}</h3>`;
            projectDiv.innerHTML += `</div>`;

            projectDiv.innerHTML += `<div id="${project}-back" class="project-card-back" style="background-image: url('images/projects/${projects[project]["img"]}')">`;
            projectDiv.innerHTML += `<p class="project text text-decorator">${projects[project]["p"]}</p>`;
            projectDiv.innerHTML += `</div>`;

            projectDiv.innerHTML += '</a>';
        }
    }
}

function addCurrent() {
    let div = innerConstructor('current')
    div.innerHTML += `<a href="${current["a"]}"><img class="project current-img" src="images/projects/${current["img"]}"></a>`;
    div.innerHTML += `<h3 class="current small-title current">${current["name"]}</h3>`;
    div.innerHTML += `<p class="current text current">${current["p"]}</p>`;
}


function addContacts(){
    let div = innerConstructor('links')
    for (let link in contacts){
        div.innerHTML += `<a href="${contacts[link]}"><i class="fab fa-${link} icon active" title="${link}"></i></a>&nbsp;`;
    }
}


function start(){
    addAboutme();
    addTechnologies();
    addCurrent();
    addProjects();
    addContacts();
}

start()