import { pageLoad } from './pageload.js'
import { contactLoad } from './contact.js'
import { menuLoad } from './menu.js'

pageLoad();

let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');
let content = document.querySelector('.content');
home.addEventListener('click', tabSwitch3);
menu.addEventListener('click', tabSwitch2);
contact.addEventListener('click', tabSwitch1);

function tabSwitch1() {
    content.innerHTML = "";
    contactLoad();
    let home = document.querySelector('.home');
    let menu = document.querySelector('.menu');
    let contact = document.querySelector('.contact');
    home.addEventListener('click', tabSwitch3);
    menu.addEventListener('click', tabSwitch2);
    contact.addEventListener('click', tabSwitch1);
}

function tabSwitch2() {
    content.innerHTML = "";
    menuLoad();
    let home = document.querySelector('.home');
    let menu = document.querySelector('.menu');
    let contact = document.querySelector('.contact');
    home.addEventListener('click', tabSwitch3);
    menu.addEventListener('click', tabSwitch2);
    contact.addEventListener('click', tabSwitch1);
}

function tabSwitch3() {
    content.innerHTML = "";
    pageLoad();
    let home = document.querySelector('.home');
    let menu = document.querySelector('.menu');
    let contact = document.querySelector('.contact');
    home.addEventListener('click', tabSwitch3);
    menu.addEventListener('click', tabSwitch2);
    contact.addEventListener('click', tabSwitch1);
}