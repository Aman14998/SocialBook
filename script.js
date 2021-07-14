function settingsMenuToggle() {  
    const settingsMenu = document.querySelector('.navBar__settings-Menu');
    settingsMenu.classList.toggle('navBar__settings-Menu__height');
} 

const darkBtn = document.getElementById('darkBtn');
darkBtn.onclick = function() {
    darkBtn.classList.toggle('darkBtnOn');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
}

if(localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('darkBtnOn');
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('darkBtnOn');
    document.body.classList.add('dark-theme');
}
else {
    localStorage.setItem('theme', 'light');
}

localStorage.setItem('theme', 'dark');                        //localstorage with name:theme and value:dark
localStorage.getItem('theme');

