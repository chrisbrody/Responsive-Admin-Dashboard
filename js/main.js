const sideMenu = document.querySelector('aside');
const openBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});
