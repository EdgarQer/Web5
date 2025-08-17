const btn = document.querySelector('.go-top');

function toggleGoTop() {
    const scrollH = document.documentElement.scrollHeight;
    const atBottom = window.innerHeight + window.scrollY >= scrollH - 1;
    btn.classList.toggle('show', atBottom);
}

btn.addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleGoTop);
window.addEventListener('resize', toggleGoTop);
toggleGoTop();
    
function syncSpacer() {
    const footer = document.querySelector('footer');
    const spacer = document.querySelector('.spacer');
    if (footer && spacer) {
      spacer.style.height = footer.offsetHeight + 'px';
    }
}
window.addEventListener('load', syncSpacer);
window.addEventListener('resize', syncSpacer);