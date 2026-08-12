const activeBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

activeBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
})