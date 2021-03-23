function clicProyectoConstruccion(){
    window.open('https://www.construccion.com');
}
function clicProyectoTrivia(){
    window.open('https://www.trivia.com');
}
function clicProyectoBloc(){
    window.open('https://www.bloc.com');
}
function clicProyectoCalorias(){
    window.open('https://www.calorias.com');
}

function enviarCorreo(){
    window.location.href='mailto:arielvaretto@gmail.com';
}
function enviarLinkedin(){
    window.open('https://www.linkedin.com/in/arielvaretto/');
}
function enviarGithub(){
    window.open('https://www.github.com/avaretto');
}
function enviarInstagram(){
    window.open ('https://www.instagram.com/arielvaretto');
}


$(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        }
        else{
            $('.menu').removeClass('menu-fixed');
        }
    });

});
