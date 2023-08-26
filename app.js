//loading
window.onload = function() {
	document.getElementById("loading-page").className += " loaded";
    	document.getElementById("loader").className += " opzero";
	document.getElementById("lastray").className += " finalray";
    	document.body.classList.remove('hidden');
}
//fin loading

let menuContent = document.querySelector('.cabecera');
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
	if(arriba <= 100){ 
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

//desplegables
//Obtenga todos los elementos detallados del DOM
const detailsItem = document.querySelectorAll('.detail-item');
//Recorre los elementos
detailsItem.forEach(item => {
	//Establecer un evento de clic para cada elemento
	item.firstElementChild.addEventListener('click', () => {
		//Seleccione el elemento de detalles de cada elemento.
		const details = item.lastElementChild;
		//Alternar clases abiertas
		details.classList.toggle('details-open');
		item.classList.toggle('detail-item-active');
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

//Slider efecto cubo
var swiperCubo = new Swiper(".slider-disenio-grafico .cubo", {
	effect: "cube",
	grabCursor: true,
	cubeEffect: {
	  shadow: true,
	  slideShadows: true,
	  shadowOffset: 20,
	  shadowScale: 0.94,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	  },
	pagination: {
	  el: ".slider-disenio-grafico .swiper-pagination",
	  clickable: true,
	},
  });
//slider certificados
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".slider1 .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
	delay: 3000,
	disableOnInteraction: false
  },
  pagination: {
	el: ".slider1 .swiper-pagination",
	clickable: true
  },
  navigation: {
	nextEl: ".slider1 .swiper-button-next",
	prevEl: ".slider1 .swiper-button-prev"
  },
  on: {
	autoplayTimeLeft(s, time, progress) {
	  progressCircle.style.setProperty("--progress", 1 - progress);
	  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
	}
  }
});
//fin slider

//boton compartir
const boton = document.querySelector('#compartir');
if ('share' in navigator) {
	boton.addEventListener('click', share);
	async function share() {

		const img = await fetch('https://christian-ortiz.github.io/Tarjeta-Digital/imagenes/qrCompartir.png');
		const blob = await img.blob();
		const file = new File([blob], 'qrCompartir.png', {type: 'image/png'});

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
