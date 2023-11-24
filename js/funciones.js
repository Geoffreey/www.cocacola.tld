jQuery(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-xmark");
    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-xmark");

        var dev = jQuery(this).attr("href");

        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top -76
        })
    })
}

//Incio funcion de esconder texto BOTON SISTEMA DE VENTA//
let hideText_btn = document.getElementById('hideText_btn');

let  hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);
function toggleText(){
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Ver Menos';
    }

    else {
        hideText_btn.innerHTML = 'Ver Mas';
    }
}

//Incio funcion de esconder texto BOTON SOPORTE TECNICO//
let hideText_btn1 = document.getElementById('hideText_btn1');

let  hideText1 = document.getElementById('hideText1');

hideText_btn1.addEventListener('click', toggleText1);
function toggleText1(){
    hideText1.classList.toggle('show');
    if(hideText1.classList.contains('show')){
       hideText_btn1.innerHTML = 'Ver Menos';
    }

    else {
        hideText_btn1.innerHTML = 'Ver Mas';
    }
}

//Incio funcion de esconder texto BOTON SEGURIDAD ELECTRONICA//
let hideText_btn2 = document.getElementById('hideText_btn2');

let  hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);
function toggleText2(){
    hideText2.classList.toggle('show');
    if(hideText2.classList.contains('show')){
       hideText_btn2.innerHTML = 'Ver Menos';
    }

    else {
        hideText_btn2.innerHTML = 'Ver Mas';
    }
}

//Incio funcion de esconder texto BOTON DESARROLLO WEB//
let hideText_btn3 = document.getElementById('hideText_btn3');

let  hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText3);
function toggleText3(){
    hideText3.classList.toggle('show');
    if(hideText3.classList.contains('show')){
       hideText_btn3.innerHTML = 'Ver Menos';
    }

    else {
        hideText_btn3.innerHTML = 'Ver Mas';
    }
}

//Incio funcion de esconder texto BOTON SISTEMA CLINICA//
let hideText_btn4 = document.getElementById('hideText_btn4');

let  hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText4);
function toggleText4(){
    hideText4.classList.toggle('show');
    if(hideText4.classList.contains('show')){
       hideText_btn4.innerHTML = 'Ver Menos';
    }

    else {
        hideText_btn4.innerHTML = 'Ver Mas';
    }
}

//funcion imprimir
function printOut(divId) {
    var printOutContent = document.getElementById(divId).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printOutContent;
    window.print();
    document.body.innerHTML = originalContent;
  }