const hamBtn = document.getElementById("hamburger");

hamBtn.addEventListener("click", function(event) {
    let expandedMenu = document.querySelector(".expanded-sidebar");
    if (expandedMenu.style.display === "none") {
        expandedMenu.style.display = "flex";
    } else {
        expandedMenu.style.display = "none";
    }
});