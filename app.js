//loading
window.onload = function() {
	document.getElementById("loading-page").className += " loaded";
    	document.getElementById("loader").className += " opzero";
	document.getElementById("lastray").className += " finalray";
    	document.body.classList.remove('hidden');
}
//fin loading

let menuContent = document.querySelector('.cabecera');
let desplegables = document.querySelectorAll('.boton');
let listShow = document.querySelectorAll('.texto p');

//Scroll Efect 
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top'); 
window.onscroll = () => { 
	//Hide & Show - Scroll Menu (Function) 
	let currentScrollPos = window.pageYOffset; 
	if (prevScrollPos > currentScrollPos) { 
		menuContent.style.transition = '0.5s'; 
	}else{ 
		menuContent.style.transition = '0.5s'; 
	} 
	prevScrollPos = currentScrollPos;
	//Scoll Menu & Go Top & See Down (Styles) 
	let arriba = window.pageYOffset; 
	//Conditions 
	if(arriba <= 400){ 
		menuContent.style.top = '-100px';
		//Ocultar Go Top 
		goTop.style.right = '-100px';
	}else{ 
		menuContent.style.top = '0';
		//Mostrar Go Top 
		goTop.style.right = '15px'; 
	} 
} 
//Go Top Click 
goTop.addEventListener('click', () => { 
	document.body.scrollTop = 0; 
	document.documentElement.scrollTop = 0;
}); 


desplegables.forEach(desplegable => {
    desplegable.addEventListener('click', ()=>{
        desplegable.classList.toggle('arrow');

        let height = 0;
		let op = 0;
		let width = 0;
        let menu = desplegable.nextElementSibling;
        if (menu.clientHeight == "0"){
			width=100;
			menu.style.width = `${width}%`;
            height = menu.scrollHeight;
			op=1;
        }
        menu.style.height = `${height}px`;
		menu.style.width = `${width}%`;
		menu.style.opacity = `${op}`;
		
    });
});

//fondo animado lluvia
function rain() {
	let amount = 150;
	let body = document.querySelector('#fondo');
	let i = 0;
	while (i < amount){
		let drop = document.createElement('i');

		let size = Math.random() * 5;
		let posX = Math.floor(Math.random() * body.clientWidth);

		let delay = Math.random() * -20;
		let duration = Math.random() * 5;

		drop.style.width = 0.2 + size + 'px';
		drop.style.left = posX + 'px';
		drop.style.animationDelay = delay + 's';
		drop.style.animationDuration = 1 + duration + 's';

		body.appendChild(drop);
		i++
	}
}
rain();

//slider
const $slider = document.getElementById("list");
let sliderSection = document.querySelectorAll(".list .img");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let dots = document.querySelectorAll('.slider .dots li');

const $btnRight = document.getElementById("next");
const $btnLeft = document.getElementById("prev");

let lengthItems = sliderSection.length - 1;
let active = 1;

function next() {
    let $sliderSectionFirst = document.querySelectorAll(".list .img")[0];

    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "margin-left .5s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("beforeend", $sliderSectionFirst)
        $slider.style.marginLeft = "-100%"
    }, 500);

	let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
	
	//reiniciamos el intervalo
	intervalo.reiniciar(7000);
}

function prev() {
    let sliderSection = document.querySelectorAll(".list .img");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    $slider.style.marginLeft = "0";
    $slider.style.transition = "margin-left .5s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        $slider.style.marginLeft = "-100%";
    }, 500);
	
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
	
	//reiniciamos el intervalo
	intervalo.reiniciar(7000);
}

$btnRight.addEventListener("click", function () {
	active = active < lengthItems ? active + 1 : 0;
    	next();
})

$btnLeft.addEventListener("click", function () {
	active = active > 0 ? active - 1 : lengthItems;
    	prev();
})

var intervalo = new Intervalo(function() {
	active = active < lengthItems ? active + 1 : 0;
    	next();
}, 3000);

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
		let anterior = active;
		active = key;
		 if (anterior < active){
			anterior = ((active - anterior) + 1);

			let i = 1;
			while (i < anterior){
				let $sliderSectionFirst = document.querySelectorAll(".list .img")[0];
				$slider.insertAdjacentElement("beforeend", $sliderSectionFirst);
				i++;
			}
			let last_active_dot = document.querySelector('.slider .dots li.active');
			last_active_dot.classList.remove('active');
			dots[active].classList.add('active');

			 //reiniciamos el intervalo
			intervalo.reiniciar(7000);
			 
		 }else if (anterior > active){
			anterior = ((anterior - active) + 1);

			let i = 1;
			while (i < anterior){
				let sliderSection = document.querySelectorAll(".list .img");
   			 	let sliderSectionLast = sliderSection[sliderSection.length -1];
				$slider.insertAdjacentElement("afterbegin", sliderSectionLast);
				i++;
			}

			let last_active_dot = document.querySelector('.slider .dots li.active');
			last_active_dot.classList.remove('active');
			dots[active].classList.add('active');	

			 //reiniciamos el intervalo
			intervalo.reiniciar(7000);
		 }
    });
});
//fin slider

//boton compartir
const boton = document.querySelector('#compartir');
if ('share' in navigator) {
	boton.addEventListener('click', share);
	async function share() {

		const img = await fetch('https://christian-ortiz.github.io/Tarjeta-Digital/imagenes/qr-compartir.png');
		const blob = await img.blob();
		const file = new File([blob], 'qr-compartir.png', {type: 'image/png'});

		navigator.share({
			title: 'Christian Jhulino Ortiz Cholán',
			text: 'Técnico en Computación e Informática, Diseñador Gráfico y Desarrollador de Software...',
			url: 'https://christian-ortiz.github.io/Tarjeta-Digital/',
			files: [file],
		})
		.then(()=>{

		})
		.catch(()=>{
			alert('No se compartió.');
		})
	}
}else{
	navigator.clipboard.writeText('https://christian-ortiz.github.io/Tarjeta-Digital/');
}

// Objeto Intervalo para poder reiniciar, detener y comenzar
function Intervalo(fn, t) {
    var intervaloObj = setInterval(fn, t);

    this.detener = function() {
        if (intervaloObj) {
            clearInterval(intervaloObj);
            intervaloObj = null;
        }
        return this;
    }

    // iniciar el temporizador usando la configuración actual (si aún no se está ejecutando)
    this.comenzar = function() {
        if (!intervaloObj) {
            this.detener();
            intervaloObj = setInterval(fn, t);
        }
        return this;
    }

    // comenzar con un nuevo intervalo, detener el intervalo actual
    this.reiniciar = function(nuevoT) {
        t = nuevoT;
        return this.detener().comenzar();
    }
}
