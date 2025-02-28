const btn = document.querySelector("button");
const message = document.querySelector("p");

btn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then (responsive => responsive.json())
        .then (data => message.textContent = data.activity);
});