var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
// backdrop.style.display = 'block';
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');//list all the buttons with the class plan
// console.dir(selectPlanButton);
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';//this will overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    console.log("hii");
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
});

