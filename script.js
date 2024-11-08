var button = document.getElementById("toggle skills") as HTMLButtonElement
var skills = document.getElementById("skills") as HTMLElement
button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
