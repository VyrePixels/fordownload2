const dropdownbutton = document.getElementById("choosel");
const dropdownmenu = document.getElementById("menu");

const cacbutton = document.getElementById("cac");
const cacbox = document.getElementById("cacbox");
const closecac = document.getElementById("closecac");

dropdownbutton.addEventListener("click", function() {

    if (dropdownmenu.style.display === "none") {
        dropdownmenu.style.display = "block";
    } else {
        dropdownmenu.style.display = "none";
    }
});

const percentagetext = document.getElementById("percentage");

const labeleddivs = document.getElementById("labeleddivs");
if (labeleddivs.checked) {
    console.log("checked")
}