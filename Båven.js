function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "inline") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "inline";
    }
}
function toggleDropdown2() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}