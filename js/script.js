/*=============== toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll section active link ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
    /*=============== sticky navbar ===============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove toggle icon and navbar when click navbar link (scroll) ===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=============== croll reveal ===============*/
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .about-content p, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.social-media', { origin: 'left' });
ScrollReveal().reveal('.btn', { origin: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['Sua piscina em boas mãos!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

/*=============== Formulario ===============*/

const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const assuntoInput = document.querySelector("#assunto")
const contotaInput = document.querySelector("#numero")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verificar se o nome esta vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;

    }

      // verificar se o contato esta vazio
      if(contotaInput.value === ""){
        alert("Por favor, preencha o numero de telefone");
        return;

    }

    // Verifica se a mensagem esta preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreve uma mensagem");
        return;

    }

     // Verifica se o assunto esta preenchido
     if(assuntoInput.value === ""){
        alert("Por favor, preencha o assunto");
        return;

    }

      // verifica se o email esta preenchido e se valida
      if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;

    }

    // Se todo os campos estiverem corretamente preenchidos, envie o form.
    form.submit();
});

// funçao que valida o e-mail
function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true
    }
    return false
}

