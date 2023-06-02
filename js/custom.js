// Get the dropdown element
var dropdown = document.querySelector('.nav-item.dropdown');
dropdown.addEventListener('mouseenter', showDropdownMenu);
dropdown.addEventListener('mouseleave', hideDropdownMenu);
function showDropdownMenu() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
}
function hideDropdownMenu() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
}


// Added effect for li
var lis = document.querySelectorAll('.coming_wrap-list li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        var span = this.querySelector('p');
        span.style.color = '#f00';
    });

    lis[i].addEventListener('mouseleave', function () {
        var span = this.querySelector('p');
        span.style.color = '#fff';
    });
}



// Get all the cards using querySelectorAll
const cards = document.querySelectorAll('.card');
// Add event listeners to each card
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const span = card.querySelector('span');
        span.classList.add('hover-effect');
    });

    card.addEventListener('mouseout', () => {
        const span = card.querySelector('span');
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
