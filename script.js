const btn = document.querySelector("button");
const message = document.querySelector("p");

const colors = ["red", "blue", "orange", "green", "lightblue", "blueviolet", "chartreuse", "cadetblue", "fuchsia", "greenyellow", "hotpink", "coral", "cornflowerblue"]

function getRandomNumber() {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
    return randomNumber;
  }

btn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then (responsive => responsive.json())
        .then (data => {
            message.textContent = data.activity;
            btn.style.backgroundColor = colors[getRandomNumber()];
        });
});