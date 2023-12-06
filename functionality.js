import projects from './data/projects.json' assert { type: 'json' };

function themeChanger(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'blue' : currentTheme === 'blue' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}

function headerSkiping(){
    let img = document.querySelector("#header-img");
    scrollTo({left:0, top:+(img.offsetHeight * 0.9), behavior: "smooth"});
}

function shadowChanging(element) {
}

themeChanger()
const toggleThemeBtn = document.querySelector('#toggle-theme');
toggleThemeBtn.addEventListener('click', themeChanger);

const headerSkipper = document.querySelector('#toggle-theme');
headerSkipper.addEventListener("keypress", headerSkiping);

for (let project in projects){
    let card = document.getElementById(project);
    let front = document.getElementById(project + "-front");
    let back = document.getElementById(project + "-back");

    front.addEventListener("mouseover", ()=>{
        card.style.transform = "rotateY(180deg)"
    })
    back.addEventListener("mouseout", ()=>{
        card.style.transform = "rotateY(0deg)"
    })
}