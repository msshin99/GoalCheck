
const moMenuButton = document.querySelector('header nav .mo-menu'); 
const moOpenMenu = document.querySelector('header .mo-open-menu'); 
const closeButton = document.querySelector('header .mo-open-menu .close'); 


function openMobileMenu() {

    if (moOpenMenu) {
        moOpenMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeMobileMenu() {
    if (moOpenMenu) {
        moOpenMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    if (moMenuButton) {
        moMenuButton.addEventListener('click', openMobileMenu);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeMobileMenu);
    }
});