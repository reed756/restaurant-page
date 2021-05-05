function pageLoad() {

    let content = document.querySelector('.content');
    let menu = document.createElement("nav");
    let ulist = document.createElement("ul");
    let ilist1 = document.createElement("li");
    let ilist2 = document.createElement("li");
    let ilist3 = document.createElement("li");
    let image = document.createElement('img');
    let heading = document.createElement('h1');
    let text = document.createElement('p');

    image.src = "https://www.fastsalehomes.co.uk/resources/whiteblue/selling-your-home/red_house.v1540203386.png";
    heading.innerText = "Wing-Wing";
    text.innerText = "This is the greatest fried chicken restaurant of all time. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
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

export { pageLoad }