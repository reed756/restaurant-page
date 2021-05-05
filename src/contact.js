function contactLoad() {

    let content = document.querySelector('.content');
    let menu = document.createElement("nav");
    let ulist = document.createElement("ul");
    let ilist1 = document.createElement("li")
    let ilist2 = document.createElement("li")
    let ilist3 = document.createElement("li")
    let image = document.createElement('img');
    let heading = document.createElement('h1');
    let text = document.createElement('p');

    image.src = "https://www.technipages.com/wp-content/uploads/2016/05/iOS-Messages-App-Icon-1280x720.png";
    heading.innerText = "Contact Us";
    text.innerText = "You can get in touch with us via carrier pidgeon by sending it to Elthorne Park and we'll pick it up, cheers";
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

export { contactLoad }