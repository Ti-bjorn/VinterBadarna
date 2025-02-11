function toggleDropdown3() {
    const dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
function toggleDropdown2() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function toggleDropdown(e) {
    e.preventDefault(); // Prevent the default link behavior
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("d-none"); // Toggle the Bootstrap 'd-none' class
  }