function openNav(){
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.width = "350px";
    document.body.style.backgroundColor = "rgb(0,0,0,0,4)";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.width = "0";
    document.body.style.backgroundColor = "white";
}



document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("click", function () {
            this.classList.toggle("active");

            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});
