// Quando a página for rolada em 100 px
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("btn-topo").style.display = "block";
    } else {
        document.getElementById("btn-topo").style.display = "none";
    }
}

function topFunction() {

    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(topFunction);
        //velocidade da animação
        window.scrollTo(0, currentScroll - (currentScroll / 8));
    }
}

const btnMobile = document.getElementById('btn-mobile');

function ativarMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('ativar');
    const active = nav.classList.contains('ativar')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', ativarMenu);
btnMobile.addEventListener('touchstart', ativarMenu);