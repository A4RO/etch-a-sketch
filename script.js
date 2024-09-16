gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        newDiv = document.createElement("div");    
        newDiv.setAttribute("class", "grid-box"); 
        gridContainer.appendChild(newDiv);
        if(i % 2 === 0) {
            newDiv.style = "background-color: red";
        }
        else {
            newDiv.style = "background-color: blue";
        }
        //Box width and height should be container's size divided by amount of boxes
        newDiv.style = `width: ${700/16}px; height: ${700/16}px; background-color: red;`
    }
}