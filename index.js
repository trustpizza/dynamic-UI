// const dropdownFunction = require('dropdown-menu')
import dropdownFunction from "./node_modules/dropdown-menu-trustpizza/dropdown.js"
// import dropdownFunction from "../node_modules/"
console.log(dropdownFunction)

const dropdown = document.querySelectorAll('.dropdown')[0];

dropdownFunction(dropdown);
