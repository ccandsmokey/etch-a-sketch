const container = document.querySelector(".container")

function createDivs(num) {
    for (i = 0; i < num; i++) {
       const div = document.createElement("div");
       div.classList.add("grid")
       div.style.flex = `0 0 ${100 / Math.sqrt(num)}%`;
       container.appendChild(div)

       div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "rgb(18, 64, 118)";
       });
    }

}

createDivs(256)

function newGridSize () {
    let newSize = prompt("How many squares per side would you like? (max 100)", );
    while(newSize > 100) {
        newSize = prompt("How many squares per side would you like? (max 100)", );
    }
    squaresASide = newSize * newSize
    container.innerHTML = ""
    createDivs(squaresASide)
}





