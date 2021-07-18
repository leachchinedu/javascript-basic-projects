const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const colorText = document.querySelector(".color")
const body = document.querySelector("body")

btn.addEventListener("click", function() {
    let hexCode = "#";
    while(hexCode.length < 7)  {
        const randomNumber = Math.floor(Math.random() * hex.length);
        hexCode += hex[randomNumber];
    }
    
    colorText.innerText = hexCode;
    body.style.backgroundColor = hexCode;
})