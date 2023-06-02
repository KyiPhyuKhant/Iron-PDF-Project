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


// Added effect for li
var lis = document.querySelectorAll('.coming_wrap-list li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        var span = this.querySelector('p');
        span.style.color = '#f00'; // Change the color to red
    });

    lis[i].addEventListener('mouseleave', function () {
        var span = this.querySelector('p');
        span.style.color = '#fff'; // Change the color back to the original color
    });
}



// Get all the cards using querySelectorAll
const cards = document.querySelectorAll('.card');

// Add event listeners to each card
cards.forEach(card => {
    // Add event listener for mouseover event
    card.addEventListener('mouseover', () => {
        // Find the span element inside the card
        const span = card.querySelector('span');
        // Add a class to the span element to apply the effect
        span.classList.add('hover-effect');
    });

    // Add event listener for mouseout event
    card.addEventListener('mouseout', () => {
        // Find the span element inside the card
        const span = card.querySelector('span');
        // Remove the class from the span element to remove the effect
        span.classList.remove('hover-effect');
    });
});


const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
  card.classList.add('hovered');
});

card.addEventListener('mouseleave', () => {
  card.classList.remove('hovered');
});
