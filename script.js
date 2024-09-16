gridContainer = document.querySelector("#grid-container");

createGrid(16);

btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let size = 0;
    while(size > 100 || size <= 0) {
        size = prompt("Enter number of squares per side");
    }
    gridContainer.remove();
    body = document.querySelector("body");
    gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "grid-container");
    body.appendChild(gridContainer);
    createGrid(size);
});

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            newDiv = document.createElement("div");    
            newDiv.setAttribute("class", "grid-box"); 
            gridContainer.appendChild(newDiv);
            //Box width and height should be container's size divided by amount of boxes
            newDiv.style = `width: ${700/size}px; height: ${700/size}px; background-color: red; opacity: 1;`
            newDiv.addEventListener("mouseover", function(e) {
                console.log(e);
                color = randomColor();
                e.target.style.backgroundColor = color;
                e.target.style.opacity -= 0.1;
                console.log(e.target.style.opacity);
            }) 
        }
    }
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}