// const dropdownFunction = require('dropdown-menu')
// import dropdownFunction from "../node_modules/"
function triggerDropdownMenu(dropdown) {
    const button = dropdown.querySelectorAll('button')[0];
    const menu = dropdown.querySelectorAll('ul')[0]

    button.addEventListener('click', () => {
        menu.classList.toggle('show');
    })
};


const dropdown = document.querySelectorAll('.dropdown')[0];

triggerDropdownMenu(dropdown);
