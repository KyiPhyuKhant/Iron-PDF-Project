// Get the dropdown element
var dropdown = document.querySelector('.nav-item.dropdown');

// Add event listeners for mouseenter and mouseleave
dropdown.addEventListener('mouseenter', showDropdownMenu);
dropdown.addEventListener('mouseleave', hideDropdownMenu);

// Function to show the dropdown menu
function showDropdownMenu() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
}

// Function to hide the dropdown menu
function hideDropdownMenu() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
}
