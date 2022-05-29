const navbar = document.querySelector('.page-header');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

function changeClass(){
      navbar.classList.add('nav-active')
    };
window.onload = function(){
    document.querySelector('.page-header').addEventListener( 'click', changeClass);
};
