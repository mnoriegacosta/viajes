// vamos a cambair el color de los menus a la hora de hacer el scroll

document.addEventListener(`scroll`, () =>{
    if (window.scrollY >100) {
        document.body.classList.add(`scroll_cambio`);
    } else {
        document.body.classList.remove(`scroll_cambio`);
    }
})

// animacion greensock

gsap.to(".titulo", {opacity:1, duration: 2});
gsap.to(".subtitulo", {opacity:1, duration: 2});
gsap.to(".navbar", {x:10, opacity:1, duration: 2});
gsap.to(".login_Register", {x:-20, opacity:1, duration: 1});


// que aparezca el formulario de login

let login = document.querySelector(`#toggle_Login`);
let loginSide = document.querySelector(`#login_Side`);
login.addEventListener(`click`, (e) =>{
    e.preventDefault();
    loginSide.classList.add(`active_Login`);
})
// que desaparezca el formulario de login
let salirLogin = document.querySelector(`#salir_Login`);
salirLogin.addEventListener(`click`, (e) =>{
    e.preventDefault();
    loginSide.classList.remove(`active_Login`);
})
// que aparezca el formulario de reister

let register = document.querySelector(`#toggle_Register`);
let registerSide = document.querySelector(`#register_Side`);
register.addEventListener(`click`, (e) => {
e.preventDefault();
registerSide.classList.add(`active_Register`);
})

// que desaparezca el formulario de register

let salirRegister = document.querySelector(`#salir_Register`);
salirRegister.addEventListener(`click`, (e) =>{
    e.preventDefault();
    registerSide.classList.remove(`active_Register`);
})