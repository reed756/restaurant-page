function menuLoad() {

    let content = document.querySelector('.content');
    let menu = document.createElement("nav");
    let ulist = document.createElement("ul");
    let ilist1 = document.createElement("li")
    let ilist2 = document.createElement("li")
    let ilist3 = document.createElement("li")
    let image = document.createElement('img');
    let heading = document.createElement('h1');
    let text = document.createElement('p');

    image.src = "https://lh3.googleusercontent.com/proxy/10RD_uVY_4VJPwJwafwjx8TubWY40QqNlLe_iU8B1CuCL6_EUlBEBdKaPu-ByUSOyqZNtid-p5Ddatf0kqtXWTGOrwkk8h8o82mbfhooqGClgb7oON-EPky-SA";
    heading.innerText = "Menu";
    text.innerText = "We only have one thing on the menu here and it's called deep fried Chicken Wings covered in Soy & Garlic";
    ilist1.innerText = "HOME";
    ilist2.innerText = "MENU";
    ilist3.innerText = "CONTACT";
    ilist1.classList.add('home');
    ilist2.classList.add('menu');
    ilist3.classList.add('contact');

    ulist.appendChild(ilist1);
    ulist.appendChild(ilist2);
    ulist.appendChild(ilist3);
    menu.appendChild(ulist);
    content.appendChild(menu);
    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(text);    

}

export { menuLoad }