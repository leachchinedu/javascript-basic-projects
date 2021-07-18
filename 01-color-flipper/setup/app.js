const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const colorText = document.querySelector(".color")
const body = document.querySelector("body")

btn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomNumber];

    colorText.innerHTML = randomColor;
    body.style.backgroundColor = randomColor;
})