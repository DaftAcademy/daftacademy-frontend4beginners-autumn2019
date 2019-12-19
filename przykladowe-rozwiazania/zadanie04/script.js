// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');
    const menuButton = document.querySelector('.page-header__hamburger');
    menuButton.classList.toggle('page-header__hamburger--active');
});

// Connect animation to gallery image
const galeryImages = document.querySelectorAll('.gallery__item');

galeryImages.forEach(galleryImage => {
  galleryImage.addEventListener('mouseover', (e) => {
      galleryImage.classList.add('gallery__image--animate-forward')
  });
});



// Mark ticket as bought
const concerts = document.querySelector('#concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--buy-ticket')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
        // OR
        // buyTicketButton.replaceWith(haveFunText);
    }
});

// Log form data
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});
