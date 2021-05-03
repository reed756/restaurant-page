function pageLoad() {

    let content = document.querySelector('.content');
    let image = document.createElement('img');
    let heading = document.createElement('h1');
    let text = document.createElement('p');

    image.src = "http://www.wingwing.co.uk/wp-content/uploads/2017/05/Signature-Large-Wings_R-1600x1156.jpg";
    heading.innerText = "Wing-wing voted the greatest chicken wings of all time";
    text.innerText = "This is the greatest fried chicken restaurant of all time.";

    content.appendChild(image);
    content.appendChild(heading);
    content.appendChild(text);    

}

export { pageLoad }