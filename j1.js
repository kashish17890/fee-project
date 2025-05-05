
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');

for (let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-opened');
    });
}

const image = document.querySelector('.image'); 
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('.close-btn');

if (image && lightbox && closeBtn) {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}
