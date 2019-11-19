const hamBtn = document.getElementById("hamburger");
const expandedMenu = document.querySelector(".expanded-sidebar");
let expanded = false;

hamBtn.addEventListener("click", function(event) {
    if (expanded === false) {
        expandedMenu.style.width = "20%";
        hamBtn.innerHTML = '<i class="fas fa-times"></i>';
        hamBtn.style.transform = 'scale(1.25,1.25)';
        expanded = true;
    } else {
        expandedMenu.style.width = "0";
        hamBtn.innerHTML = '<i class="fas fa-bars"></i>';
        hamBtn.style.transform = 'scale(1.75,1)';
        expanded = false;
    }
});