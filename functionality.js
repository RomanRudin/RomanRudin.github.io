function themeChanger(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'blue' : currentTheme === 'blue' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
}

function headerSkiping(){
    let img = document.querySelector("#header-img")
    scrollTo({left:0, top:+(img.offsetHeight * 0.9), behavior: "smooth"})
}

function shadowChanging(element) {
}

themeChanger()
const toggleThemeBtn = document.querySelector('#toggle-theme');
toggleThemeBtn.addEventListener('click', themeChanger);

const headerSkipper = document.querySelector('#toggle-theme');
headerSkipper.addEventListener("keypress", headerSkiping)
headerSkipper.addEventListener("mouseleave", headerSkiping)

const activeElements = document.querySelectorAll('a')
activeElements.forEach(element => {
    element.addEventListener('mouseover', function() {
        shadowChanging(element)
    })
});